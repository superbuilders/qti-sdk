# CreateAssessmentTestNavigationMode

Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.

## Example Usage

```typescript
import { CreateAssessmentTestNavigationMode } from "qti/models/operations";

let value: CreateAssessmentTestNavigationMode = "nonlinear";
```

## Values

```typescript
"linear" | "nonlinear"
```