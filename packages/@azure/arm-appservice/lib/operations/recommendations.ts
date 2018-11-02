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
import * as Mappers from "../models/recommendationsMappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";

/** Class representing a Recommendations. */
export class Recommendations {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Create a Recommendations.
   * @param {WebSiteManagementClientContext} client Reference to the service client.
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * List all recommendations for a subscription.
   * @summary List all recommendations for a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendationsListResponse>
   */
  list(options?: Models.RecommendationsListOptionalParams): Promise<Models.RecommendationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.RecommendationsListOptionalParams, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  list(optionsOrCallback?: Models.RecommendationsListOptionalParams | msRest.ServiceCallback<Models.RecommendationCollection>, callback?: msRest.ServiceCallback<Models.RecommendationCollection>): Promise<Models.RecommendationsListResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      listOperationSpec,
      callback) as Promise<Models.RecommendationsListResponse>;
  }

  /**
   * Reset all recommendation opt-out settings for a subscription.
   * @summary Reset all recommendation opt-out settings for a subscription.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resetAllFilters(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  resetAllFilters(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  resetAllFilters(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  resetAllFilters(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      resetAllFiltersOperationSpec,
      callback);
  }

  /**
   * Disables the specified rule so it will not apply to a subscription in the future.
   * @summary Disables the specified rule so it will not apply to a subscription in the future.
   * @param name Rule name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  disableRecommendationForSubscription(name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param name Rule name
   * @param callback The callback
   */
  disableRecommendationForSubscription(name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param name Rule name
   * @param options The optional parameters
   * @param callback The callback
   */
  disableRecommendationForSubscription(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  disableRecommendationForSubscription(name: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        optionsOrCallback
      },
      disableRecommendationForSubscriptionOperationSpec,
      callback);
  }

  /**
   * Get past recommendations for an app, optionally specified by the time range.
   * @summary Get past recommendations for an app, optionally specified by the time range.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendationsListHistoryForWebAppResponse>
   */
  listHistoryForWebApp(resourceGroupName: string, siteName: string, options?: Models.RecommendationsListHistoryForWebAppOptionalParams): Promise<Models.RecommendationsListHistoryForWebAppResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param callback The callback
   */
  listHistoryForWebApp(resourceGroupName: string, siteName: string, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The optional parameters
   * @param callback The callback
   */
  listHistoryForWebApp(resourceGroupName: string, siteName: string, options: Models.RecommendationsListHistoryForWebAppOptionalParams, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  listHistoryForWebApp(resourceGroupName: string, siteName: string, optionsOrCallback?: Models.RecommendationsListHistoryForWebAppOptionalParams | msRest.ServiceCallback<Models.RecommendationCollection>, callback?: msRest.ServiceCallback<Models.RecommendationCollection>): Promise<Models.RecommendationsListHistoryForWebAppResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        siteName,
        optionsOrCallback
      },
      listHistoryForWebAppOperationSpec,
      callback) as Promise<Models.RecommendationsListHistoryForWebAppResponse>;
  }

  /**
   * Get all recommendations for an app.
   * @summary Get all recommendations for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendationsListRecommendedRulesForWebAppResponse>
   */
  listRecommendedRulesForWebApp(resourceGroupName: string, siteName: string, options?: Models.RecommendationsListRecommendedRulesForWebAppOptionalParams): Promise<Models.RecommendationsListRecommendedRulesForWebAppResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param callback The callback
   */
  listRecommendedRulesForWebApp(resourceGroupName: string, siteName: string, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRecommendedRulesForWebApp(resourceGroupName: string, siteName: string, options: Models.RecommendationsListRecommendedRulesForWebAppOptionalParams, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  listRecommendedRulesForWebApp(resourceGroupName: string, siteName: string, optionsOrCallback?: Models.RecommendationsListRecommendedRulesForWebAppOptionalParams | msRest.ServiceCallback<Models.RecommendationCollection>, callback?: msRest.ServiceCallback<Models.RecommendationCollection>): Promise<Models.RecommendationsListRecommendedRulesForWebAppResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        siteName,
        optionsOrCallback
      },
      listRecommendedRulesForWebAppOperationSpec,
      callback) as Promise<Models.RecommendationsListRecommendedRulesForWebAppResponse>;
  }

  /**
   * Disable all recommendations for an app.
   * @summary Disable all recommendations for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  disableAllForWebApp(resourceGroupName: string, siteName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param callback The callback
   */
  disableAllForWebApp(resourceGroupName: string, siteName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The optional parameters
   * @param callback The callback
   */
  disableAllForWebApp(resourceGroupName: string, siteName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  disableAllForWebApp(resourceGroupName: string, siteName: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        siteName,
        optionsOrCallback
      },
      disableAllForWebAppOperationSpec,
      callback);
  }

  /**
   * Reset all recommendation opt-out settings for an app.
   * @summary Reset all recommendation opt-out settings for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resetAllFiltersForWebApp(resourceGroupName: string, siteName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param callback The callback
   */
  resetAllFiltersForWebApp(resourceGroupName: string, siteName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The optional parameters
   * @param callback The callback
   */
  resetAllFiltersForWebApp(resourceGroupName: string, siteName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  resetAllFiltersForWebApp(resourceGroupName: string, siteName: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        siteName,
        optionsOrCallback
      },
      resetAllFiltersForWebAppOperationSpec,
      callback);
  }

  /**
   * Get a recommendation rule for an app.
   * @summary Get a recommendation rule for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param name Name of the recommendation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendationsGetRuleDetailsByWebAppResponse>
   */
  getRuleDetailsByWebApp(resourceGroupName: string, siteName: string, name: string, options?: Models.RecommendationsGetRuleDetailsByWebAppOptionalParams): Promise<Models.RecommendationsGetRuleDetailsByWebAppResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param name Name of the recommendation.
   * @param callback The callback
   */
  getRuleDetailsByWebApp(resourceGroupName: string, siteName: string, name: string, callback: msRest.ServiceCallback<Models.RecommendationRule>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param name Name of the recommendation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getRuleDetailsByWebApp(resourceGroupName: string, siteName: string, name: string, options: Models.RecommendationsGetRuleDetailsByWebAppOptionalParams, callback: msRest.ServiceCallback<Models.RecommendationRule>): void;
  getRuleDetailsByWebApp(resourceGroupName: string, siteName: string, name: string, optionsOrCallback?: Models.RecommendationsGetRuleDetailsByWebAppOptionalParams | msRest.ServiceCallback<Models.RecommendationRule>, callback?: msRest.ServiceCallback<Models.RecommendationRule>): Promise<Models.RecommendationsGetRuleDetailsByWebAppResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        siteName,
        name,
        optionsOrCallback
      },
      getRuleDetailsByWebAppOperationSpec,
      callback) as Promise<Models.RecommendationsGetRuleDetailsByWebAppResponse>;
  }

  /**
   * Disables the specific rule for a web site permanently.
   * @summary Disables the specific rule for a web site permanently.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Site name
   * @param name Rule name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  disableRecommendationForSite(resourceGroupName: string, siteName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Site name
   * @param name Rule name
   * @param callback The callback
   */
  disableRecommendationForSite(resourceGroupName: string, siteName: string, name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Site name
   * @param name Rule name
   * @param options The optional parameters
   * @param callback The callback
   */
  disableRecommendationForSite(resourceGroupName: string, siteName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  disableRecommendationForSite(resourceGroupName: string, siteName: string, name: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        siteName,
        name,
        optionsOrCallback
      },
      disableRecommendationForSiteOperationSpec,
      callback);
  }

  /**
   * List all recommendations for a subscription.
   * @summary List all recommendations for a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RecommendationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  listNext(nextPageLink: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendationCollection>, callback?: msRest.ServiceCallback<Models.RecommendationCollection>): Promise<Models.RecommendationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        optionsOrCallback
      },
      listNextOperationSpec,
      callback) as Promise<Models.RecommendationsListNextResponse>;
  }

  /**
   * Get past recommendations for an app, optionally specified by the time range.
   * @summary Get past recommendations for an app, optionally specified by the time range.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendationsListHistoryForWebAppNextResponse>
   */
  listHistoryForWebAppNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RecommendationsListHistoryForWebAppNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listHistoryForWebAppNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listHistoryForWebAppNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  listHistoryForWebAppNext(nextPageLink: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendationCollection>, callback?: msRest.ServiceCallback<Models.RecommendationCollection>): Promise<Models.RecommendationsListHistoryForWebAppNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        optionsOrCallback
      },
      listHistoryForWebAppNextOperationSpec,
      callback) as Promise<Models.RecommendationsListHistoryForWebAppNextResponse>;
  }

  /**
   * Get all recommendations for an app.
   * @summary Get all recommendations for an app.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendationsListRecommendedRulesForWebAppNextResponse>
   */
  listRecommendedRulesForWebAppNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RecommendationsListRecommendedRulesForWebAppNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listRecommendedRulesForWebAppNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRecommendedRulesForWebAppNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendationCollection>): void;
  listRecommendedRulesForWebAppNext(nextPageLink: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendationCollection>, callback?: msRest.ServiceCallback<Models.RecommendationCollection>): Promise<Models.RecommendationsListRecommendedRulesForWebAppNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        optionsOrCallback
      },
      listRecommendedRulesForWebAppNextOperationSpec,
      callback) as Promise<Models.RecommendationsListRecommendedRulesForWebAppNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.featured,
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const resetAllFiltersOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations/reset",
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
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const disableRecommendationForSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations/{name}/disable",
  urlParameters: [
    Parameters.name,
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
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listHistoryForWebAppOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendationHistory",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expiredOnly,
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listRecommendedRulesForWebAppOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.featured,
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const disableAllForWebAppOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/disable",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const resetAllFiltersForWebAppOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/reset",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getRuleDetailsByWebAppOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/{name}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.updateSeen,
    Parameters.recommendationId,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationRule
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const disableRecommendationForSiteOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/{name}/disable",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.name,
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
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listHistoryForWebAppNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listRecommendedRulesForWebAppNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};
