# TestPartManagement
(*testPartManagement*)

## Overview

Enables the management of Test Parts. Assessment Test Parts are used to group sections inside of an Assessment Test.

### Available Operations

* [searchTestParts](#searchtestparts) - Search and filter test parts within an assessment test
* [createTestPart](#createtestpart) - Create a new test part in an assessment test
* [getTestPart](#gettestpart) - Get a specific test part with all its sections
* [updateTestPart](#updatetestpart) - Update a test part's configuration and sections
* [deleteTestPart](#deletetestpart) - Delete a test part and all its sections

## searchTestParts

Get all test parts within an assessment test with support for filtering by navigation mode, submission mode, and text search. Test parts are organizational units that group sections and define testing behaviors like linear/nonlinear navigation.

### Example Usage

```typescript
import { Qti } from "qti";

const qti = new Qti({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const result = await qti.testPartManagement.searchTestParts({
    assessmentTestIdentifier: "<value>",
    sort: "createdAt",
    navigationMode: "linear",
    submissionMode: "individual",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { testPartManagementSearchTestParts } from "qti/funcs/testPartManagementSearchTestParts.js";

// Use `QtiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qti = new QtiCore({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const res = await testPartManagementSearchTestParts(qti, {
    assessmentTestIdentifier: "<value>",
    sort: "createdAt",
    navigationMode: "linear",
    submissionMode: "individual",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("testPartManagementSearchTestParts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchTestPartsRequest](../../models/operations/searchtestpartsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchTestPartsResponse](../../models/operations/searchtestpartsresponse.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.SearchTestPartsBadRequestError     | 400                                       | application/json                          |
| errors.SearchTestPartsNotFoundError       | 404                                       | application/json                          |
| errors.SearchTestPartsInternalServerError | 500                                       | application/json                          |
| errors.QtiDefaultError                    | 4XX, 5XX                                  | \*/\*                                     |

## createTestPart

Create a new test part within an assessment test. Test parts organize sections and define navigation behaviors (linear/nonlinear) and submission modes. The assessment test's XML structure is automatically updated to include the new test part.

### Example Usage

```typescript
import { Qti } from "qti";

const qti = new Qti({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const result = await qti.testPartManagement.createTestPart({
    assessmentTestIdentifier: "<value>",
    testPart: {
      identifier: "<value>",
      navigationMode: "nonlinear",
      submissionMode: "individual",
      qtiAssessmentSection: [
        {
          identifier: "<value>",
          title: "<value>",
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { testPartManagementCreateTestPart } from "qti/funcs/testPartManagementCreateTestPart.js";

// Use `QtiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qti = new QtiCore({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const res = await testPartManagementCreateTestPart(qti, {
    assessmentTestIdentifier: "<value>",
    testPart: {
      identifier: "<value>",
      navigationMode: "nonlinear",
      submissionMode: "individual",
      qtiAssessmentSection: [
        {
          identifier: "<value>",
          title: "<value>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("testPartManagementCreateTestPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTestPartRequest](../../models/operations/createtestpartrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTestPartResponse](../../models/operations/createtestpartresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.CreateTestPartBadRequestError     | 400                                      | application/json                         |
| errors.CreateTestPartNotFoundError       | 404                                      | application/json                         |
| errors.CreateTestPartConflictError       | 409                                      | application/json                         |
| errors.CreateTestPartInternalServerError | 500                                      | application/json                         |
| errors.QtiDefaultError                   | 4XX, 5XX                                 | \*/\*                                    |

## getTestPart

Retrieve a test part by identifier including all its sections and their assessment item references. Test parts define navigation and submission behaviors for groups of sections. Supports both JSON and XML response formats.

### Example Usage

```typescript
import { Qti } from "qti";

const qti = new Qti({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const result = await qti.testPartManagement.getTestPart({
    assessmentTestIdentifier: "<value>",
    identifier: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { testPartManagementGetTestPart } from "qti/funcs/testPartManagementGetTestPart.js";

// Use `QtiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qti = new QtiCore({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const res = await testPartManagementGetTestPart(qti, {
    assessmentTestIdentifier: "<value>",
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("testPartManagementGetTestPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTestPartRequest](../../models/operations/gettestpartrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTestPartResponse](../../models/operations/gettestpartresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetTestPartNotFoundError       | 404                                   | application/json                      |
| errors.GetTestPartInternalServerError | 500                                   | application/json                      |
| errors.QtiDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## updateTestPart

Update a test part including its navigation mode, submission mode, time limits, and sections. This operation updates the entire test part structure and regenerates the parent assessment test's XML.

### Example Usage

```typescript
import { Qti } from "qti";

const qti = new Qti({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const result = await qti.testPartManagement.updateTestPart({
    assessmentTestIdentifier: "<value>",
    identifier: "<value>",
    testPart: {
      identifier: "<value>",
      navigationMode: "nonlinear",
      submissionMode: "simultaneous",
      qtiAssessmentSection: [],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { testPartManagementUpdateTestPart } from "qti/funcs/testPartManagementUpdateTestPart.js";

// Use `QtiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qti = new QtiCore({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const res = await testPartManagementUpdateTestPart(qti, {
    assessmentTestIdentifier: "<value>",
    identifier: "<value>",
    testPart: {
      identifier: "<value>",
      navigationMode: "nonlinear",
      submissionMode: "simultaneous",
      qtiAssessmentSection: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("testPartManagementUpdateTestPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTestPartRequest](../../models/operations/updatetestpartrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateTestPartResponse](../../models/operations/updatetestpartresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.UpdateTestPartBadRequestError     | 400                                      | application/json                         |
| errors.UpdateTestPartNotFoundError       | 404                                      | application/json                         |
| errors.UpdateTestPartInternalServerError | 500                                      | application/json                         |
| errors.UpdateTestPartNotImplementedError | 501                                      | application/json                         |
| errors.QtiDefaultError                   | 4XX, 5XX                                 | \*/\*                                    |

## deleteTestPart

Permanently delete a test part from an assessment test. This removes the test part and all its sections (but not the underlying assessment items). The assessment test's XML structure is automatically updated.

### Example Usage

```typescript
import { Qti } from "qti";

const qti = new Qti({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  await qti.testPartManagement.deleteTestPart({
    assessmentTestIdentifier: "<value>",
    identifier: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { testPartManagementDeleteTestPart } from "qti/funcs/testPartManagementDeleteTestPart.js";

// Use `QtiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const qti = new QtiCore({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const res = await testPartManagementDeleteTestPart(qti, {
    assessmentTestIdentifier: "<value>",
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("testPartManagementDeleteTestPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTestPartRequest](../../models/operations/deletetestpartrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.DeleteTestPartNotFoundError       | 404                                      | application/json                         |
| errors.DeleteTestPartInternalServerError | 500                                      | application/json                         |
| errors.QtiDefaultError                   | 4XX, 5XX                                 | \*/\*                                    |