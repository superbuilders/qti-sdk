# OutcomeDeclarationBaseType

Primitive data type for each answer stored in the variable (e.g., integer, string, boolean). Omit when cardinality is 'record', because each field in a record may have its own type.

## Example Usage

```typescript
import { OutcomeDeclarationBaseType } from "qti";

let value: OutcomeDeclarationBaseType = "point";
```

## Values

```typescript
"identifier" | "boolean" | "integer" | "float" | "string" | "point" | "pair" | "directedPair" | "duration" | "file" | "uri"
```