# Azure FrontDoorManagementClient SDK for JavaScript
This package contains an isomorphic SDK for FrontDoorManagementClient.

## Currently supported environments
- Node.js version 6.x.x or higher
- Browser JavaScript

## How to Install
```
npm install @azure/arm-frontdoor
```


## How to use

### nodejs - Authentication, client creation and list frontDoors as an example written in TypeScript.

```ts
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as msRestNodeAuth from "ms-rest-nodeauth";
import { FrontDoorManagementClient, FrontDoorManagementModels, FrontDoorManagementMappers } from "@azure/arm-frontdoor";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new FrontDoorManagementClient(creds, subscriptionId);
  client.frontDoors.list().then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.error(err);
});
```

### browser - Authentication, client creation and list frontDoors as an example written in JavaScript.
See https://github.com/Azure/ms-rest-browserauth to learn how to authenticate to Azure in the browser.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>@azure/arm-frontdoor sample</title>
    <script src="node_modules/ms-rest-js/dist/msRest.browser.js"></script>
    <script src="node_modules/ms-rest-azure-js/dist/msRestAzure.js"></script>
    <script src="node_modules/ms-rest-browserauth/dist/msAuth.js"></script>
    <script src="node_modules/@azure/arm-frontdoor/dist/arm-frontdoor.js"></script>
    <script>
      const subscriptionId = "<Subscription_Id>";
      const authManager = new msAuth.AuthManager({
        clientId: "<client id for your Azure AD app>",
        tenant: "<optional tenant for your organization>"
      });
      authManager.finalizeLogin().then((res) => {
        if (!res.isLoggedIn) {
          // may cause redirects
          authManager.login();
        }
        const client = new Azure.ArmFrontdoor.FrontDoorManagementClient(res.creds, subscriptionId);
        client.frontDoors.list().then((result) => {
          console.log("The result is:");
          console.log(result);
        }).catch((err) => {
          console.log('An error occurred:');
          console.error(err);
        });
      });
    </script>
  </head>
  <body>
  </body>
</html>
```

# Related projects
 - [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)
