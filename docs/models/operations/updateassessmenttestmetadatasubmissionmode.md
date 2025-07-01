# UpdateAssessmentTestMetadataSubmissionMode

Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.

## Example Usage

```typescript
import { UpdateAssessmentTestMetadataSubmissionMode } from "qti/models/operations";

let value: UpdateAssessmentTestMetadataSubmissionMode = "individual";
```

## Values

```typescript
"individual" | "simultaneous"
```