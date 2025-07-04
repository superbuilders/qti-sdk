/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sectionManagementUpdateAssessmentItemOrder } from "../../funcs/sectionManagementUpdateAssessmentItemOrder.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateAssessmentItemOrderRequest$inboundSchema,
};

export const tool$sectionManagementUpdateAssessmentItemOrder: ToolDefinition<
  typeof args
> = {
  name: "section-management-update-assessment-item-order",
  description: `Reorder assessment items within a section

Update the presentation order of assessment item references within a section. This affects the sequence in which items are presented to test takers. All specified items must exist in the section.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await sectionManagementUpdateAssessmentItemOrder(
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
