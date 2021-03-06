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
import * as Models from "../models";
import * as Mappers from "../models/databaseBlobAuditingPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a DatabaseBlobAuditingPolicies. */
export class DatabaseBlobAuditingPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a DatabaseBlobAuditingPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a database's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabaseBlobAuditingPoliciesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.DatabaseBlobAuditingPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.DatabaseBlobAuditingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseBlobAuditingPolicy>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DatabaseBlobAuditingPolicy>): Promise<Models.DatabaseBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DatabaseBlobAuditingPoliciesGetResponse>;
  }

  /**
   * Creates or updates a database's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The database blob auditing policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabaseBlobAuditingPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.DatabaseBlobAuditingPolicy, options?: msRest.RequestOptionsBase): Promise<Models.DatabaseBlobAuditingPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The database blob auditing policy.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.DatabaseBlobAuditingPolicy, callback: msRest.ServiceCallback<Models.DatabaseBlobAuditingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The database blob auditing policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.DatabaseBlobAuditingPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseBlobAuditingPolicy>): void;
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.DatabaseBlobAuditingPolicy, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DatabaseBlobAuditingPolicy>): Promise<Models.DatabaseBlobAuditingPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DatabaseBlobAuditingPoliciesCreateOrUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.blobAuditingPolicyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseBlobAuditingPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.blobAuditingPolicyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DatabaseBlobAuditingPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseBlobAuditingPolicy
    },
    201: {
      bodyMapper: Mappers.DatabaseBlobAuditingPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
