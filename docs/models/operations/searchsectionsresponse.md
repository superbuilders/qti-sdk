# SearchSectionsResponse

Paginated response containing all assessment sections that exist in the specified test part on the service provider, including complete section data and navigation metadata.

## Example Usage

```typescript
import { SearchSectionsResponse } from "qti/models/operations";

let value: SearchSectionsResponse = {
  items: [
    {
      id: "<id>",
      identifier: "<value>",
      title: "<value>",
    },
  ],
  total: 9997.62,
  pages: 5118.64,
  sort: "<value>",
  order: "asc",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                       | [operations.SearchSectionsItem](../../models/operations/searchsectionsitem.md)[]                                              | :heavy_check_mark:                                                                                                            | Array of assessment sections belonging to the specified test part, each containing complete section data and item references. |
| `total`                                                                                                                       | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The total number of entities that match the search criteria.                                                                  |
| `page`                                                                                                                        | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The page number of the entities that match the search criteria.                                                               |
| `pages`                                                                                                                       | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The total number of pages of entities that match the search criteria.                                                         |
| `limit`                                                                                                                       | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The number of entities per page.                                                                                              |
| `sort`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The field to sort the entities by.                                                                                            |
| `order`                                                                                                                       | [operations.SearchSectionsOrderResponse](../../models/operations/searchsectionsorderresponse.md)                              | :heavy_check_mark:                                                                                                            | The order to sort the entities by. Either 'asc' or 'desc'.                                                                    |