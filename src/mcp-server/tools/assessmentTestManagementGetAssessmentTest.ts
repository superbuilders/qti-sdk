/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assessmentTestManagementGetAssessmentTest } from "../../funcs/assessmentTestManagementGetAssessmentTest.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAssessmentTestRequest$inboundSchema,
};

export const tool$assessmentTestManagementGetAssessmentTest: ToolDefinition<
  typeof args
> = {
  name: "assessment-test-management-get-assessment-test",
  description: `Get a complete assessment test with full structure

Retrieve a complete assessment test including all its test parts, sections, and assessment item references. This provides the full hierarchical structure needed to understand the test organization and flow. Supports both JSON and XML response formats based on the Content-Type header.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await assessmentTestManagementGetAssessmentTest(
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
