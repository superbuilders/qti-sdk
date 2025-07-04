/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assessmentTestManagementGetAllQuestions } from "../../funcs/assessmentTestManagementGetAllQuestions.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAllQuestionsRequest$inboundSchema,
};

export const tool$assessmentTestManagementGetAllQuestions: ToolDefinition<
  typeof args
> = {
  name: "assessment-test-management-get-all-questions",
  description: `Get all assessment items referenced by an assessment test

Retrieve all assessment items (questions) that are referenced by an assessment test, along with their structural context (test part and section). This endpoint aggregates items from all sections across all test parts, providing both the item references and the actual assessment item data from the assessment-items collection.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await assessmentTestManagementGetAllQuestions(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
