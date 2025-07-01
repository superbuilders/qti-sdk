# QtiResponseDeclarationRequest

## Example Usage

```typescript
import { QtiResponseDeclarationRequest } from "qti/models/operations";

let value: QtiResponseDeclarationRequest = {
  attributes: {
    identifier: "<value>",
    cardinality: "<value>",
    baseType: "<value>",
  },
  qtiCorrectResponse: {
    qtiValue: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `attributes`                                                                                                             | [operations.QtiResponseDeclarationAttributesRequest](../../models/operations/qtiresponsedeclarationattributesrequest.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `qtiCorrectResponse`                                                                                                     | [operations.QtiCorrectResponseRequest](../../models/operations/qticorrectresponserequest.md)                             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |