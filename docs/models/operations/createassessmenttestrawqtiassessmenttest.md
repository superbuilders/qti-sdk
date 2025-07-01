# CreateAssessmentTestRawQtiAssessmentTest

## Example Usage

```typescript
import { CreateAssessmentTestRawQtiAssessmentTest } from "qti/models/operations";

let value: CreateAssessmentTestRawQtiAssessmentTest = {
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
| `attributes`                                                                                                                                                           | [operations.CreateAssessmentTestRawAttributes](../../models/operations/createassessmenttestrawattributes.md)                                                           | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `qtiOutcomeDeclaration`                                                                                                                                                | [operations.CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration](../../models/operations/createassessmenttestrawqtiassessmenttestqtioutcomedeclaration.md)[] | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `qtiTestPart`                                                                                                                                                          | [operations.CreateAssessmentTestRawQtiAssessmentTestQtiTestPart](../../models/operations/createassessmenttestrawqtiassessmenttestqtitestpart.md)[]                     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |