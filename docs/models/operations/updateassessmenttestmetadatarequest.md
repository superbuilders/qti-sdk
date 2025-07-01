# UpdateAssessmentTestMetadataRequest

## Example Usage

```typescript
import { UpdateAssessmentTestMetadataRequest } from "qti/models/operations";

let value: UpdateAssessmentTestMetadataRequest = {
  identifier: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The identifier of the assessment test to update                                                                          |
| `requestBody`                                                                                                            | [operations.UpdateAssessmentTestMetadataRequestBody](../../models/operations/updateassessmenttestmetadatarequestbody.md) | :heavy_check_mark:                                                                                                       | The assessment test metadata to update                                                                                   |