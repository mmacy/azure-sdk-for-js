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
import * as Mappers from "../models/subscriptionUsagesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a SubscriptionUsages. */
export class SubscriptionUsages {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a SubscriptionUsages.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all subscription usage metrics in a given location.
   * @param locationName The name of the region where the resource is located.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionUsagesListByLocationResponse>
   */
  listByLocation(locationName: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionUsagesListByLocationResponse>;
  /**
   * @param locationName The name of the region where the resource is located.
   * @param callback The callback
   */
  listByLocation(locationName: string, callback: msRest.ServiceCallback<Models.SubscriptionUsageListResult>): void;
  /**
   * @param locationName The name of the region where the resource is located.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocation(locationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionUsageListResult>): void;
  listByLocation(locationName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SubscriptionUsageListResult>): Promise<Models.SubscriptionUsagesListByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        options
      },
      listByLocationOperationSpec,
      callback) as Promise<Models.SubscriptionUsagesListByLocationResponse>;
  }

  /**
   * Gets a subscription usage metric.
   * @param locationName The name of the region where the resource is located.
   * @param usageName Name of usage metric to return.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionUsagesGetResponse>
   */
  get(locationName: string, usageName: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionUsagesGetResponse>;
  /**
   * @param locationName The name of the region where the resource is located.
   * @param usageName Name of usage metric to return.
   * @param callback The callback
   */
  get(locationName: string, usageName: string, callback: msRest.ServiceCallback<Models.SubscriptionUsage>): void;
  /**
   * @param locationName The name of the region where the resource is located.
   * @param usageName Name of usage metric to return.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(locationName: string, usageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionUsage>): void;
  get(locationName: string, usageName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SubscriptionUsage>): Promise<Models.SubscriptionUsagesGetResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        usageName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SubscriptionUsagesGetResponse>;
  }

  /**
   * Gets all subscription usage metrics in a given location.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionUsagesListByLocationNextResponse>
   */
  listByLocationNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionUsagesListByLocationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByLocationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SubscriptionUsageListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocationNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionUsageListResult>): void;
  listByLocationNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SubscriptionUsageListResult>): Promise<Models.SubscriptionUsagesListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByLocationNextOperationSpec,
      callback) as Promise<Models.SubscriptionUsagesListByLocationNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/usages",
  urlParameters: [
    Parameters.locationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionUsageListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/usages/{usageName}",
  urlParameters: [
    Parameters.locationName,
    Parameters.usageName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionUsage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByLocationNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SubscriptionUsageListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
