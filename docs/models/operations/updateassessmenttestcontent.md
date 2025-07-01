# UpdateAssessmentTestContent

Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.

## Example Usage

```typescript
import { UpdateAssessmentTestContent } from "qti/models/operations";

let value: UpdateAssessmentTestContent = {
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `qtiAssessmentTest`                                                                                                  | [operations.UpdateAssessmentTestQtiAssessmentTest](../../models/operations/updateassessmenttestqtiassessmenttest.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |