# UpdateAssessmentTestMetadataContent

Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.

## Example Usage

```typescript
import { UpdateAssessmentTestMetadataContent } from "qti/models/operations";

let value: UpdateAssessmentTestMetadataContent = {
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
    qtiOutcomeDeclaration: [],
    qtiTestPart: [
      {
        attributes: {
          identifier: "<value>",
          navigationMode: "<value>",
          submissionMode: "<value>",
        },
        qtiAssessmentSection: [
          {
            attributes: {
              identifier: "<value>",
              title: "<value>",
              visible: "<value>",
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `qtiAssessmentTest`                                                                                                                  | [operations.UpdateAssessmentTestMetadataQtiAssessmentTest](../../models/operations/updateassessmenttestmetadataqtiassessmenttest.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |