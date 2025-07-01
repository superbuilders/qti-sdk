# SearchStimuliResponse

Paginated response containing all stimuli that match the search criteria with navigation metadata

## Example Usage

```typescript
import { SearchStimuliResponse } from "qti/models/operations";

let value: SearchStimuliResponse = {
  items: [],
  total: 9383.17,
  pages: 8548.28,
  sort: "<value>",
  order: "asc",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `items`                                                                                          | [operations.SearchStimuliItem](../../models/operations/searchstimuliitem.md)[]                   | :heavy_check_mark:                                                                               | The items array will contain all stimuli that match the search criteria on the service provider. |
| `total`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | The total number of entities that match the search criteria.                                     |
| `page`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | The page number of the entities that match the search criteria.                                  |
| `pages`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | The total number of pages of entities that match the search criteria.                            |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | The number of entities per page.                                                                 |
| `sort`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The field to sort the entities by.                                                               |
| `order`                                                                                          | [operations.SearchStimuliOrderResponse](../../models/operations/searchstimuliorderresponse.md)   | :heavy_check_mark:                                                                               | The order to sort the entities by. Either 'asc' or 'desc'.                                       |