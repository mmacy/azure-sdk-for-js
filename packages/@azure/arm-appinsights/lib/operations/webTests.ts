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
import * as Mappers from "../models/webTestsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a WebTests. */
export class WebTests {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a WebTests.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all Application Insights web tests defined within a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.WebTestsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTestListResult>): Promise<Models.WebTestsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.WebTestsListByResourceGroupResponse>;
  }

  /**
   * Get a specific Application Insights web test definition.
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsGetResponse>
   */
  get(resourceGroupName: string, webTestName: string, options?: msRest.RequestOptionsBase): Promise<Models.WebTestsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, webTestName: string, callback: msRest.ServiceCallback<Models.WebTest>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, webTestName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTest>): void;
  get(resourceGroupName: string, webTestName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTest>): Promise<Models.WebTestsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        webTestName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WebTestsGetResponse>;
  }

  /**
   * Creates or updates an Application Insights web test definition.
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param webTestDefinition Properties that need to be specified to create or update an Application
   * Insights web test definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, webTestName: string, webTestDefinition: Models.WebTest, options?: msRest.RequestOptionsBase): Promise<Models.WebTestsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param webTestDefinition Properties that need to be specified to create or update an Application
   * Insights web test definition.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, webTestName: string, webTestDefinition: Models.WebTest, callback: msRest.ServiceCallback<Models.WebTest>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param webTestDefinition Properties that need to be specified to create or update an Application
   * Insights web test definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, webTestName: string, webTestDefinition: Models.WebTest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTest>): void;
  createOrUpdate(resourceGroupName: string, webTestName: string, webTestDefinition: Models.WebTest, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTest>): Promise<Models.WebTestsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        webTestName,
        webTestDefinition,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.WebTestsCreateOrUpdateResponse>;
  }

  /**
   * Creates or updates an Application Insights web test definition.
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param webTestTags Updated tag information to set into the web test instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, webTestName: string, webTestTags: Models.TagsResource, options?: msRest.RequestOptionsBase): Promise<Models.WebTestsUpdateTagsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param webTestTags Updated tag information to set into the web test instance.
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, webTestName: string, webTestTags: Models.TagsResource, callback: msRest.ServiceCallback<Models.WebTest>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param webTestTags Updated tag information to set into the web test instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, webTestName: string, webTestTags: Models.TagsResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTest>): void;
  updateTags(resourceGroupName: string, webTestName: string, webTestTags: Models.TagsResource, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTest>): Promise<Models.WebTestsUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        webTestName,
        webTestTags,
        options
      },
      updateTagsOperationSpec,
      callback) as Promise<Models.WebTestsUpdateTagsResponse>;
  }

  /**
   * Deletes an Application Insights web test.
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, webTestName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, webTestName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, webTestName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, webTestName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        webTestName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get all Application Insights web test alerts definitioned within a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.WebTestsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTestListResult>): Promise<Models.WebTestsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WebTestsListResponse>;
  }

  /**
   * Get all Application Insights web tests defined for the specified component.
   * @param componentName The name of the Application Insights component resource.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsListByComponentResponse>
   */
  listByComponent(componentName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.WebTestsListByComponentResponse>;
  /**
   * @param componentName The name of the Application Insights component resource.
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByComponent(componentName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  /**
   * @param componentName The name of the Application Insights component resource.
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByComponent(componentName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  listByComponent(componentName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTestListResult>): Promise<Models.WebTestsListByComponentResponse> {
    return this.client.sendOperationRequest(
      {
        componentName,
        resourceGroupName,
        options
      },
      listByComponentOperationSpec,
      callback) as Promise<Models.WebTestsListByComponentResponse>;
  }

  /**
   * Get all Application Insights web tests defined within a specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WebTestsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTestListResult>): Promise<Models.WebTestsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.WebTestsListByResourceGroupNextResponse>;
  }

  /**
   * Get all Application Insights web test alerts definitioned within a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WebTestsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTestListResult>): Promise<Models.WebTestsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.WebTestsListNextResponse>;
  }

  /**
   * Get all Application Insights web tests defined for the specified component.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebTestsListByComponentNextResponse>
   */
  listByComponentNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WebTestsListByComponentNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByComponentNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByComponentNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebTestListResult>): void;
  listByComponentNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WebTestListResult>): Promise<Models.WebTestsListByComponentNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByComponentNextOperationSpec,
      callback) as Promise<Models.WebTestsListByComponentNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests",
  urlParameters: [
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
      bodyMapper: Mappers.WebTestListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests/{webTestName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.webTestName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WebTest
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests/{webTestName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.webTestName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "webTestDefinition",
    mapper: {
      ...Mappers.WebTest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WebTest
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests/{webTestName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.webTestName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "webTestTags",
    mapper: {
      ...Mappers.TagsResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WebTest
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/webtests/{webTestName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.webTestName
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
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Insights/webtests",
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
      bodyMapper: Mappers.WebTestListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByComponentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{componentName}/webtests",
  urlParameters: [
    Parameters.componentName,
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
      bodyMapper: Mappers.WebTestListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.WebTestListResult
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
      bodyMapper: Mappers.WebTestListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByComponentNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.WebTestListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
