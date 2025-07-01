# SearchAssessmentItemsInlineFeedback

Optional inline feedback configuration that sets an outcome variable based on another variable's value during response processing.

## Example Usage

```typescript
import { SearchAssessmentItemsInlineFeedback } from "qti/models/operations";

let value: SearchAssessmentItemsInlineFeedback = {
  outcomeIdentifier: "<value>",
  variableIdentifier: "<value>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `outcomeIdentifier`                                                                                         | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Identifier of the outcome variable to be set with the inline feedback value.                                |
| `variableIdentifier`                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Identifier of the variable whose value will be assigned to the outcome variable during response processing. |