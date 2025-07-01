# GetAssessmentItemQtiAssessmentItem

## Example Usage

```typescript
import { GetAssessmentItemQtiAssessmentItem } from "qti/models/operations";

let value: GetAssessmentItemQtiAssessmentItem = {
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
        qtiValue: [],
      },
    },
  ],
  qtiOutcomeDeclaration: [],
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                 | [operations.GetAssessmentItemAttributes](../../models/operations/getassessmentitemattributes.md)                             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `qtiResponseDeclaration`                                                                                                     | [operations.GetAssessmentItemQtiResponseDeclaration](../../models/operations/getassessmentitemqtiresponsedeclaration.md)[]   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `qtiOutcomeDeclaration`                                                                                                      | [operations.GetAssessmentItemQtiOutcomeDeclaration](../../models/operations/getassessmentitemqtioutcomedeclaration.md)[]     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `qtiAssessmentStimulusRef`                                                                                                   | [operations.GetAssessmentItemQtiAssessmentStimulusRef](../../models/operations/getassessmentitemqtiassessmentstimulusref.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `qtiItemBody`                                                                                                                | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `qtiResponseProcessing`                                                                                                      | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |