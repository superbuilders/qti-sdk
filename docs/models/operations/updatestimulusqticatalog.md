# UpdateStimulusQtiCatalog

## Example Usage

```typescript
import { UpdateStimulusQtiCatalog } from "qti/models/operations";

let value: UpdateStimulusQtiCatalog = {
  attributes: {
    id: "<id>",
  },
  qtiCard: {
    attributes: {
      support: "<value>",
    },
    qtiHtmlContent: {},
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                                   | [operations.UpdateStimulusQtiCatalogAttributes](../../models/operations/updatestimulusqticatalogattributes.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `qtiCard`                                                                                                      | [operations.UpdateStimulusQtiCard](../../models/operations/updatestimulusqticard.md)                           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |