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

const packageName = "@azure/cognitiveservices-customvision-training";
const packageVersion = "1.0.0";

export class TrainingAPIClientContext extends msRest.ServiceClient {
  apiKey: string;
  endpoint: string;

  /**
   * Initializes a new instance of the TrainingAPIClientContext class.
   * @param apiKey
   * @param endpoint Supported Cognitive Services endpoints
   * @param [options] The parameter options
   */
  constructor(apiKey: string, endpoint: string, options?: msRest.ServiceClientOptions) {
    if (apiKey === null || apiKey === undefined) {
      throw new Error('\'apiKey\' cannot be null.');
    }
    if (endpoint === null || endpoint === undefined) {
      throw new Error('\'endpoint\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.baseUri = "{Endpoint}";
    this.requestContentType = "application/json; charset=utf-8";
    this.apiKey = apiKey;
    this.endpoint = endpoint;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
  }
}
