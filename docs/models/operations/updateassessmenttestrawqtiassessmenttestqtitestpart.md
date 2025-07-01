# UpdateAssessmentTestRawQtiAssessmentTestQtiTestPart

## Example Usage

```typescript
import { UpdateAssessmentTestRawQtiAssessmentTestQtiTestPart } from "qti/models/operations";

let value: UpdateAssessmentTestRawQtiAssessmentTestQtiTestPart = {
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
| `attributes`                                                                                                                                                         | [operations.UpdateAssessmentTestRawQtiTestPartAttributes](../../models/operations/updateassessmenttestrawqtitestpartattributes.md)                                   | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `qtiAssessmentSection`                                                                                                                                               | [operations.UpdateAssessmentTestRawQtiAssessmentTestQtiAssessmentSection](../../models/operations/updateassessmenttestrawqtiassessmenttestqtiassessmentsection.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |