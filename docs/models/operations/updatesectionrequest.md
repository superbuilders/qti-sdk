# UpdateSectionRequest

## Example Usage

```typescript
import { UpdateSectionRequest } from "qti/models/operations";

let value: UpdateSectionRequest = {
  assessmentTestIdentifier: "<value>",
  testPartIdentifier: "<value>",
  identifier: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `assessmentTestIdentifier`                | *string*                                  | :heavy_check_mark:                        | Root assessment test identifier           |
| `testPartIdentifier`                      | *string*                                  | :heavy_check_mark:                        | Parent test part identifier               |
| `identifier`                              | *string*                                  | :heavy_check_mark:                        | Section identifier                        |
| `section`                                 | [models.Section](../../models/section.md) | :heavy_check_mark:                        | The section to update                     |