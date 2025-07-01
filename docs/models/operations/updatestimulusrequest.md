# UpdateStimulusRequest

## Example Usage

```typescript
import { UpdateStimulusRequest } from "qti/models/operations";

let value: UpdateStimulusRequest = {
  identifier: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `identifier`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | Stimulus identifier                                                                          |
| `requestBody`                                                                                | [operations.UpdateStimulusRequestBody](../../models/operations/updatestimulusrequestbody.md) | :heavy_check_mark:                                                                           | The stimulus content to update.                                                              |