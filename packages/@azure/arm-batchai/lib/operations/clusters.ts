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
import * as Mappers from "../models/clustersMappers";
import * as Parameters from "../models/parameters";
import { BatchAIManagementClientContext } from "../batchAIManagementClientContext";

/** Class representing a Clusters. */
export class Clusters {
  private readonly client: BatchAIManagementClientContext;

  /**
   * Create a Clusters.
   * @param {BatchAIManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchAIManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a Cluster in the given Workspace.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param parameters The parameters to provide for the Cluster creation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersCreateResponse>
   */
  create(resourceGroupName: string, workspaceName: string, clusterName: string, parameters: Models.ClusterCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ClustersCreateResponse> {
    return this.beginCreate(resourceGroupName,workspaceName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ClustersCreateResponse>;
  }

  /**
   * Updates properties of a Cluster.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersUpdateResponse>
   */
  update(resourceGroupName: string, workspaceName: string, clusterName: string, options?: Models.ClustersUpdateOptionalParams): Promise<Models.ClustersUpdateResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, clusterName: string, callback: msRest.ServiceCallback<Models.Cluster>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, clusterName: string, options: Models.ClustersUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Cluster>): void;
  update(resourceGroupName: string, workspaceName: string, clusterName: string, options?: Models.ClustersUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.Cluster>): Promise<Models.ClustersUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        clusterName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ClustersUpdateResponse>;
  }

  /**
   * Deletes a Cluster.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets information about a Cluster.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, clusterName: string, callback: msRest.ServiceCallback<Models.Cluster>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Cluster>): void;
  get(resourceGroupName: string, workspaceName: string, clusterName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Cluster>): Promise<Models.ClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        clusterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ClustersGetResponse>;
  }

  /**
   * Get the IP address, port of all the compute nodes in the Cluster.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListRemoteLoginInformationResponse>
   */
  listRemoteLoginInformation(resourceGroupName: string, workspaceName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListRemoteLoginInformationResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param callback The callback
   */
  listRemoteLoginInformation(resourceGroupName: string, workspaceName: string, clusterName: string, callback: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRemoteLoginInformation(resourceGroupName: string, workspaceName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): void;
  listRemoteLoginInformation(resourceGroupName: string, workspaceName: string, clusterName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): Promise<Models.ClustersListRemoteLoginInformationResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        clusterName,
        options
      },
      listRemoteLoginInformationOperationSpec,
      callback) as Promise<Models.ClustersListRemoteLoginInformationResponse>;
  }

  /**
   * Gets information about Clusters associated with the given Workspace.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: Models.ClustersListByWorkspaceOptionalParams): Promise<Models.ClustersListByWorkspaceResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: Models.ClustersListByWorkspaceOptionalParams, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: Models.ClustersListByWorkspaceOptionalParams, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.ClustersListByWorkspaceResponse>;
  }

  /**
   * Creates a Cluster in the given Workspace.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param parameters The parameters to provide for the Cluster creation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, workspaceName: string, clusterName: string, parameters: Models.ClusterCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        clusterName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes a Cluster.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param clusterName The name of the cluster within the specified resource group. Cluster names
   * can only contain a combination of alphanumeric characters along with dash (-) and underscore
   * (_). The name must be from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        clusterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Get the IP address, port of all the compute nodes in the Cluster.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListRemoteLoginInformationNextResponse>
   */
  listRemoteLoginInformationNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListRemoteLoginInformationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listRemoteLoginInformationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRemoteLoginInformationNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): void;
  listRemoteLoginInformationNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RemoteLoginInformationListResult>): Promise<Models.ClustersListRemoteLoginInformationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listRemoteLoginInformationNextOperationSpec,
      callback) as Promise<Models.ClustersListRemoteLoginInformationNextResponse>;
  }

  /**
   * Gets information about Clusters associated with the given Workspace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.ClustersListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.clusterName,
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
      scaleSettings: [
        "options",
        "scaleSettings"
      ]
    },
    mapper: {
      ...Mappers.ClusterUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.clusterName,
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
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listRemoteLoginInformationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}/listRemoteLoginInformation",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.clusterName,
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
      bodyMapper: Mappers.RemoteLoginInformationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxResults6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.clusterName,
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
      ...Mappers.ClusterCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.clusterName,
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

const listRemoteLoginInformationNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
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
      bodyMapper: Mappers.RemoteLoginInformationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
