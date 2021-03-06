/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";

const packageName = "@azure/cognitiveservices-imagesearch";
const packageVersion = "1.0.0";

export class ImageSearchAPIClientContext extends msRest.ServiceClient {
  credentials: msRest.ServiceClientCredentials;

  /**
   * Initializes a new instance of the ImageSearchAPIClientContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.ImageSearchAPIClientOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    super(credentials, options);

    this.baseUri = options.baseUri || this.baseUri || "https://api.cognitive.microsoft.com";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
  }
}
