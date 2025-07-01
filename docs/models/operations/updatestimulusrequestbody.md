# UpdateStimulusRequestBody

The stimulus content to update.

## Example Usage

```typescript
import { UpdateStimulusRequestBody } from "qti/models/operations";

let value: UpdateStimulusRequestBody = {
  params: {
    identifier: "<value>",
  },
  body: {
    identifier: "<value>",
    title: "<value>",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `params`                                                                                         | [operations.Params](../../models/operations/params.md)                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `body`                                                                                           | [models.Stimulus](../../models/stimulus.md)                                                      | :heavy_check_mark:                                                                               | Create or update a stimulus on the service provider with HTML content and optional configuration |