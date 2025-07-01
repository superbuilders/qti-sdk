# UpdateTestPartRequest

## Example Usage

```typescript
import { UpdateTestPartRequest } from "qti/models/operations";

let value: UpdateTestPartRequest = {
  assessmentTestIdentifier: "<value>",
  identifier: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `assessmentTestIdentifier`                          | *string*                                            | :heavy_check_mark:                                  | The unique identifier of the parent assessment test |
| `identifier`                                        | *string*                                            | :heavy_check_mark:                                  | The unique identifier of the test part to update    |
| `testPart`                                          | [models.TestPart](../../models/testpart.md)         | :heavy_check_mark:                                  | The test part to update                             |