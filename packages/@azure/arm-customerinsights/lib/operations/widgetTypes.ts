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
import * as Mappers from "../models/widgetTypesMappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClientContext } from "../customerInsightsManagementClientContext";

/** Class representing a WidgetTypes. */
export class WidgetTypes {
  private readonly client: CustomerInsightsManagementClientContext;

  /**
   * Create a WidgetTypes.
   * @param {CustomerInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: CustomerInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all available widget types in the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.WidgetTypesListByHubResponse>
   */
  listByHub(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase): Promise<Models.WidgetTypesListByHubResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, callback: msRest.ServiceCallback<Models.WidgetTypeListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WidgetTypeListResult>): void;
  listByHub(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WidgetTypeListResult>): Promise<Models.WidgetTypesListByHubResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        options
      },
      listByHubOperationSpec,
      callback) as Promise<Models.WidgetTypesListByHubResponse>;
  }

  /**
   * Gets a widget type in the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param widgetTypeName The name of the widget type.
   * @param [options] The optional parameters
   * @returns Promise<Models.WidgetTypesGetResponse>
   */
  get(resourceGroupName: string, hubName: string, widgetTypeName: string, options?: msRest.RequestOptionsBase): Promise<Models.WidgetTypesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param widgetTypeName The name of the widget type.
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, widgetTypeName: string, callback: msRest.ServiceCallback<Models.WidgetTypeResourceFormat>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param widgetTypeName The name of the widget type.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, widgetTypeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WidgetTypeResourceFormat>): void;
  get(resourceGroupName: string, hubName: string, widgetTypeName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WidgetTypeResourceFormat>): Promise<Models.WidgetTypesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        widgetTypeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WidgetTypesGetResponse>;
  }

  /**
   * Gets all available widget types in the specified hub.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WidgetTypesListByHubNextResponse>
   */
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WidgetTypesListByHubNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WidgetTypeListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WidgetTypeListResult>): void;
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WidgetTypeListResult>): Promise<Models.WidgetTypesListByHubNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByHubNextOperationSpec,
      callback) as Promise<Models.WidgetTypesListByHubNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByHubOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/widgetTypes",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WidgetTypeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/widgetTypes/{widgetTypeName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.widgetTypeName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WidgetTypeResourceFormat
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.WidgetTypeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
