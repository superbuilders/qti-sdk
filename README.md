# qti

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *qti* API.

<div align="left">
    <a href="https://www.npmjs.com/package/@superbuilders/qti"><img src="https://img.shields.io/npm/v/@superbuilders/qti?style=for-the-badge&logo=npm&logoColor=white" /></a>
    <a href="https://www.npmjs.com/package/@superbuilders/qti"><img src="https://img.shields.io/npm/dt/@superbuilders/qti?style=for-the-badge&logo=npm&logoColor=white" /></a>
    <a href="https://www.speakeasy.com/?utm_source=qti&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/emu-farm/timeback). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

QTI API: A robust assessment engine implementing the QTI 3.0 specification, designed for creating, managing, and delivering educational assessments.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [qti](#qti)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Qti": {
      "command": "npx",
      "args": [
        "-y", "--package", "qti",
        "--",
        "mcp", "start",
        "--client-id", "...",
        "--client-secret", "...",
        "--token-url", "...",
        "--mcp", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Qti": {
      "command": "npx",
      "args": [
        "-y", "--package", "qti",
        "--",
        "mcp", "start",
        "--client-id", "...",
        "--client-secret", "...",
        "--token-url", "...",
        "--mcp", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package qti -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name     | Type   | Scheme       | Environment Variable |
| -------- | ------ | ------------ | -------------------- |
| `oAuth2` | oauth2 | OAuth2 token | `QTI_O_AUTH2`        |
| `mcp`    | oauth2 | OAuth2 token | `QTI_MCP`            |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [assessmentItemManagement](docs/sdks/assessmentitemmanagement/README.md)

* [searchAssessmentItems](docs/sdks/assessmentitemmanagement/README.md#searchassessmentitems) - Search and filter assessment items
* [createAssessmentItem](docs/sdks/assessmentitemmanagement/README.md#createassessmentitem) - Create a new assessment item
* [getAssessmentItem](docs/sdks/assessmentitemmanagement/README.md#getassessmentitem) - Get an assessment item with complete question content
* [updateAssessmentItem](docs/sdks/assessmentitemmanagement/README.md#updateassessmentitem) - Update an assessment item's content and configuration
* [deleteAssessmentItem](docs/sdks/assessmentitemmanagement/README.md#deleteassessmentitem) - Delete an assessment item

### [assessmentTestManagement](docs/sdks/assessmenttestmanagement/README.md)

* [searchAssessmentTests](docs/sdks/assessmenttestmanagement/README.md#searchassessmenttests) - Search and filter assessment tests
* [createAssessmentTest](docs/sdks/assessmenttestmanagement/README.md#createassessmenttest) - Create a new assessment test
* [createAssessmentTestRaw](docs/sdks/assessmenttestmanagement/README.md#createassessmenttestraw) - Create a new assessment test
* [getAssessmentTest](docs/sdks/assessmenttestmanagement/README.md#getassessmenttest) - Get a complete assessment test with full structure
* [updateAssessmentTest](docs/sdks/assessmenttestmanagement/README.md#updateassessmenttest) - Update an entire assessment test
* [updateAssessmentTestRaw](docs/sdks/assessmenttestmanagement/README.md#updateassessmenttestraw) - Update an entire assessment test
* [deleteAssessmentTest](docs/sdks/assessmenttestmanagement/README.md#deleteassessmenttest) - Delete an assessment test
* [getAllQuestions](docs/sdks/assessmenttestmanagement/README.md#getallquestions) - Get all assessment items referenced by an assessment test
* [updateAssessmentTestMetadata](docs/sdks/assessmenttestmanagement/README.md#updateassessmenttestmetadata) - Update assessment test metadata only


### [sectionManagement](docs/sdks/sectionmanagement/README.md)

* [searchSections](docs/sdks/sectionmanagement/README.md#searchsections) - Search sections within a test part
* [createSection](docs/sdks/sectionmanagement/README.md#createsection) - Create a new section in a test part
* [getSection](docs/sdks/sectionmanagement/README.md#getsection) - Get a section with all its assessment item references
* [updateSection](docs/sdks/sectionmanagement/README.md#updatesection) - Update a section's configuration and item references
* [deleteSection](docs/sdks/sectionmanagement/README.md#deletesection) - Delete a section and its item references
* [addAssessmentItem](docs/sdks/sectionmanagement/README.md#addassessmentitem) - Add an assessment item reference to a section
* [removeAssessmentItem](docs/sdks/sectionmanagement/README.md#removeassessmentitem) - Remove an assessment item reference from a section
* [updateAssessmentItemOrder](docs/sdks/sectionmanagement/README.md#updateassessmentitemorder) - Reorder assessment items within a section

### [stimulusManagement](docs/sdks/stimulusmanagement/README.md)

* [searchStimuli](docs/sdks/stimulusmanagement/README.md#searchstimuli) - Search and filter stimuli
* [createStimulus](docs/sdks/stimulusmanagement/README.md#createstimulus) - Create a new stimulus
* [getStimulus](docs/sdks/stimulusmanagement/README.md#getstimulus) - Get a stimulus with its complete content
* [updateStimulus](docs/sdks/stimulusmanagement/README.md#updatestimulus) - Update a stimulus and its content
* [deleteStimulus](docs/sdks/stimulusmanagement/README.md#deletestimulus) - Delete a stimulus

### [testPartManagement](docs/sdks/testpartmanagement/README.md)

* [searchTestParts](docs/sdks/testpartmanagement/README.md#searchtestparts) - Search and filter test parts within an assessment test
* [createTestPart](docs/sdks/testpartmanagement/README.md#createtestpart) - Create a new test part in an assessment test
* [getTestPart](docs/sdks/testpartmanagement/README.md#gettestpart) - Get a specific test part with all its sections
* [updateTestPart](docs/sdks/testpartmanagement/README.md#updatetestpart) - Update a test part's configuration and sections
* [deleteTestPart](docs/sdks/testpartmanagement/README.md#deletetestpart) - Delete a test part and all its sections

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`assessmentItemManagementCreateAssessmentItem`](docs/sdks/assessmentitemmanagement/README.md#createassessmentitem) - Create a new assessment item
- [`assessmentItemManagementDeleteAssessmentItem`](docs/sdks/assessmentitemmanagement/README.md#deleteassessmentitem) - Delete an assessment item
- [`assessmentItemManagementGetAssessmentItem`](docs/sdks/assessmentitemmanagement/README.md#getassessmentitem) - Get an assessment item with complete question content
- [`assessmentItemManagementSearchAssessmentItems`](docs/sdks/assessmentitemmanagement/README.md#searchassessmentitems) - Search and filter assessment items
- [`assessmentItemManagementUpdateAssessmentItem`](docs/sdks/assessmentitemmanagement/README.md#updateassessmentitem) - Update an assessment item's content and configuration
- [`assessmentTestManagementCreateAssessmentTest`](docs/sdks/assessmenttestmanagement/README.md#createassessmenttest) - Create a new assessment test
- [`assessmentTestManagementCreateAssessmentTestRaw`](docs/sdks/assessmenttestmanagement/README.md#createassessmenttestraw) - Create a new assessment test
- [`assessmentTestManagementDeleteAssessmentTest`](docs/sdks/assessmenttestmanagement/README.md#deleteassessmenttest) - Delete an assessment test
- [`assessmentTestManagementGetAllQuestions`](docs/sdks/assessmenttestmanagement/README.md#getallquestions) - Get all assessment items referenced by an assessment test
- [`assessmentTestManagementGetAssessmentTest`](docs/sdks/assessmenttestmanagement/README.md#getassessmenttest) - Get a complete assessment test with full structure
- [`assessmentTestManagementSearchAssessmentTests`](docs/sdks/assessmenttestmanagement/README.md#searchassessmenttests) - Search and filter assessment tests
- [`assessmentTestManagementUpdateAssessmentTest`](docs/sdks/assessmenttestmanagement/README.md#updateassessmenttest) - Update an entire assessment test
- [`assessmentTestManagementUpdateAssessmentTestMetadata`](docs/sdks/assessmenttestmanagement/README.md#updateassessmenttestmetadata) - Update assessment test metadata only
- [`assessmentTestManagementUpdateAssessmentTestRaw`](docs/sdks/assessmenttestmanagement/README.md#updateassessmenttestraw) - Update an entire assessment test
- [`sectionManagementAddAssessmentItem`](docs/sdks/sectionmanagement/README.md#addassessmentitem) - Add an assessment item reference to a section
- [`sectionManagementCreateSection`](docs/sdks/sectionmanagement/README.md#createsection) - Create a new section in a test part
- [`sectionManagementDeleteSection`](docs/sdks/sectionmanagement/README.md#deletesection) - Delete a section and its item references
- [`sectionManagementGetSection`](docs/sdks/sectionmanagement/README.md#getsection) - Get a section with all its assessment item references
- [`sectionManagementRemoveAssessmentItem`](docs/sdks/sectionmanagement/README.md#removeassessmentitem) - Remove an assessment item reference from a section
- [`sectionManagementSearchSections`](docs/sdks/sectionmanagement/README.md#searchsections) - Search sections within a test part
- [`sectionManagementUpdateAssessmentItemOrder`](docs/sdks/sectionmanagement/README.md#updateassessmentitemorder) - Reorder assessment items within a section
- [`sectionManagementUpdateSection`](docs/sdks/sectionmanagement/README.md#updatesection) - Update a section's configuration and item references
- [`stimulusManagementCreateStimulus`](docs/sdks/stimulusmanagement/README.md#createstimulus) - Create a new stimulus
- [`stimulusManagementDeleteStimulus`](docs/sdks/stimulusmanagement/README.md#deletestimulus) - Delete a stimulus
- [`stimulusManagementGetStimulus`](docs/sdks/stimulusmanagement/README.md#getstimulus) - Get a stimulus with its complete content
- [`stimulusManagementSearchStimuli`](docs/sdks/stimulusmanagement/README.md#searchstimuli) - Search and filter stimuli
- [`stimulusManagementUpdateStimulus`](docs/sdks/stimulusmanagement/README.md#updatestimulus) - Update a stimulus and its content
- [`testPartManagementCreateTestPart`](docs/sdks/testpartmanagement/README.md#createtestpart) - Create a new test part in an assessment test
- [`testPartManagementDeleteTestPart`](docs/sdks/testpartmanagement/README.md#deletetestpart) - Delete a test part and all its sections
- [`testPartManagementGetTestPart`](docs/sdks/testpartmanagement/README.md#gettestpart) - Get a specific test part with all its sections
- [`testPartManagementSearchTestParts`](docs/sdks/testpartmanagement/README.md#searchtestparts) - Search and filter test parts within an assessment test
- [`testPartManagementUpdateTestPart`](docs/sdks/testpartmanagement/README.md#updatetestpart) - Update a test part's configuration and sections

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

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
  const result = await qti.assessmentTestManagement.createAssessmentTestRaw(
    bytesToStream(
      new TextEncoder().encode(
        "{\"identifier\":\"<value>\",\"title\":\"<value>\",\"qtiVersion\":\"3.0\",\"qti-test-part\":[]}",
      ),
    ),
  );

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Qti } from "qti";

const qti = new Qti({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`QtiError`](./src/models/errors/qtierror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Qti } from "qti";
import * as errors from "qti/models/errors";

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
  try {
    const result = await qti.stimulusManagement.searchStimuli({
      sort: "createdAt",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.QtiError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.SearchStimuliInternalServerError) {
        console.log(error.data$.error); // string
        console.log(error.data$.message); // string
        console.log(error.data$.eventId); // string
        console.log(error.data$.details); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`QtiError`](./src/models/errors/qtierror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (89)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`QtiError`](./src/models/errors/qtierror.ts)**:
* [`CreateStimulusBadRequestError`](docs/models/errors/createstimulusbadrequesterror.md): Invalid stimulus data. Status code `400`. Applicable to 1 of 32 methods.*
* [`UpdateStimulusBadRequestError`](docs/models/errors/updatestimulusbadrequesterror.md): Invalid stimulus data. Status code `400`. Applicable to 1 of 32 methods.*
* [`SearchAssessmentItemsBadRequestError`](docs/models/errors/searchassessmentitemsbadrequesterror.md): Validation failed. Status code `400`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentItemBadRequestError`](docs/models/errors/createassessmentitembadrequesterror.md): Invalid request body or stimulus not found. Status code `400`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentItemBadRequestError`](docs/models/errors/updateassessmentitembadrequesterror.md): Invalid request body or stimulus not found. Status code `400`. Applicable to 1 of 32 methods.*
* [`SearchAssessmentTestsBadRequestError`](docs/models/errors/searchassessmenttestsbadrequesterror.md): Invalid request parameters. Status code `400`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentTestBadRequestError`](docs/models/errors/createassessmenttestbadrequesterror.md): Invalid assessment test data. Status code `400`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentTestRawBadRequestError`](docs/models/errors/createassessmenttestrawbadrequesterror.md): Invalid assessment test data. Status code `400`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentTestMetadataBadRequestError`](docs/models/errors/updateassessmenttestmetadatabadrequesterror.md): Metadata is required and must be an object. Status code `400`. Applicable to 1 of 32 methods.*
* [`SearchTestPartsBadRequestError`](docs/models/errors/searchtestpartsbadrequesterror.md): Missing required parameters. Status code `400`. Applicable to 1 of 32 methods.*
* [`CreateTestPartBadRequestError`](docs/models/errors/createtestpartbadrequesterror.md): Missig required paramater or Invalid test part data. Status code `400`. Applicable to 1 of 32 methods.*
* [`UpdateTestPartBadRequestError`](docs/models/errors/updatetestpartbadrequesterror.md): Missing required parameters or invalid test part data. Status code `400`. Applicable to 1 of 32 methods.*
* [`SearchSectionsBadRequestError`](docs/models/errors/searchsectionsbadrequesterror.md): Missing required parameters. Status code `400`. Applicable to 1 of 32 methods.*
* [`CreateSectionBadRequestError`](docs/models/errors/createsectionbadrequesterror.md): Invalid request body or validation error. Status code `400`. Applicable to 1 of 32 methods.*
* [`GetSectionBadRequestError`](docs/models/errors/getsectionbadrequesterror.md): Missing required parameters. Status code `400`. Applicable to 1 of 32 methods.*
* [`UpdateSectionBadRequestError`](docs/models/errors/updatesectionbadrequesterror.md): Missing required parameters or invalid section data. Status code `400`. Applicable to 1 of 32 methods.*
* [`AddAssessmentItemBadRequestError`](docs/models/errors/addassessmentitembadrequesterror.md): Missing assessment item identifier or item already exists in section. Status code `400`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentItemOrderBadRequestError`](docs/models/errors/updateassessmentitemorderbadrequesterror.md): Invalid items array or validation error. Status code `400`. Applicable to 1 of 32 methods.*
* [`GetStimulusNotFoundError`](docs/models/errors/getstimulusnotfounderror.md): Stimulus not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`UpdateStimulusNotFoundError`](docs/models/errors/updatestimulusnotfounderror.md): Stimulus not found or Failed to update Stimulus. Status code `404`. Applicable to 1 of 32 methods.*
* [`DeleteStimulusNotFoundError`](docs/models/errors/deletestimulusnotfounderror.md): Stimulus not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`GetAssessmentItemNotFoundError`](docs/models/errors/getassessmentitemnotfounderror.md): Item not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentItemNotFoundError`](docs/models/errors/updateassessmentitemnotfounderror.md): Item not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`DeleteAssessmentItemNotFoundError`](docs/models/errors/deleteassessmentitemnotfounderror.md): Item not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`GetAssessmentTestNotFoundError`](docs/models/errors/getassessmenttestnotfounderror.md): Assessment test not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentTestNotFoundError`](docs/models/errors/updateassessmenttestnotfounderror.md): Assessment test not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentTestRawNotFoundError`](docs/models/errors/updateassessmenttestrawnotfounderror.md): Assessment test not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`DeleteAssessmentTestNotFoundError`](docs/models/errors/deleteassessmenttestnotfounderror.md): Assessment test not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`GetAllQuestionsNotFoundError`](docs/models/errors/getallquestionsnotfounderror.md): Assessment test not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentTestMetadataNotFoundError`](docs/models/errors/updateassessmenttestmetadatanotfounderror.md): Assessment test not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`SearchTestPartsNotFoundError`](docs/models/errors/searchtestpartsnotfounderror.md): Assessment test not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`CreateTestPartNotFoundError`](docs/models/errors/createtestpartnotfounderror.md): Assessment test not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`GetTestPartNotFoundError`](docs/models/errors/gettestpartnotfounderror.md): Assessment test or test part not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`UpdateTestPartNotFoundError`](docs/models/errors/updatetestpartnotfounderror.md): Assessment test or test part not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`DeleteTestPartNotFoundError`](docs/models/errors/deletetestpartnotfounderror.md): Assessment test or test part not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`SearchSectionsNotFoundError`](docs/models/errors/searchsectionsnotfounderror.md): Assessment test or test part not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`CreateSectionNotFoundError`](docs/models/errors/createsectionnotfounderror.md): Assessment test or test part not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`GetSectionNotFoundError`](docs/models/errors/getsectionnotfounderror.md): Assessment test, test part, or section not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`UpdateSectionNotFoundError`](docs/models/errors/updatesectionnotfounderror.md): Assessment test, test part, or section not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`DeleteSectionNotFoundError`](docs/models/errors/deletesectionnotfounderror.md): Assessment test, test part, or section not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`AddAssessmentItemNotFoundError`](docs/models/errors/addassessmentitemnotfounderror.md): Assessment test, test part, section, or assessment item not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`RemoveAssessmentItemNotFoundError`](docs/models/errors/removeassessmentitemnotfounderror.md): Assessment test, test part, section, or item reference not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentItemOrderNotFoundError`](docs/models/errors/updateassessmentitemordernotfounderror.md): Assessment test, test part, section, or item references not found. Status code `404`. Applicable to 1 of 32 methods.*
* [`CreateStimulusConflictError`](docs/models/errors/createstimulusconflicterror.md): Stimulus with this identifier already exists. Status code `409`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentItemConflictError`](docs/models/errors/createassessmentitemconflicterror.md): Assessment item with this identifier already exists. Status code `409`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentTestConflictError`](docs/models/errors/createassessmenttestconflicterror.md): Assessment test with this identifier already exists. Status code `409`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentTestRawConflictError`](docs/models/errors/createassessmenttestrawconflicterror.md): Assessment test with this identifier already exists. Status code `409`. Applicable to 1 of 32 methods.*
* [`CreateTestPartConflictError`](docs/models/errors/createtestpartconflicterror.md): Test part with this identifier already exists. Status code `409`. Applicable to 1 of 32 methods.*
* [`SearchStimuliInternalServerError`](docs/models/errors/searchstimuliinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`CreateStimulusInternalServerError`](docs/models/errors/createstimulusinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`GetStimulusInternalServerError`](docs/models/errors/getstimulusinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateStimulusInternalServerError`](docs/models/errors/updatestimulusinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`DeleteStimulusInternalServerError`](docs/models/errors/deletestimulusinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`SearchAssessmentItemsInternalServerError`](docs/models/errors/searchassessmentitemsinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentItemInternalServerError`](docs/models/errors/createassessmentiteminternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`GetAssessmentItemInternalServerError`](docs/models/errors/getassessmentiteminternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentItemInternalServerError`](docs/models/errors/updateassessmentiteminternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`DeleteAssessmentItemInternalServerError`](docs/models/errors/deleteassessmentiteminternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`SearchAssessmentTestsInternalServerError`](docs/models/errors/searchassessmenttestsinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentTestInternalServerError`](docs/models/errors/createassessmenttestinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`CreateAssessmentTestRawInternalServerError`](docs/models/errors/createassessmenttestrawinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`GetAssessmentTestInternalServerError`](docs/models/errors/getassessmenttestinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentTestInternalServerError`](docs/models/errors/updateassessmenttestinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentTestRawInternalServerError`](docs/models/errors/updateassessmenttestrawinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`DeleteAssessmentTestInternalServerError`](docs/models/errors/deleteassessmenttestinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`GetAllQuestionsInternalServerError`](docs/models/errors/getallquestionsinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentTestMetadataInternalServerError`](docs/models/errors/updateassessmenttestmetadatainternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`SearchTestPartsInternalServerError`](docs/models/errors/searchtestpartsinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`CreateTestPartInternalServerError`](docs/models/errors/createtestpartinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`GetTestPartInternalServerError`](docs/models/errors/gettestpartinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateTestPartInternalServerError`](docs/models/errors/updatetestpartinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`DeleteTestPartInternalServerError`](docs/models/errors/deletetestpartinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`SearchSectionsInternalServerError`](docs/models/errors/searchsectionsinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`CreateSectionInternalServerError`](docs/models/errors/createsectioninternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`GetSectionInternalServerError`](docs/models/errors/getsectioninternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateSectionInternalServerError`](docs/models/errors/updatesectioninternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`DeleteSectionInternalServerError`](docs/models/errors/deletesectioninternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`AddAssessmentItemInternalServerError`](docs/models/errors/addassessmentiteminternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`RemoveAssessmentItemInternalServerError`](docs/models/errors/removeassessmentiteminternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateAssessmentItemOrderInternalServerError`](docs/models/errors/updateassessmentitemorderinternalservererror.md): Internal server error response. Status code `500`. Applicable to 1 of 32 methods.*
* [`UpdateTestPartNotImplementedError`](docs/models/errors/updatetestpartnotimplementederror.md): XML update not supported yet. Status code `501`. Applicable to 1 of 32 methods.*
* [`CreateSectionNotImplementedError`](docs/models/errors/createsectionnotimplementederror.md): XML format not supported. Status code `501`. Applicable to 1 of 32 methods.*
* [`UpdateSectionNotImplementedError`](docs/models/errors/updatesectionnotimplementederror.md): XML format not supported. Status code `501`. Applicable to 1 of 32 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Qti } from "qti";

const qti = new Qti({
  serverURL: "https://qti.alpha-1edtech.com/api",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Qti } from "qti";
import { HTTPClient } from "qti/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Qti({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Qti } from "qti";

const sdk = new Qti({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `QTI_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=qti&utm_campaign=typescript)
