# CreateStimulusQtiAssessmentStimulus

## Example Usage

```typescript
import { CreateStimulusQtiAssessmentStimulus } from "qti/models/operations";

let value: CreateStimulusQtiAssessmentStimulus = {
  attributes: {
    xmlns: "<value>",
    xmlnsXsi: "<value>",
    xsiSchemaLocation: "<value>",
    identifier: "<value>",
    xmlLang: "<value>",
    title: "<value>",
  },
  qtiStimulusBody: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `attributes`                                                                                       | [operations.CreateStimulusAttributes](../../models/operations/createstimulusattributes.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `qtiStimulusBody`                                                                                  | Record<string, *any*>                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `qtiStylesheet`                                                                                    | [operations.CreateStimulusQtiStylesheet](../../models/operations/createstimulusqtistylesheet.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `qtiCatalogInfo`                                                                                   | [operations.CreateStimulusQtiCatalogInfo](../../models/operations/createstimulusqticataloginfo.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |