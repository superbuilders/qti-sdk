# UpdateAssessmentItemRequest

## Example Usage

```typescript
import { UpdateAssessmentItemRequest } from "qti/models/operations";

let value: UpdateAssessmentItemRequest = {
  identifier: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The unique identifier of the assessment item to update                                                              |
| `requestBody`                                                                                                       | [operations.UpdateAssessmentItemRequestBody](../../models/operations/updateassessmentitemrequestbody.md)            | :heavy_check_mark:                                                                                                  | The updated assessment item content, interactions, and configuration. Can be provided in either XML or JSON format. |