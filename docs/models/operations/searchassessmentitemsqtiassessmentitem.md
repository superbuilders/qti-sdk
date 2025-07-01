# SearchAssessmentItemsQtiAssessmentItem

## Example Usage

```typescript
import { SearchAssessmentItemsQtiAssessmentItem } from "qti/models/operations";

let value: SearchAssessmentItemsQtiAssessmentItem = {
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `attributes`                                                                                                                         | [operations.SearchAssessmentItemsAttributes](../../models/operations/searchassessmentitemsattributes.md)                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `qtiResponseDeclaration`                                                                                                             | [operations.SearchAssessmentItemsQtiResponseDeclaration](../../models/operations/searchassessmentitemsqtiresponsedeclaration.md)[]   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `qtiOutcomeDeclaration`                                                                                                              | [operations.SearchAssessmentItemsQtiOutcomeDeclaration](../../models/operations/searchassessmentitemsqtioutcomedeclaration.md)[]     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `qtiAssessmentStimulusRef`                                                                                                           | [operations.SearchAssessmentItemsQtiAssessmentStimulusRef](../../models/operations/searchassessmentitemsqtiassessmentstimulusref.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `qtiItemBody`                                                                                                                        | *any*                                                                                                                                | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `qtiResponseProcessing`                                                                                                              | *any*                                                                                                                                | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |