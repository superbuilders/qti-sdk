/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sectionManagementGetSection } from "../../funcs/sectionManagementGetSection.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetSectionRequest$inboundSchema,
};

export const tool$sectionManagementGetSection: ToolDefinition<typeof args> = {
  name: "section-management-get-section",
  description: `Get a section with all its assessment item references

Retrieve a specific section including all its assessment item references, presentation settings, and configuration. Sections define how groups of assessment items are presented to test takers.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await sectionManagementGetSection(
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
