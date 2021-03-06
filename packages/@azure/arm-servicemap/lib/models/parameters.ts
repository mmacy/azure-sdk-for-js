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
export const clientGroupName: msRest.OperationURLParameter = {
  parameterPath: "clientGroupName",
  mapper: {
    required: true,
    serializedName: "clientGroupName",
    constraints: {
      MaxLength: 256,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const endTime: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "endTime"
  ],
  mapper: {
    serializedName: "endTime",
    type: {
      name: "DateTime"
    }
  }
};
export const live: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "live"
  ],
  mapper: {
    serializedName: "live",
    defaultValue: true,
    type: {
      name: "Boolean"
    }
  }
};
export const machineGroupName: msRest.OperationURLParameter = {
  parameterPath: "machineGroupName",
  mapper: {
    required: true,
    serializedName: "machineGroupName",
    constraints: {
      MaxLength: 36,
      MinLength: 36
    },
    type: {
      name: "String"
    }
  }
};
export const machineName: msRest.OperationURLParameter = {
  parameterPath: "machineName",
  mapper: {
    required: true,
    serializedName: "machineName",
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const portName: msRest.OperationURLParameter = {
  parameterPath: "portName",
  mapper: {
    required: true,
    serializedName: "portName",
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const processName: msRest.OperationURLParameter = {
  parameterPath: "processName",
  mapper: {
    required: true,
    serializedName: "processName",
    constraints: {
      MaxLength: 128,
      MinLength: 3
    },
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
    constraints: {
      MaxLength: 64,
      MinLength: 1,
      Pattern: /[a-zA-Z0-9_-]+/
    },
    type: {
      name: "String"
    }
  }
};
export const startTime: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "startTime"
  ],
  mapper: {
    serializedName: "startTime",
    type: {
      name: "DateTime"
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
export const timestamp: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "timestamp"
  ],
  mapper: {
    serializedName: "timestamp",
    type: {
      name: "DateTime"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    constraints: {
      InclusiveMaximum: 200,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const workspaceName: msRest.OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    required: true,
    serializedName: "workspaceName",
    constraints: {
      MaxLength: 63,
      MinLength: 3,
      Pattern: /[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]/
    },
    type: {
      name: "String"
    }
  }
};
