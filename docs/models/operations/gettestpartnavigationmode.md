# GetTestPartNavigationMode

Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.

## Example Usage

```typescript
import { GetTestPartNavigationMode } from "qti/models/operations";

let value: GetTestPartNavigationMode = "linear";
```

## Values

```typescript
"linear" | "nonlinear"
```