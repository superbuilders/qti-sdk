# RemoveAssessmentItemRequest

## Example Usage

```typescript
import { RemoveAssessmentItemRequest } from "qti/models/operations";

let value: RemoveAssessmentItemRequest = {
  assessmentTestIdentifier: "<value>",
  testPartIdentifier: "<value>",
  identifier: "<value>",
  itemIdentifier: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `assessmentTestIdentifier`                                                        | *string*                                                                          | :heavy_check_mark:                                                                | The unique identifier of the root assessment test                                 |
| `testPartIdentifier`                                                              | *string*                                                                          | :heavy_check_mark:                                                                | The unique identifier of the parent test part                                     |
| `identifier`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | The unique identifier of the target section                                       |
| `itemIdentifier`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | The unique identifier of the assessment item reference to remove from the section |