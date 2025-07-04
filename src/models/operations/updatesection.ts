/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateSectionRequest = {
  /**
   * Root assessment test identifier
   */
  assessmentTestIdentifier: string;
  /**
   * Parent test part identifier
   */
  testPartIdentifier: string;
  /**
   * Section identifier
   */
  identifier: string;
  /**
   * The section to update
   */
  section: models.Section;
};

/**
 * Assessment item reference schema for linking assessment items to sections
 */
export type UpdateSectionQtiAssessmentItemRef = {
  /**
   * Unique identifier for the entity on the service provider.
   */
  identifier: string;
  /**
   * URI reference to the assessment item resource location on the service provider
   */
  href?: string | undefined;
};

/**
 * Complete assessment section data with all referenced items. Represents a section containing learning content within a test part.
 */
export type UpdateSectionResponse = {
  /**
   * MongoDB document ID generated by the database when a new entity is added to a collection on the service provider.
   */
  id: string;
  /**
   * Unique identifier for the entity on the service provider.
   */
  identifier: string;
  /**
   * Human-readable title of the entity on the service provider.
   */
  title: string;
  /**
   * Determines whether the assessment section is visible to candidates during test delivery. Sections are visible by default unless explicitly hidden for specific assessment conditions.
   */
  visible?: boolean | undefined;
  /**
   * If a child element is required it must appear (at least once) in the selection.
   */
  required?: boolean | undefined;
  /**
   * If a child element is fixed it must never be shuffled. When used in combination with a selection rule fixed elements do not have their position fixed until after selection has taken place.
   */
  fixed?: boolean | undefined;
  /**
   * Defines the sequential order of this item within its parent section. Must be a positive integer that determines presentation order to candidates.
   */
  sequence?: number | undefined;
  /**
   * Collection of assessment items that are referenced within this section.
   */
  qtiAssessmentItemRef?: Array<UpdateSectionQtiAssessmentItemRef> | undefined;
};

/** @internal */
export const UpdateSectionRequest$inboundSchema: z.ZodType<
  UpdateSectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  assessmentTestIdentifier: z.string(),
  testPartIdentifier: z.string(),
  identifier: z.string(),
  Section: models.Section$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Section": "section",
  });
});

/** @internal */
export type UpdateSectionRequest$Outbound = {
  assessmentTestIdentifier: string;
  testPartIdentifier: string;
  identifier: string;
  Section: models.Section$Outbound;
};

/** @internal */
export const UpdateSectionRequest$outboundSchema: z.ZodType<
  UpdateSectionRequest$Outbound,
  z.ZodTypeDef,
  UpdateSectionRequest
> = z.object({
  assessmentTestIdentifier: z.string(),
  testPartIdentifier: z.string(),
  identifier: z.string(),
  section: models.Section$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    section: "Section",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSectionRequest$ {
  /** @deprecated use `UpdateSectionRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateSectionRequest$inboundSchema;
  /** @deprecated use `UpdateSectionRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateSectionRequest$outboundSchema;
  /** @deprecated use `UpdateSectionRequest$Outbound` instead. */
  export type Outbound = UpdateSectionRequest$Outbound;
}

export function updateSectionRequestToJSON(
  updateSectionRequest: UpdateSectionRequest,
): string {
  return JSON.stringify(
    UpdateSectionRequest$outboundSchema.parse(updateSectionRequest),
  );
}

export function updateSectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSectionRequest' from JSON`,
  );
}

/** @internal */
export const UpdateSectionQtiAssessmentItemRef$inboundSchema: z.ZodType<
  UpdateSectionQtiAssessmentItemRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  href: z.string().optional(),
});

/** @internal */
export type UpdateSectionQtiAssessmentItemRef$Outbound = {
  identifier: string;
  href?: string | undefined;
};

/** @internal */
export const UpdateSectionQtiAssessmentItemRef$outboundSchema: z.ZodType<
  UpdateSectionQtiAssessmentItemRef$Outbound,
  z.ZodTypeDef,
  UpdateSectionQtiAssessmentItemRef
> = z.object({
  identifier: z.string(),
  href: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSectionQtiAssessmentItemRef$ {
  /** @deprecated use `UpdateSectionQtiAssessmentItemRef$inboundSchema` instead. */
  export const inboundSchema = UpdateSectionQtiAssessmentItemRef$inboundSchema;
  /** @deprecated use `UpdateSectionQtiAssessmentItemRef$outboundSchema` instead. */
  export const outboundSchema =
    UpdateSectionQtiAssessmentItemRef$outboundSchema;
  /** @deprecated use `UpdateSectionQtiAssessmentItemRef$Outbound` instead. */
  export type Outbound = UpdateSectionQtiAssessmentItemRef$Outbound;
}

export function updateSectionQtiAssessmentItemRefToJSON(
  updateSectionQtiAssessmentItemRef: UpdateSectionQtiAssessmentItemRef,
): string {
  return JSON.stringify(
    UpdateSectionQtiAssessmentItemRef$outboundSchema.parse(
      updateSectionQtiAssessmentItemRef,
    ),
  );
}

export function updateSectionQtiAssessmentItemRefFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSectionQtiAssessmentItemRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSectionQtiAssessmentItemRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSectionQtiAssessmentItemRef' from JSON`,
  );
}

/** @internal */
export const UpdateSectionResponse$inboundSchema: z.ZodType<
  UpdateSectionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  identifier: z.string(),
  title: z.string(),
  visible: z.boolean().default(true),
  required: z.boolean().default(true),
  fixed: z.boolean().default(false),
  sequence: z.number().int().optional(),
  "qti-assessment-item-ref": z.array(
    z.lazy(() => UpdateSectionQtiAssessmentItemRef$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "qti-assessment-item-ref": "qtiAssessmentItemRef",
  });
});

/** @internal */
export type UpdateSectionResponse$Outbound = {
  _id: string;
  identifier: string;
  title: string;
  visible: boolean;
  required: boolean;
  fixed: boolean;
  sequence?: number | undefined;
  "qti-assessment-item-ref"?:
    | Array<UpdateSectionQtiAssessmentItemRef$Outbound>
    | undefined;
};

/** @internal */
export const UpdateSectionResponse$outboundSchema: z.ZodType<
  UpdateSectionResponse$Outbound,
  z.ZodTypeDef,
  UpdateSectionResponse
> = z.object({
  id: z.string(),
  identifier: z.string(),
  title: z.string(),
  visible: z.boolean().default(true),
  required: z.boolean().default(true),
  fixed: z.boolean().default(false),
  sequence: z.number().int().optional(),
  qtiAssessmentItemRef: z.array(
    z.lazy(() => UpdateSectionQtiAssessmentItemRef$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    qtiAssessmentItemRef: "qti-assessment-item-ref",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSectionResponse$ {
  /** @deprecated use `UpdateSectionResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateSectionResponse$inboundSchema;
  /** @deprecated use `UpdateSectionResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateSectionResponse$outboundSchema;
  /** @deprecated use `UpdateSectionResponse$Outbound` instead. */
  export type Outbound = UpdateSectionResponse$Outbound;
}

export function updateSectionResponseToJSON(
  updateSectionResponse: UpdateSectionResponse,
): string {
  return JSON.stringify(
    UpdateSectionResponse$outboundSchema.parse(updateSectionResponse),
  );
}

export function updateSectionResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSectionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSectionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSectionResponse' from JSON`,
  );
}
