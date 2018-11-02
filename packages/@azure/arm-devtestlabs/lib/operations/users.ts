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
import * as Mappers from "../models/usersMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a Users. */
export class Users {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a Users.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List user profiles in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersListResponse>
   */
  list(resourceGroupName: string, labName: string, options?: Models.UsersListOptionalParams): Promise<Models.UsersListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, callback: msRest.ServiceCallback<Models.UserList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, options: Models.UsersListOptionalParams, callback: msRest.ServiceCallback<Models.UserList>): void;
  list(resourceGroupName: string, labName: string, options?: Models.UsersListOptionalParams, callback?: msRest.ServiceCallback<Models.UserList>): Promise<Models.UsersListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UsersListResponse>;
  }

  /**
   * Get user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersGetResponse>
   */
  get(resourceGroupName: string, labName: string, name: string, options?: Models.UsersGetOptionalParams): Promise<Models.UsersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, name: string, callback: msRest.ServiceCallback<Models.User>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, name: string, options: Models.UsersGetOptionalParams, callback: msRest.ServiceCallback<Models.User>): void;
  get(resourceGroupName: string, labName: string, name: string, options?: Models.UsersGetOptionalParams, callback?: msRest.ServiceCallback<Models.User>): Promise<Models.UsersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.UsersGetResponse>;
  }

  /**
   * Create or replace an existing user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labName: string, name: string, user: Models.User, options?: msRest.RequestOptionsBase): Promise<Models.UsersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,labName,name,user,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.UsersCreateOrUpdateResponse>;
  }

  /**
   * Delete user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,labName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Modify properties of user profiles.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersUpdateResponse>
   */
  update(resourceGroupName: string, labName: string, name: string, user: Models.UserFragment, options?: msRest.RequestOptionsBase): Promise<Models.UsersUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, name: string, user: Models.UserFragment, callback: msRest.ServiceCallback<Models.User>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, name: string, user: Models.UserFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.User>): void;
  update(resourceGroupName: string, labName: string, name: string, user: Models.UserFragment, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.User>): Promise<Models.UsersUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        user,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.UsersUpdateResponse>;
  }

  /**
   * Create or replace an existing user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, labName: string, name: string, user: Models.User, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        name,
        user,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List user profiles in a given lab.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.UsersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UserList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UserList>): Promise<Models.UsersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.UsersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UserList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "user",
    mapper: {
      ...Mappers.UserFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "user",
    mapper: {
      ...Mappers.User,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    201: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
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
      bodyMapper: Mappers.UserList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
