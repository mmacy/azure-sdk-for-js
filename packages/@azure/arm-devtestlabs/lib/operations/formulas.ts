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
import * as Mappers from "../models/formulasMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a Formulas. */
export class Formulas {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a Formulas.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List formulas in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<Models.FormulasListResponse>
   */
  list(resourceGroupName: string, labName: string, options?: Models.FormulasListOptionalParams): Promise<Models.FormulasListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, callback: msRest.ServiceCallback<Models.FormulaList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, options: Models.FormulasListOptionalParams, callback: msRest.ServiceCallback<Models.FormulaList>): void;
  list(resourceGroupName: string, labName: string, options?: Models.FormulasListOptionalParams, callback?: msRest.ServiceCallback<Models.FormulaList>): Promise<Models.FormulasListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FormulasListResponse>;
  }

  /**
   * Get formula.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param [options] The optional parameters
   * @returns Promise<Models.FormulasGetResponse>
   */
  get(resourceGroupName: string, labName: string, name: string, options?: Models.FormulasGetOptionalParams): Promise<Models.FormulasGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, name: string, callback: msRest.ServiceCallback<Models.Formula>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, name: string, options: Models.FormulasGetOptionalParams, callback: msRest.ServiceCallback<Models.Formula>): void;
  get(resourceGroupName: string, labName: string, name: string, options?: Models.FormulasGetOptionalParams, callback?: msRest.ServiceCallback<Models.Formula>): Promise<Models.FormulasGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FormulasGetResponse>;
  }

  /**
   * Create or replace an existing Formula. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param formula A formula for creating a VM, specifying an image base and other parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.FormulasCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labName: string, name: string, formula: Models.Formula, options?: msRest.RequestOptionsBase): Promise<Models.FormulasCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,labName,name,formula,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FormulasCreateOrUpdateResponse>;
  }

  /**
   * Delete formula.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, labName: string, name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, labName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Modify properties of formulas.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param formula A formula for creating a VM, specifying an image base and other parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.FormulasUpdateResponse>
   */
  update(resourceGroupName: string, labName: string, name: string, formula: Models.FormulaFragment, options?: msRest.RequestOptionsBase): Promise<Models.FormulasUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param formula A formula for creating a VM, specifying an image base and other parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, name: string, formula: Models.FormulaFragment, callback: msRest.ServiceCallback<Models.Formula>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param formula A formula for creating a VM, specifying an image base and other parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, name: string, formula: Models.FormulaFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Formula>): void;
  update(resourceGroupName: string, labName: string, name: string, formula: Models.FormulaFragment, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Formula>): Promise<Models.FormulasUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        formula,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.FormulasUpdateResponse>;
  }

  /**
   * Create or replace an existing Formula. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param formula A formula for creating a VM, specifying an image base and other parameters
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, labName: string, name: string, formula: Models.Formula, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        name,
        formula,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * List formulas in a given lab.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FormulasListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FormulasListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FormulaList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FormulaList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.FormulaList>): Promise<Models.FormulasListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.FormulasListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FormulaList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Formula
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
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

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "formula",
    mapper: {
      ...Mappers.FormulaFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Formula
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "formula",
    mapper: {
      ...Mappers.Formula,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Formula
    },
    201: {
      bodyMapper: Mappers.Formula
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
      bodyMapper: Mappers.FormulaList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
