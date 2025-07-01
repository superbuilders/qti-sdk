# SearchAssessmentTestsResponse

Paginated response containing all assessment tests available on the service provider with navigation metadata

## Example Usage

```typescript
import { SearchAssessmentTestsResponse } from "qti/models/operations";

let value: SearchAssessmentTestsResponse = {
  items: [],
  total: 9237.53,
  pages: 6494.45,
  sort: "<value>",
  order: "desc",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                        | [operations.SearchAssessmentTestsItem](../../models/operations/searchassessmenttestsitem.md)[]                 | :heavy_check_mark:                                                                                             | Array of assessment tests that match the search criteria on the service provider                               |
| `total`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The total number of entities that match the search criteria.                                                   |
| `page`                                                                                                         | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | The page number of the entities that match the search criteria.                                                |
| `pages`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The total number of pages of entities that match the search criteria.                                          |
| `limit`                                                                                                        | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | The number of entities per page.                                                                               |
| `sort`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The field to sort the entities by.                                                                             |
| `order`                                                                                                        | [operations.SearchAssessmentTestsOrderResponse](../../models/operations/searchassessmenttestsorderresponse.md) | :heavy_check_mark:                                                                                             | The order to sort the entities by. Either 'asc' or 'desc'.                                                     |