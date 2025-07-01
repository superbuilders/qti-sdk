# SearchAssessmentTestsContent

Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.

## Example Usage

```typescript
import { SearchAssessmentTestsContent } from "qti/models/operations";

let value: SearchAssessmentTestsContent = {
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
        qtiAssessmentSection: [],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `qtiAssessmentTest`                                                                                                    | [operations.SearchAssessmentTestsQtiAssessmentTest](../../models/operations/searchassessmenttestsqtiassessmenttest.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |