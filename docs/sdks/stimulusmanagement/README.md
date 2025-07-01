# StimulusManagement
(*stimulusManagement*)

## Overview

Enables the management of Stimuli. Stimuli are shared content pieces (text, images, audio, video) that provide context for assessment items and can be referenced by multiple questions.

### Available Operations

* [searchStimuli](#searchstimuli) - Search and filter stimuli
* [createStimulus](#createstimulus) - Create a new stimulus
* [getStimulus](#getstimulus) - Get a stimulus with its complete content
* [updateStimulus](#updatestimulus) - Update a stimulus and its content
* [deleteStimulus](#deletestimulus) - Delete a stimulus

## searchStimuli

Get all stimuli on the service provider. Search with advanced filtering capabilities. Supports text search across titles and identifiers, sorting, and pagination.

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
  const result = await qti.stimulusManagement.searchStimuli({
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
import { stimulusManagementSearchStimuli } from "qti/funcs/stimulusManagementSearchStimuli.js";

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
  const res = await stimulusManagementSearchStimuli(qti, {
    sort: "createdAt",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stimulusManagementSearchStimuli failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchStimuliRequest](../../models/operations/searchstimulirequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchStimuliResponse](../../models/operations/searchstimuliresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.SearchStimuliInternalServerError | 500                                     | application/json                        |
| errors.QtiDefaultError                  | 4XX, 5XX                                | \*/\*                                   |

## createStimulus

Create a new Stimulus on the service provider. Stimuli can be referenced by Assessment Items.

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
  const result = await qti.stimulusManagement.createStimulus({
    identifier: "<value>",
    title: "<value>",
    content: "<value>",
    metadata: {
      "subject": "Science",
      "grade": "7",
      "standard": "Life Science",
      "lesson": "Ecosystems and Biodiversity",
      "difficulty": "medium",
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
import { stimulusManagementCreateStimulus } from "qti/funcs/stimulusManagementCreateStimulus.js";

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
  const res = await stimulusManagementCreateStimulus(qti, {
    identifier: "<value>",
    title: "<value>",
    content: "<value>",
    metadata: {
      "subject": "Science",
      "grade": "7",
      "standard": "Life Science",
      "lesson": "Ecosystems and Biodiversity",
      "difficulty": "medium",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stimulusManagementCreateStimulus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.Stimulus](../../models/stimulus.md)                                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateStimulusResponse](../../models/operations/createstimulusresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.CreateStimulusBadRequestError     | 400                                      | application/json                         |
| errors.CreateStimulusConflictError       | 409                                      | application/json                         |
| errors.CreateStimulusInternalServerError | 500                                      | application/json                         |
| errors.QtiDefaultError                   | 4XX, 5XX                                 | \*/\*                                    |

## getStimulus

Get a specific Stimulus by identifier from the service provider. Stimuli can be referenced by Assessment Items to display relevant content to the learner.

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
  const result = await qti.stimulusManagement.getStimulus({
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
import { stimulusManagementGetStimulus } from "qti/funcs/stimulusManagementGetStimulus.js";

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
  const res = await stimulusManagementGetStimulus(qti, {
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stimulusManagementGetStimulus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStimulusRequest](../../models/operations/getstimulusrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStimulusResponse](../../models/operations/getstimulusresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetStimulusNotFoundError       | 404                                   | application/json                      |
| errors.GetStimulusInternalServerError | 500                                   | application/json                      |
| errors.QtiDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## updateStimulus

Update a Stimulus on the service provider.

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
  const result = await qti.stimulusManagement.updateStimulus({
    identifier: "<value>",
    requestBody: {
      params: {
        identifier: "<value>",
      },
      body: {
        identifier: "<value>",
        title: "<value>",
        content: "<value>",
      },
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
import { stimulusManagementUpdateStimulus } from "qti/funcs/stimulusManagementUpdateStimulus.js";

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
  const res = await stimulusManagementUpdateStimulus(qti, {
    identifier: "<value>",
    requestBody: {
      params: {
        identifier: "<value>",
      },
      body: {
        identifier: "<value>",
        title: "<value>",
        content: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stimulusManagementUpdateStimulus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateStimulusRequest](../../models/operations/updatestimulusrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateStimulusResponse](../../models/operations/updatestimulusresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.UpdateStimulusBadRequestError     | 400                                      | application/json                         |
| errors.UpdateStimulusNotFoundError       | 404                                      | application/json                         |
| errors.UpdateStimulusInternalServerError | 500                                      | application/json                         |
| errors.QtiDefaultError                   | 4XX, 5XX                                 | \*/\*                                    |

## deleteStimulus

Permanently delete a stimulus. This operation cannot be undone. Warning: Assessment items that reference this stimulus may be affected. Consider checking for references before deletion.

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
  await qti.stimulusManagement.deleteStimulus({
    identifier: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { QtiCore } from "qti/core.js";
import { stimulusManagementDeleteStimulus } from "qti/funcs/stimulusManagementDeleteStimulus.js";

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
  const res = await stimulusManagementDeleteStimulus(qti, {
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("stimulusManagementDeleteStimulus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteStimulusRequest](../../models/operations/deletestimulusrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.DeleteStimulusNotFoundError       | 404                                      | application/json                         |
| errors.DeleteStimulusInternalServerError | 500                                      | application/json                         |
| errors.QtiDefaultError                   | 4XX, 5XX                                 | \*/\*                                    |