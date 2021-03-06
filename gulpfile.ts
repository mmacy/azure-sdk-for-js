/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

import { execSync } from "child_process";
import * as fs from "fs";
import gulp from "gulp";
import * as path from "path";
import { Argv, CommandLineOptions, getCommandLineOptions } from "./.scripts/commandLine";
import { endsWith, npmInstall, npmRunBuild } from "./.scripts/common";
import { getDataFromPullRequest } from "./.scripts/github";
import { generateAllMissingSdks, generateMissingSdk, generateSdk, generateTsReadme, regenerate } from "./.scripts/gulp";
import { Logger } from "./.scripts/logger";
import { findMissingSdks, findWrongPackages } from "./.scripts/packages";
import { findReadmeTypeScriptMdFilePaths, getAbsolutePackageFolderPathFromReadmeFileContents, getPackageFolderPathFromPackageArgument } from "./.scripts/readme";

const args: CommandLineOptions = getCommandLineOptions();
const _logger: Logger = Logger.get();
const azureSDKForJSRepoRoot: string = args["azure-sdk-for-js-repo-root"] || __dirname;
const azureRestAPISpecsRoot: string = args["azure-rest-api-specs-root"] || path.resolve(azureSDKForJSRepoRoot, '..', 'azure-rest-api-specs');

gulp.task('default', () => {
  _logger.log('gulp build --package <package-name>');
  _logger.log('  --package');
  _logger.log('    NPM package to run "npm run build" on.');
  _logger.log();
  _logger.log('gulp install --package <package name>');
  _logger.log('  --package');
  _logger.log('    NPM package to run "npm install" on.');
  _logger.log();
  _logger.log('gulp codegen [--azure-rest-api-specs-root <azure-rest-api-specs root>] [--use <autorest.typescript root>] [--package <package name>]');
  _logger.log('  --azure-rest-api-specs-root');
  _logger.log('    Root location of the local clone of the azure-rest-api-specs-root repository.');
  _logger.log('  --use');
  _logger.log('    Root location of autorest.typescript repository. If this is not specified, then the latest installed generator for TypeScript will be used.');
  _logger.log('  --package');
  _logger.log('    NPM package to regenerate. If no package is specified, then all packages will be regenerated.');
  _logger.log();
  _logger.log('gulp pack [--package <package name>] [--whatif]');
  _logger.log('  --package');
  _logger.log('    The name of the package to publish. If no package is specified, then all packages will be published.');
  _logger.log('  --whatif');
  _logger.log('    Don\'t actually publish packages, but just indicate which packages would be published.');
});

gulp.task("install", async () => {
  _logger.log(`Passed arguments: ${Argv.print()}`);
  const argv = Argv.construct(Argv.Options.Package, Argv.Options.Repository)
    .usage("Example: gulp install --package @azure/arm-mariadb")
    .argv;

  const packageFolderPath: string | undefined = await getPackageFolderPathFromPackageArgument(
    argv.package,
    argv.azureRestAPISpecsRoot,
    argv.azureSDKForJSRepoRoot,
  );
  if (packageFolderPath) {
    _logger.logWithPath(packageFolderPath, "npm install");
    npmInstall(packageFolderPath);
  }
});

gulp.task("build", async () => {
  _logger.log(`Passed arguments: ${Argv.print()}`);
  const argv = Argv.construct(Argv.Options.Package, Argv.Options.Repository)
    .usage("Example: gulp build --package @azure/arm-mariadb")
    .argv;

  const packageFolderPath: string | undefined = await getPackageFolderPathFromPackageArgument(
    argv.package,
    argv.azureRestAPISpecsRoot,
    argv.azureSDKForJSRepoRoot,
  );
  if (packageFolderPath) {
    _logger.logWithPath(packageFolderPath, "npm run build");
    npmRunBuild(packageFolderPath);
  }
});

// This task is used to generate libraries based on the mappings specified above.
gulp.task('codegen', async () => {
  _logger.log(`Passed arguments: ${Argv.print()}`);
  const argv = Argv.construct(Argv.Options.Package, Argv.Options.Repository)
    .options({
      "debugger": {
        boolean: true,
        alias: ["d", "use-debugger"],
        description: "Enables debugger attaching to autorest.typescript process"
      },
      "use": {
        string: true,
        description: "Specifies location for the generator to use"
      }
    })
    .usage("Example: gulp codegen --package @azure/arm-mariadb")
    .argv;

  await generateSdk(argv.azureRestAPISpecsRoot, argv.azureSDKForJSRepoRoot, argv.package, argv.use, argv.debugger);
});

type CreatePackageType = "pack" | "publish"

const createPackages = (type: CreatePackageType = "pack") => {
  const typeScriptReadmeFilePaths: string[] = findReadmeTypeScriptMdFilePaths(azureRestAPISpecsRoot);

  let errorPackages = 0;
  let upToDatePackages = 0;
  let publishedPackages = 0;
  let publishedPackagesSkipped = 0;

  const packPath = path.join(azureSDKForJSRepoRoot, "pack");
  if (!fs.existsSync(packPath)) {
    fs.mkdirSync(packPath);
  }
  for (const typeScriptReadmeFilePath of typeScriptReadmeFilePaths) {
    _logger.logTrace(`INFO: Processing ${typeScriptReadmeFilePath}`);

    const typeScriptReadmeFileContents: string = fs.readFileSync(typeScriptReadmeFilePath, 'utf8');
    const packageFolderPath: string | undefined = getAbsolutePackageFolderPathFromReadmeFileContents(
      azureSDKForJSRepoRoot,
      typeScriptReadmeFileContents
    );
    if (!packageFolderPath) {
      _logger.log(`ERROR: No output-path property specified in ${typeScriptReadmeFileContents}.`);
      errorPackages++;
    } else {
      if (!fs.existsSync(packageFolderPath)) {
        _logger.log(`ERROR: Package folder ${packageFolderPath} has not been generated.`);
        errorPackages++;
      }
      else {
        const packageJsonFilePath: string = `${packageFolderPath}/package.json`;
        if (!fs.existsSync(packageJsonFilePath)) {
          _logger.log(`ERROR: Package folder ${packageFolderPath} is missing its package.json file.`);
          errorPackages++;
        }
        else {
          const packageJson: { [propertyName: string]: any } = require(packageJsonFilePath);
          const packageName: string = packageJson.name;

          if (!args.package || args.package === packageName || endsWith(packageName, `-${args.package}`)) {
            const localPackageVersion: string = packageJson.version;
            if (!localPackageVersion) {
              _logger.log(`ERROR: "${packageJsonFilePath}" doesn't have a version specified.`);
              errorPackages++;
            }
            else {
              let npmPackageVersion: string | undefined;
              try {
                const npmViewResult: { [propertyName: string]: any } = JSON.parse(
                  execSync(`npm view ${packageName} --json`, { stdio: ['pipe', 'pipe', 'ignore'] }).toString()
                );
                npmPackageVersion = npmViewResult['dist-tags']['latest'];
              }
              catch (error) {
                // This happens if the package doesn't exist in NPM.
              }

              if (localPackageVersion === npmPackageVersion) {
                upToDatePackages++;
              }
              else {
                _logger.log(`Packing package "${packageName}" with version "${localPackageVersion}"...${args.whatif ? " (SKIPPED)" : ""}`);
                if (!args.whatif) {
                  try {
                    npmInstall(packageFolderPath);
                    // TODO: `npm install` should be removed after we regenerate all packages.
                    execSync("npm install", { cwd: packageFolderPath });
                    execSync(`npm ${type}`, { cwd: packageFolderPath });
                    const packFileName = `${packageName.replace("/", "-").replace("@", "")}-${localPackageVersion}.tgz`
                    const packFilePath = path.join(packageFolderPath, packFileName);
                    fs.renameSync(packFilePath, path.join(packPath, packFileName));
                    console.log(`Filename: ${packFileName}`);
                    publishedPackages++;
                  }
                  catch (error) {
                    errorPackages++;
                  }
                } else {
                  publishedPackagesSkipped++;
                }
              }
            }
          }
        }
      }
    }
  }

  _logger.log();
  _logger.log(`Error packages:             ${errorPackages}`);
  _logger.log(`Up to date packages:        ${upToDatePackages}`);
  _logger.log(`Packed packages:         ${publishedPackages}`);
  _logger.log(`Skipped packages: ${publishedPackagesSkipped}`);
}

gulp.task('pack', () => createPackages());

gulp.task('publish', () => createPackages("publish"));

gulp.task("find-missing-sdks", async () => {
  try {
    _logger.log(`Passed arguments: ${Argv.print()}`);
    const argv = Argv.construct(Argv.Options.Repository)
      .usage("Example: gulp find-missing-sdks")
      .argv;

    const azureRestApiSpecsRepositoryPath = argv.azureRestAPISpecsRoot;
    _logger.log(`Found azure-rest-api-specs repository in ${azureRestApiSpecsRepositoryPath}`);

    await findMissingSdks(azureRestApiSpecsRepositoryPath);
  } catch (error) {
    _logger.logError(error);
  }
});

gulp.task("generate-readme", async () => {
  try {
    _logger.log(`Passed arguments: ${Argv.print()}`);
    const argv = Argv.construct(Argv.Options.Package, Argv.Options.Repository)
      .options({
        "spec-directory": {
          alias: "dir",
          description: "Forces generating readme in the specified directory"
        }
      }).usage("Example: gulp generate-readme --package @azure/arm-mariadb --type rm")
      .argv;

    await generateTsReadme(argv.package, argv.type, argv.azureRestAPISpecsRoot, argv.dir);
  }
  catch (error) {
    _logger.logError(error);
  }
});

gulp.task("generate-missing-sdk", async () => {
  try {
    _logger.log(`Passed arguments: ${Argv.print()}`);
    const argv = Argv.construct(Argv.Options.Package, Argv.Options.Repository, Argv.Options.Generate)
      .usage("gulp generate-missing-sdk --package @azure/arm-mariadb --type rm")
      .argv;

    await generateMissingSdk(argv.azureSDKForJSRepoRoot, argv.package, argv.type, argv["skip-spec"], argv["skip-sdk"]);
  }
  catch (error) {
    _logger.logError(error);
  }
});

gulp.task("generate-all-missing-sdks", async () => {
  try {
    _logger.log(`Passed arguments: ${Argv.print()}`);
    const argv = Argv.construct(Argv.Options.Repository, Argv.Options.Generate)
      .usage("Example: gulp find-missing-sdks")
      .argv;

    await generateAllMissingSdks(argv.azureSDKForJSRepoRoot, argv.azureRestAPISpecsRoot, argv["skip-spec"], argv["skip-sdk"]);
  } catch (error) {
    _logger.logError(error);
  }
});

gulp.task("regenerate", async () => {
  const argv = Argv.construct(Argv.Options.Repository)
    .options({
      "branch": {
        alias: "b",
        string: true,
        description: "Name of the AutoPR branch",
        implies: "package"
      },
      "package": {
        alias: "p",
        string: true,
        description: "Name of the regenerated package"
      },
      "pull-request": {
        alias: "pr",
        string: true,
        description: "URL to GitHub pull request",
        conflicts: ["branch"]
      },
      "skip-version-bump": {
        boolean: true,
        description: "Determines if version bumping should be skipped"
      },
      "request-review": {
        boolean: true,
        description: "Determines if review should be automatically requested on matching pull request"
      }
    }).usage("Example: gulp regenerate --branch 'restapi_auto_daschult/sql'").argv;

  try {
    const pullRequestUrl: string | undefined = argv["pull-request"];

    let pullRequestData: { packageName: string | undefined; branchName: string; prId: number; } | undefined;
    if (pullRequestUrl) {
      pullRequestData = await getDataFromPullRequest(pullRequestUrl);
    }

    if (!pullRequestData) {
      throw new Error(`Could not get pull request data for pull request "${pullRequestUrl}".`);
    }

    const branchName = argv.branch || pullRequestData.branchName;
    const packageName = argv.package || pullRequestData.packageName;

    if (!branchName) {
      throw new Error("Unable to find the name of the package. Please specify the --package parameter");
    }

    regenerate(branchName, packageName, argv["azure-sdk-for-js-root"], argv["azure-rest-api-specs-root"], pullRequestData.prId, argv["skip-version-bump"], argv["request-review"])
  } catch (error) {
    _logger.logError(error);
  }
});

gulp.task("find-wrong-packages", async () => {
  _logger.log(`Passed arguments: ${Argv.print()}`);
  const argv = Argv.construct(Argv.Options.Repository, Argv.Options.Generate)
    .usage("Example: gulp find-missing-sdks")
    .argv;

  const incorrectPackages = await findWrongPackages(argv.azureRestAPISpecsRoot, argv.azureSDKForJSRepoRoot);

  _logger.log(`Found ${incorrectPackages.length} incorrect packages`.red);
  for (const incorrectPackage of incorrectPackages) {
    _logger.log(`${incorrectPackage.package.name}`.bgRed);
    _logger.log(`  Reason:      ${incorrectPackage.message}`);
    _logger.log(`  Output path: ${incorrectPackage.package.outputPath}`.gray);
    _logger.log(`  Readme path: ${incorrectPackage.package.readmePath}`.gray);
    _logger.log();
  }
});
