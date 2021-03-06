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
 * An interface representing Resource.
 * Base resource object.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] ID of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Type of Resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [etag] The entity tag used for optimistic concurency when
   * modifying the resource.
   */
  etag?: string;
}

/**
 * @interface
 * An interface representing TrackedResource.
 * Base resource object.
 *
 * @extends BaseResource
 */
export interface TrackedResource extends BaseResource {
  /**
   * @member {string} [id] ID of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Type of Resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Custom tags for the
   * resource.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {string} [etag] The entity tag used for optimistic concurency when
   * modifying the resource.
   */
  etag?: string;
}

/**
 * @interface
 * An interface representing Display.
 * Contains the localized display information for this particular operation or
 * action.
 *
 */
export interface Display {
  /**
   * @member {string} [provider] The localized, friendly version of the
   * resource provider name.
   */
  provider?: string;
  /**
   * @member {string} [resource] The localized, friendly version of the
   * resource type related to this action or operation; the resource type
   * should match the public documentation for the resource provider.
   */
  resource?: string;
  /**
   * @member {string} [operation] The localized, friendly name for the
   * operation. Use the name as it will displayed to the user.
   */
  operation?: string;
  /**
   * @member {string} [description] The localized, friendly description for the
   * operation. The description will be displayed to the user. It should be
   * thorough and concise for used in both tooltips and detailed views.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Describes the supported REST operation.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] The name of the operation being performed on this
   * particular object.
   */
  name?: string;
  /**
   * @member {Display} [display] Contains the localized display information for
   * this particular operation or action.
   */
  display?: Display;
  /**
   * @member {string} [origin] The intended executor of the operation.
   */
  origin?: string;
}

/**
 * @interface
 * An interface representing ErrorDetails.
 * The details of the error.
 *
 */
export interface ErrorDetails {
  /**
   * @member {string} [code] Error code.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly code?: string;
  /**
   * @member {string} [message] Error message indicating why the operation
   * failed.
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
 * An interface representing ErrorResponse.
 * Error response indicates that the service is not able to process the
 * incoming request. The reason is provided in the error message.
 *
 */
export interface ErrorResponse {
  /**
   * @member {ErrorDetails} [error] The details of the error.
   */
  error?: ErrorDetails;
}

/**
 * @interface
 * An interface representing OsDiskImage.
 * OS disk image.
 *
 */
export interface OsDiskImage {
  /**
   * @member {OperatingSystem} [operatingSystem] OS operating system type.
   * Possible values include: 'None', 'Windows', 'Linux'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operatingSystem?: OperatingSystem;
  /**
   * @member {string} [sourceBlobSasUri] SAS key for source blob.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly sourceBlobSasUri?: string;
}

/**
 * @interface
 * An interface representing DataDiskImage.
 * Data disk image.
 *
 */
export interface DataDiskImage {
  /**
   * @member {number} [lun] The LUN.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly lun?: number;
  /**
   * @member {string} [sourceBlobSasUri] SAS key for source blob.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly sourceBlobSasUri?: string;
}

/**
 * @interface
 * An interface representing ExtendedProduct.
 * Extended description about the product required for installing it into Azure
 * Stack.
 *
 */
export interface ExtendedProduct {
  /**
   * @member {string} [galleryPackageBlobSasUri] The URI to the .azpkg file
   * that provides information required for showing product in the gallery.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly galleryPackageBlobSasUri?: string;
  /**
   * @member {string} [productKind] Specifies the kind of the product
   * (virtualMachine or virtualMachineExtension).
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly productKind?: string;
  /**
   * @member {ComputeRole} [computeRole] Specifies kind of compute role
   * inclided in the package. Possible values include: 'None', 'IaaS', 'PaaS'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly computeRole?: ComputeRole;
  /**
   * @member {boolean} [isSystemExtension] Specifies if product is a Virtual
   * Machine Extension.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly isSystemExtension?: boolean;
  /**
   * @member {string} [uri] The URI.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly uri?: string;
  /**
   * @member {boolean} [supportMultipleExtensions] Indicates if specified
   * product supports multiple extensions.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly supportMultipleExtensions?: boolean;
  /**
   * @member {string} [version] Specifies product version.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly version?: string;
  /**
   * @member {OperatingSystem} [vmOsType] Specifies operating system used by
   * the product. Possible values include: 'None', 'Windows', 'Linux'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly vmOsType?: OperatingSystem;
  /**
   * @member {boolean} [vmScaleSetEnabled] Indicates if virtual machine Scale
   * Set is enabled in the specified product.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly vmScaleSetEnabled?: boolean;
  /**
   * @member {OsDiskImage} [osDiskImage] OS disk image used by product.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly osDiskImage?: OsDiskImage;
  /**
   * @member {DataDiskImage[]} [dataDiskImages] List of attached data disks.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly dataDiskImages?: DataDiskImage[];
}

/**
 * @interface
 * An interface representing VirtualMachineExtensionProductProperties.
 * Product information.
 *
 */
export interface VirtualMachineExtensionProductProperties {
  /**
   * @member {ComputeRole} [computeRole] Specifies kind of compute role
   * inclided in the package. Possible values include: 'None', 'IaaS', 'PaaS'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly computeRole?: ComputeRole;
  /**
   * @member {boolean} [isSystemExtension] Specifies if product is a Virtual
   * Machine Extension.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly isSystemExtension?: boolean;
  /**
   * @member {string} [uri] The URI.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly uri?: string;
  /**
   * @member {boolean} [supportMultipleExtensions] Indicates if specified
   * product supports multiple extensions.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly supportMultipleExtensions?: boolean;
  /**
   * @member {string} [version] Specifies product version.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly version?: string;
  /**
   * @member {OperatingSystem} [vmOsType] Specifies operating system used by
   * the product. Possible values include: 'None', 'Windows', 'Linux'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly vmOsType?: OperatingSystem;
  /**
   * @member {boolean} [vmScaleSetEnabled] Indicates if virtual machine Scale
   * Set is enabled in the specified product.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly vmScaleSetEnabled?: boolean;
}

/**
 * @interface
 * An interface representing VirtualMachineProductProperties.
 * Product information.
 *
 */
export interface VirtualMachineProductProperties {
  /**
   * @member {string} [version] Specifies product version.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly version?: string;
  /**
   * @member {OsDiskImage} [osDiskImage] OS disk image used by product.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly osDiskImage?: OsDiskImage;
  /**
   * @member {DataDiskImage[]} [dataDiskImages] List of attached data disks.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly dataDiskImages?: DataDiskImage[];
}

/**
 * @interface
 * An interface representing IconUris.
 * Links to product icons.
 *
 */
export interface IconUris {
  /**
   * @member {string} [large] URI to large icon.
   */
  large?: string;
  /**
   * @member {string} [wide] URI to wide icon.
   */
  wide?: string;
  /**
   * @member {string} [medium] URI to medium icon.
   */
  medium?: string;
  /**
   * @member {string} [small] URI to small icon.
   */
  small?: string;
  /**
   * @member {string} [hero] URI to hero icon.
   */
  hero?: string;
}

/**
 * @interface
 * An interface representing ProductLink.
 * Link with additional information about a product.
 *
 */
export interface ProductLink {
  /**
   * @member {string} [displayName] The description of the link.
   */
  displayName?: string;
  /**
   * @member {string} [uri] The URI corresponding to the link.
   */
  uri?: string;
}

/**
 * @interface
 * An interface representing ProductProperties.
 * Additional properties of the product
 *
 */
export interface ProductProperties {
  /**
   * @member {string} [version] The version.
   */
  version?: string;
}

/**
 * @interface
 * An interface representing Product.
 * Product information.
 *
 * @extends Resource
 */
export interface Product extends Resource {
  /**
   * @member {string} [displayName] The display name of the product.
   */
  displayName?: string;
  /**
   * @member {string} [description] The description of the product.
   */
  description?: string;
  /**
   * @member {string} [publisherDisplayName] The user-friendly name of the
   * product publisher.
   */
  publisherDisplayName?: string;
  /**
   * @member {string} [publisherIdentifier] Publisher identifier.
   */
  publisherIdentifier?: string;
  /**
   * @member {string} [offer] The offer representing the product.
   */
  offer?: string;
  /**
   * @member {string} [offerVersion] The version of the product offer.
   */
  offerVersion?: string;
  /**
   * @member {string} [sku] The product SKU.
   */
  sku?: string;
  /**
   * @member {string} [billingPartNumber] The part number used for billing
   * purposes.
   */
  billingPartNumber?: string;
  /**
   * @member {string} [vmExtensionType] The type of the Virtual Machine
   * Extension.
   */
  vmExtensionType?: string;
  /**
   * @member {string} [galleryItemIdentity] The identifier of the gallery item
   * corresponding to the product.
   */
  galleryItemIdentity?: string;
  /**
   * @member {IconUris} [iconUris] Additional links available for this product.
   */
  iconUris?: IconUris;
  /**
   * @member {ProductLink[]} [links] Additional links available for this
   * product.
   */
  links?: ProductLink[];
  /**
   * @member {string} [legalTerms] The legal terms.
   */
  legalTerms?: string;
  /**
   * @member {string} [privacyPolicy] The privacy policy.
   */
  privacyPolicy?: string;
  /**
   * @member {number} [payloadLength] The length of product content.
   */
  payloadLength?: number;
  /**
   * @member {string} [productKind] The kind of the product (virtualMachine or
   * virtualMachineExtension)
   */
  productKind?: string;
  /**
   * @member {ProductProperties} [productProperties] Additional properties for
   * the product.
   */
  productProperties?: ProductProperties;
}

/**
 * @interface
 * An interface representing Registration.
 * Registration information.
 *
 * @extends TrackedResource
 */
export interface Registration extends TrackedResource {
  /**
   * @member {string} [objectId] The object identifier associated with the
   * Azure Stack connecting to Azure.
   */
  objectId?: string;
  /**
   * @member {string} [cloudId] The identifier of the registered Azure Stack.
   */
  cloudId?: string;
  /**
   * @member {string} [billingModel] Specifies the billing mode for the Azure
   * Stack registration.
   */
  billingModel?: string;
}

/**
 * @interface
 * An interface representing ActivationKeyResult.
 * The resource containing the Azure Stack activation key.
 *
 */
export interface ActivationKeyResult {
  /**
   * @member {string} [activationKey] Azure Stack activation key.
   */
  activationKey?: string;
}

/**
 * @interface
 * An interface representing RegistrationParameter.
 * Registration resource
 *
 */
export interface RegistrationParameter {
  /**
   * @member {string} registrationToken The token identifying registered Azure
   * Stack
   */
  registrationToken: string;
  /**
   * @member {Location} [location] Location of the resource. Possible values
   * include: 'global'
   */
  location?: Location;
}

/**
 * @interface
 * An interface representing CustomerSubscription.
 * Customer subcription.
 *
 * @extends Resource
 */
export interface CustomerSubscription extends Resource {
  /**
   * @member {string} [tenantId] Tenant Id.
   */
  tenantId?: string;
}

/**
 * @interface
 * An interface representing AzureStackManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface AzureStackManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationList.
 * List of Operations
 *
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
  /**
   * @member {string} [nextLink] URI to the next page of operations.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the ProductList.
 * Pageable list of products.
 *
 * @extends Array<Product>
 */
export interface ProductList extends Array<Product> {
  /**
   * @member {string} [nextLink] URI to the next page.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the RegistrationList.
 * Pageable list of registrations.
 *
 * @extends Array<Registration>
 */
export interface RegistrationList extends Array<Registration> {
  /**
   * @member {string} [nextLink] URI to the next page.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the CustomerSubscriptionList.
 * Pageable list of customer subscriptions.
 *
 * @extends Array<CustomerSubscription>
 */
export interface CustomerSubscriptionList extends Array<CustomerSubscription> {
  /**
   * @member {string} [nextLink] URI to the next page.
   */
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'Failed', 'Succeeded', 'Canceled'
 * @readonly
 * @enum {string}
 */
export enum ProvisioningState {
  Creating = 'Creating',
  Failed = 'Failed',
  Succeeded = 'Succeeded',
  Canceled = 'Canceled',
}

/**
 * Defines values for ComputeRole.
 * Possible values include: 'None', 'IaaS', 'PaaS'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ComputeRole =
 * <ComputeRole>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ComputeRole {
  None = 'None',
  IaaS = 'IaaS',
  PaaS = 'PaaS',
}

/**
 * Defines values for OperatingSystem.
 * Possible values include: 'None', 'Windows', 'Linux'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: OperatingSystem =
 * <OperatingSystem>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum OperatingSystem {
  None = 'None',
  Windows = 'Windows',
  Linux = 'Linux',
}

/**
 * Defines values for Location.
 * Possible values include: 'global'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Location = <Location>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum Location {
  Global = 'global',
}

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
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
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationList & {
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
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ProductsListResponse = ProductList & {
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
      parsedBody: ProductList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ProductsGetResponse = Product & {
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
      parsedBody: Product;
    };
};

/**
 * Contains response data for the listDetails operation.
 */
export type ProductsListDetailsResponse = ExtendedProduct & {
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
      parsedBody: ExtendedProduct;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ProductsListNextResponse = ProductList & {
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
      parsedBody: ProductList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type RegistrationsListResponse = RegistrationList & {
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
      parsedBody: RegistrationList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type RegistrationsGetResponse = Registration & {
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
      parsedBody: Registration;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type RegistrationsCreateOrUpdateResponse = Registration & {
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
      parsedBody: Registration;
    };
};

/**
 * Contains response data for the update operation.
 */
export type RegistrationsUpdateResponse = Registration & {
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
      parsedBody: Registration;
    };
};

/**
 * Contains response data for the getActivationKey operation.
 */
export type RegistrationsGetActivationKeyResponse = ActivationKeyResult & {
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
      parsedBody: ActivationKeyResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type RegistrationsListNextResponse = RegistrationList & {
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
      parsedBody: RegistrationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type CustomerSubscriptionsListResponse = CustomerSubscriptionList & {
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
      parsedBody: CustomerSubscriptionList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type CustomerSubscriptionsGetResponse = CustomerSubscription & {
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
      parsedBody: CustomerSubscription;
    };
};

/**
 * Contains response data for the create operation.
 */
export type CustomerSubscriptionsCreateResponse = CustomerSubscription & {
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
      parsedBody: CustomerSubscription;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type CustomerSubscriptionsListNextResponse = CustomerSubscriptionList & {
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
      parsedBody: CustomerSubscriptionList;
    };
};
