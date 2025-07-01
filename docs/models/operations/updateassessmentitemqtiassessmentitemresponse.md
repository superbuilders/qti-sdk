# UpdateAssessmentItemQtiAssessmentItemResponse

## Example Usage

```typescript
import { UpdateAssessmentItemQtiAssessmentItemResponse } from "qti/models/operations";

let value: UpdateAssessmentItemQtiAssessmentItemResponse = {
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

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                       | [operations.UpdateAssessmentItemAttributesResponse](../../models/operations/updateassessmentitemattributesresponse.md)                             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `qtiResponseDeclaration`                                                                                                                           | [operations.UpdateAssessmentItemQtiResponseDeclarationResponse](../../models/operations/updateassessmentitemqtiresponsedeclarationresponse.md)[]   | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `qtiOutcomeDeclaration`                                                                                                                            | [operations.UpdateAssessmentItemQtiOutcomeDeclarationResponse](../../models/operations/updateassessmentitemqtioutcomedeclarationresponse.md)[]     | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `qtiAssessmentStimulusRef`                                                                                                                         | [operations.UpdateAssessmentItemQtiAssessmentStimulusRefResponse](../../models/operations/updateassessmentitemqtiassessmentstimulusrefresponse.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `qtiItemBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `qtiResponseProcessing`                                                                                                                            | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |