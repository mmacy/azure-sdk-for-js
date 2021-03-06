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
import * as Mappers from "../models/backupStatusMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupStatus. */
export class BackupStatus {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupStatus.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * @summary Get the container backup status
   * @param azureRegion Azure region to hit Api
   * @param parameters Container Backup Status Request
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupStatusGetResponse>
   */
  get(azureRegion: string, parameters: Models.BackupStatusRequest, options?: msRest.RequestOptionsBase): Promise<Models.BackupStatusGetResponse>;
  /**
   * @param azureRegion Azure region to hit Api
   * @param parameters Container Backup Status Request
   * @param callback The callback
   */
  get(azureRegion: string, parameters: Models.BackupStatusRequest, callback: msRest.ServiceCallback<Models.BackupStatusResponse>): void;
  /**
   * @param azureRegion Azure region to hit Api
   * @param parameters Container Backup Status Request
   * @param options The optional parameters
   * @param callback The callback
   */
  get(azureRegion: string, parameters: Models.BackupStatusRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupStatusResponse>): void;
  get(azureRegion: string, parameters: Models.BackupStatusRequest, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.BackupStatusResponse>): Promise<Models.BackupStatusGetResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        parameters,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BackupStatusGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupStatus",
  urlParameters: [
    Parameters.azureRegion,
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
      ...Mappers.BackupStatusRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackupStatusResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
