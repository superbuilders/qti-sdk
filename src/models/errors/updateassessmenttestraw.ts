/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { QtiError } from "./qtierror.js";

/**
 * Internal server error response
 */
export type UpdateAssessmentTestRawInternalServerErrorData = {
  /**
   * Error type identifier
   */
  error: string;
  /**
   * Human-readable error message
   */
  message: string;
  /**
   * Sentry event ID for error tracking
   */
  eventId?: string | undefined;
  /**
   * Stack trace or additional error details
   */
  details: string;
};

/**
 * Internal server error response
 */
export class UpdateAssessmentTestRawInternalServerError extends QtiError {
  /**
   * Error type identifier
   */
  error: string;
  /**
   * Sentry event ID for error tracking
   */
  eventId?: string | undefined;
  /**
   * Stack trace or additional error details
   */
  details: string;

  /** The original data that was passed to this error instance. */
  data$: UpdateAssessmentTestRawInternalServerErrorData;

  constructor(
    err: UpdateAssessmentTestRawInternalServerErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;
    if (err.eventId != null) this.eventId = err.eventId;
    this.details = err.details;

    this.name = "UpdateAssessmentTestRawInternalServerError";
  }
}

/**
 * Assessment test not found
 */
export type UpdateAssessmentTestRawNotFoundErrorData = {
  error: string;
};

/**
 * Assessment test not found
 */
export class UpdateAssessmentTestRawNotFoundError extends QtiError {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: UpdateAssessmentTestRawNotFoundErrorData;

  constructor(
    err: UpdateAssessmentTestRawNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "UpdateAssessmentTestRawNotFoundError";
  }
}

/** @internal */
export const UpdateAssessmentTestRawInternalServerError$inboundSchema:
  z.ZodType<UpdateAssessmentTestRawInternalServerError, z.ZodTypeDef, unknown> =
    z.object({
      error: z.string(),
      message: z.string(),
      eventId: z.string().optional(),
      details: z.string(),
      request$: z.instanceof(Request),
      response$: z.instanceof(Response),
      body$: z.string(),
    })
      .transform((v) => {
        return new UpdateAssessmentTestRawInternalServerError(v, {
          request: v.request$,
          response: v.response$,
          body: v.body$,
        });
      });

/** @internal */
export type UpdateAssessmentTestRawInternalServerError$Outbound = {
  error: string;
  message: string;
  eventId?: string | undefined;
  details: string;
};

/** @internal */
export const UpdateAssessmentTestRawInternalServerError$outboundSchema:
  z.ZodType<
    UpdateAssessmentTestRawInternalServerError$Outbound,
    z.ZodTypeDef,
    UpdateAssessmentTestRawInternalServerError
  > = z.instanceof(UpdateAssessmentTestRawInternalServerError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.string(),
      message: z.string(),
      eventId: z.string().optional(),
      details: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAssessmentTestRawInternalServerError$ {
  /** @deprecated use `UpdateAssessmentTestRawInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    UpdateAssessmentTestRawInternalServerError$inboundSchema;
  /** @deprecated use `UpdateAssessmentTestRawInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    UpdateAssessmentTestRawInternalServerError$outboundSchema;
  /** @deprecated use `UpdateAssessmentTestRawInternalServerError$Outbound` instead. */
  export type Outbound = UpdateAssessmentTestRawInternalServerError$Outbound;
}

/** @internal */
export const UpdateAssessmentTestRawNotFoundError$inboundSchema: z.ZodType<
  UpdateAssessmentTestRawNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UpdateAssessmentTestRawNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UpdateAssessmentTestRawNotFoundError$Outbound = {
  error: string;
};

/** @internal */
export const UpdateAssessmentTestRawNotFoundError$outboundSchema: z.ZodType<
  UpdateAssessmentTestRawNotFoundError$Outbound,
  z.ZodTypeDef,
  UpdateAssessmentTestRawNotFoundError
> = z.instanceof(UpdateAssessmentTestRawNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAssessmentTestRawNotFoundError$ {
  /** @deprecated use `UpdateAssessmentTestRawNotFoundError$inboundSchema` instead. */
  export const inboundSchema =
    UpdateAssessmentTestRawNotFoundError$inboundSchema;
  /** @deprecated use `UpdateAssessmentTestRawNotFoundError$outboundSchema` instead. */
  export const outboundSchema =
    UpdateAssessmentTestRawNotFoundError$outboundSchema;
  /** @deprecated use `UpdateAssessmentTestRawNotFoundError$Outbound` instead. */
  export type Outbound = UpdateAssessmentTestRawNotFoundError$Outbound;
}
