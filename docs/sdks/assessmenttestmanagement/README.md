# AssessmentTestManagement
(*assessmentTestManagement*)

## Overview

Enables the management of Assessment Tests. Assessment Tests are the main entities that contain Assessment Test Parts, Sections, and Assessment Items.

### Available Operations

* [searchAssessmentTests](#searchassessmenttests) - Search and filter assessment tests
* [createAssessmentTest](#createassessmenttest) - Create a new assessment test
* [createAssessmentTestRaw](#createassessmenttestraw) - Create a new assessment test
* [getAssessmentTest](#getassessmenttest) - Get a complete assessment test with full structure
* [updateAssessmentTest](#updateassessmenttest) - Update an entire assessment test
* [updateAssessmentTestRaw](#updateassessmenttestraw) - Update an entire assessment test
* [deleteAssessmentTest](#deleteassessmenttest) - Delete an assessment test
* [getAllQuestions](#getallquestions) - Get all assessment items referenced by an assessment test
* [updateAssessmentTestMetadata](#updateassessmenttestmetadata) - Update assessment test metadata only

## searchAssessmentTests

Search and retrieve assessment tests with advanced filtering capabilities. Supports text search across titles and identifiers, filtering by navigation/submission modes, and pagination. Assessment tests are the top-level containers that define complete testing experiences through their test parts and sections.

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
  const result = await qti.assessmentTestManagement.searchAssessmentTests({
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
import { assessmentTestManagementSearchAssessmentTests } from "qti/funcs/assessmentTestManagementSearchAssessmentTests.js";

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
  const res = await assessmentTestManagementSearchAssessmentTests(qti, {
    sort: "createdAt",
    navigationMode: "linear",
    submissionMode: "individual",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentTestManagementSearchAssessmentTests failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchAssessmentTestsRequest](../../models/operations/searchassessmenttestsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchAssessmentTestsResponse](../../models/operations/searchassessmenttestsresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.SearchAssessmentTestsBadRequestError     | 400                                             | application/json                                |
| errors.SearchAssessmentTestsInternalServerError | 500                                             | application/json                                |
| errors.QtiDefaultError                          | 4XX, 5XX                                        | \*/\*                                           |

## createAssessmentTest

Create a new assessment test. Supports both JSON and XML formats.

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
  const result = await qti.assessmentTestManagement.createAssessmentTest({
    identifier: "<value>",
    title: "<value>",
    qtiTestPart: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { assessmentTestManagementCreateAssessmentTest } from "qti/funcs/assessmentTestManagementCreateAssessmentTest.js";

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
  const res = await assessmentTestManagementCreateAssessmentTest(qti, {
    identifier: "<value>",
    title: "<value>",
    qtiTestPart: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentTestManagementCreateAssessmentTest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AssessmentTest](../../models/assessmenttest.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAssessmentTestResponse](../../models/operations/createassessmenttestresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.CreateAssessmentTestBadRequestError     | 400                                            | application/json                               |
| errors.CreateAssessmentTestConflictError       | 409                                            | application/json                               |
| errors.CreateAssessmentTestInternalServerError | 500                                            | application/json                               |
| errors.QtiDefaultError                         | 4XX, 5XX                                       | \*/\*                                          |

## createAssessmentTestRaw

Create a new assessment test. Supports both JSON and XML formats.

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
  const result = await qti.assessmentTestManagement.createAssessmentTestRaw(bytesToStream(new TextEncoder().encode("{\"identifier\":\"<value>\",\"title\":\"<value>\",\"qtiVersion\":\"3.0\",\"qti-test-part\":[]}")));

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { assessmentTestManagementCreateAssessmentTestRaw } from "qti/funcs/assessmentTestManagementCreateAssessmentTestRaw.js";

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
  const res = await assessmentTestManagementCreateAssessmentTestRaw(qti, bytesToStream(new TextEncoder().encode("{\"identifier\":\"<value>\",\"title\":\"<value>\",\"qtiVersion\":\"3.0\",\"qti-test-part\":[]}")));
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentTestManagementCreateAssessmentTestRaw failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/requestt.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAssessmentTestRawResponse](../../models/operations/createassessmenttestrawresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.CreateAssessmentTestRawBadRequestError     | 400                                               | application/json                                  |
| errors.CreateAssessmentTestRawConflictError       | 409                                               | application/json                                  |
| errors.CreateAssessmentTestRawInternalServerError | 500                                               | application/json                                  |
| errors.QtiDefaultError                            | 4XX, 5XX                                          | \*/\*                                             |

## getAssessmentTest

Retrieve a complete assessment test including all its test parts, sections, and assessment item references. This provides the full hierarchical structure needed to understand the test organization and flow. Supports both JSON and XML response formats based on the Content-Type header.

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
  const result = await qti.assessmentTestManagement.getAssessmentTest({
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
import { assessmentTestManagementGetAssessmentTest } from "qti/funcs/assessmentTestManagementGetAssessmentTest.js";

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
  const res = await assessmentTestManagementGetAssessmentTest(qti, {
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentTestManagementGetAssessmentTest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssessmentTestRequest](../../models/operations/getassessmenttestrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAssessmentTestResponse](../../models/operations/getassessmenttestresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetAssessmentTestNotFoundError       | 404                                         | application/json                            |
| errors.GetAssessmentTestInternalServerError | 500                                         | application/json                            |
| errors.QtiDefaultError                      | 4XX, 5XX                                    | \*/\*                                       |

## updateAssessmentTest

Update an assessment test by replacing its complete structure. This operation updates the entire assessment test including its test parts, sections, and item references. Supports both JSON and XML formats. The updated XML structure is automatically regenerated.

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
  const result = await qti.assessmentTestManagement.updateAssessmentTest({
    identifier: "<value>",
    assessmentTest: {
      identifier: "<value>",
      title: "<value>",
      qtiTestPart: [],
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
import { assessmentTestManagementUpdateAssessmentTest } from "qti/funcs/assessmentTestManagementUpdateAssessmentTest.js";

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
  const res = await assessmentTestManagementUpdateAssessmentTest(qti, {
    identifier: "<value>",
    assessmentTest: {
      identifier: "<value>",
      title: "<value>",
      qtiTestPart: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentTestManagementUpdateAssessmentTest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAssessmentTestRequest](../../models/operations/updateassessmenttestrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAssessmentTestResponse](../../models/operations/updateassessmenttestresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.UpdateAssessmentTestNotFoundError       | 404                                            | application/json                               |
| errors.UpdateAssessmentTestInternalServerError | 500                                            | application/json                               |
| errors.QtiDefaultError                         | 4XX, 5XX                                       | \*/\*                                          |

## updateAssessmentTestRaw

Update an assessment test by replacing its complete structure. This operation updates the entire assessment test including its test parts, sections, and item references. Supports both JSON and XML formats. The updated XML structure is automatically regenerated.

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
  const result = await qti.assessmentTestManagement.updateAssessmentTestRaw({
    identifier: "<value>",
    requestBody: bytesToStream(new TextEncoder().encode("{\"identifier\":\"<value>\",\"title\":\"<value>\",\"qtiVersion\":\"3.0\",\"qti-test-part\":[]}")),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { assessmentTestManagementUpdateAssessmentTestRaw } from "qti/funcs/assessmentTestManagementUpdateAssessmentTestRaw.js";

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
  const res = await assessmentTestManagementUpdateAssessmentTestRaw(qti, {
    identifier: "<value>",
    requestBody: bytesToStream(new TextEncoder().encode("{\"identifier\":\"<value>\",\"title\":\"<value>\",\"qtiVersion\":\"3.0\",\"qti-test-part\":[]}")),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentTestManagementUpdateAssessmentTestRaw failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAssessmentTestRawRequest](../../models/operations/updateassessmenttestrawrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAssessmentTestRawResponse](../../models/operations/updateassessmenttestrawresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.UpdateAssessmentTestRawNotFoundError       | 404                                               | application/json                                  |
| errors.UpdateAssessmentTestRawInternalServerError | 500                                               | application/json                                  |
| errors.QtiDefaultError                            | 4XX, 5XX                                          | \*/\*                                             |

## deleteAssessmentTest

Permanently delete an assessment test and all its associated data including test parts, sections, and item references. This operation cannot be undone. The actual assessment items referenced by this test are not deleted.

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
  await qti.assessmentTestManagement.deleteAssessmentTest({
    identifier: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { assessmentTestManagementDeleteAssessmentTest } from "qti/funcs/assessmentTestManagementDeleteAssessmentTest.js";

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
  const res = await assessmentTestManagementDeleteAssessmentTest(qti, {
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("assessmentTestManagementDeleteAssessmentTest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAssessmentTestRequest](../../models/operations/deleteassessmenttestrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.DeleteAssessmentTestNotFoundError       | 404                                            | application/json                               |
| errors.DeleteAssessmentTestInternalServerError | 500                                            | application/json                               |
| errors.QtiDefaultError                         | 4XX, 5XX                                       | \*/\*                                          |

## getAllQuestions

Retrieve all assessment items (questions) that are referenced by an assessment test, along with their structural context (test part and section). This endpoint aggregates items from all sections across all test parts, providing both the item references and the actual assessment item data from the assessment-items collection.

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
  const result = await qti.assessmentTestManagement.getAllQuestions({
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
import { assessmentTestManagementGetAllQuestions } from "qti/funcs/assessmentTestManagementGetAllQuestions.js";

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
  const res = await assessmentTestManagementGetAllQuestions(qti, {
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentTestManagementGetAllQuestions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllQuestionsRequest](../../models/operations/getallquestionsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllQuestionsResponse](../../models/operations/getallquestionsresponse.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetAllQuestionsNotFoundError       | 404                                       | application/json                          |
| errors.GetAllQuestionsInternalServerError | 500                                       | application/json                          |
| errors.QtiDefaultError                    | 4XX, 5XX                                  | \*/\*                                     |

## updateAssessmentTestMetadata

Update only the metadata fields (title, description, etc.) of an assessment test without affecting its structure, test parts, sections, or assessment items. This is a lightweight operation for administrative changes.

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
  const result = await qti.assessmentTestManagement.updateAssessmentTestMetadata({
    identifier: "<value>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { assessmentTestManagementUpdateAssessmentTestMetadata } from "qti/funcs/assessmentTestManagementUpdateAssessmentTestMetadata.js";

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
  const res = await assessmentTestManagementUpdateAssessmentTestMetadata(qti, {
    identifier: "<value>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentTestManagementUpdateAssessmentTestMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAssessmentTestMetadataRequest](../../models/operations/updateassessmenttestmetadatarequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAssessmentTestMetadataResponse](../../models/operations/updateassessmenttestmetadataresponse.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.UpdateAssessmentTestMetadataBadRequestError     | 400                                                    | application/json                                       |
| errors.UpdateAssessmentTestMetadataNotFoundError       | 404                                                    | application/json                                       |
| errors.UpdateAssessmentTestMetadataInternalServerError | 500                                                    | application/json                                       |
| errors.QtiDefaultError                                 | 4XX, 5XX                                               | \*/\*                                                  |