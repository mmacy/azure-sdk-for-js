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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const accountResourceName: msRest.OperationURLParameter = {
  parameterPath: "accountResourceName",
  mapper: {
    required: true,
    serializedName: "accountResourceName",
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const extensionResourceName: msRest.OperationURLParameter = {
  parameterPath: "extensionResourceName",
  mapper: {
    required: true,
    serializedName: "extensionResourceName",
    type: {
      name: "String"
    }
  }
};
export const jobId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "jobId"
  ],
  mapper: {
    serializedName: "jobId",
    type: {
      name: "Uuid"
    }
  }
};
export const operation: msRest.OperationQueryParameter = {
  parameterPath: "operation",
  mapper: {
    required: true,
    serializedName: "operation",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const resourceName: msRest.OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    required: true,
    serializedName: "resourceName",
    type: {
      name: "String"
    }
  }
};
export const rootResourceName: msRest.OperationURLParameter = {
  parameterPath: "rootResourceName",
  mapper: {
    required: true,
    serializedName: "rootResourceName",
    type: {
      name: "String"
    }
  }
};
export const subContainerName: msRest.OperationURLParameter = {
  parameterPath: "subContainerName",
  mapper: {
    required: true,
    serializedName: "subContainerName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const validating: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "validating"
  ],
  mapper: {
    serializedName: "validating",
    type: {
      name: "String"
    }
  }
};
