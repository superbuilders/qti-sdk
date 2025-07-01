# GetAllQuestionsCorrectResponse

Optional model answer; must conform to the variable's cardinality (single = one value, multiple/ordered = ordered or unordered list); omit when no optimal answer exists (e.g., essays); delivery engines may display it as the solution in review mode.

## Example Usage

```typescript
import { GetAllQuestionsCorrectResponse } from "qti/models/operations";

let value: GetAllQuestionsCorrectResponse = {
  value: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `value`            | *string*[]         | :heavy_check_mark: | N/A                |