# UpdateAssessmentTestRawQtiAssessmentItemRef

Assessment item reference schema for linking assessment items to sections

## Example Usage

```typescript
import { UpdateAssessmentTestRawQtiAssessmentItemRef } from "qti/models/operations";

let value: UpdateAssessmentTestRawQtiAssessmentItemRef = {
  identifier: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `identifier`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier for the entity on the service provider.                      |
| `href`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | URI reference to the assessment item resource location on the service provider |