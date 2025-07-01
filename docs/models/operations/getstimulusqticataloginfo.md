# GetStimulusQtiCatalogInfo

## Example Usage

```typescript
import { GetStimulusQtiCatalogInfo } from "qti/models/operations";

let value: GetStimulusQtiCatalogInfo = {
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
      },
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `qtiCatalog`                                                                         | [operations.GetStimulusQtiCatalog](../../models/operations/getstimulusqticatalog.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |