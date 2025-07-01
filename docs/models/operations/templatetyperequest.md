# TemplateTypeRequest

Response processing template type. 'match_correct' compares the candidate's response directly against the correct response and assigns binary feedback. 'map_response' uses mapping rules to assign scores and feedback based on response values.

## Example Usage

```typescript
import { TemplateTypeRequest } from "qti/models/operations";

let value: TemplateTypeRequest = "match_correct";
```

## Values

```typescript
"match_correct" | "map_response"
```