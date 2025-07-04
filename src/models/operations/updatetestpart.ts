/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateTestPartRequest = {
  /**
   * The unique identifier of the parent assessment test
   */
  assessmentTestIdentifier: string;
  /**
   * The unique identifier of the test part to update
   */
  identifier: string;
  /**
   * The test part to update
   */
  testPart: models.TestPart;
};

/**
 * Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
 */
export const UpdateTestPartNavigationMode = {
  Linear: "linear",
  Nonlinear: "nonlinear",
} as const;
/**
 * Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
 */
export type UpdateTestPartNavigationMode = ClosedEnum<
  typeof UpdateTestPartNavigationMode
>;

/**
 * Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
 */
export const UpdateTestPartSubmissionMode = {
  Individual: "individual",
  Simultaneous: "simultaneous",
} as const;
/**
 * Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
 */
export type UpdateTestPartSubmissionMode = ClosedEnum<
  typeof UpdateTestPartSubmissionMode
>;

export type UpdateTestPartAttributes = {
  identifier: string;
  navigationMode: string;
  submissionMode: string;
};

export type UpdateTestPartQtiAssessmentSectionAttributes = {
  identifier: string;
  title: string;
  visible: string;
  required: string;
  fixed: string;
};

export type UpdateTestPartQtiAssessmentItemRefAttributes = {
  identifier: string;
  href: string;
};

export type UpdateTestPartQtiAssessmentItemRef = {
  attributes: UpdateTestPartQtiAssessmentItemRefAttributes;
};

export type UpdateTestPartQtiAssessmentSection = {
  attributes: UpdateTestPartQtiAssessmentSectionAttributes;
  qtiAssessmentItemRef?: Array<UpdateTestPartQtiAssessmentItemRef> | undefined;
};

export type UpdateTestPartQtiTestPart = {
  attributes: UpdateTestPartAttributes;
  qtiAssessmentSection: Array<UpdateTestPartQtiAssessmentSection>;
};

export type UpdateTestPartContent = {
  qtiTestPart: UpdateTestPartQtiTestPart;
};

/**
 * Response data returned after successfully updating a test part. Contains the updated XML and parsed content structure.
 */
export type UpdateTestPartResponse = {
  /**
   * Unique identifier for the entity on the service provider.
   */
  identifier: string;
  /**
   * Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
   */
  navigationMode: UpdateTestPartNavigationMode;
  /**
   * Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
   */
  submissionMode: UpdateTestPartSubmissionMode;
  qtiAssessmentSection: Array<models.Section>;
  /**
   * Raw XML representation of the entity, automatically generated from the JSON or XML sent when creating entities on the service provider. The rawxml field will contain all content sent when creating the entity on the service provider. This field is stable and should be used when working within this QTI API.
   */
  rawXml: string;
  content: UpdateTestPartContent;
};

/** @internal */
export const UpdateTestPartRequest$inboundSchema: z.ZodType<
  UpdateTestPartRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  assessmentTestIdentifier: z.string(),
  identifier: z.string(),
  TestPart: models.TestPart$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "TestPart": "testPart",
  });
});

/** @internal */
export type UpdateTestPartRequest$Outbound = {
  assessmentTestIdentifier: string;
  identifier: string;
  TestPart: models.TestPart$Outbound;
};

/** @internal */
export const UpdateTestPartRequest$outboundSchema: z.ZodType<
  UpdateTestPartRequest$Outbound,
  z.ZodTypeDef,
  UpdateTestPartRequest
> = z.object({
  assessmentTestIdentifier: z.string(),
  identifier: z.string(),
  testPart: models.TestPart$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    testPart: "TestPart",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartRequest$ {
  /** @deprecated use `UpdateTestPartRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartRequest$inboundSchema;
  /** @deprecated use `UpdateTestPartRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateTestPartRequest$outboundSchema;
  /** @deprecated use `UpdateTestPartRequest$Outbound` instead. */
  export type Outbound = UpdateTestPartRequest$Outbound;
}

export function updateTestPartRequestToJSON(
  updateTestPartRequest: UpdateTestPartRequest,
): string {
  return JSON.stringify(
    UpdateTestPartRequest$outboundSchema.parse(updateTestPartRequest),
  );
}

export function updateTestPartRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTestPartRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTestPartRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTestPartRequest' from JSON`,
  );
}

/** @internal */
export const UpdateTestPartNavigationMode$inboundSchema: z.ZodNativeEnum<
  typeof UpdateTestPartNavigationMode
> = z.nativeEnum(UpdateTestPartNavigationMode);

/** @internal */
export const UpdateTestPartNavigationMode$outboundSchema: z.ZodNativeEnum<
  typeof UpdateTestPartNavigationMode
> = UpdateTestPartNavigationMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartNavigationMode$ {
  /** @deprecated use `UpdateTestPartNavigationMode$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartNavigationMode$inboundSchema;
  /** @deprecated use `UpdateTestPartNavigationMode$outboundSchema` instead. */
  export const outboundSchema = UpdateTestPartNavigationMode$outboundSchema;
}

/** @internal */
export const UpdateTestPartSubmissionMode$inboundSchema: z.ZodNativeEnum<
  typeof UpdateTestPartSubmissionMode
> = z.nativeEnum(UpdateTestPartSubmissionMode);

/** @internal */
export const UpdateTestPartSubmissionMode$outboundSchema: z.ZodNativeEnum<
  typeof UpdateTestPartSubmissionMode
> = UpdateTestPartSubmissionMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartSubmissionMode$ {
  /** @deprecated use `UpdateTestPartSubmissionMode$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartSubmissionMode$inboundSchema;
  /** @deprecated use `UpdateTestPartSubmissionMode$outboundSchema` instead. */
  export const outboundSchema = UpdateTestPartSubmissionMode$outboundSchema;
}

/** @internal */
export const UpdateTestPartAttributes$inboundSchema: z.ZodType<
  UpdateTestPartAttributes,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  "navigation-mode": z.string(),
  "submission-mode": z.string(),
}).transform((v) => {
  return remap$(v, {
    "navigation-mode": "navigationMode",
    "submission-mode": "submissionMode",
  });
});

/** @internal */
export type UpdateTestPartAttributes$Outbound = {
  identifier: string;
  "navigation-mode": string;
  "submission-mode": string;
};

/** @internal */
export const UpdateTestPartAttributes$outboundSchema: z.ZodType<
  UpdateTestPartAttributes$Outbound,
  z.ZodTypeDef,
  UpdateTestPartAttributes
> = z.object({
  identifier: z.string(),
  navigationMode: z.string(),
  submissionMode: z.string(),
}).transform((v) => {
  return remap$(v, {
    navigationMode: "navigation-mode",
    submissionMode: "submission-mode",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartAttributes$ {
  /** @deprecated use `UpdateTestPartAttributes$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartAttributes$inboundSchema;
  /** @deprecated use `UpdateTestPartAttributes$outboundSchema` instead. */
  export const outboundSchema = UpdateTestPartAttributes$outboundSchema;
  /** @deprecated use `UpdateTestPartAttributes$Outbound` instead. */
  export type Outbound = UpdateTestPartAttributes$Outbound;
}

export function updateTestPartAttributesToJSON(
  updateTestPartAttributes: UpdateTestPartAttributes,
): string {
  return JSON.stringify(
    UpdateTestPartAttributes$outboundSchema.parse(updateTestPartAttributes),
  );
}

export function updateTestPartAttributesFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTestPartAttributes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTestPartAttributes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTestPartAttributes' from JSON`,
  );
}

/** @internal */
export const UpdateTestPartQtiAssessmentSectionAttributes$inboundSchema:
  z.ZodType<
    UpdateTestPartQtiAssessmentSectionAttributes,
    z.ZodTypeDef,
    unknown
  > = z.object({
    identifier: z.string(),
    title: z.string(),
    visible: z.string(),
    required: z.string(),
    fixed: z.string(),
  });

/** @internal */
export type UpdateTestPartQtiAssessmentSectionAttributes$Outbound = {
  identifier: string;
  title: string;
  visible: string;
  required: string;
  fixed: string;
};

/** @internal */
export const UpdateTestPartQtiAssessmentSectionAttributes$outboundSchema:
  z.ZodType<
    UpdateTestPartQtiAssessmentSectionAttributes$Outbound,
    z.ZodTypeDef,
    UpdateTestPartQtiAssessmentSectionAttributes
  > = z.object({
    identifier: z.string(),
    title: z.string(),
    visible: z.string(),
    required: z.string(),
    fixed: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartQtiAssessmentSectionAttributes$ {
  /** @deprecated use `UpdateTestPartQtiAssessmentSectionAttributes$inboundSchema` instead. */
  export const inboundSchema =
    UpdateTestPartQtiAssessmentSectionAttributes$inboundSchema;
  /** @deprecated use `UpdateTestPartQtiAssessmentSectionAttributes$outboundSchema` instead. */
  export const outboundSchema =
    UpdateTestPartQtiAssessmentSectionAttributes$outboundSchema;
  /** @deprecated use `UpdateTestPartQtiAssessmentSectionAttributes$Outbound` instead. */
  export type Outbound = UpdateTestPartQtiAssessmentSectionAttributes$Outbound;
}

export function updateTestPartQtiAssessmentSectionAttributesToJSON(
  updateTestPartQtiAssessmentSectionAttributes:
    UpdateTestPartQtiAssessmentSectionAttributes,
): string {
  return JSON.stringify(
    UpdateTestPartQtiAssessmentSectionAttributes$outboundSchema.parse(
      updateTestPartQtiAssessmentSectionAttributes,
    ),
  );
}

export function updateTestPartQtiAssessmentSectionAttributesFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdateTestPartQtiAssessmentSectionAttributes,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateTestPartQtiAssessmentSectionAttributes$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdateTestPartQtiAssessmentSectionAttributes' from JSON`,
  );
}

/** @internal */
export const UpdateTestPartQtiAssessmentItemRefAttributes$inboundSchema:
  z.ZodType<
    UpdateTestPartQtiAssessmentItemRefAttributes,
    z.ZodTypeDef,
    unknown
  > = z.object({
    identifier: z.string(),
    href: z.string(),
  });

/** @internal */
export type UpdateTestPartQtiAssessmentItemRefAttributes$Outbound = {
  identifier: string;
  href: string;
};

/** @internal */
export const UpdateTestPartQtiAssessmentItemRefAttributes$outboundSchema:
  z.ZodType<
    UpdateTestPartQtiAssessmentItemRefAttributes$Outbound,
    z.ZodTypeDef,
    UpdateTestPartQtiAssessmentItemRefAttributes
  > = z.object({
    identifier: z.string(),
    href: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartQtiAssessmentItemRefAttributes$ {
  /** @deprecated use `UpdateTestPartQtiAssessmentItemRefAttributes$inboundSchema` instead. */
  export const inboundSchema =
    UpdateTestPartQtiAssessmentItemRefAttributes$inboundSchema;
  /** @deprecated use `UpdateTestPartQtiAssessmentItemRefAttributes$outboundSchema` instead. */
  export const outboundSchema =
    UpdateTestPartQtiAssessmentItemRefAttributes$outboundSchema;
  /** @deprecated use `UpdateTestPartQtiAssessmentItemRefAttributes$Outbound` instead. */
  export type Outbound = UpdateTestPartQtiAssessmentItemRefAttributes$Outbound;
}

export function updateTestPartQtiAssessmentItemRefAttributesToJSON(
  updateTestPartQtiAssessmentItemRefAttributes:
    UpdateTestPartQtiAssessmentItemRefAttributes,
): string {
  return JSON.stringify(
    UpdateTestPartQtiAssessmentItemRefAttributes$outboundSchema.parse(
      updateTestPartQtiAssessmentItemRefAttributes,
    ),
  );
}

export function updateTestPartQtiAssessmentItemRefAttributesFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdateTestPartQtiAssessmentItemRefAttributes,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateTestPartQtiAssessmentItemRefAttributes$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdateTestPartQtiAssessmentItemRefAttributes' from JSON`,
  );
}

/** @internal */
export const UpdateTestPartQtiAssessmentItemRef$inboundSchema: z.ZodType<
  UpdateTestPartQtiAssessmentItemRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  _attributes: z.lazy(() =>
    UpdateTestPartQtiAssessmentItemRefAttributes$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "_attributes": "attributes",
  });
});

/** @internal */
export type UpdateTestPartQtiAssessmentItemRef$Outbound = {
  _attributes: UpdateTestPartQtiAssessmentItemRefAttributes$Outbound;
};

/** @internal */
export const UpdateTestPartQtiAssessmentItemRef$outboundSchema: z.ZodType<
  UpdateTestPartQtiAssessmentItemRef$Outbound,
  z.ZodTypeDef,
  UpdateTestPartQtiAssessmentItemRef
> = z.object({
  attributes: z.lazy(() =>
    UpdateTestPartQtiAssessmentItemRefAttributes$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    attributes: "_attributes",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartQtiAssessmentItemRef$ {
  /** @deprecated use `UpdateTestPartQtiAssessmentItemRef$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartQtiAssessmentItemRef$inboundSchema;
  /** @deprecated use `UpdateTestPartQtiAssessmentItemRef$outboundSchema` instead. */
  export const outboundSchema =
    UpdateTestPartQtiAssessmentItemRef$outboundSchema;
  /** @deprecated use `UpdateTestPartQtiAssessmentItemRef$Outbound` instead. */
  export type Outbound = UpdateTestPartQtiAssessmentItemRef$Outbound;
}

export function updateTestPartQtiAssessmentItemRefToJSON(
  updateTestPartQtiAssessmentItemRef: UpdateTestPartQtiAssessmentItemRef,
): string {
  return JSON.stringify(
    UpdateTestPartQtiAssessmentItemRef$outboundSchema.parse(
      updateTestPartQtiAssessmentItemRef,
    ),
  );
}

export function updateTestPartQtiAssessmentItemRefFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTestPartQtiAssessmentItemRef, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateTestPartQtiAssessmentItemRef$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTestPartQtiAssessmentItemRef' from JSON`,
  );
}

/** @internal */
export const UpdateTestPartQtiAssessmentSection$inboundSchema: z.ZodType<
  UpdateTestPartQtiAssessmentSection,
  z.ZodTypeDef,
  unknown
> = z.object({
  _attributes: z.lazy(() =>
    UpdateTestPartQtiAssessmentSectionAttributes$inboundSchema
  ),
  "qti-assessment-item-ref": z.array(
    z.lazy(() => UpdateTestPartQtiAssessmentItemRef$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "_attributes": "attributes",
    "qti-assessment-item-ref": "qtiAssessmentItemRef",
  });
});

/** @internal */
export type UpdateTestPartQtiAssessmentSection$Outbound = {
  _attributes: UpdateTestPartQtiAssessmentSectionAttributes$Outbound;
  "qti-assessment-item-ref"?:
    | Array<UpdateTestPartQtiAssessmentItemRef$Outbound>
    | undefined;
};

/** @internal */
export const UpdateTestPartQtiAssessmentSection$outboundSchema: z.ZodType<
  UpdateTestPartQtiAssessmentSection$Outbound,
  z.ZodTypeDef,
  UpdateTestPartQtiAssessmentSection
> = z.object({
  attributes: z.lazy(() =>
    UpdateTestPartQtiAssessmentSectionAttributes$outboundSchema
  ),
  qtiAssessmentItemRef: z.array(
    z.lazy(() => UpdateTestPartQtiAssessmentItemRef$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    attributes: "_attributes",
    qtiAssessmentItemRef: "qti-assessment-item-ref",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartQtiAssessmentSection$ {
  /** @deprecated use `UpdateTestPartQtiAssessmentSection$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartQtiAssessmentSection$inboundSchema;
  /** @deprecated use `UpdateTestPartQtiAssessmentSection$outboundSchema` instead. */
  export const outboundSchema =
    UpdateTestPartQtiAssessmentSection$outboundSchema;
  /** @deprecated use `UpdateTestPartQtiAssessmentSection$Outbound` instead. */
  export type Outbound = UpdateTestPartQtiAssessmentSection$Outbound;
}

export function updateTestPartQtiAssessmentSectionToJSON(
  updateTestPartQtiAssessmentSection: UpdateTestPartQtiAssessmentSection,
): string {
  return JSON.stringify(
    UpdateTestPartQtiAssessmentSection$outboundSchema.parse(
      updateTestPartQtiAssessmentSection,
    ),
  );
}

export function updateTestPartQtiAssessmentSectionFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTestPartQtiAssessmentSection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateTestPartQtiAssessmentSection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTestPartQtiAssessmentSection' from JSON`,
  );
}

/** @internal */
export const UpdateTestPartQtiTestPart$inboundSchema: z.ZodType<
  UpdateTestPartQtiTestPart,
  z.ZodTypeDef,
  unknown
> = z.object({
  _attributes: z.lazy(() => UpdateTestPartAttributes$inboundSchema),
  "qti-assessment-section": z.array(
    z.lazy(() => UpdateTestPartQtiAssessmentSection$inboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    "_attributes": "attributes",
    "qti-assessment-section": "qtiAssessmentSection",
  });
});

/** @internal */
export type UpdateTestPartQtiTestPart$Outbound = {
  _attributes: UpdateTestPartAttributes$Outbound;
  "qti-assessment-section": Array<UpdateTestPartQtiAssessmentSection$Outbound>;
};

/** @internal */
export const UpdateTestPartQtiTestPart$outboundSchema: z.ZodType<
  UpdateTestPartQtiTestPart$Outbound,
  z.ZodTypeDef,
  UpdateTestPartQtiTestPart
> = z.object({
  attributes: z.lazy(() => UpdateTestPartAttributes$outboundSchema),
  qtiAssessmentSection: z.array(
    z.lazy(() => UpdateTestPartQtiAssessmentSection$outboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    attributes: "_attributes",
    qtiAssessmentSection: "qti-assessment-section",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartQtiTestPart$ {
  /** @deprecated use `UpdateTestPartQtiTestPart$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartQtiTestPart$inboundSchema;
  /** @deprecated use `UpdateTestPartQtiTestPart$outboundSchema` instead. */
  export const outboundSchema = UpdateTestPartQtiTestPart$outboundSchema;
  /** @deprecated use `UpdateTestPartQtiTestPart$Outbound` instead. */
  export type Outbound = UpdateTestPartQtiTestPart$Outbound;
}

export function updateTestPartQtiTestPartToJSON(
  updateTestPartQtiTestPart: UpdateTestPartQtiTestPart,
): string {
  return JSON.stringify(
    UpdateTestPartQtiTestPart$outboundSchema.parse(updateTestPartQtiTestPart),
  );
}

export function updateTestPartQtiTestPartFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTestPartQtiTestPart, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTestPartQtiTestPart$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTestPartQtiTestPart' from JSON`,
  );
}

/** @internal */
export const UpdateTestPartContent$inboundSchema: z.ZodType<
  UpdateTestPartContent,
  z.ZodTypeDef,
  unknown
> = z.object({
  "qti-test-part": z.lazy(() => UpdateTestPartQtiTestPart$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "qti-test-part": "qtiTestPart",
  });
});

/** @internal */
export type UpdateTestPartContent$Outbound = {
  "qti-test-part": UpdateTestPartQtiTestPart$Outbound;
};

/** @internal */
export const UpdateTestPartContent$outboundSchema: z.ZodType<
  UpdateTestPartContent$Outbound,
  z.ZodTypeDef,
  UpdateTestPartContent
> = z.object({
  qtiTestPart: z.lazy(() => UpdateTestPartQtiTestPart$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    qtiTestPart: "qti-test-part",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartContent$ {
  /** @deprecated use `UpdateTestPartContent$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartContent$inboundSchema;
  /** @deprecated use `UpdateTestPartContent$outboundSchema` instead. */
  export const outboundSchema = UpdateTestPartContent$outboundSchema;
  /** @deprecated use `UpdateTestPartContent$Outbound` instead. */
  export type Outbound = UpdateTestPartContent$Outbound;
}

export function updateTestPartContentToJSON(
  updateTestPartContent: UpdateTestPartContent,
): string {
  return JSON.stringify(
    UpdateTestPartContent$outboundSchema.parse(updateTestPartContent),
  );
}

export function updateTestPartContentFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTestPartContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTestPartContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTestPartContent' from JSON`,
  );
}

/** @internal */
export const UpdateTestPartResponse$inboundSchema: z.ZodType<
  UpdateTestPartResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  navigationMode: UpdateTestPartNavigationMode$inboundSchema,
  submissionMode: UpdateTestPartSubmissionMode$inboundSchema,
  "qti-assessment-section": z.array(models.Section$inboundSchema),
  rawXml: z.string(),
  content: z.lazy(() => UpdateTestPartContent$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "qti-assessment-section": "qtiAssessmentSection",
  });
});

/** @internal */
export type UpdateTestPartResponse$Outbound = {
  identifier: string;
  navigationMode: string;
  submissionMode: string;
  "qti-assessment-section": Array<models.Section$Outbound>;
  rawXml: string;
  content: UpdateTestPartContent$Outbound;
};

/** @internal */
export const UpdateTestPartResponse$outboundSchema: z.ZodType<
  UpdateTestPartResponse$Outbound,
  z.ZodTypeDef,
  UpdateTestPartResponse
> = z.object({
  identifier: z.string(),
  navigationMode: UpdateTestPartNavigationMode$outboundSchema,
  submissionMode: UpdateTestPartSubmissionMode$outboundSchema,
  qtiAssessmentSection: z.array(models.Section$outboundSchema),
  rawXml: z.string(),
  content: z.lazy(() => UpdateTestPartContent$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    qtiAssessmentSection: "qti-assessment-section",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTestPartResponse$ {
  /** @deprecated use `UpdateTestPartResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateTestPartResponse$inboundSchema;
  /** @deprecated use `UpdateTestPartResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateTestPartResponse$outboundSchema;
  /** @deprecated use `UpdateTestPartResponse$Outbound` instead. */
  export type Outbound = UpdateTestPartResponse$Outbound;
}

export function updateTestPartResponseToJSON(
  updateTestPartResponse: UpdateTestPartResponse,
): string {
  return JSON.stringify(
    UpdateTestPartResponse$outboundSchema.parse(updateTestPartResponse),
  );
}

export function updateTestPartResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTestPartResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTestPartResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTestPartResponse' from JSON`,
  );
}
