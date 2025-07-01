# CreateAssessmentTestContent

Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.

## Example Usage

```typescript
import { CreateAssessmentTestContent } from "qti/models/operations";

let value: CreateAssessmentTestContent = {
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
    qtiTestPart: [],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `qtiAssessmentTest`                                                                                                  | [operations.CreateAssessmentTestQtiAssessmentTest](../../models/operations/createassessmenttestqtiassessmenttest.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |