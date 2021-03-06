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
import { LogAnalyticsClientContext } from "./logAnalyticsClientContext";

class LogAnalyticsClient extends LogAnalyticsClientContext {
  // Operation groups
  query: operations.Query;

  /**
   * Initializes a new instance of the LogAnalyticsClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.LogAnalyticsClientOptions) {
    super(credentials, options);
    this.query = new operations.Query(this);
  }
}

// Operation Specifications

export {
  LogAnalyticsClient,
  LogAnalyticsClientContext,
  Models as LogAnalyticsModels,
  Mappers as LogAnalyticsMappers
};
export * from "./operations";
