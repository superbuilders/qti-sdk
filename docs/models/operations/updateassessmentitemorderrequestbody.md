# UpdateAssessmentItemOrderRequestBody

Update the presentation order of assessment item references within a section. All specified items must exist in the section on the service provider.

## Example Usage

```typescript
import { UpdateAssessmentItemOrderRequestBody } from "qti/models/operations";

let value: UpdateAssessmentItemOrderRequestBody = {
  items: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                | [operations.UpdateAssessmentItemOrderItem](../../models/operations/updateassessmentitemorderitem.md)[] | :heavy_check_mark:                                                                                     | Array of assessment item identifiers with their updated sequence positions.                            |