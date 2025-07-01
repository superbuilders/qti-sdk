# GetStimulusStylesheet

The set of external style sheets that are associated with the Stimulus. The order of definition is significant.

## Example Usage

```typescript
import { GetStimulusStylesheet } from "qti/models/operations";

let value: GetStimulusStylesheet = {
  href: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `href`                                                 | *string*                                               | :heavy_check_mark:                                     | The identifier or location of the external stylesheet. |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | The type of the external stylesheet.                   |