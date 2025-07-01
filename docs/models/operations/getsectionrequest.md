# GetSectionRequest

## Example Usage

```typescript
import { GetSectionRequest } from "qti/models/operations";

let value: GetSectionRequest = {
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