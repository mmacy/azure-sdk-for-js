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
import * as Mappers from "../models/elasticPoolOperationsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ElasticPoolOperations. */
export class ElasticPoolOperations {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ElasticPoolOperations.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Cancels the asynchronous operation on the elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName
   * @param operationId The operation identifier.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  cancel(resourceGroupName: string, serverName: string, elasticPoolName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName
   * @param operationId The operation identifier.
   * @param callback The callback
   */
  cancel(resourceGroupName: string, serverName: string, elasticPoolName: string, operationId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName
   * @param operationId The operation identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  cancel(resourceGroupName: string, serverName: string, elasticPoolName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  cancel(resourceGroupName: string, serverName: string, elasticPoolName: string, operationId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        operationId,
        options
      },
      cancelOperationSpec,
      callback);
  }

  /**
   * Gets a list of operations performed on the elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolOperationsListByElasticPoolResponse>
   */
  listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolOperationsListByElasticPoolResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName
   * @param callback The callback
   */
  listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, callback: msRest.ServiceCallback<Models.ElasticPoolOperationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName
   * @param options The optional parameters
   * @param callback The callback
   */
  listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ElasticPoolOperationListResult>): void;
  listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ElasticPoolOperationListResult>): Promise<Models.ElasticPoolOperationsListByElasticPoolResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        options
      },
      listByElasticPoolOperationSpec,
      callback) as Promise<Models.ElasticPoolOperationsListByElasticPoolResponse>;
  }

  /**
   * Gets a list of operations performed on the elastic pool.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolOperationsListByElasticPoolNextResponse>
   */
  listByElasticPoolNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolOperationsListByElasticPoolNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByElasticPoolNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ElasticPoolOperationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByElasticPoolNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ElasticPoolOperationListResult>): void;
  listByElasticPoolNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ElasticPoolOperationListResult>): Promise<Models.ElasticPoolOperationsListByElasticPoolNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByElasticPoolNextOperationSpec,
      callback) as Promise<Models.ElasticPoolOperationsListByElasticPoolNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const cancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/operations/{operationId}/cancel",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByElasticPoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/operations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolOperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByElasticPoolNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolOperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
