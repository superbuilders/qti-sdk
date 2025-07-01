# UpdateAssessmentTestRequest

## Example Usage

```typescript
import { UpdateAssessmentTestRequest } from "qti/models/operations";

let value: UpdateAssessmentTestRequest = {
  identifier: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `identifier`                                            | *string*                                                | :heavy_check_mark:                                      | Assessment test identifier to update                    |
| `assessmentTest`                                        | [models.AssessmentTest](../../models/assessmenttest.md) | :heavy_check_mark:                                      | The assessment test to update                           |