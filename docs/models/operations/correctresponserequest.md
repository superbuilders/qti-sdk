# CorrectResponseRequest

Optional model answer; must conform to the variable's cardinality (single = one value, multiple/ordered = ordered or unordered list); omit when no optimal answer exists (e.g., essays); delivery engines may display it as the solution in review mode.

## Example Usage

```typescript
import { CorrectResponseRequest } from "qti/models/operations";

let value: CorrectResponseRequest = {
  value: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `value`            | *string*[]         | :heavy_check_mark: | N/A                |