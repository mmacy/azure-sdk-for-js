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
import * as Mappers from "../models/geoBackupPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a GeoBackupPolicies. */
export class GeoBackupPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a GeoBackupPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Updates a database geo backup policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The required parameters for creating or updating the geo backup policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.GeoBackupPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.GeoBackupPolicy, options?: msRest.RequestOptionsBase): Promise<Models.GeoBackupPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The required parameters for creating or updating the geo backup policy.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.GeoBackupPolicy, callback: msRest.ServiceCallback<Models.GeoBackupPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The required parameters for creating or updating the geo backup policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.GeoBackupPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GeoBackupPolicy>): void;
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.GeoBackupPolicy, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.GeoBackupPolicy>): Promise<Models.GeoBackupPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.GeoBackupPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Gets a geo backup policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.GeoBackupPoliciesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.GeoBackupPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.GeoBackupPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GeoBackupPolicy>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.GeoBackupPolicy>): Promise<Models.GeoBackupPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.GeoBackupPoliciesGetResponse>;
  }

  /**
   * Returns a list of geo backup policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.GeoBackupPoliciesListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.GeoBackupPoliciesListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.GeoBackupPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GeoBackupPolicyListResult>): void;
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.GeoBackupPolicyListResult>): Promise<Models.GeoBackupPoliciesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.GeoBackupPoliciesListByDatabaseResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies/{geoBackupPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.geoBackupPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.GeoBackupPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GeoBackupPolicy
    },
    201: {
      bodyMapper: Mappers.GeoBackupPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies/{geoBackupPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.geoBackupPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GeoBackupPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GeoBackupPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
