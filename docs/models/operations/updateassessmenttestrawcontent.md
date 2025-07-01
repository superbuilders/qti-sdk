# UpdateAssessmentTestRawContent

Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.

## Example Usage

```typescript
import { UpdateAssessmentTestRawContent } from "qti/models/operations";

let value: UpdateAssessmentTestRawContent = {
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
    qtiTestPart: [],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `qtiAssessmentTest`                                                                                                        | [operations.UpdateAssessmentTestRawQtiAssessmentTest](../../models/operations/updateassessmenttestrawqtiassessmenttest.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |