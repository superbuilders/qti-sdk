# GetAssessmentItemQtiResponseDeclaration

## Example Usage

```typescript
import { GetAssessmentItemQtiResponseDeclaration } from "qti/models/operations";

let value: GetAssessmentItemQtiResponseDeclaration = {
  attributes: {
    identifier: "<value>",
    cardinality: "<value>",
    baseType: "<value>",
  },
  qtiCorrectResponse: {
    qtiValue: [],
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                 | [operations.GetAssessmentItemQtiResponseDeclarationAttributes](../../models/operations/getassessmentitemqtiresponsedeclarationattributes.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `qtiCorrectResponse`                                                                                                                         | [operations.GetAssessmentItemQtiCorrectResponse](../../models/operations/getassessmentitemqticorrectresponse.md)                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |