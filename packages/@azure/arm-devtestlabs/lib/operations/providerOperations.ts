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
import * as Mappers from "../models/providerOperationsMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a ProviderOperations. */
export class ProviderOperations {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a ProviderOperations.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * Result of the request to list REST API operations
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderOperationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ProviderOperationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ProviderOperationResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProviderOperationResult>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ProviderOperationResult>): Promise<Models.ProviderOperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ProviderOperationsListResponse>;
  }

  /**
   * Result of the request to list REST API operations
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderOperationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderOperationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProviderOperationResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProviderOperationResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ProviderOperationResult>): Promise<Models.ProviderOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ProviderOperationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.DevTestLab/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProviderOperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ProviderOperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
