/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sectionManagementDeleteSection } from "../../funcs/sectionManagementDeleteSection.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteSectionRequest$inboundSchema,
};

export const tool$sectionManagementDeleteSection: ToolDefinition<typeof args> =
  {
    name: "section-management-delete-section",
    description: `Delete a section and its item references

Permanently delete a section from a test part. This removes the section and all its assessment item references (but not the underlying assessment items). The assessment test's XML structure is automatically updated.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await sectionManagementDeleteSection(
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
