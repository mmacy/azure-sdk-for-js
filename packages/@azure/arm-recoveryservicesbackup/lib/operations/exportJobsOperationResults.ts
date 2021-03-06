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
import * as Mappers from "../models/exportJobsOperationResultsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a ExportJobsOperationResults. */
export class ExportJobsOperationResults {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a ExportJobsOperationResults.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Gets the operation result of operation triggered by Export Jobs API. If the operation is
   * successful, then it also
   * contains URL of a Blob and a SAS key to access the same. The blob contains exported jobs in JSON
   * serialized format.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param operationId OperationID which represents the export job.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExportJobsOperationResultsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ExportJobsOperationResultsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param operationId OperationID which represents the export job.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, operationId: string, callback: msRest.ServiceCallback<Models.OperationResultInfoBaseResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param operationId OperationID which represents the export job.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationResultInfoBaseResource>): void;
  get(vaultName: string, resourceGroupName: string, operationId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationResultInfoBaseResource>): Promise<Models.ExportJobsOperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExportJobsOperationResultsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs/operationResults/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationResultInfoBaseResource
    },
    202: {
      bodyMapper: Mappers.OperationResultInfoBaseResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
