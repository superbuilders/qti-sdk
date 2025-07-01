# CreateAssessmentItemResponseDeclarationBaseType

Primitive data type for each answer stored in the variable (e.g., integer, string, boolean). Omit when cardinality is 'record', because each field in a record may have its own type.

## Example Usage

```typescript
import { CreateAssessmentItemResponseDeclarationBaseType } from "qti/models/operations";

let value: CreateAssessmentItemResponseDeclarationBaseType = "identifier";
```

## Values

```typescript
"identifier" | "boolean" | "integer" | "float" | "string" | "point" | "pair" | "directedPair" | "duration" | "file" | "uri"
```