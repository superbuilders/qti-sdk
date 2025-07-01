# CreateStimulusQtiCatalogInfo

## Example Usage

```typescript
import { CreateStimulusQtiCatalogInfo } from "qti/models/operations";

let value: CreateStimulusQtiCatalogInfo = {
  qtiCatalog: {
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
        "key2": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `qtiCatalog`                                                                               | [operations.CreateStimulusQtiCatalog](../../models/operations/createstimulusqticatalog.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |