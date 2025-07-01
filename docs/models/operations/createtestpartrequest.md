# CreateTestPartRequest

## Example Usage

```typescript
import { CreateTestPartRequest } from "qti/models/operations";

let value: CreateTestPartRequest = {
  assessmentTestIdentifier: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `assessmentTestIdentifier`                                                              | *string*                                                                                | :heavy_check_mark:                                                                      | The unique identifier of the parent assessment test where the test part will be created |
| `testPart`                                                                              | [models.TestPart](../../models/testpart.md)                                             | :heavy_check_mark:                                                                      | The test part to create                                                                 |