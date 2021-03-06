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
import { DomainservicesManagementClientContext } from "./domainservicesManagementClientContext";


class DomainservicesManagementClient extends DomainservicesManagementClientContext {
  // Operation groups
  domainServiceOperations: operations.DomainServiceOperations;
  domainServices: operations.DomainServices;

  /**
   * Initializes a new instance of the DomainservicesManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.DomainservicesManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.domainServiceOperations = new operations.DomainServiceOperations(this);
    this.domainServices = new operations.DomainServices(this);
  }
}

// Operation Specifications

export {
  DomainservicesManagementClient,
  DomainservicesManagementClientContext,
  Models as DomainservicesManagementModels,
  Mappers as DomainservicesManagementMappers
};
export * from "./operations";
