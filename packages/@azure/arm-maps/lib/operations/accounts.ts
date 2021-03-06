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
import * as Mappers from "../models/accountsMappers";
import * as Parameters from "../models/parameters";
import { MapsManagementClientContext } from "../mapsManagementClientContext";

/** Class representing a Accounts. */
export class Accounts {
  private readonly client: MapsManagementClientContext;

  /**
   * Create a Accounts.
   * @param {MapsManagementClientContext} client Reference to the service client.
   */
  constructor(client: MapsManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps
   * REST APIs.
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param mapsAccountCreateParameters The new or updated parameters for the Maps Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, mapsAccountCreateParameters: Models.MapsAccountCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AccountsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param mapsAccountCreateParameters The new or updated parameters for the Maps Account.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, mapsAccountCreateParameters: Models.MapsAccountCreateParameters, callback: msRest.ServiceCallback<Models.MapsAccount>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param mapsAccountCreateParameters The new or updated parameters for the Maps Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, mapsAccountCreateParameters: Models.MapsAccountCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MapsAccount>): void;
  createOrUpdate(resourceGroupName: string, accountName: string, mapsAccountCreateParameters: Models.MapsAccountCreateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MapsAccount>): Promise<Models.AccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        mapsAccountCreateParameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AccountsCreateOrUpdateResponse>;
  }

  /**
   * Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as
   * Sku and Tags.
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param mapsAccountUpdateParameters The updated parameters for the Maps Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, mapsAccountUpdateParameters: Models.MapsAccountUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AccountsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param mapsAccountUpdateParameters The updated parameters for the Maps Account.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, mapsAccountUpdateParameters: Models.MapsAccountUpdateParameters, callback: msRest.ServiceCallback<Models.MapsAccount>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param mapsAccountUpdateParameters The updated parameters for the Maps Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, mapsAccountUpdateParameters: Models.MapsAccountUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MapsAccount>): void;
  update(resourceGroupName: string, accountName: string, mapsAccountUpdateParameters: Models.MapsAccountUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MapsAccount>): Promise<Models.AccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        mapsAccountUpdateParameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AccountsUpdateResponse>;
  }

  /**
   * Delete a Maps Account.
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get a Maps Account.
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsGetResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.MapsAccount>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MapsAccount>): void;
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MapsAccount>): Promise<Models.AccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AccountsGetResponse>;
  }

  /**
   * Get all Maps Accounts in a Resource Group
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.MapsAccounts>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MapsAccounts>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MapsAccounts>): Promise<Models.AccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupResponse>;
  }

  /**
   * Get all Maps Accounts in a Subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.AccountsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.MapsAccounts>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MapsAccounts>): void;
  listBySubscription(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MapsAccounts>): Promise<Models.AccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.AccountsListBySubscriptionResponse>;
  }

  /**
   * Moves Maps Accounts from one ResourceGroup (or Subscription) to another
   * @param resourceGroupName The name of the resource group that contains Maps Account to move.
   * @param moveRequest The details of the Maps Account move.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  move(resourceGroupName: string, moveRequest: Models.MapsAccountsMoveRequest, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains Maps Account to move.
   * @param moveRequest The details of the Maps Account move.
   * @param callback The callback
   */
  move(resourceGroupName: string, moveRequest: Models.MapsAccountsMoveRequest, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains Maps Account to move.
   * @param moveRequest The details of the Maps Account move.
   * @param options The optional parameters
   * @param callback The callback
   */
  move(resourceGroupName: string, moveRequest: Models.MapsAccountsMoveRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  move(resourceGroupName: string, moveRequest: Models.MapsAccountsMoveRequest, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        moveRequest,
        options
      },
      moveOperationSpec,
      callback);
  }

  /**
   * Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to
   * the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key
   * regeneration.
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListKeysResponse>
   */
  listKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListKeysResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.MapsAccountKeys>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MapsAccountKeys>): void;
  listKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MapsAccountKeys>): Promise<Models.AccountsListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.AccountsListKeysResponse>;
  }

  /**
   * Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop
   * working immediately.
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param keySpecification Which key to regenerate:  primary or secondary.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsRegenerateKeysResponse>
   */
  regenerateKeys(resourceGroupName: string, accountName: string, keySpecification: Models.MapsKeySpecification, options?: msRest.RequestOptionsBase): Promise<Models.AccountsRegenerateKeysResponse>;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param keySpecification Which key to regenerate:  primary or secondary.
   * @param callback The callback
   */
  regenerateKeys(resourceGroupName: string, accountName: string, keySpecification: Models.MapsKeySpecification, callback: msRest.ServiceCallback<Models.MapsAccountKeys>): void;
  /**
   * @param resourceGroupName The name of the Azure Resource Group.
   * @param accountName The name of the Maps Account.
   * @param keySpecification Which key to regenerate:  primary or secondary.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKeys(resourceGroupName: string, accountName: string, keySpecification: Models.MapsKeySpecification, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MapsAccountKeys>): void;
  regenerateKeys(resourceGroupName: string, accountName: string, keySpecification: Models.MapsKeySpecification, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MapsAccountKeys>): Promise<Models.AccountsRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        keySpecification,
        options
      },
      regenerateKeysOperationSpec,
      callback) as Promise<Models.AccountsRegenerateKeysResponse>;
  }

  /**
   * List operations available for the Maps Resource Provider
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListOperationsResponse>
   */
  listOperations(options?: msRest.RequestOptionsBase): Promise<Models.AccountsListOperationsResponse>;
  /**
   * @param callback The callback
   */
  listOperations(callback: msRest.ServiceCallback<Models.MapsOperations>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperations(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MapsOperations>): void;
  listOperations(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MapsOperations>): Promise<Models.AccountsListOperationsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationsOperationSpec,
      callback) as Promise<Models.AccountsListOperationsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "mapsAccountCreateParameters",
    mapper: {
      ...Mappers.MapsAccountCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccount
    },
    201: {
      bodyMapper: Mappers.MapsAccount
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "mapsAccountUpdateParameters",
    mapper: {
      ...Mappers.MapsAccountUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccount
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccount
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Maps/accounts",
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
      bodyMapper: Mappers.MapsAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const moveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "moveRequest",
    mapper: {
      ...Mappers.MapsAccountsMoveRequest,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/listKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccountKeys
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const regenerateKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/regenerateKey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "keySpecification",
    mapper: {
      ...Mappers.MapsKeySpecification,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MapsAccountKeys
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Maps/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MapsOperations
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
