# CreateAssessmentItemQtiAssessmentItem

## Example Usage

```typescript
import { CreateAssessmentItemQtiAssessmentItem } from "qti/models/operations";

let value: CreateAssessmentItemQtiAssessmentItem = {
  attributes: {
    xmlns: "<value>",
    xmlnsXsi: "<value>",
    xsiSchemaLocation: "<value>",
    identifier: "<value>",
    title: "<value>",
    adaptive: "<value>",
    timeDependent: "<value>",
  },
  qtiResponseDeclaration: [],
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                       | [operations.CreateAssessmentItemAttributes](../../models/operations/createassessmentitemattributes.md)                             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `qtiResponseDeclaration`                                                                                                           | [operations.CreateAssessmentItemQtiResponseDeclaration](../../models/operations/createassessmentitemqtiresponsedeclaration.md)[]   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `qtiOutcomeDeclaration`                                                                                                            | [operations.CreateAssessmentItemQtiOutcomeDeclaration](../../models/operations/createassessmentitemqtioutcomedeclaration.md)[]     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `qtiAssessmentStimulusRef`                                                                                                         | [operations.CreateAssessmentItemQtiAssessmentStimulusRef](../../models/operations/createassessmentitemqtiassessmentstimulusref.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `qtiItemBody`                                                                                                                      | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `qtiResponseProcessing`                                                                                                            | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |