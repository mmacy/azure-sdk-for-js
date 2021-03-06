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
import * as Mappers from "../models/replicationNetworkMappingsMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationNetworkMappings. */
export class ReplicationNetworkMappings {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationNetworkMappings.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all ASR network mappings for the specified network.
   * @summary Gets all the network mappings under a network.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationNetworkMappingsListByReplicationNetworksResponse>
   */
  listByReplicationNetworks(fabricName: string, networkName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationNetworkMappingsListByReplicationNetworksResponse>;
  /**
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param callback The callback
   */
  listByReplicationNetworks(fabricName: string, networkName: string, callback: msRest.ServiceCallback<Models.NetworkMappingCollection>): void;
  /**
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationNetworks(fabricName: string, networkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkMappingCollection>): void;
  listByReplicationNetworks(fabricName: string, networkName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkMappingCollection>): Promise<Models.ReplicationNetworkMappingsListByReplicationNetworksResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        networkName,
        options
      },
      listByReplicationNetworksOperationSpec,
      callback) as Promise<Models.ReplicationNetworkMappingsListByReplicationNetworksResponse>;
  }

  /**
   * Gets the details of an ASR network mapping
   * @summary Gets network mapping by name.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationNetworkMappingsGetResponse>
   */
  get(fabricName: string, networkName: string, networkMappingName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationNetworkMappingsGetResponse>;
  /**
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param callback The callback
   */
  get(fabricName: string, networkName: string, networkMappingName: string, callback: msRest.ServiceCallback<Models.NetworkMapping>): void;
  /**
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(fabricName: string, networkName: string, networkMappingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkMapping>): void;
  get(fabricName: string, networkName: string, networkMappingName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkMapping>): Promise<Models.ReplicationNetworkMappingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        networkName,
        networkMappingName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationNetworkMappingsGetResponse>;
  }

  /**
   * The operation to create an ASR network mapping.
   * @summary Creates network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param input Create network mapping input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationNetworkMappingsCreateResponse>
   */
  create(fabricName: string, networkName: string, networkMappingName: string, input: Models.CreateNetworkMappingInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationNetworkMappingsCreateResponse> {
    return this.beginCreate(fabricName,networkName,networkMappingName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationNetworkMappingsCreateResponse>;
  }

  /**
   * The operation to delete a network mapping.
   * @summary Delete network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName ARM Resource Name for network mapping.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(fabricName: string, networkName: string, networkMappingName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(fabricName,networkName,networkMappingName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to update an ASR network mapping.
   * @summary Updates network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param input Update network mapping input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationNetworkMappingsUpdateResponse>
   */
  update(fabricName: string, networkName: string, networkMappingName: string, input: Models.UpdateNetworkMappingInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationNetworkMappingsUpdateResponse> {
    return this.beginUpdate(fabricName,networkName,networkMappingName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationNetworkMappingsUpdateResponse>;
  }

  /**
   * Lists all ASR network mappings in the vault.
   * @summary Gets all the network mappings under a vault.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationNetworkMappingsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ReplicationNetworkMappingsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.NetworkMappingCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkMappingCollection>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkMappingCollection>): Promise<Models.ReplicationNetworkMappingsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReplicationNetworkMappingsListResponse>;
  }

  /**
   * The operation to create an ASR network mapping.
   * @summary Creates network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param input Create network mapping input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(fabricName: string, networkName: string, networkMappingName: string, input: Models.CreateNetworkMappingInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        networkName,
        networkMappingName,
        input,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * The operation to delete a network mapping.
   * @summary Delete network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName ARM Resource Name for network mapping.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(fabricName: string, networkName: string, networkMappingName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        networkName,
        networkMappingName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * The operation to update an ASR network mapping.
   * @summary Updates network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param input Update network mapping input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(fabricName: string, networkName: string, networkMappingName: string, input: Models.UpdateNetworkMappingInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        networkName,
        networkMappingName,
        input,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Lists all ASR network mappings for the specified network.
   * @summary Gets all the network mappings under a network.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationNetworkMappingsListByReplicationNetworksNextResponse>
   */
  listByReplicationNetworksNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationNetworkMappingsListByReplicationNetworksNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReplicationNetworksNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkMappingCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationNetworksNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkMappingCollection>): void;
  listByReplicationNetworksNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkMappingCollection>): Promise<Models.ReplicationNetworkMappingsListByReplicationNetworksNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReplicationNetworksNextOperationSpec,
      callback) as Promise<Models.ReplicationNetworkMappingsListByReplicationNetworksNextResponse>;
  }

  /**
   * Lists all ASR network mappings in the vault.
   * @summary Gets all the network mappings under a vault.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationNetworkMappingsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationNetworkMappingsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkMappingCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkMappingCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkMappingCollection>): Promise<Models.ReplicationNetworkMappingsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReplicationNetworkMappingsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByReplicationNetworksOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.networkName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMappingCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.networkName,
    Parameters.networkMappingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMapping
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationNetworkMappings",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.NetworkMappingCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.networkName,
    Parameters.networkMappingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.CreateNetworkMappingInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMapping
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.networkName,
    Parameters.networkMappingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.networkName,
    Parameters.networkMappingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.UpdateNetworkMappingInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMapping
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByReplicationNetworksNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.NetworkMappingCollection
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
      bodyMapper: Mappers.NetworkMappingCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
