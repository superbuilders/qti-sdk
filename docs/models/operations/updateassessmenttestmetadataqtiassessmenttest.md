# UpdateAssessmentTestMetadataQtiAssessmentTest

## Example Usage

```typescript
import { UpdateAssessmentTestMetadataQtiAssessmentTest } from "qti/models/operations";

let value: UpdateAssessmentTestMetadataQtiAssessmentTest = {
  attributes: {
    xmlns: "<value>",
    xmlnsXsi: "<value>",
    xsiSchemaLocation: "<value>",
    identifier: "<value>",
    title: "<value>",
    toolName: "<value>",
    toolVersion: "<value>",
  },
  qtiOutcomeDeclaration: [
    {
      attributes: {
        identifier: "<value>",
        cardinality: "<value>",
        baseType: "<value>",
      },
    },
  ],
  qtiTestPart: [
    {
      attributes: {
        identifier: "<value>",
        navigationMode: "<value>",
        submissionMode: "<value>",
      },
      qtiAssessmentSection: [
        {
          attributes: {
            identifier: "<value>",
            title: "<value>",
            visible: "<value>",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                                                     | [operations.UpdateAssessmentTestMetadataAttributes](../../models/operations/updateassessmenttestmetadataattributes.md)                                                           | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `qtiOutcomeDeclaration`                                                                                                                                                          | [operations.UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration](../../models/operations/updateassessmenttestmetadataqtiassessmenttestqtioutcomedeclaration.md)[] | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `qtiTestPart`                                                                                                                                                                    | [operations.UpdateAssessmentTestMetadataQtiAssessmentTestQtiTestPart](../../models/operations/updateassessmenttestmetadataqtiassessmenttestqtitestpart.md)[]                     | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |