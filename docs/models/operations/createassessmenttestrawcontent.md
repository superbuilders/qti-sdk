# CreateAssessmentTestRawContent

Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.

## Example Usage

```typescript
import { CreateAssessmentTestRawContent } from "qti/models/operations";

let value: CreateAssessmentTestRawContent = {
  qtiAssessmentTest: {
    attributes: {
      xmlns: "<value>",
      xmlnsXsi: "<value>",
      xsiSchemaLocation: "<value>",
      identifier: "<value>",
      title: "<value>",
      toolName: "<value>",
      toolVersion: "<value>",
    },
    qtiOutcomeDeclaration: [
      {
        attributes: {
          identifier: "<value>",
          cardinality: "<value>",
          baseType: "<value>",
        },
      },
    ],
    qtiTestPart: [
      {
        attributes: {
          identifier: "<value>",
          navigationMode: "<value>",
          submissionMode: "<value>",
        },
        qtiAssessmentSection: [],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `qtiAssessmentTest`                                                                                                        | [operations.CreateAssessmentTestRawQtiAssessmentTest](../../models/operations/createassessmenttestrawqtiassessmenttest.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |