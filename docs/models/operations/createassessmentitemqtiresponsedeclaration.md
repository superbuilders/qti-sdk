# CreateAssessmentItemQtiResponseDeclaration

## Example Usage

```typescript
import { CreateAssessmentItemQtiResponseDeclaration } from "qti/models/operations";

let value: CreateAssessmentItemQtiResponseDeclaration = {
  attributes: {
    identifier: "<value>",
    cardinality: "<value>",
    baseType: "<value>",
  },
  qtiCorrectResponse: {
    qtiValue: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                       | [operations.CreateAssessmentItemQtiResponseDeclarationAttributes](../../models/operations/createassessmentitemqtiresponsedeclarationattributes.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `qtiCorrectResponse`                                                                                                                               | [operations.CreateAssessmentItemQtiCorrectResponse](../../models/operations/createassessmentitemqticorrectresponse.md)                             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |