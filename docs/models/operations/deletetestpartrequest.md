# DeleteTestPartRequest

## Example Usage

```typescript
import { DeleteTestPartRequest } from "qti/models/operations";

let value: DeleteTestPartRequest = {
  assessmentTestIdentifier: "<value>",
  identifier: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `assessmentTestIdentifier`                          | *string*                                            | :heavy_check_mark:                                  | The unique identifier of the parent assessment test |
| `identifier`                                        | *string*                                            | :heavy_check_mark:                                  | The unique identifier of the test part to delete    |