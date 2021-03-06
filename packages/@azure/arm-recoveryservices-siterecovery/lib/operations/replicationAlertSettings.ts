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
import * as Mappers from "../models/replicationAlertSettingsMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationAlertSettings. */
export class ReplicationAlertSettings {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationAlertSettings.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of email notification(alert) configurations for the vault.
   * @summary Gets the list of configured email notification(alert) configurations.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationAlertSettingsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ReplicationAlertSettingsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AlertCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertCollection>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AlertCollection>): Promise<Models.ReplicationAlertSettingsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReplicationAlertSettingsListResponse>;
  }

  /**
   * Gets the details of the specified email notification(alert) configuration.
   * @summary Gets an email notification(alert) configuration.
   * @param alertSettingName The name of the email notification configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationAlertSettingsGetResponse>
   */
  get(alertSettingName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationAlertSettingsGetResponse>;
  /**
   * @param alertSettingName The name of the email notification configuration.
   * @param callback The callback
   */
  get(alertSettingName: string, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param alertSettingName The name of the email notification configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(alertSettingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  get(alertSettingName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.ReplicationAlertSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        alertSettingName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationAlertSettingsGetResponse>;
  }

  /**
   * Create or update an email notification(alert) configuration.
   * @summary Configures email notifications for this vault.
   * @param alertSettingName The name of the email notification(alert) configuration.
   * @param request The input to configure the email notification(alert).
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationAlertSettingsCreateResponse>
   */
  create(alertSettingName: string, request: Models.ConfigureAlertRequest, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationAlertSettingsCreateResponse>;
  /**
   * @param alertSettingName The name of the email notification(alert) configuration.
   * @param request The input to configure the email notification(alert).
   * @param callback The callback
   */
  create(alertSettingName: string, request: Models.ConfigureAlertRequest, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param alertSettingName The name of the email notification(alert) configuration.
   * @param request The input to configure the email notification(alert).
   * @param options The optional parameters
   * @param callback The callback
   */
  create(alertSettingName: string, request: Models.ConfigureAlertRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  create(alertSettingName: string, request: Models.ConfigureAlertRequest, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.ReplicationAlertSettingsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        alertSettingName,
        request,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ReplicationAlertSettingsCreateResponse>;
  }

  /**
   * Gets the list of email notification(alert) configurations for the vault.
   * @summary Gets the list of configured email notification(alert) configurations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationAlertSettingsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationAlertSettingsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AlertCollection>): Promise<Models.ReplicationAlertSettingsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReplicationAlertSettingsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings",
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
      bodyMapper: Mappers.AlertCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings/{alertSettingName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.alertSettingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings/{alertSettingName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.alertSettingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "request",
    mapper: {
      ...Mappers.ConfigureAlertRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Alert
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
      bodyMapper: Mappers.AlertCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
