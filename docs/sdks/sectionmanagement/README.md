# SectionManagement
(*sectionManagement*)

## Overview

Enables the management of Sections. Assessment Sections are used to group Assessment Items.

### Available Operations

* [searchSections](#searchsections) - Search sections within a test part
* [createSection](#createsection) - Create a new section in a test part
* [getSection](#getsection) - Get a section with all its assessment item references
* [updateSection](#updatesection) - Update a section's configuration and item references
* [deleteSection](#deletesection) - Delete a section and its item references
* [addAssessmentItem](#addassessmentitem) - Add an assessment item reference to a section
* [removeAssessmentItem](#removeassessmentitem) - Remove an assessment item reference from a section
* [updateAssessmentItemOrder](#updateassessmentitemorder) - Reorder assessment items within a section

## searchSections

Get all sections within a specific test part with support for text search, sorting, and pagination. Sections are containers that group related assessment items and define their presentation order.

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
  const result = await qti.sectionManagement.searchSections({
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    sort: "createdAt",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { sectionManagementSearchSections } from "qti/funcs/sectionManagementSearchSections.js";

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
  const res = await sectionManagementSearchSections(qti, {
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    sort: "createdAt",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sectionManagementSearchSections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchSectionsRequest](../../models/operations/searchsectionsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchSectionsResponse](../../models/operations/searchsectionsresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.SearchSectionsBadRequestError     | 400                                      | application/json                         |
| errors.SearchSectionsNotFoundError       | 404                                      | application/json                         |
| errors.SearchSectionsInternalServerError | 500                                      | application/json                         |
| errors.QtiDefaultError                   | 4XX, 5XX                                 | \*/\*                                    |

## createSection

Create a new section within a test part. Sections organize assessment items and define their presentation behavior. The parent assessment test's XML structure is automatically updated to include the new section.

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
  const result = await qti.sectionManagement.createSection({
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    section: {
      identifier: "<value>",
      title: "<value>",
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
import { sectionManagementCreateSection } from "qti/funcs/sectionManagementCreateSection.js";

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
  const res = await sectionManagementCreateSection(qti, {
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    section: {
      identifier: "<value>",
      title: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sectionManagementCreateSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSectionRequest](../../models/operations/createsectionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Section](../../models/section.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.CreateSectionBadRequestError     | 400                                     | application/json                        |
| errors.CreateSectionNotFoundError       | 404                                     | application/json                        |
| errors.CreateSectionInternalServerError | 500                                     | application/json                        |
| errors.CreateSectionNotImplementedError | 501                                     | application/json                        |
| errors.QtiDefaultError                  | 4XX, 5XX                                | \*/\*                                   |

## getSection

Retrieve a specific section including all its assessment item references, presentation settings, and configuration. Sections define how groups of assessment items are presented to test takers.

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
  const result = await qti.sectionManagement.getSection({
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
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
import { sectionManagementGetSection } from "qti/funcs/sectionManagementGetSection.js";

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
  const res = await sectionManagementGetSection(qti, {
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sectionManagementGetSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionRequest](../../models/operations/getsectionrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSectionResponse](../../models/operations/getsectionresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetSectionBadRequestError     | 400                                  | application/json                     |
| errors.GetSectionNotFoundError       | 404                                  | application/json                     |
| errors.GetSectionInternalServerError | 500                                  | application/json                     |
| errors.QtiDefaultError               | 4XX, 5XX                             | \*/\*                                |

## updateSection

Update a section including its title, presentation settings, and assessment item references. This operation updates the section structure and regenerates the parent assessment test's XML.

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
  const result = await qti.sectionManagement.updateSection({
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
    section: {
      identifier: "<value>",
      title: "<value>",
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
import { sectionManagementUpdateSection } from "qti/funcs/sectionManagementUpdateSection.js";

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
  const res = await sectionManagementUpdateSection(qti, {
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
    section: {
      identifier: "<value>",
      title: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sectionManagementUpdateSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSectionRequest](../../models/operations/updatesectionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateSectionResponse](../../models/operations/updatesectionresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UpdateSectionBadRequestError     | 400                                     | application/json                        |
| errors.UpdateSectionNotFoundError       | 404                                     | application/json                        |
| errors.UpdateSectionInternalServerError | 500                                     | application/json                        |
| errors.UpdateSectionNotImplementedError | 501                                     | application/json                        |
| errors.QtiDefaultError                  | 4XX, 5XX                                | \*/\*                                   |

## deleteSection

Permanently delete a section from a test part. This removes the section and all its assessment item references (but not the underlying assessment items). The assessment test's XML structure is automatically updated.

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
  const result = await qti.sectionManagement.deleteSection({
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
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
import { sectionManagementDeleteSection } from "qti/funcs/sectionManagementDeleteSection.js";

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
  const res = await sectionManagementDeleteSection(qti, {
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sectionManagementDeleteSection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSectionRequest](../../models/operations/deletesectionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSectionResponse](../../models/operations/deletesectionresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.DeleteSectionNotFoundError       | 404                                     | application/json                        |
| errors.DeleteSectionInternalServerError | 500                                     | application/json                        |
| errors.QtiDefaultError                  | 4XX, 5XX                                | \*/\*                                   |

## addAssessmentItem

Add a reference to an existing assessment item in a section. This creates a link between the assessment item and the section without copying the item content. The item must exist in the assessment-items collection.

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
  const result = await qti.sectionManagement.addAssessmentItem({
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
    requestBody: {
      identifier: "<value>",
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
import { sectionManagementAddAssessmentItem } from "qti/funcs/sectionManagementAddAssessmentItem.js";

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
  const res = await sectionManagementAddAssessmentItem(qti, {
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
    requestBody: {
      identifier: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sectionManagementAddAssessmentItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddAssessmentItemRequest](../../models/operations/addassessmentitemrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddAssessmentItemResponse](../../models/operations/addassessmentitemresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.AddAssessmentItemBadRequestError     | 400                                         | application/json                            |
| errors.AddAssessmentItemNotFoundError       | 404                                         | application/json                            |
| errors.AddAssessmentItemInternalServerError | 500                                         | application/json                            |
| errors.QtiDefaultError                      | 4XX, 5XX                                    | \*/\*                                       |

## removeAssessmentItem

Remove an assessment item reference from a section. This only removes the reference link; the actual assessment item remains in the assessment-items collection. The assessment test's XML structure is automatically updated.

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
  await qti.sectionManagement.removeAssessmentItem({
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
    itemIdentifier: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { sectionManagementRemoveAssessmentItem } from "qti/funcs/sectionManagementRemoveAssessmentItem.js";

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
  const res = await sectionManagementRemoveAssessmentItem(qti, {
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
    itemIdentifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("sectionManagementRemoveAssessmentItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAssessmentItemRequest](../../models/operations/removeassessmentitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.RemoveAssessmentItemNotFoundError       | 404                                            | application/json                               |
| errors.RemoveAssessmentItemInternalServerError | 500                                            | application/json                               |
| errors.QtiDefaultError                         | 4XX, 5XX                                       | \*/\*                                          |

## updateAssessmentItemOrder

Update the presentation order of assessment item references within a section. This affects the sequence in which items are presented to test takers. All specified items must exist in the section.

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
  const result = await qti.sectionManagement.updateAssessmentItemOrder({
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
    requestBody: {
      items: [],
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
import { sectionManagementUpdateAssessmentItemOrder } from "qti/funcs/sectionManagementUpdateAssessmentItemOrder.js";

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
  const res = await sectionManagementUpdateAssessmentItemOrder(qti, {
    assessmentTestIdentifier: "<value>",
    testPartIdentifier: "<value>",
    identifier: "<value>",
    requestBody: {
      items: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sectionManagementUpdateAssessmentItemOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAssessmentItemOrderRequest](../../models/operations/updateassessmentitemorderrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAssessmentItemOrderResponse](../../models/operations/updateassessmentitemorderresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.UpdateAssessmentItemOrderBadRequestError     | 400                                                 | application/json                                    |
| errors.UpdateAssessmentItemOrderNotFoundError       | 404                                                 | application/json                                    |
| errors.UpdateAssessmentItemOrderInternalServerError | 500                                                 | application/json                                    |
| errors.QtiDefaultError                              | 4XX, 5XX                                            | \*/\*                                               |