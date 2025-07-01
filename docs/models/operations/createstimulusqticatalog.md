# CreateStimulusQtiCatalog

## Example Usage

```typescript
import { CreateStimulusQtiCatalog } from "qti/models/operations";

let value: CreateStimulusQtiCatalog = {
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
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                   | [operations.CreateStimulusQtiCatalogAttributes](../../models/operations/createstimulusqticatalogattributes.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `qtiCard`                                                                                                      | [operations.CreateStimulusQtiCard](../../models/operations/createstimulusqticard.md)                           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |