# SearchStimuliRequest

## Example Usage

```typescript
import { SearchStimuliRequest } from "qti/models/operations";

let value: SearchStimuliRequest = {
  sort: "createdAt",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `query`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Search title and identifier fields using a search term. This is a fuzzy search.                    |                                                                                                    |
| `page`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Page number for pagination                                                                         | 1                                                                                                  |
| `limit`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Number of items per page                                                                           | 10                                                                                                 |
| `sort`                                                                                             | [operations.SearchStimuliSort](../../models/operations/searchstimulisort.md)                       | :heavy_minus_sign:                                                                                 | Field to sort by                                                                                   | createdAt                                                                                          |
| `order`                                                                                            | [operations.SearchStimuliQueryParamOrder](../../models/operations/searchstimuliqueryparamorder.md) | :heavy_minus_sign:                                                                                 | Sort order                                                                                         | desc                                                                                               |