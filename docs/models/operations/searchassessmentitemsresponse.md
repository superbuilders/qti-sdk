# SearchAssessmentItemsResponse

Paginated response containing all assessment items available on the service provider with navigation metadata

## Example Usage

```typescript
import { SearchAssessmentItemsResponse } from "qti/models/operations";

let value: SearchAssessmentItemsResponse = {
  items: [],
  total: 8070.62,
  pages: 2559.73,
  sort: "<value>",
  order: "desc",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                        | [operations.SearchAssessmentItemsItem](../../models/operations/searchassessmentitemsitem.md)[]                 | :heavy_check_mark:                                                                                             | Array of assessment items that match the search criteria                                                       |
| `total`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The total number of entities that match the search criteria.                                                   |
| `page`                                                                                                         | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | The page number of the entities that match the search criteria.                                                |
| `pages`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The total number of pages of entities that match the search criteria.                                          |
| `limit`                                                                                                        | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | The number of entities per page.                                                                               |
| `sort`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The field to sort the entities by.                                                                             |
| `order`                                                                                                        | [operations.SearchAssessmentItemsOrderResponse](../../models/operations/searchassessmentitemsorderresponse.md) | :heavy_check_mark:                                                                                             | The order to sort the entities by. Either 'asc' or 'desc'.                                                     |