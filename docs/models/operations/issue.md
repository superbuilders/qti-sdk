# Issue

## Example Usage

```typescript
import { Issue } from "qti/models/operations";

let value: Issue = {
  field: "<value>",
  message: "<value>",
  code: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `field`            | *string*           | :heavy_check_mark: | Parameter name     |
| `message`          | *string*           | :heavy_check_mark: | Validation message |
| `code`             | *string*           | :heavy_check_mark: | Zod issue code     |