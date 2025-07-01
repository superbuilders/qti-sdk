# CreateTestPartQtiTestPart

## Example Usage

```typescript
import { CreateTestPartQtiTestPart } from "qti/models/operations";

let value: CreateTestPartQtiTestPart = {
  attributes: {
    identifier: "<value>",
    navigationMode: "<value>",
    submissionMode: "<value>",
  },
  qtiAssessmentSection: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                     | [operations.CreateTestPartAttributes](../../models/operations/createtestpartattributes.md)                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `qtiAssessmentSection`                                                                                           | [operations.CreateTestPartQtiAssessmentSection](../../models/operations/createtestpartqtiassessmentsection.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |