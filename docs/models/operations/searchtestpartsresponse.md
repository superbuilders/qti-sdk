# SearchTestPartsResponse

Paginated collection of test parts with navigation metadata

## Example Usage

```typescript
import { SearchTestPartsResponse } from "qti/models/operations";

let value: SearchTestPartsResponse = {
  items: [],
  total: 8799.33,
  pages: 1430.65,
  sort: "<value>",
  order: "asc",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `items`                                                                                            | [operations.SearchTestPartsItem](../../models/operations/searchtestpartsitem.md)[]                 | :heavy_check_mark:                                                                                 | Array of all test parts belonging to the specified assessment test                                 |
| `total`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | The total number of entities that match the search criteria.                                       |
| `page`                                                                                             | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The page number of the entities that match the search criteria.                                    |
| `pages`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | The total number of pages of entities that match the search criteria.                              |
| `limit`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The number of entities per page.                                                                   |
| `sort`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The field to sort the entities by.                                                                 |
| `order`                                                                                            | [operations.SearchTestPartsOrderResponse](../../models/operations/searchtestpartsorderresponse.md) | :heavy_check_mark:                                                                                 | The order to sort the entities by. Either 'asc' or 'desc'.                                         |