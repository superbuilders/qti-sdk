# UpdateAssessmentTestMetadataRequestBody

Update only the metadata fields of an assessment test without affecting its structure. This is a lightweight operation for administrative changes to title, description, and other metadata properties

## Example Usage

```typescript
import { UpdateAssessmentTestMetadataRequestBody } from "qti/models/operations";

let value: UpdateAssessmentTestMetadataRequestBody = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                 | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | Additional custom metadata for extending entity properties beyond standard specification for QTI entities. |