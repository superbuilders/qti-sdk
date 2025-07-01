# AddAssessmentItemRequest

## Example Usage

```typescript
import { AddAssessmentItemRequest } from "qti/models/operations";

let value: AddAssessmentItemRequest = {
  assessmentTestIdentifier: "<value>",
  testPartIdentifier: "<value>",
  identifier: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `assessmentTestIdentifier`                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | Root assessment test identifier                                                                    |
| `testPartIdentifier`                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | Parent test part identifier                                                                        |
| `identifier`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | Section identifier                                                                                 |
| `requestBody`                                                                                      | [operations.AddAssessmentItemRequestBody](../../models/operations/addassessmentitemrequestbody.md) | :heavy_check_mark:                                                                                 | The assessment item identifier to add to the section                                               |