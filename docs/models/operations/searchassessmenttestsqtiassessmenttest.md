# SearchAssessmentTestsQtiAssessmentTest

## Example Usage

```typescript
import { SearchAssessmentTestsQtiAssessmentTest } from "qti/models/operations";

let value: SearchAssessmentTestsQtiAssessmentTest = {
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
      qtiAssessmentSection: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `attributes`                                                                                                                                                       | [operations.SearchAssessmentTestsAttributes](../../models/operations/searchassessmenttestsattributes.md)                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `qtiOutcomeDeclaration`                                                                                                                                            | [operations.SearchAssessmentTestsQtiAssessmentTestQtiOutcomeDeclaration](../../models/operations/searchassessmenttestsqtiassessmenttestqtioutcomedeclaration.md)[] | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `qtiTestPart`                                                                                                                                                      | [operations.SearchAssessmentTestsQtiAssessmentTestQtiTestPart](../../models/operations/searchassessmenttestsqtiassessmenttestqtitestpart.md)[]                     | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |