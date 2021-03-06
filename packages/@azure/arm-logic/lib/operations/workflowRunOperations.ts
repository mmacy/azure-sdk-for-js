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
import * as Mappers from "../models/workflowRunOperationsMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a WorkflowRunOperations. */
export class WorkflowRunOperations {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a WorkflowRunOperations.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets an operation for a run.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param operationId The workflow operation id.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowRunOperationsGetResponse>
   */
  get(resourceGroupName: string, workflowName: string, runName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowRunOperationsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param operationId The workflow operation id.
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, runName: string, operationId: string, callback: msRest.ServiceCallback<Models.WorkflowRun>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param operationId The workflow operation id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, runName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowRun>): void;
  get(resourceGroupName: string, workflowName: string, runName: string, operationId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkflowRun>): Promise<Models.WorkflowRunOperationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        runName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkflowRunOperationsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/operations/{operationId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.runName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRun
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
