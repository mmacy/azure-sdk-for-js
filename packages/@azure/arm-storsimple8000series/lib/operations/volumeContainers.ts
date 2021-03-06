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
import * as Mappers from "../models/volumeContainersMappers";
import * as Parameters from "../models/parameters";
import { StorSimple8000SeriesManagementClientContext } from "../storSimple8000SeriesManagementClientContext";

/** Class representing a VolumeContainers. */
export class VolumeContainers {
  private readonly client: StorSimple8000SeriesManagementClientContext;

  /**
   * Create a VolumeContainers.
   * @param {StorSimple8000SeriesManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimple8000SeriesManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the volume containers in a device.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.VolumeContainersListByDeviceResponse>
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.VolumeContainersListByDeviceResponse>;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.VolumeContainerList>): void;
  /**
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VolumeContainerList>): void;
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VolumeContainerList>): Promise<Models.VolumeContainersListByDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      listByDeviceOperationSpec,
      callback) as Promise<Models.VolumeContainersListByDeviceResponse>;
  }

  /**
   * Gets the properties of the specified volume container name.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.VolumeContainersGetResponse>
   */
  get(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.VolumeContainersGetResponse>;
  /**
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  get(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.VolumeContainer>): void;
  /**
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VolumeContainer>): void;
  get(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VolumeContainer>): Promise<Models.VolumeContainersGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        volumeContainerName,
        resourceGroupName,
        managerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VolumeContainersGetResponse>;
  }

  /**
   * Creates or updates the volume container.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param parameters The volume container to be added or updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.VolumeContainersCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, volumeContainerName: string, parameters: Models.VolumeContainer, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.VolumeContainersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,volumeContainerName,parameters,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VolumeContainersCreateOrUpdateResponse>;
  }

  /**
   * Deletes the volume container.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,volumeContainerName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the metrics for the specified volume container.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param filter OData Filter options
   * @param [options] The optional parameters
   * @returns Promise<Models.VolumeContainersListMetricsResponse>
   */
  listMetrics(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.VolumeContainersListMetricsResponse>;
  /**
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param filter OData Filter options
   * @param callback The callback
   */
  listMetrics(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, filter: string, callback: msRest.ServiceCallback<Models.MetricList>): void;
  /**
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param filter OData Filter options
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricList>): void;
  listMetrics(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, filter: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MetricList>): Promise<Models.VolumeContainersListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        volumeContainerName,
        resourceGroupName,
        managerName,
        filter,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.VolumeContainersListMetricsResponse>;
  }

  /**
   * Gets the metric definitions for the specified volume container.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.VolumeContainersListMetricDefinitionResponse>
   */
  listMetricDefinition(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.VolumeContainersListMetricDefinitionResponse>;
  /**
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listMetricDefinition(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.MetricDefinitionList>): void;
  /**
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetricDefinition(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricDefinitionList>): void;
  listMetricDefinition(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MetricDefinitionList>): Promise<Models.VolumeContainersListMetricDefinitionResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        volumeContainerName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricDefinitionOperationSpec,
      callback) as Promise<Models.VolumeContainersListMetricDefinitionResponse>;
  }

  /**
   * Creates or updates the volume container.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param parameters The volume container to be added or updated.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, volumeContainerName: string, parameters: Models.VolumeContainer, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        volumeContainerName,
        parameters,
        resourceGroupName,
        managerName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the volume container.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, volumeContainerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        volumeContainerName,
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
const listByDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers",
  urlParameters: [
    Parameters.deviceName,
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
      bodyMapper: Mappers.VolumeContainerList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.volumeContainerName,
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
      bodyMapper: Mappers.VolumeContainer
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/metrics",
  urlParameters: [
    Parameters.deviceName,
    Parameters.volumeContainerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listMetricDefinitionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/metricsDefinitions",
  urlParameters: [
    Parameters.deviceName,
    Parameters.volumeContainerName,
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
      bodyMapper: Mappers.MetricDefinitionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.volumeContainerName,
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
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VolumeContainer,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VolumeContainer
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.volumeContainerName,
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
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
