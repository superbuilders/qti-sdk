# SearchTestPartsInternalServerError

Internal server error response

## Example Usage

```typescript
import { SearchTestPartsInternalServerError } from "qti/models/errors";

// No examples available for this model
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `error`                                 | *string*                                | :heavy_check_mark:                      | Error type identifier                   |
| `message`                               | *string*                                | :heavy_check_mark:                      | Human-readable error message            |
| `eventId`                               | *string*                                | :heavy_minus_sign:                      | Sentry event ID for error tracking      |
| `details`                               | *string*                                | :heavy_check_mark:                      | Stack trace or additional error details |