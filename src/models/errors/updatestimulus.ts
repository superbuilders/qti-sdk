/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { QtiError } from "./qtierror.js";

/**
 * Internal server error response
 */
export type UpdateStimulusInternalServerErrorData = {
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
export class UpdateStimulusInternalServerError extends QtiError {
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
  data$: UpdateStimulusInternalServerErrorData;

  constructor(
    err: UpdateStimulusInternalServerErrorData,
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

    this.name = "UpdateStimulusInternalServerError";
  }
}

/**
 * Stimulus not found or Failed to update Stimulus
 */
export type UpdateStimulusNotFoundErrorData = {
  error: string;
};

/**
 * Stimulus not found or Failed to update Stimulus
 */
export class UpdateStimulusNotFoundError extends QtiError {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: UpdateStimulusNotFoundErrorData;

  constructor(
    err: UpdateStimulusNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "UpdateStimulusNotFoundError";
  }
}

/**
 * Invalid stimulus data
 */
export type UpdateStimulusBadRequestErrorData = {
  error: string;
  details?: string | undefined;
};

/**
 * Invalid stimulus data
 */
export class UpdateStimulusBadRequestError extends QtiError {
  error: string;
  details?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: UpdateStimulusBadRequestErrorData;

  constructor(
    err: UpdateStimulusBadRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;
    if (err.details != null) this.details = err.details;

    this.name = "UpdateStimulusBadRequestError";
  }
}

/** @internal */
export const UpdateStimulusInternalServerError$inboundSchema: z.ZodType<
  UpdateStimulusInternalServerError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  message: z.string(),
  eventId: z.string().optional(),
  details: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UpdateStimulusInternalServerError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UpdateStimulusInternalServerError$Outbound = {
  error: string;
  message: string;
  eventId?: string | undefined;
  details: string;
};

/** @internal */
export const UpdateStimulusInternalServerError$outboundSchema: z.ZodType<
  UpdateStimulusInternalServerError$Outbound,
  z.ZodTypeDef,
  UpdateStimulusInternalServerError
> = z.instanceof(UpdateStimulusInternalServerError)
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
export namespace UpdateStimulusInternalServerError$ {
  /** @deprecated use `UpdateStimulusInternalServerError$inboundSchema` instead. */
  export const inboundSchema = UpdateStimulusInternalServerError$inboundSchema;
  /** @deprecated use `UpdateStimulusInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    UpdateStimulusInternalServerError$outboundSchema;
  /** @deprecated use `UpdateStimulusInternalServerError$Outbound` instead. */
  export type Outbound = UpdateStimulusInternalServerError$Outbound;
}

/** @internal */
export const UpdateStimulusNotFoundError$inboundSchema: z.ZodType<
  UpdateStimulusNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UpdateStimulusNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UpdateStimulusNotFoundError$Outbound = {
  error: string;
};

/** @internal */
export const UpdateStimulusNotFoundError$outboundSchema: z.ZodType<
  UpdateStimulusNotFoundError$Outbound,
  z.ZodTypeDef,
  UpdateStimulusNotFoundError
> = z.instanceof(UpdateStimulusNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStimulusNotFoundError$ {
  /** @deprecated use `UpdateStimulusNotFoundError$inboundSchema` instead. */
  export const inboundSchema = UpdateStimulusNotFoundError$inboundSchema;
  /** @deprecated use `UpdateStimulusNotFoundError$outboundSchema` instead. */
  export const outboundSchema = UpdateStimulusNotFoundError$outboundSchema;
  /** @deprecated use `UpdateStimulusNotFoundError$Outbound` instead. */
  export type Outbound = UpdateStimulusNotFoundError$Outbound;
}

/** @internal */
export const UpdateStimulusBadRequestError$inboundSchema: z.ZodType<
  UpdateStimulusBadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  details: z.string().optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UpdateStimulusBadRequestError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UpdateStimulusBadRequestError$Outbound = {
  error: string;
  details?: string | undefined;
};

/** @internal */
export const UpdateStimulusBadRequestError$outboundSchema: z.ZodType<
  UpdateStimulusBadRequestError$Outbound,
  z.ZodTypeDef,
  UpdateStimulusBadRequestError
> = z.instanceof(UpdateStimulusBadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
    details: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStimulusBadRequestError$ {
  /** @deprecated use `UpdateStimulusBadRequestError$inboundSchema` instead. */
  export const inboundSchema = UpdateStimulusBadRequestError$inboundSchema;
  /** @deprecated use `UpdateStimulusBadRequestError$outboundSchema` instead. */
  export const outboundSchema = UpdateStimulusBadRequestError$outboundSchema;
  /** @deprecated use `UpdateStimulusBadRequestError$Outbound` instead. */
  export type Outbound = UpdateStimulusBadRequestError$Outbound;
}
