# Reference

Reference information about where this assessment item is located in the test structure

## Example Usage

```typescript
import { Reference } from "qti/models/operations";

let value: Reference = {
  identifier: "<value>",
  href: "<value>",
  testPart: "<value>",
  section: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `identifier`                                              | *string*                                                  | :heavy_check_mark:                                        | Unique identifier for the entity on the service provider. |
| `href`                                                    | *string*                                                  | :heavy_check_mark:                                        | URL reference to the assessment item                      |
| `testPart`                                                | *string*                                                  | :heavy_check_mark:                                        | Test part identifier where this item is located           |
| `section`                                                 | *string*                                                  | :heavy_check_mark:                                        | Section identifier where this item is located             |