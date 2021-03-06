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
import { AnalysisServicesManagementClientContext } from "./analysisServicesManagementClientContext";


class AnalysisServicesManagementClient extends AnalysisServicesManagementClientContext {
  // Operation groups
  servers: operations.Servers;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the AnalysisServicesManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription
   * ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AnalysisServicesManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.servers = new operations.Servers(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  AnalysisServicesManagementClient,
  AnalysisServicesManagementClientContext,
  Models as AnalysisServicesManagementModels,
  Mappers as AnalysisServicesManagementMappers
};
export * from "./operations";
