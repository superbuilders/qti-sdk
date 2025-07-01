# GetTestPartRequest

## Example Usage

```typescript
import { GetTestPartRequest } from "qti/models/operations";

let value: GetTestPartRequest = {
  assessmentTestIdentifier: "<value>",
  identifier: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `assessmentTestIdentifier`                          | *string*                                            | :heavy_check_mark:                                  | The unique identifier of the parent assessment test |
| `identifier`                                        | *string*                                            | :heavy_check_mark:                                  | The unique identifier of the test part to retrieve  |