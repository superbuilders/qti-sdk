# CreateSectionRequest

## Example Usage

```typescript
import { CreateSectionRequest } from "qti/models/operations";

let value: CreateSectionRequest = {
  assessmentTestIdentifier: "<value>",
  testPartIdentifier: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `assessmentTestIdentifier`                | *string*                                  | :heavy_check_mark:                        | Root assessment test identifier           |
| `testPartIdentifier`                      | *string*                                  | :heavy_check_mark:                        | Parent test part identifier               |
| `section`                                 | [models.Section](../../models/section.md) | :heavy_check_mark:                        | The section to create                     |