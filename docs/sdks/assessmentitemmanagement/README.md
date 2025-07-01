# AssessmentItemManagement
(*assessmentItemManagement*)

## Overview

Enables the management of Assessment ITems. Assessment Items are made up of QTI Interactions (e.g. questions, multiple choice, etc.).

### Available Operations

* [searchAssessmentItems](#searchassessmentitems) - Search and filter assessment items
* [createAssessmentItem](#createassessmentitem) - Create a new assessment item
* [getAssessmentItem](#getassessmentitem) - Get an assessment item with complete question content
* [updateAssessmentItem](#updateassessmentitem) - Update an assessment item's content and configuration
* [deleteAssessmentItem](#deleteassessmentitem) - Delete an assessment item

## searchAssessmentItems

Search and retrieve assessment items (questions) with advanced filtering capabilities. Supports text search across titles and identifiers, filtering by type, sorting, and pagination. Assessment items are the core content units that contain questions, answer choices, and scoring logic.

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
  const result = await qti.assessmentItemManagement.searchAssessmentItems({
    filter: "type='choice'",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { assessmentItemManagementSearchAssessmentItems } from "qti/funcs/assessmentItemManagementSearchAssessmentItems.js";

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
  const res = await assessmentItemManagementSearchAssessmentItems(qti, {
    filter: "type='choice'",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentItemManagementSearchAssessmentItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchAssessmentItemsRequest](../../models/operations/searchassessmentitemsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchAssessmentItemsResponse](../../models/operations/searchassessmentitemsresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.SearchAssessmentItemsBadRequestError     | 400                                             | application/json                                |
| errors.SearchAssessmentItemsInternalServerError | 500                                             | application/json                                |
| errors.QtiDefaultError                          | 4XX, 5XX                                        | \*/\*                                           |

## createAssessmentItem

Create a new assessment item (question) with its content, interactions, and response processing rules. Assessment items can contain various question types like multiple choice, text entry, or complex interactions. Supports both JSON and XML input formats with automatic QTI XML generation and validation.

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
  const result = await qti.assessmentItemManagement.createAssessmentItem({
    identifier: "choice-item-1",
    title: "Sample Choice Question",
    type: "choice",
    responseDeclarations: [
      {
        identifier: "RESPONSE",
        cardinality: "single",
        baseType: "identifier",
        correctResponse: {
          value: [
            "B",
          ],
        },
      },
    ],
    outcomeDeclarations: [
      {
        identifier: "FEEDBACK",
        cardinality: "single",
        baseType: "identifier",
      },
      {
        identifier: "FEEDBACK-INLINE",
        cardinality: "single",
        baseType: "identifier",
      },
    ],
    responseProcessing: {
      templateType: "match_correct",
      responseDeclarationIdentifier: "RESPONSE",
      outcomeIdentifier: "FEEDBACK",
      correctResponseIdentifier: "CORRECT",
      incorrectResponseIdentifier: "INCORRECT",
    },
    metadata: {
      "subject": "Math",
      "grade": "5",
      "standard": "Number Operations",
      "lesson": "Basic Addition",
      "difficulty": "hard",
    },
    feedbackBlock: [
      {
        outcomeIdentifier: "FEEDBACK",
        identifier: "CORRECT",
        showHide: "show",
        content: "<p><strong>Correct!</strong> Well done.</p>",
        class: [],
      },
      {
        outcomeIdentifier: "FEEDBACK",
        identifier: "INCORRECT",
        showHide: "show",
        content: "<p><strong>Incorrect.</strong> Please review and try again.</p>",
        class: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { assessmentItemManagementCreateAssessmentItem } from "qti/funcs/assessmentItemManagementCreateAssessmentItem.js";

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
  const res = await assessmentItemManagementCreateAssessmentItem(qti, {
    identifier: "choice-item-1",
    title: "Sample Choice Question",
    type: "choice",
    responseDeclarations: [
      {
        identifier: "RESPONSE",
        cardinality: "single",
        baseType: "identifier",
        correctResponse: {
          value: [
            "B",
          ],
        },
      },
    ],
    outcomeDeclarations: [
      {
        identifier: "FEEDBACK",
        cardinality: "single",
        baseType: "identifier",
      },
      {
        identifier: "FEEDBACK-INLINE",
        cardinality: "single",
        baseType: "identifier",
      },
    ],
    responseProcessing: {
      templateType: "match_correct",
      responseDeclarationIdentifier: "RESPONSE",
      outcomeIdentifier: "FEEDBACK",
      correctResponseIdentifier: "CORRECT",
      incorrectResponseIdentifier: "INCORRECT",
    },
    metadata: {
      "subject": "Math",
      "grade": "5",
      "standard": "Number Operations",
      "lesson": "Basic Addition",
      "difficulty": "hard",
    },
    feedbackBlock: [
      {
        outcomeIdentifier: "FEEDBACK",
        identifier: "CORRECT",
        showHide: "show",
        content: "<p><strong>Correct!</strong> Well done.</p>",
        class: [],
      },
      {
        outcomeIdentifier: "FEEDBACK",
        identifier: "INCORRECT",
        showHide: "show",
        content: "<p><strong>Incorrect.</strong> Please review and try again.</p>",
        class: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentItemManagementCreateAssessmentItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AssessmentItem](../../models/assessmentitem.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAssessmentItemResponse](../../models/operations/createassessmentitemresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.CreateAssessmentItemBadRequestError     | 400                                            | application/json                               |
| errors.CreateAssessmentItemConflictError       | 409                                            | application/json                               |
| errors.CreateAssessmentItemInternalServerError | 500                                            | application/json                               |
| errors.QtiDefaultError                         | 4XX, 5XX                                       | \*/\*                                          |

## getAssessmentItem

Retrieve a specific assessment item including its question content, answer choices, interaction types, response processing rules, and scoring logic. Assessment items are the fundamental units of assessment content that can be referenced by test sections. Supports both JSON and XML response formats based on the Content-Type header.

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
  const result = await qti.assessmentItemManagement.getAssessmentItem({
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
import { assessmentItemManagementGetAssessmentItem } from "qti/funcs/assessmentItemManagementGetAssessmentItem.js";

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
  const res = await assessmentItemManagementGetAssessmentItem(qti, {
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentItemManagementGetAssessmentItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssessmentItemRequest](../../models/operations/getassessmentitemrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAssessmentItemResponse](../../models/operations/getassessmentitemresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetAssessmentItemNotFoundError       | 404                                         | application/json                            |
| errors.GetAssessmentItemInternalServerError | 500                                         | application/json                            |
| errors.QtiDefaultError                      | 4XX, 5XX                                    | \*/\*                                       |

## updateAssessmentItem

Update an assessment item including its question content, interactions, response processing, and scoring logic. This operation regenerates the QTI XML structure and validates all content. Assessment tests that reference this item will automatically use the updated version.

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
  const result = await qti.assessmentItemManagement.updateAssessmentItem({
    identifier: "<value>",
    requestBody: {
      id: "<id>",
      identifier: "choice-item-1",
      title: "Sample Choice Question",
      type: "choice",
      responseDeclarations: [
        {
          identifier: "RESPONSE",
          cardinality: "single",
          baseType: "identifier",
          correctResponse: {
            value: [
              "B",
            ],
          },
        },
      ],
      outcomeDeclarations: [
        {
          identifier: "FEEDBACK",
          cardinality: "single",
          baseType: "identifier",
        },
        {
          identifier: "FEEDBACK-INLINE",
          cardinality: "single",
          baseType: "identifier",
        },
      ],
      responseProcessing: {
        templateType: "match_correct",
        responseDeclarationIdentifier: "RESPONSE",
        outcomeIdentifier: "FEEDBACK",
        correctResponseIdentifier: "CORRECT",
        incorrectResponseIdentifier: "INCORRECT",
      },
      metadata: {
        "subject": "Math",
        "grade": "5",
        "standard": "Number Operations",
        "lesson": "Basic Addition",
        "difficulty": "hard",
      },
      rawXml: "<value>",
      content: {
        qtiAssessmentItem: {
          attributes: {
            xmlns: "<value>",
            xmlnsXsi: "<value>",
            xsiSchemaLocation: "<value>",
            identifier: "<value>",
            title: "<value>",
            adaptive: "<value>",
            timeDependent: "<value>",
          },
          qtiResponseDeclaration: [
            {
              attributes: {
                identifier: "<value>",
                cardinality: "<value>",
                baseType: "<value>",
              },
              qtiCorrectResponse: {
                qtiValue: [],
              },
            },
          ],
          qtiOutcomeDeclaration: [
            {
              attributes: {
                identifier: "<value>",
                cardinality: "<value>",
                baseType: "<value>",
              },
            },
          ],
          qtiAssessmentStimulusRef: {
            attributes: {
              identifier: "<value>",
              href: "<value>",
              title: "<value>",
            },
          },
        },
      },
      feedbackBlock: [
        {
          outcomeIdentifier: "FEEDBACK",
          identifier: "CORRECT",
          showHide: "show",
          content: "<p><strong>Correct!</strong> Well done.</p>",
          class: [
            "<value 1>",
          ],
        },
        {
          outcomeIdentifier: "FEEDBACK",
          identifier: "INCORRECT",
          showHide: "show",
          content: "<p><strong>Incorrect.</strong> Please review and try again.</p>",
          class: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      ],
      createdAt: new Date("2023-01-29T18:30:04.515Z"),
      updatedAt: new Date("2025-03-31T03:51:50.850Z"),
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
import { assessmentItemManagementUpdateAssessmentItem } from "qti/funcs/assessmentItemManagementUpdateAssessmentItem.js";

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
  const res = await assessmentItemManagementUpdateAssessmentItem(qti, {
    identifier: "<value>",
    requestBody: {
      id: "<id>",
      identifier: "choice-item-1",
      title: "Sample Choice Question",
      type: "choice",
      responseDeclarations: [
        {
          identifier: "RESPONSE",
          cardinality: "single",
          baseType: "identifier",
          correctResponse: {
            value: [
              "B",
            ],
          },
        },
      ],
      outcomeDeclarations: [
        {
          identifier: "FEEDBACK",
          cardinality: "single",
          baseType: "identifier",
        },
        {
          identifier: "FEEDBACK-INLINE",
          cardinality: "single",
          baseType: "identifier",
        },
      ],
      responseProcessing: {
        templateType: "match_correct",
        responseDeclarationIdentifier: "RESPONSE",
        outcomeIdentifier: "FEEDBACK",
        correctResponseIdentifier: "CORRECT",
        incorrectResponseIdentifier: "INCORRECT",
      },
      metadata: {
        "subject": "Math",
        "grade": "5",
        "standard": "Number Operations",
        "lesson": "Basic Addition",
        "difficulty": "hard",
      },
      rawXml: "<value>",
      content: {
        qtiAssessmentItem: {
          attributes: {
            xmlns: "<value>",
            xmlnsXsi: "<value>",
            xsiSchemaLocation: "<value>",
            identifier: "<value>",
            title: "<value>",
            adaptive: "<value>",
            timeDependent: "<value>",
          },
          qtiResponseDeclaration: [
            {
              attributes: {
                identifier: "<value>",
                cardinality: "<value>",
                baseType: "<value>",
              },
              qtiCorrectResponse: {
                qtiValue: [],
              },
            },
          ],
          qtiOutcomeDeclaration: [
            {
              attributes: {
                identifier: "<value>",
                cardinality: "<value>",
                baseType: "<value>",
              },
            },
          ],
          qtiAssessmentStimulusRef: {
            attributes: {
              identifier: "<value>",
              href: "<value>",
              title: "<value>",
            },
          },
        },
      },
      feedbackBlock: [
        {
          outcomeIdentifier: "FEEDBACK",
          identifier: "CORRECT",
          showHide: "show",
          content: "<p><strong>Correct!</strong> Well done.</p>",
          class: [
            "<value 1>",
          ],
        },
        {
          outcomeIdentifier: "FEEDBACK",
          identifier: "INCORRECT",
          showHide: "show",
          content: "<p><strong>Incorrect.</strong> Please review and try again.</p>",
          class: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      ],
      createdAt: new Date("2023-01-29T18:30:04.515Z"),
      updatedAt: new Date("2025-03-31T03:51:50.850Z"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentItemManagementUpdateAssessmentItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAssessmentItemRequest](../../models/operations/updateassessmentitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAssessmentItemResponse](../../models/operations/updateassessmentitemresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.UpdateAssessmentItemBadRequestError     | 400                                            | application/json                               |
| errors.UpdateAssessmentItemNotFoundError       | 404                                            | application/json                               |
| errors.UpdateAssessmentItemInternalServerError | 500                                            | application/json                               |
| errors.QtiDefaultError                         | 4XX, 5XX                                       | \*/\*                                          |

## deleteAssessmentItem

Permanently delete an assessment item. This operation cannot be undone. Warning: Assessment tests that reference this item may be affected. The item references in test sections will need to be updated separately.

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
  await qti.assessmentItemManagement.deleteAssessmentItem({
    identifier: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { assessmentItemManagementDeleteAssessmentItem } from "qti/funcs/assessmentItemManagementDeleteAssessmentItem.js";

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
  const res = await assessmentItemManagementDeleteAssessmentItem(qti, {
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("assessmentItemManagementDeleteAssessmentItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAssessmentItemRequest](../../models/operations/deleteassessmentitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.DeleteAssessmentItemNotFoundError       | 404                                            | application/json                               |
| errors.DeleteAssessmentItemInternalServerError | 500                                            | application/json                               |
| errors.QtiDefaultError                         | 4XX, 5XX                                       | \*/\*                                          |