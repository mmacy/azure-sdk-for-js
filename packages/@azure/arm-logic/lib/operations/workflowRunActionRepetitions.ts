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
import * as Mappers from "../models/workflowRunActionRepetitionsMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a WorkflowRunActionRepetitions. */
export class WorkflowRunActionRepetitions {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a WorkflowRunActionRepetitions.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all of a workflow run action repetitions.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowRunActionRepetitionsListResponse>
   */
  list(resourceGroupName: string, workflowName: string, runName: string, actionName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowRunActionRepetitionsListResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, runName: string, actionName: string, callback: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinitionCollection>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, runName: string, actionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinitionCollection>): void;
  list(resourceGroupName: string, workflowName: string, runName: string, actionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinitionCollection>): Promise<Models.WorkflowRunActionRepetitionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        runName,
        actionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkflowRunActionRepetitionsListResponse>;
  }

  /**
   * Get a workflow run action repetition.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowRunActionRepetitionsGetResponse>
   */
  get(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowRunActionRepetitionsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, callback: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinition>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinition>): void;
  get(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinition>): Promise<Models.WorkflowRunActionRepetitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        runName,
        actionName,
        repetitionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkflowRunActionRepetitionsGetResponse>;
  }

  /**
   * Lists a workflow run expression trace.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowRunActionRepetitionsListExpressionTracesResponse>
   */
  listExpressionTraces(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowRunActionRepetitionsListExpressionTracesResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param callback The callback
   */
  listExpressionTraces(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, callback: msRest.ServiceCallback<Models.ExpressionTraces>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param options The optional parameters
   * @param callback The callback
   */
  listExpressionTraces(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressionTraces>): void;
  listExpressionTraces(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressionTraces>): Promise<Models.WorkflowRunActionRepetitionsListExpressionTracesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        runName,
        actionName,
        repetitionName,
        options
      },
      listExpressionTracesOperationSpec,
      callback) as Promise<Models.WorkflowRunActionRepetitionsListExpressionTracesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.runName,
    Parameters.actionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionRepetitionDefinitionCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.runName,
    Parameters.actionName,
    Parameters.repetitionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionRepetitionDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listExpressionTracesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/listExpressionTraces",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.runName,
    Parameters.actionName,
    Parameters.repetitionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressionTraces
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
