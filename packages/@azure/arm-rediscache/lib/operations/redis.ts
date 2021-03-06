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
import * as Mappers from "../models/redisMappers";
import * as Parameters from "../models/parameters";
import { RedisManagementClientContext } from "../redisManagementClientContext";

/** Class representing a Redis. */
export class Redis {
  private readonly client: RedisManagementClientContext;

  /**
   * Create a Redis.
   * @param {RedisManagementClientContext} client Reference to the service client.
   */
  constructor(client: RedisManagementClientContext) {
    this.client = client;
  }

  /**
   * Checks that the redis cache name is valid and is not already in use.
   * @param parameters Parameters supplied to the CheckNameAvailability Redis operation. The only
   * supported resource type is 'Microsoft.Cache/redis'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  checkNameAvailability(parameters: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param parameters Parameters supplied to the CheckNameAvailability Redis operation. The only
   * supported resource type is 'Microsoft.Cache/redis'
   * @param callback The callback
   */
  checkNameAvailability(parameters: Models.CheckNameAvailabilityParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param parameters Parameters supplied to the CheckNameAvailability Redis operation. The only
   * supported resource type is 'Microsoft.Cache/redis'
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(parameters: Models.CheckNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  checkNameAvailability(parameters: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback);
  }

  /**
   * Gets any upgrade notifications for a Redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param history how many minutes in past to look for upgrade notifications
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisListUpgradeNotificationsResponse>
   */
  listUpgradeNotifications(resourceGroupName: string, name: string, history: number, options?: msRest.RequestOptionsBase): Promise<Models.RedisListUpgradeNotificationsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param history how many minutes in past to look for upgrade notifications
   * @param callback The callback
   */
  listUpgradeNotifications(resourceGroupName: string, name: string, history: number, callback: msRest.ServiceCallback<Models.NotificationListResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param history how many minutes in past to look for upgrade notifications
   * @param options The optional parameters
   * @param callback The callback
   */
  listUpgradeNotifications(resourceGroupName: string, name: string, history: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NotificationListResponse>): void;
  listUpgradeNotifications(resourceGroupName: string, name: string, history: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NotificationListResponse>): Promise<Models.RedisListUpgradeNotificationsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        history,
        options
      },
      listUpgradeNotificationsOperationSpec,
      callback) as Promise<Models.RedisListUpgradeNotificationsResponse>;
  }

  /**
   * Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters supplied to the Create Redis operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisCreateResponse>
   */
  create(resourceGroupName: string, name: string, parameters: Models.RedisCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.RedisCreateResponse> {
    return this.beginCreate(resourceGroupName,name,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RedisCreateResponse>;
  }

  /**
   * Update an existing Redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters supplied to the Update Redis operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisUpdateResponse>
   */
  update(resourceGroupName: string, name: string, parameters: Models.RedisUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.RedisUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters supplied to the Update Redis operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, name: string, parameters: Models.RedisUpdateParameters, callback: msRest.ServiceCallback<Models.RedisResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters supplied to the Update Redis operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, name: string, parameters: Models.RedisUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisResource>): void;
  update(resourceGroupName: string, name: string, parameters: Models.RedisUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisResource>): Promise<Models.RedisUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.RedisUpdateResponse>;
  }

  /**
   * Deletes a Redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a Redis cache (resource description).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisGetResponse>
   */
  get(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.RedisGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param callback The callback
   */
  get(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<Models.RedisResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisResource>): void;
  get(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisResource>): Promise<Models.RedisGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RedisGetResponse>;
  }

  /**
   * Lists all Redis caches in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.RedisListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.RedisListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisListResult>): Promise<Models.RedisListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.RedisListByResourceGroupResponse>;
  }

  /**
   * Gets all Redis caches in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.RedisListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.RedisListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisListResult>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisListResult>): Promise<Models.RedisListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RedisListResponse>;
  }

  /**
   * Retrieve a Redis cache's access keys. This operation requires write permission to the cache
   * resource.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisListKeysResponse>
   */
  listKeys(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.RedisListKeysResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<Models.RedisAccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisAccessKeys>): void;
  listKeys(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisAccessKeys>): Promise<Models.RedisListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.RedisListKeysResponse>;
  }

  /**
   * Regenerate Redis cache's access keys. This operation requires write permission to the cache
   * resource.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param keyType The Redis access key to regenerate. Possible values include: 'Primary',
   * 'Secondary'
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisRegenerateKeyResponse>
   */
  regenerateKey(resourceGroupName: string, name: string, keyType: Models.RedisKeyType, options?: msRest.RequestOptionsBase): Promise<Models.RedisRegenerateKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param keyType The Redis access key to regenerate. Possible values include: 'Primary',
   * 'Secondary'
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, name: string, keyType: Models.RedisKeyType, callback: msRest.ServiceCallback<Models.RedisAccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param keyType The Redis access key to regenerate. Possible values include: 'Primary',
   * 'Secondary'
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, name: string, keyType: Models.RedisKeyType, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisAccessKeys>): void;
  regenerateKey(resourceGroupName: string, name: string, keyType: Models.RedisKeyType, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisAccessKeys>): Promise<Models.RedisRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        keyType,
        options
      },
      regenerateKeyOperationSpec,
      callback) as Promise<Models.RedisRegenerateKeyResponse>;
  }

  /**
   * Reboot specified Redis node(s). This operation requires write permission to the cache resource.
   * There can be potential data loss.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Specifies which Redis node(s) to reboot.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisForceRebootResponse2>
   */
  forceReboot(resourceGroupName: string, name: string, parameters: Models.RedisRebootParameters, options?: msRest.RequestOptionsBase): Promise<Models.RedisForceRebootResponse2>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Specifies which Redis node(s) to reboot.
   * @param callback The callback
   */
  forceReboot(resourceGroupName: string, name: string, parameters: Models.RedisRebootParameters, callback: msRest.ServiceCallback<Models.RedisForceRebootResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Specifies which Redis node(s) to reboot.
   * @param options The optional parameters
   * @param callback The callback
   */
  forceReboot(resourceGroupName: string, name: string, parameters: Models.RedisRebootParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisForceRebootResponse>): void;
  forceReboot(resourceGroupName: string, name: string, parameters: Models.RedisRebootParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisForceRebootResponse>): Promise<Models.RedisForceRebootResponse2> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        parameters,
        options
      },
      forceRebootOperationSpec,
      callback) as Promise<Models.RedisForceRebootResponse2>;
  }

  /**
   * Import data into Redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters for Redis import operation.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  importData(resourceGroupName: string, name: string, parameters: Models.ImportRDBParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginImportData(resourceGroupName,name,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Export data from the redis cache to blobs in a container.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters for Redis export operation.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  exportData(resourceGroupName: string, name: string, parameters: Models.ExportRDBParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginExportData(resourceGroupName,name,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters supplied to the Create Redis operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, name: string, parameters: Models.RedisCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes a Redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Import data into Redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters for Redis import operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginImportData(resourceGroupName: string, name: string, parameters: Models.ImportRDBParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        parameters,
        options
      },
      beginImportDataOperationSpec,
      options);
  }

  /**
   * Export data from the redis cache to blobs in a container.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param parameters Parameters for Redis export operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginExportData(resourceGroupName: string, name: string, parameters: Models.ExportRDBParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        parameters,
        options
      },
      beginExportDataOperationSpec,
      options);
  }

  /**
   * Lists all Redis caches in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RedisListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RedisListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisListResult>): Promise<Models.RedisListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.RedisListByResourceGroupNextResponse>;
  }

  /**
   * Gets all Redis caches in the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RedisListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RedisListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RedisListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisListResult>): Promise<Models.RedisListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RedisListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Cache/CheckNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CheckNameAvailabilityParameters,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listUpgradeNotificationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/listUpgradeNotifications",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.history
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NotificationListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RedisUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RedisResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
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
      bodyMapper: Mappers.RedisResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis",
  urlParameters: [
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
      bodyMapper: Mappers.RedisListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Cache/Redis",
  urlParameters: [
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
      bodyMapper: Mappers.RedisListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/listKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
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
      bodyMapper: Mappers.RedisAccessKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/regenerateKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      keyType: "keyType"
    },
    mapper: {
      ...Mappers.RedisRegenerateKeyParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RedisAccessKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const forceRebootOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/forceReboot",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RedisRebootParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RedisForceRebootResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RedisCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RedisResource
    },
    201: {
      bodyMapper: Mappers.RedisResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginImportDataOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/import",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ImportRDBParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginExportDataOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/export",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ExportRDBParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    204: {},
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
      bodyMapper: Mappers.RedisListResult
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
      bodyMapper: Mappers.RedisListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
