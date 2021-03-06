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
import * as Mappers from "../models/metricNamespacesMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a MetricNamespaces. */
export class MetricNamespaces {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a MetricNamespaces.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the metric namespaces for the resource.
   * @param resourceUri The identifier of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricNamespacesListResponse>
   */
  list(resourceUri: string, options?: Models.MetricNamespacesListOptionalParams): Promise<Models.MetricNamespacesListResponse>;
  /**
   * @param resourceUri The identifier of the resource.
   * @param callback The callback
   */
  list(resourceUri: string, callback: msRest.ServiceCallback<Models.MetricNamespaceCollection>): void;
  /**
   * @param resourceUri The identifier of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceUri: string, options: Models.MetricNamespacesListOptionalParams, callback: msRest.ServiceCallback<Models.MetricNamespaceCollection>): void;
  list(resourceUri: string, options?: Models.MetricNamespacesListOptionalParams, callback?: msRest.ServiceCallback<Models.MetricNamespaceCollection>): Promise<Models.MetricNamespacesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MetricNamespacesListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/microsoft.insights/metricNamespaces",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.apiVersion9,
    Parameters.startTime
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricNamespaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
