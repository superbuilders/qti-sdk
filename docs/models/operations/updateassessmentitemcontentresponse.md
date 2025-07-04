# UpdateAssessmentItemContentResponse

Parsed XML content generated by the service provider. For production use, rawXml is recommended over this parsed structure.

## Example Usage

```typescript
import { UpdateAssessmentItemContentResponse } from "qti/models/operations";

let value: UpdateAssessmentItemContentResponse = {
  qtiAssessmentItem: {
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
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `qtiAssessmentItem`                                                                                                                  | [operations.UpdateAssessmentItemQtiAssessmentItemResponse](../../models/operations/updateassessmentitemqtiassessmentitemresponse.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |