# UpdateAssessmentTestQtiAssessmentTest

## Example Usage

```typescript
import { UpdateAssessmentTestQtiAssessmentTest } from "qti/models/operations";

let value: UpdateAssessmentTestQtiAssessmentTest = {
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

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                                     | [operations.UpdateAssessmentTestAttributes](../../models/operations/updateassessmenttestattributes.md)                                                           | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `qtiOutcomeDeclaration`                                                                                                                                          | [operations.UpdateAssessmentTestQtiAssessmentTestQtiOutcomeDeclaration](../../models/operations/updateassessmenttestqtiassessmenttestqtioutcomedeclaration.md)[] | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `qtiTestPart`                                                                                                                                                    | [operations.UpdateAssessmentTestQtiAssessmentTestQtiTestPart](../../models/operations/updateassessmenttestqtiassessmenttestqtitestpart.md)[]                     | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |