# GetStimulusQtiAssessmentStimulus

## Example Usage

```typescript
import { GetStimulusQtiAssessmentStimulus } from "qti/models/operations";

let value: GetStimulusQtiAssessmentStimulus = {
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `attributes`                                                                                 | [operations.GetStimulusAttributes](../../models/operations/getstimulusattributes.md)         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `qtiStimulusBody`                                                                            | Record<string, *any*>                                                                        | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `qtiStylesheet`                                                                              | [operations.GetStimulusQtiStylesheet](../../models/operations/getstimulusqtistylesheet.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `qtiCatalogInfo`                                                                             | [operations.GetStimulusQtiCatalogInfo](../../models/operations/getstimulusqticataloginfo.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |