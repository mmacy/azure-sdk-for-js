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
import { MapsManagementClientContext } from "./mapsManagementClientContext";


class MapsManagementClient extends MapsManagementClientContext {
  // Operation groups
  accounts: operations.Accounts;

  /**
   * Initializes a new instance of the MapsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MapsManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.accounts = new operations.Accounts(this);
  }
}

// Operation Specifications

export {
  MapsManagementClient,
  MapsManagementClientContext,
  Models as MapsManagementModels,
  Mappers as MapsManagementMappers
};
export * from "./operations";
