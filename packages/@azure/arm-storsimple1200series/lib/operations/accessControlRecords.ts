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
import * as Mappers from "../models/accessControlRecordsMappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClientContext } from "../storSimpleManagementClientContext";

/** Class representing a AccessControlRecords. */
export class AccessControlRecords {
  private readonly client: StorSimpleManagementClientContext;

  /**
   * Create a AccessControlRecords.
   * @param {StorSimpleManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimpleManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all the access control records in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.AccessControlRecordsListByManagerResponse>
   */
  listByManager(resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccessControlRecordsListByManagerResponse>;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.AccessControlRecordList>): void;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessControlRecordList>): void;
  listByManager(resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AccessControlRecordList>): Promise<Models.AccessControlRecordsListByManagerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managerName,
        options
      },
      listByManagerOperationSpec,
      callback) as Promise<Models.AccessControlRecordsListByManagerResponse>;
  }

  /**
   * Returns the properties of the specified access control record name.
   * @param accessControlRecordName Name of access control record to be fetched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.AccessControlRecordsGetResponse>
   */
  get(accessControlRecordName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccessControlRecordsGetResponse>;
  /**
   * @param accessControlRecordName Name of access control record to be fetched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  get(accessControlRecordName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.AccessControlRecord>): void;
  /**
   * @param accessControlRecordName Name of access control record to be fetched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(accessControlRecordName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessControlRecord>): void;
  get(accessControlRecordName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AccessControlRecord>): Promise<Models.AccessControlRecordsGetResponse> {
    return this.client.sendOperationRequest(
      {
        accessControlRecordName,
        resourceGroupName,
        managerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AccessControlRecordsGetResponse>;
  }

  /**
   * Creates or Updates an access control record.
   * @param accessControlRecordName The name of the access control record.
   * @param accessControlRecord The access control record to be added or updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.AccessControlRecordsCreateOrUpdateResponse>
   */
  createOrUpdate(accessControlRecordName: string, accessControlRecord: Models.AccessControlRecord, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccessControlRecordsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(accessControlRecordName,accessControlRecord,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AccessControlRecordsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the access control record.
   * @param accessControlRecordName The name of the access control record to delete.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(accessControlRecordName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(accessControlRecordName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or Updates an access control record.
   * @param accessControlRecordName The name of the access control record.
   * @param accessControlRecord The access control record to be added or updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(accessControlRecordName: string, accessControlRecord: Models.AccessControlRecord, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        accessControlRecordName,
        accessControlRecord,
        resourceGroupName,
        managerName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the access control record.
   * @param accessControlRecordName The name of the access control record to delete.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(accessControlRecordName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        accessControlRecordName,
        resourceGroupName,
        managerName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByManagerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlRecordList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName}",
  urlParameters: [
    Parameters.accessControlRecordName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlRecord
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName}",
  urlParameters: [
    Parameters.accessControlRecordName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "accessControlRecord",
    mapper: {
      ...Mappers.AccessControlRecord,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlRecord
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName}",
  urlParameters: [
    Parameters.accessControlRecordName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
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
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
