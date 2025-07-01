# SearchStimuliQtiCatalog

## Example Usage

```typescript
import { SearchStimuliQtiCatalog } from "qti/models/operations";

let value: SearchStimuliQtiCatalog = {
  attributes: {
    id: "<id>",
  },
  qtiCard: {
    attributes: {
      support: "<value>",
    },
    qtiHtmlContent: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `attributes`                                                                                                 | [operations.SearchStimuliQtiCatalogAttributes](../../models/operations/searchstimuliqticatalogattributes.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `qtiCard`                                                                                                    | [operations.SearchStimuliQtiCard](../../models/operations/searchstimuliqticard.md)                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |