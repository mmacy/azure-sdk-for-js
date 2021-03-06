/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing StorageContainerProperties.
 * The properties of the Azure Storage Container for file archive.
 *
 */
export interface StorageContainerProperties {
  /**
   * @member {string} [connectionString] The connection string of the storage
   * account.
   */
  connectionString?: string;
  /**
   * @member {string} [subscriptionId] The subscription identifier of the
   * storage account.
   */
  subscriptionId?: string;
  /**
   * @member {string} [resourceGroup] The name of the resource group of the
   * storage account.
   */
  resourceGroup?: string;
  /**
   * @member {string} [containerName] The name of storage container in the
   * storage account.
   */
  containerName?: string;
}

/**
 * @interface
 * An interface representing IoTSpacesProperties.
 * The properties of an IoTSpaces instance.
 *
 */
export interface IoTSpacesProperties {
  /**
   * @member {ProvisioningState} [provisioningState] The provisioning state.
   * Possible values include: 'Provisioning', 'Deleting', 'Succeeded',
   * 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [managementApiUrl] The management Api endpoint.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly managementApiUrl?: string;
  /**
   * @member {string} [webPortalUrl] The management UI endpoint.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webPortalUrl?: string;
  /**
   * @member {StorageContainerProperties} [storageContainer] The properties of
   * the designated storage container.
   */
  storageContainer?: StorageContainerProperties;
}

/**
 * @interface
 * An interface representing IoTSpacesSkuInfo.
 * Information about the SKU of the IoTSpaces instance.
 *
 */
export interface IoTSpacesSkuInfo {
  /**
   * @member {IoTSpacesSku} name The name of the SKU. Possible values include:
   * 'F1', 'S1', 'S2', 'S3'
   */
  name: IoTSpacesSku;
}

/**
 * @interface
 * An interface representing Resource.
 * The common properties of an IoTSpaces service.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} location The resource location.
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] The resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing IoTSpacesDescription.
 * The description of the IoTSpaces service.
 *
 * @extends Resource
 */
export interface IoTSpacesDescription extends Resource {
  /**
   * @member {IoTSpacesProperties} [properties] The common properties of a
   * IoTSpaces service.
   */
  properties?: IoTSpacesProperties;
  /**
   * @member {IoTSpacesSkuInfo} sku A valid instance SKU.
   */
  sku: IoTSpacesSkuInfo;
}

/**
 * @interface
 * An interface representing IoTSpacesPatchDescription.
 * The description of the IoTSpaces service.
 *
 */
export interface IoTSpacesPatchDescription {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Instance tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {IoTSpacesProperties} [properties] The common properties of an
   * IoTSpaces service.
   */
  properties?: IoTSpacesProperties;
}

/**
 * @interface
 * An interface representing ErrorDetails.
 * Error details.
 *
 */
export interface ErrorDetails {
  /**
   * @member {string} [code] The error code.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly code?: string;
  /**
   * @member {string} [message] The error message.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly message?: string;
  /**
   * @member {string} [target] The target of the particular error.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly target?: string;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft IoTSpaces
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [resource] Resource Type: IoTSpaces
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [operation] Name of the operation
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
  /**
   * @member {string} [description] Friendly description for the operation,
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * IoTSpaces service REST API operation
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{read |
   * write | action | delete}
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {OperationDisplay} [display]
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing OperationInputs.
 * Input values.
 *
 */
export interface OperationInputs {
  /**
   * @member {string} name The name of the IoTSpaces service instance to check.
   */
  name: string;
}

/**
 * @interface
 * An interface representing IoTSpacesNameAvailabilityInfo.
 * The properties indicating whether a given IoTSpaces service name is
 * available.
 *
 */
export interface IoTSpacesNameAvailabilityInfo {
  /**
   * @member {boolean} [nameAvailable] The value which indicates whether the
   * provided name is available.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nameAvailable?: boolean;
  /**
   * @member {IoTSpacesNameUnavailabilityReason} [reason] The reason for
   * unavailability. Possible values include: 'Invalid', 'AlreadyExists'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly reason?: IoTSpacesNameUnavailabilityReason;
  /**
   * @member {string} [message] The detailed reason message.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing IoTSpacesClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface IoTSpacesClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the IoTSpacesDescriptionListResult.
 * A list of IoTSpaces description objects with a next link.
 *
 * @extends Array<IoTSpacesDescription>
 */
export interface IoTSpacesDescriptionListResult extends Array<IoTSpacesDescription> {
  /**
   * @member {string} [nextLink] The link used to get the next page of
   * IoTSpaces description objects.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the OperationListResult.
 * A list of IoTSpaces service operations. It contains a list of operations and
 * a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] The link used to get the next page of
   * IoTSpaces description objects.
   */
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Provisioning', 'Deleting', 'Succeeded', 'Failed',
 * 'Canceled'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ProvisioningState =
 * <ProvisioningState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ProvisioningState {
  Provisioning = 'Provisioning',
  Deleting = 'Deleting',
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Canceled = 'Canceled',
}

/**
 * Defines values for IoTSpacesSku.
 * Possible values include: 'F1', 'S1', 'S2', 'S3'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: IoTSpacesSku =
 * <IoTSpacesSku>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum IoTSpacesSku {
  F1 = 'F1',
  S1 = 'S1',
  S2 = 'S2',
  S3 = 'S3',
}

/**
 * Defines values for IoTSpacesNameUnavailabilityReason.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export enum IoTSpacesNameUnavailabilityReason {
  Invalid = 'Invalid',
  AlreadyExists = 'AlreadyExists',
}

/**
 * Contains response data for the get operation.
 */
export type IoTSpacesGetResponse = IoTSpacesDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescription;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type IoTSpacesCreateOrUpdateResponse = IoTSpacesDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescription;
    };
};

/**
 * Contains response data for the update operation.
 */
export type IoTSpacesUpdateResponse = IoTSpacesDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescription;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type IoTSpacesDeleteMethodResponse = IoTSpacesDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescription;
    };
};

/**
 * Contains response data for the list operation.
 */
export type IoTSpacesListResponse = IoTSpacesDescriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescriptionListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type IoTSpacesListByResourceGroupResponse = IoTSpacesDescriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescriptionListResult;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type IoTSpacesCheckNameAvailabilityResponse = IoTSpacesNameAvailabilityInfo & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesNameAvailabilityInfo;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type IoTSpacesBeginCreateOrUpdateResponse = IoTSpacesDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescription;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type IoTSpacesBeginUpdateResponse = IoTSpacesDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescription;
    };
};

/**
 * Contains response data for the beginDeleteMethod operation.
 */
export type IoTSpacesBeginDeleteMethodResponse = IoTSpacesDescription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescription;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type IoTSpacesListNextResponse = IoTSpacesDescriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescriptionListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type IoTSpacesListByResourceGroupNextResponse = IoTSpacesDescriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IoTSpacesDescriptionListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};
