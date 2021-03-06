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
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { CustomSearchAPIClientContext } from "./customSearchAPIClientContext";

class CustomSearchAPIClient extends CustomSearchAPIClientContext {
  // Operation groups
  customInstance: operations.CustomInstance;

  /**
   * Initializes a new instance of the CustomSearchAPIClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.CustomSearchAPIClientOptions) {
    super(credentials, options);
    this.customInstance = new operations.CustomInstance(this);
  }
}

// Operation Specifications

export {
  CustomSearchAPIClient,
  CustomSearchAPIClientContext,
  Models as CustomSearchAPIModels,
  Mappers as CustomSearchAPIMappers
};
export * from "./operations";
