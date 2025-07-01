# GetStimulusQtiCatalog

## Example Usage

```typescript
import { GetStimulusQtiCatalog } from "qti/models/operations";

let value: GetStimulusQtiCatalog = {
  attributes: {
    id: "<id>",
  },
  qtiCard: {
    attributes: {
      support: "<value>",
    },
    qtiHtmlContent: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                             | [operations.GetStimulusQtiCatalogAttributes](../../models/operations/getstimulusqticatalogattributes.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `qtiCard`                                                                                                | [operations.GetStimulusQtiCard](../../models/operations/getstimulusqticard.md)                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |