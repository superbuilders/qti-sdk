# CreateAssessmentTestQtiAssessmentTestQtiTestPart

## Example Usage

```typescript
import { CreateAssessmentTestQtiAssessmentTestQtiTestPart } from "qti/models/operations";

let value: CreateAssessmentTestQtiAssessmentTestQtiTestPart = {
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

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                                   | [operations.CreateAssessmentTestQtiTestPartAttributes](../../models/operations/createassessmenttestqtitestpartattributes.md)                                   | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `qtiAssessmentSection`                                                                                                                                         | [operations.CreateAssessmentTestQtiAssessmentTestQtiAssessmentSection](../../models/operations/createassessmenttestqtiassessmenttestqtiassessmentsection.md)[] | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |