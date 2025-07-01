# GetAllQuestionsQtiAssessmentItem

## Example Usage

```typescript
import { GetAllQuestionsQtiAssessmentItem } from "qti/models/operations";

let value: GetAllQuestionsQtiAssessmentItem = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `attributes`                                                                                                             | [operations.GetAllQuestionsAttributes](../../models/operations/getallquestionsattributes.md)                             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `qtiResponseDeclaration`                                                                                                 | [operations.GetAllQuestionsQtiResponseDeclaration](../../models/operations/getallquestionsqtiresponsedeclaration.md)[]   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `qtiOutcomeDeclaration`                                                                                                  | [operations.GetAllQuestionsQtiOutcomeDeclaration](../../models/operations/getallquestionsqtioutcomedeclaration.md)[]     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `qtiAssessmentStimulusRef`                                                                                               | [operations.GetAllQuestionsQtiAssessmentStimulusRef](../../models/operations/getallquestionsqtiassessmentstimulusref.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `qtiItemBody`                                                                                                            | *any*                                                                                                                    | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `qtiResponseProcessing`                                                                                                  | *any*                                                                                                                    | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |