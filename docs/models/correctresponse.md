# CorrectResponse

Optional model answer; must conform to the variable's cardinality (single = one value, multiple/ordered = ordered or unordered list); omit when no optimal answer exists (e.g., essays); delivery engines may display it as the solution in review mode.

## Example Usage

```typescript
import { CorrectResponse } from "qti";

let value: CorrectResponse = {
  value: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `value`            | *string*[]         | :heavy_check_mark: | N/A                |