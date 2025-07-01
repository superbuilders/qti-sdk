# CreateTestPartContent

## Example Usage

```typescript
import { CreateTestPartContent } from "qti/models/operations";

let value: CreateTestPartContent = {
  qtiTestPart: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `qtiTestPart`                                                                                | [operations.CreateTestPartQtiTestPart](../../models/operations/createtestpartqtitestpart.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |