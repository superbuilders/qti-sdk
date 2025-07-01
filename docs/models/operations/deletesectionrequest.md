# DeleteSectionRequest

## Example Usage

```typescript
import { DeleteSectionRequest } from "qti/models/operations";

let value: DeleteSectionRequest = {
  assessmentTestIdentifier: "<value>",
  testPartIdentifier: "<value>",
  identifier: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `assessmentTestIdentifier`      | *string*                        | :heavy_check_mark:              | Root assessment test identifier |
| `testPartIdentifier`            | *string*                        | :heavy_check_mark:              | Parent test part identifier     |
| `identifier`                    | *string*                        | :heavy_check_mark:              | Section identifier              |