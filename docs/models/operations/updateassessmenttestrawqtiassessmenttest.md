# UpdateAssessmentTestRawQtiAssessmentTest

## Example Usage

```typescript
import { UpdateAssessmentTestRawQtiAssessmentTest } from "qti/models/operations";

let value: UpdateAssessmentTestRawQtiAssessmentTest = {
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
  qtiTestPart: [],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                                                                           | [operations.UpdateAssessmentTestRawAttributes](../../models/operations/updateassessmenttestrawattributes.md)                                                           | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `qtiOutcomeDeclaration`                                                                                                                                                | [operations.UpdateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration](../../models/operations/updateassessmenttestrawqtiassessmenttestqtioutcomedeclaration.md)[] | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `qtiTestPart`                                                                                                                                                          | [operations.UpdateAssessmentTestRawQtiAssessmentTestQtiTestPart](../../models/operations/updateassessmenttestrawqtiassessmenttestqtitestpart.md)[]                     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |