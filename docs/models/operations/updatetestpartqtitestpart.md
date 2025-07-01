# UpdateTestPartQtiTestPart

## Example Usage

```typescript
import { UpdateTestPartQtiTestPart } from "qti/models/operations";

let value: UpdateTestPartQtiTestPart = {
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
        required: "<value>",
        fixed: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                     | [operations.UpdateTestPartAttributes](../../models/operations/updatetestpartattributes.md)                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `qtiAssessmentSection`                                                                                           | [operations.UpdateTestPartQtiAssessmentSection](../../models/operations/updatetestpartqtiassessmentsection.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |