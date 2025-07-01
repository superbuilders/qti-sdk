# CreateAssessmentTestRawQtiAssessmentTestQtiTestPart

## Example Usage

```typescript
import { CreateAssessmentTestRawQtiAssessmentTestQtiTestPart } from "qti/models/operations";

let value: CreateAssessmentTestRawQtiAssessmentTestQtiTestPart = {
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

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                                         | [operations.CreateAssessmentTestRawQtiTestPartAttributes](../../models/operations/createassessmenttestrawqtitestpartattributes.md)                                   | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `qtiAssessmentSection`                                                                                                                                               | [operations.CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentSection](../../models/operations/createassessmenttestrawqtiassessmenttestqtiassessmentsection.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |