# UpdateAssessmentItemOrderRequest

## Example Usage

```typescript
import { UpdateAssessmentItemOrderRequest } from "qti/models/operations";

let value: UpdateAssessmentItemOrderRequest = {
  assessmentTestIdentifier: "<value>",
  testPartIdentifier: "<value>",
  identifier: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `assessmentTestIdentifier`                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier of the root assessment test                                                                  |
| `testPartIdentifier`                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier of the parent test part                                                                      |
| `identifier`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier of the target section containing the items to reorder                                        |
| `requestBody`                                                                                                      | [operations.UpdateAssessmentItemOrderRequestBody](../../models/operations/updateassessmentitemorderrequestbody.md) | :heavy_check_mark:                                                                                                 | Array of assessment item references in the desired order                                                           |