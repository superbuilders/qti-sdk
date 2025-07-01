# QtiAssessmentItemRequest

## Example Usage

```typescript
import { QtiAssessmentItemRequest } from "qti/models/operations";

let value: QtiAssessmentItemRequest = {
  attributes: {
    xmlns: "<value>",
    xmlnsXsi: "<value>",
    xsiSchemaLocation: "<value>",
    identifier: "<value>",
    title: "<value>",
    adaptive: "<value>",
    timeDependent: "<value>",
  },
  qtiResponseDeclaration: [
    {
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
    },
  ],
  qtiOutcomeDeclaration: [
    {
      attributes: {
        identifier: "<value>",
        cardinality: "<value>",
        baseType: "<value>",
      },
    },
  ],
  qtiAssessmentStimulusRef: {
    attributes: {
      identifier: "<value>",
      href: "<value>",
      title: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                 | [operations.AttributesRequest](../../models/operations/attributesrequest.md)                                                                 | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `qtiResponseDeclaration`                                                                                                                     | [operations.QtiResponseDeclarationRequest](../../models/operations/qtiresponsedeclarationrequest.md)[]                                       | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `qtiOutcomeDeclaration`                                                                                                                      | [operations.UpdateAssessmentItemQtiOutcomeDeclarationRequest](../../models/operations/updateassessmentitemqtioutcomedeclarationrequest.md)[] | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `qtiAssessmentStimulusRef`                                                                                                                   | [operations.QtiAssessmentStimulusRefRequest](../../models/operations/qtiassessmentstimulusrefrequest.md)                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `qtiItemBody`                                                                                                                                | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `qtiResponseProcessing`                                                                                                                      | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |