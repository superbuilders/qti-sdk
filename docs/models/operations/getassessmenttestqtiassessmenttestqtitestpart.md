# GetAssessmentTestQtiAssessmentTestQtiTestPart

## Example Usage

```typescript
import { GetAssessmentTestQtiAssessmentTestQtiTestPart } from "qti/models/operations";

let value: GetAssessmentTestQtiAssessmentTestQtiTestPart = {
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
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                             | [operations.GetAssessmentTestQtiTestPartAttributes](../../models/operations/getassessmenttestqtitestpartattributes.md)                                   | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `qtiAssessmentSection`                                                                                                                                   | [operations.GetAssessmentTestQtiAssessmentTestQtiAssessmentSection](../../models/operations/getassessmenttestqtiassessmenttestqtiassessmentsection.md)[] | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |