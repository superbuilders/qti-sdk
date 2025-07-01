# SearchStimuliQtiAssessmentStimulus

## Example Usage

```typescript
import { SearchStimuliQtiAssessmentStimulus } from "qti/models/operations";

let value: SearchStimuliQtiAssessmentStimulus = {
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
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `attributes`                                                                                     | [operations.SearchStimuliAttributes](../../models/operations/searchstimuliattributes.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `qtiStimulusBody`                                                                                | Record<string, *any*>                                                                            | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `qtiStylesheet`                                                                                  | [operations.SearchStimuliQtiStylesheet](../../models/operations/searchstimuliqtistylesheet.md)   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `qtiCatalogInfo`                                                                                 | [operations.SearchStimuliQtiCatalogInfo](../../models/operations/searchstimuliqticataloginfo.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |