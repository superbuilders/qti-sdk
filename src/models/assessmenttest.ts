/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  TestPart,
  TestPart$inboundSchema,
  TestPart$Outbound,
  TestPart$outboundSchema,
} from "./testpart.js";

/**
 * Defines how scoring information is structured and stored. 'single' for one overall score, 'multiple' for separate scores or points, 'ordered' for scores maintaining a specific sequence, 'record' for complex scoring with multiple named components.
 */
export const AssessmentTestCardinality = {
  Single: "single",
  Multiple: "multiple",
  Ordered: "ordered",
  Record: "record",
} as const;
/**
 * Defines how scoring information is structured and stored. 'single' for one overall score, 'multiple' for separate scores or points, 'ordered' for scores maintaining a specific sequence, 'record' for complex scoring with multiple named components.
 */
export type AssessmentTestCardinality = ClosedEnum<
  typeof AssessmentTestCardinality
>;

/**
 * Data type of the outcome variable, determining how values are stored and processed
 */
export const AssessmentTestBaseType = {
  Identifier: "identifier",
  Boolean: "boolean",
  Integer: "integer",
  Float: "float",
  String: "string",
  Point: "point",
  Pair: "pair",
  DirectedPair: "directedPair",
  Duration: "duration",
  File: "file",
  Uri: "uri",
} as const;
/**
 * Data type of the outcome variable, determining how values are stored and processed
 */
export type AssessmentTestBaseType = ClosedEnum<typeof AssessmentTestBaseType>;

/**
 * Optional default value configuration for outcome variables
 */
export type DefaultValue = {
  /**
   * The default value to assign to the outcome variable
   */
  value?: any | undefined;
};

export type QtiOutcomeDeclaration = {
  /**
   * Unique identifier for the entity on the service provider.
   */
  identifier: string;
  /**
   * Defines how scoring information is structured and stored. 'single' for one overall score, 'multiple' for separate scores or points, 'ordered' for scores maintaining a specific sequence, 'record' for complex scoring with multiple named components.
   */
  cardinality?: AssessmentTestCardinality | undefined;
  /**
   * Data type of the outcome variable, determining how values are stored and processed
   */
  baseType: AssessmentTestBaseType;
  /**
   * Expected maximum value for this outcome variable in normal circumstances
   */
  normalMaximum?: number | undefined;
  /**
   * Expected minimum value for this outcome variable in normal circumstances
   */
  normalMinimum?: number | undefined;
  /**
   * Optional default value configuration for outcome variables
   */
  defaultValue?: DefaultValue | undefined;
};

/**
 * Create a new assessment test on the service provider. The test must include at least one test part and can optionally include outcome declarations for result tracking
 */
export type AssessmentTest = {
  /**
   * Unique identifier for the entity on the service provider.
   */
  identifier: string;
  /**
   * Human-readable title of the entity on the service provider.
   */
  title: string;
  /**
   * Version of the specification used for this assessment test
   */
  qtiVersion?: string | undefined;
  /**
   * Name of the authoring tool that created this entity. The tool name characteristic allows the tool creating the test to identify itself. Other processing systems may use this information to interpret the content of application specific data, such as labels on the elements of the test rubric.
   */
  toolName?: string | undefined;
  /**
   * Version of the authoring tool that created this entity. The tool version characteristic allows the tool creating the test to identify its version. This value must only be interpreted in the context of the tool name.
   */
  toolVersion?: string | undefined;
  /**
   * Time limit for the entire assessment test in seconds. When not specified, there is no time limit
   */
  timeLimit?: number | undefined;
  /**
   * Maximum number of attempts allowed for the assessment test. When not specified, unlimited attempts are allowed
   */
  maxAttempts?: number | undefined;
  /**
   * Configuration of assessment tools available to candidates. Each tool is represented as a key-value pair where the key is the tool name and the value indicates if it's enabled
   */
  toolsEnabled?: { [k: string]: boolean } | undefined;
  /**
   * Additional custom metadata for extending entity properties beyond standard specification for QTI entities.
   */
  metadata?: { [k: string]: any } | undefined;
  /**
   * Array of test parts to include in this assessment test. At least one test part is required
   */
  qtiTestPart: Array<TestPart>;
  /**
   * Array of outcome variable declarations for storing assessment results and computed values
   */
  qtiOutcomeDeclaration?: Array<QtiOutcomeDeclaration> | undefined;
};

/** @internal */
export const AssessmentTestCardinality$inboundSchema: z.ZodNativeEnum<
  typeof AssessmentTestCardinality
> = z.nativeEnum(AssessmentTestCardinality);

/** @internal */
export const AssessmentTestCardinality$outboundSchema: z.ZodNativeEnum<
  typeof AssessmentTestCardinality
> = AssessmentTestCardinality$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentTestCardinality$ {
  /** @deprecated use `AssessmentTestCardinality$inboundSchema` instead. */
  export const inboundSchema = AssessmentTestCardinality$inboundSchema;
  /** @deprecated use `AssessmentTestCardinality$outboundSchema` instead. */
  export const outboundSchema = AssessmentTestCardinality$outboundSchema;
}

/** @internal */
export const AssessmentTestBaseType$inboundSchema: z.ZodNativeEnum<
  typeof AssessmentTestBaseType
> = z.nativeEnum(AssessmentTestBaseType);

/** @internal */
export const AssessmentTestBaseType$outboundSchema: z.ZodNativeEnum<
  typeof AssessmentTestBaseType
> = AssessmentTestBaseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentTestBaseType$ {
  /** @deprecated use `AssessmentTestBaseType$inboundSchema` instead. */
  export const inboundSchema = AssessmentTestBaseType$inboundSchema;
  /** @deprecated use `AssessmentTestBaseType$outboundSchema` instead. */
  export const outboundSchema = AssessmentTestBaseType$outboundSchema;
}

/** @internal */
export const DefaultValue$inboundSchema: z.ZodType<
  DefaultValue,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.any().optional(),
});

/** @internal */
export type DefaultValue$Outbound = {
  value?: any | undefined;
};

/** @internal */
export const DefaultValue$outboundSchema: z.ZodType<
  DefaultValue$Outbound,
  z.ZodTypeDef,
  DefaultValue
> = z.object({
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultValue$ {
  /** @deprecated use `DefaultValue$inboundSchema` instead. */
  export const inboundSchema = DefaultValue$inboundSchema;
  /** @deprecated use `DefaultValue$outboundSchema` instead. */
  export const outboundSchema = DefaultValue$outboundSchema;
  /** @deprecated use `DefaultValue$Outbound` instead. */
  export type Outbound = DefaultValue$Outbound;
}

export function defaultValueToJSON(defaultValue: DefaultValue): string {
  return JSON.stringify(DefaultValue$outboundSchema.parse(defaultValue));
}

export function defaultValueFromJSON(
  jsonString: string,
): SafeParseResult<DefaultValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DefaultValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DefaultValue' from JSON`,
  );
}

/** @internal */
export const QtiOutcomeDeclaration$inboundSchema: z.ZodType<
  QtiOutcomeDeclaration,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  cardinality: AssessmentTestCardinality$inboundSchema.default("single"),
  baseType: AssessmentTestBaseType$inboundSchema,
  normalMaximum: z.number().optional(),
  normalMinimum: z.number().optional(),
  defaultValue: z.lazy(() => DefaultValue$inboundSchema).optional(),
});

/** @internal */
export type QtiOutcomeDeclaration$Outbound = {
  identifier: string;
  cardinality: string;
  baseType: string;
  normalMaximum?: number | undefined;
  normalMinimum?: number | undefined;
  defaultValue?: DefaultValue$Outbound | undefined;
};

/** @internal */
export const QtiOutcomeDeclaration$outboundSchema: z.ZodType<
  QtiOutcomeDeclaration$Outbound,
  z.ZodTypeDef,
  QtiOutcomeDeclaration
> = z.object({
  identifier: z.string(),
  cardinality: AssessmentTestCardinality$outboundSchema.default("single"),
  baseType: AssessmentTestBaseType$outboundSchema,
  normalMaximum: z.number().optional(),
  normalMinimum: z.number().optional(),
  defaultValue: z.lazy(() => DefaultValue$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QtiOutcomeDeclaration$ {
  /** @deprecated use `QtiOutcomeDeclaration$inboundSchema` instead. */
  export const inboundSchema = QtiOutcomeDeclaration$inboundSchema;
  /** @deprecated use `QtiOutcomeDeclaration$outboundSchema` instead. */
  export const outboundSchema = QtiOutcomeDeclaration$outboundSchema;
  /** @deprecated use `QtiOutcomeDeclaration$Outbound` instead. */
  export type Outbound = QtiOutcomeDeclaration$Outbound;
}

export function qtiOutcomeDeclarationToJSON(
  qtiOutcomeDeclaration: QtiOutcomeDeclaration,
): string {
  return JSON.stringify(
    QtiOutcomeDeclaration$outboundSchema.parse(qtiOutcomeDeclaration),
  );
}

export function qtiOutcomeDeclarationFromJSON(
  jsonString: string,
): SafeParseResult<QtiOutcomeDeclaration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QtiOutcomeDeclaration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QtiOutcomeDeclaration' from JSON`,
  );
}

/** @internal */
export const AssessmentTest$inboundSchema: z.ZodType<
  AssessmentTest,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  title: z.string(),
  qtiVersion: z.string().default("3.0"),
  toolName: z.string().optional(),
  toolVersion: z.string().optional(),
  timeLimit: z.number().optional(),
  maxAttempts: z.number().optional(),
  toolsEnabled: z.record(z.boolean()).optional(),
  metadata: z.record(z.any()).optional(),
  "qti-test-part": z.array(TestPart$inboundSchema),
  "qti-outcome-declaration": z.array(
    z.lazy(() => QtiOutcomeDeclaration$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "qti-test-part": "qtiTestPart",
    "qti-outcome-declaration": "qtiOutcomeDeclaration",
  });
});

/** @internal */
export type AssessmentTest$Outbound = {
  identifier: string;
  title: string;
  qtiVersion: string;
  toolName?: string | undefined;
  toolVersion?: string | undefined;
  timeLimit?: number | undefined;
  maxAttempts?: number | undefined;
  toolsEnabled?: { [k: string]: boolean } | undefined;
  metadata?: { [k: string]: any } | undefined;
  "qti-test-part": Array<TestPart$Outbound>;
  "qti-outcome-declaration"?: Array<QtiOutcomeDeclaration$Outbound> | undefined;
};

/** @internal */
export const AssessmentTest$outboundSchema: z.ZodType<
  AssessmentTest$Outbound,
  z.ZodTypeDef,
  AssessmentTest
> = z.object({
  identifier: z.string(),
  title: z.string(),
  qtiVersion: z.string().default("3.0"),
  toolName: z.string().optional(),
  toolVersion: z.string().optional(),
  timeLimit: z.number().optional(),
  maxAttempts: z.number().optional(),
  toolsEnabled: z.record(z.boolean()).optional(),
  metadata: z.record(z.any()).optional(),
  qtiTestPart: z.array(TestPart$outboundSchema),
  qtiOutcomeDeclaration: z.array(
    z.lazy(() => QtiOutcomeDeclaration$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    qtiTestPart: "qti-test-part",
    qtiOutcomeDeclaration: "qti-outcome-declaration",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentTest$ {
  /** @deprecated use `AssessmentTest$inboundSchema` instead. */
  export const inboundSchema = AssessmentTest$inboundSchema;
  /** @deprecated use `AssessmentTest$outboundSchema` instead. */
  export const outboundSchema = AssessmentTest$outboundSchema;
  /** @deprecated use `AssessmentTest$Outbound` instead. */
  export type Outbound = AssessmentTest$Outbound;
}

export function assessmentTestToJSON(assessmentTest: AssessmentTest): string {
  return JSON.stringify(AssessmentTest$outboundSchema.parse(assessmentTest));
}

export function assessmentTestFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentTest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentTest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentTest' from JSON`,
  );
}
