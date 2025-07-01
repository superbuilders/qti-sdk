# UpdateStimulusQtiAssessmentStimulus

## Example Usage

```typescript
import { UpdateStimulusQtiAssessmentStimulus } from "qti/models/operations";

let value: UpdateStimulusQtiAssessmentStimulus = {
  attributes: {
    xmlns: "<value>",
    xmlnsXsi: "<value>",
    xsiSchemaLocation: "<value>",
    identifier: "<value>",
    xmlLang: "<value>",
    title: "<value>",
  },
  qtiStimulusBody: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                       | [operations.UpdateStimulusAttributes](../../models/operations/updatestimulusattributes.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `qtiStimulusBody`                                                                                  | Record<string, *any*>                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `qtiStylesheet`                                                                                    | [operations.UpdateStimulusQtiStylesheet](../../models/operations/updatestimulusqtistylesheet.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `qtiCatalogInfo`                                                                                   | [operations.UpdateStimulusQtiCatalogInfo](../../models/operations/updatestimulusqticataloginfo.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |