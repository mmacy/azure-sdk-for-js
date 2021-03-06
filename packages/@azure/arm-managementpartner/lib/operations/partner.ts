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
import * as Mappers from "../models/partnerMappers";
import * as Parameters from "../models/parameters";
import { ACEProvisioningManagementPartnerAPIContext } from "../aCEProvisioningManagementPartnerAPIContext";

/** Class representing a Partner. */
export class Partner {
  private readonly client: ACEProvisioningManagementPartnerAPIContext;

  /**
   * Create a Partner.
   * @param {ACEProvisioningManagementPartnerAPIContext} client Reference to the service client.
   */
  constructor(client: ACEProvisioningManagementPartnerAPIContext) {
    this.client = client;
  }

  /**
   * Get the management partner using the partnerId, objectId and tenantId.
   * @summary Get a specific `Partner`.
   * @param partnerId Id of the Partner
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerGetResponse>
   */
  get(partnerId: string, options?: msRest.RequestOptionsBase): Promise<Models.PartnerGetResponse>;
  /**
   * @param partnerId Id of the Partner
   * @param callback The callback
   */
  get(partnerId: string, callback: msRest.ServiceCallback<Models.PartnerResponse>): void;
  /**
   * @param partnerId Id of the Partner
   * @param options The optional parameters
   * @param callback The callback
   */
  get(partnerId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerResponse>): void;
  get(partnerId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PartnerResponse>): Promise<Models.PartnerGetResponse> {
    return this.client.sendOperationRequest(
      {
        partnerId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PartnerGetResponse>;
  }

  /**
   * Create a management partner for the objectId and tenantId.
   * @summary Create a specific `Partner`.
   * @param partnerId Id of the Partner
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerCreateResponse>
   */
  create(partnerId: string, options?: msRest.RequestOptionsBase): Promise<Models.PartnerCreateResponse>;
  /**
   * @param partnerId Id of the Partner
   * @param callback The callback
   */
  create(partnerId: string, callback: msRest.ServiceCallback<Models.PartnerResponse>): void;
  /**
   * @param partnerId Id of the Partner
   * @param options The optional parameters
   * @param callback The callback
   */
  create(partnerId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerResponse>): void;
  create(partnerId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PartnerResponse>): Promise<Models.PartnerCreateResponse> {
    return this.client.sendOperationRequest(
      {
        partnerId,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.PartnerCreateResponse>;
  }

  /**
   * Update the management partner for the objectId and tenantId.
   * @summary Update a specific `Partner`.
   * @param partnerId Id of the Partner
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnerUpdateResponse>
   */
  update(partnerId: string, options?: msRest.RequestOptionsBase): Promise<Models.PartnerUpdateResponse>;
  /**
   * @param partnerId Id of the Partner
   * @param callback The callback
   */
  update(partnerId: string, callback: msRest.ServiceCallback<Models.PartnerResponse>): void;
  /**
   * @param partnerId Id of the Partner
   * @param options The optional parameters
   * @param callback The callback
   */
  update(partnerId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerResponse>): void;
  update(partnerId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PartnerResponse>): Promise<Models.PartnerUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        partnerId,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PartnerUpdateResponse>;
  }

  /**
   * Delete the management partner for the objectId and tenantId.
   * @summary Delete a specific `Partner`.
   * @param partnerId Id of the Partner
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(partnerId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param partnerId Id of the Partner
   * @param callback The callback
   */
  deleteMethod(partnerId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param partnerId Id of the Partner
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(partnerId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(partnerId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        partnerId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.ManagementPartner/partners/{partnerId}",
  urlParameters: [
    Parameters.partnerId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.ManagementPartner/partners/{partnerId}",
  urlParameters: [
    Parameters.partnerId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "providers/Microsoft.ManagementPartner/partners/{partnerId}",
  urlParameters: [
    Parameters.partnerId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "providers/Microsoft.ManagementPartner/partners/{partnerId}",
  urlParameters: [
    Parameters.partnerId
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
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
