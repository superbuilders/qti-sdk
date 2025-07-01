# CreateAssessmentTestRawCardinality

Defines how scoring information is structured and stored. 'single' for one overall score, 'multiple' for separate scores or points, 'ordered' for scores maintaining a specific sequence, 'record' for complex scoring with multiple named components.

## Example Usage

```typescript
import { CreateAssessmentTestRawCardinality } from "qti/models/operations";

let value: CreateAssessmentTestRawCardinality = "single";
```

## Values

```typescript
"single" | "multiple" | "ordered" | "record"
```