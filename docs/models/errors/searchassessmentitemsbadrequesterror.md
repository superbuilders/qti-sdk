# SearchAssessmentItemsBadRequestError

Validation failed

## Example Usage

```typescript
import { SearchAssessmentItemsBadRequestError } from "qti/models/errors";

// No examples available for this model
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `error`                                            | *string*                                           | :heavy_check_mark:                                 | High-level error message                           |
| `code`                                             | *string*                                           | :heavy_check_mark:                                 | Machine code identifying error type                |
| `details`                                          | *string*                                           | :heavy_minus_sign:                                 | Additional human details                           |
| `meta`                                             | [operations.Meta](../../models/operations/meta.md) | :heavy_check_mark:                                 | Structured metadata from validation layer          |