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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/p2sVpnGatewaysMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a P2sVpnGateways. */
export class P2sVpnGateways {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a P2sVpnGateways.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the details of a virtual wan p2s vpn gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param [options] The optional parameters
   * @returns Promise<Models.P2sVpnGatewaysGetResponse>
   */
  get(resourceGroupName: string, gatewayName: string, options?: msRest.RequestOptionsBase): Promise<Models.P2sVpnGatewaysGetResponse>;
  /**
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param callback The callback
   */
  get(resourceGroupName: string, gatewayName: string, callback: msRest.ServiceCallback<Models.P2SVpnGateway>): void;
  /**
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, gatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.P2SVpnGateway>): void;
  get(resourceGroupName: string, gatewayName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.P2SVpnGateway>): Promise<Models.P2sVpnGatewaysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        gatewayName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.P2sVpnGatewaysGetResponse>;
  }

  /**
   * Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to create or Update a virtual wan p2s vpn
   * gateway.
   * @param [options] The optional parameters
   * @returns Promise<Models.P2sVpnGatewaysCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, gatewayName: string, p2SVpnGatewayParameters: Models.P2SVpnGateway, options?: msRest.RequestOptionsBase): Promise<Models.P2sVpnGatewaysCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,gatewayName,p2SVpnGatewayParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.P2sVpnGatewaysCreateOrUpdateResponse>;
  }

  /**
   * Updates virtual wan p2s vpn gateway tags.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to update a virtual wan p2s vpn gateway tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.P2sVpnGatewaysUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, gatewayName: string, p2SVpnGatewayParameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.P2sVpnGatewaysUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName,gatewayName,p2SVpnGatewayParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.P2sVpnGatewaysUpdateTagsResponse>;
  }

  /**
   * Deletes a virtual wan p2s vpn gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, gatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,gatewayName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists all the P2SVpnGateways in a resource group.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param [options] The optional parameters
   * @returns Promise<Models.P2sVpnGatewaysListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.P2sVpnGatewaysListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): void;
  /**
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): Promise<Models.P2sVpnGatewaysListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.P2sVpnGatewaysListByResourceGroupResponse>;
  }

  /**
   * Lists all the P2SVpnGateways in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.P2sVpnGatewaysListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.P2sVpnGatewaysListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): Promise<Models.P2sVpnGatewaysListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.P2sVpnGatewaysListResponse>;
  }

  /**
   * Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param parameters Parameters supplied to the generate P2SVpnGateway VPN client package
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.P2sVpnGatewaysGenerateVpnProfileResponse>
   */
  generateVpnProfile(resourceGroupName: string, gatewayName: string, parameters: Models.P2SVpnProfileParameters, options?: msRest.RequestOptionsBase): Promise<Models.P2sVpnGatewaysGenerateVpnProfileResponse> {
    return this.beginGenerateVpnProfile(resourceGroupName,gatewayName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.P2sVpnGatewaysGenerateVpnProfileResponse>;
  }

  /**
   * Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to create or Update a virtual wan p2s vpn
   * gateway.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, gatewayName: string, p2SVpnGatewayParameters: Models.P2SVpnGateway, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        gatewayName,
        p2SVpnGatewayParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates virtual wan p2s vpn gateway tags.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to update a virtual wan p2s vpn gateway tags.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTags(resourceGroupName: string, gatewayName: string, p2SVpnGatewayParameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        gatewayName,
        p2SVpnGatewayParameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Deletes a virtual wan p2s vpn gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, gatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        gatewayName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param parameters Parameters supplied to the generate P2SVpnGateway VPN client package
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginGenerateVpnProfile(resourceGroupName: string, gatewayName: string, parameters: Models.P2SVpnProfileParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        gatewayName,
        parameters,
        options
      },
      beginGenerateVpnProfileOperationSpec,
      options);
  }

  /**
   * Lists all the P2SVpnGateways in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.P2sVpnGatewaysListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.P2sVpnGatewaysListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): Promise<Models.P2sVpnGatewaysListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.P2sVpnGatewaysListByResourceGroupNextResponse>;
  }

  /**
   * Lists all the P2SVpnGateways in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.P2sVpnGatewaysListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.P2sVpnGatewaysListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListP2SVpnGatewaysResult>): Promise<Models.P2sVpnGatewaysListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.P2sVpnGatewaysListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/p2svpnGateways",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "p2SVpnGatewayParameters",
    mapper: {
      ...Mappers.P2SVpnGateway,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    201: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "p2SVpnGatewayParameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    201: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginGenerateVpnProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/generatevpnprofile",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.gatewayName,
    Parameters.subscriptionId
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
      ...Mappers.P2SVpnProfileParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VpnProfileResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
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
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
