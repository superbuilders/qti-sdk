# CreateAssessmentTestQtiAssessmentTest

## Example Usage

```typescript
import { CreateAssessmentTestQtiAssessmentTest } from "qti/models/operations";

let value: CreateAssessmentTestQtiAssessmentTest = {
  attributes: {
    xmlns: "<value>",
    xmlnsXsi: "<value>",
    xsiSchemaLocation: "<value>",
    identifier: "<value>",
    title: "<value>",
    toolName: "<value>",
    toolVersion: "<value>",
  },
  qtiOutcomeDeclaration: [],
  qtiTestPart: [],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                                     | [operations.CreateAssessmentTestAttributes](../../models/operations/createassessmenttestattributes.md)                                                           | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `qtiOutcomeDeclaration`                                                                                                                                          | [operations.CreateAssessmentTestQtiAssessmentTestQtiOutcomeDeclaration](../../models/operations/createassessmenttestqtiassessmenttestqtioutcomedeclaration.md)[] | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `qtiTestPart`                                                                                                                                                    | [operations.CreateAssessmentTestQtiAssessmentTestQtiTestPart](../../models/operations/createassessmenttestqtiassessmenttestqtitestpart.md)[]                     | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |