# UpdateAssessmentItemOrderItem

## Example Usage

```typescript
import { UpdateAssessmentItemOrderItem } from "qti/models/operations";

let value: UpdateAssessmentItemOrderItem = {
  identifier: "<value>",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                                                                      | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | Unique identifier for the entity on the service provider.                                                                                         |
| `href`                                                                                                                                            | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | URI reference to the assessment item resource location on the service provider                                                                    |
| `sequence`                                                                                                                                        | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Defines the sequential order of this item within its parent section. Must be a positive integer that determines presentation order to candidates. |