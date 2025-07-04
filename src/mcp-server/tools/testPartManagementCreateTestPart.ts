/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { testPartManagementCreateTestPart } from "../../funcs/testPartManagementCreateTestPart.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateTestPartRequest$inboundSchema,
};

export const tool$testPartManagementCreateTestPart: ToolDefinition<
  typeof args
> = {
  name: "test-part-management-create-test-part",
  description: `Create a new test part in an assessment test

Create a new test part within an assessment test. Test parts organize sections and define navigation behaviors (linear/nonlinear) and submission modes. The assessment test's XML structure is automatically updated to include the new test part.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await testPartManagementCreateTestPart(
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
