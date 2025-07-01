# GetAllQuestionsResponse

All questions from the assessment test with their complete data and reference context

## Example Usage

```typescript
import { GetAllQuestionsResponse } from "qti/models/operations";

let value: GetAllQuestionsResponse = {
  assessmentTest: "<value>",
  title: "<value>",
  totalQuestions: 8591.15,
  questions: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `assessmentTest`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | Identifier of the assessment test                                          |
| `title`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | Title of the assessment test                                               |
| `totalQuestions`                                                           | *number*                                                                   | :heavy_check_mark:                                                         | Total number of questions in the assessment test                           |
| `questions`                                                                | [operations.Question](../../models/operations/question.md)[]               | :heavy_check_mark:                                                         | Array of questions with their reference information and complete item data |