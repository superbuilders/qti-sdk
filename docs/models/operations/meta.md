# Meta

Structured metadata from validation layer

## Example Usage

```typescript
import { Meta } from "qti/models/operations";

let value: Meta = {
  issues: [
    {
      field: "<value>",
      message: "<value>",
      code: "<value>",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `issues`                                               | [operations.Issue](../../models/operations/issue.md)[] | :heavy_check_mark:                                     | Array of individual validation errors                  |
| `eventId`                                              | *string*                                               | :heavy_minus_sign:                                     | Sentry event id                                        |