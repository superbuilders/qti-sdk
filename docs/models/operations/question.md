# Question

## Example Usage

```typescript
import { Question } from "qti/models/operations";

let value: Question = {
  reference: {
    identifier: "<value>",
    href: "<value>",
    testPart: "<value>",
    section: "<value>",
  },
  question: {
    id: "<id>",
    identifier: "<value>",
    title: "<value>",
    type: "graphic-gap-match",
    responseProcessing: {
      templateType: "match_correct",
      responseDeclarationIdentifier: "<value>",
      outcomeIdentifier: "<value>",
      correctResponseIdentifier: "<value>",
      incorrectResponseIdentifier: "<value>",
    },
    rawXml: "<value>",
    content: {
      qtiAssessmentItem: {
        attributes: {
          xmlns: "<value>",
          xmlnsXsi: "<value>",
          xsiSchemaLocation: "<value>",
          identifier: "<value>",
          title: "<value>",
          adaptive: "<value>",
          timeDependent: "<value>",
        },
        qtiResponseDeclaration: [],
        qtiOutcomeDeclaration: [],
        qtiAssessmentStimulusRef: {
          attributes: {
            identifier: "<value>",
            href: "<value>",
            title: "<value>",
          },
        },
      },
    },
    createdAt: new Date("2024-09-05T06:13:10.194Z"),
    updatedAt: new Date("2024-02-17T16:49:06.344Z"),
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `reference`                                                                             | [operations.Reference](../../models/operations/reference.md)                            | :heavy_check_mark:                                                                      | Reference information about where this assessment item is located in the test structure |
| `question`                                                                              | [operations.QuestionQuestion](../../models/operations/questionquestion.md)              | :heavy_check_mark:                                                                      | N/A                                                                                     |