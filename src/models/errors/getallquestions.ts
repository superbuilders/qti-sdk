/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { QtiError } from "./qtierror.js";

/**
 * Internal server error response
 */
export type GetAllQuestionsInternalServerErrorData = {
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
export class GetAllQuestionsInternalServerError extends QtiError {
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
  data$: GetAllQuestionsInternalServerErrorData;

  constructor(
    err: GetAllQuestionsInternalServerErrorData,
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

    this.name = "GetAllQuestionsInternalServerError";
  }
}

/**
 * Assessment test not found
 */
export type GetAllQuestionsNotFoundErrorData = {
  error: string;
};

/**
 * Assessment test not found
 */
export class GetAllQuestionsNotFoundError extends QtiError {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: GetAllQuestionsNotFoundErrorData;

  constructor(
    err: GetAllQuestionsNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "GetAllQuestionsNotFoundError";
  }
}

/** @internal */
export const GetAllQuestionsInternalServerError$inboundSchema: z.ZodType<
  GetAllQuestionsInternalServerError,
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
    return new GetAllQuestionsInternalServerError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetAllQuestionsInternalServerError$Outbound = {
  error: string;
  message: string;
  eventId?: string | undefined;
  details: string;
};

/** @internal */
export const GetAllQuestionsInternalServerError$outboundSchema: z.ZodType<
  GetAllQuestionsInternalServerError$Outbound,
  z.ZodTypeDef,
  GetAllQuestionsInternalServerError
> = z.instanceof(GetAllQuestionsInternalServerError)
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
export namespace GetAllQuestionsInternalServerError$ {
  /** @deprecated use `GetAllQuestionsInternalServerError$inboundSchema` instead. */
  export const inboundSchema = GetAllQuestionsInternalServerError$inboundSchema;
  /** @deprecated use `GetAllQuestionsInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    GetAllQuestionsInternalServerError$outboundSchema;
  /** @deprecated use `GetAllQuestionsInternalServerError$Outbound` instead. */
  export type Outbound = GetAllQuestionsInternalServerError$Outbound;
}

/** @internal */
export const GetAllQuestionsNotFoundError$inboundSchema: z.ZodType<
  GetAllQuestionsNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new GetAllQuestionsNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetAllQuestionsNotFoundError$Outbound = {
  error: string;
};

/** @internal */
export const GetAllQuestionsNotFoundError$outboundSchema: z.ZodType<
  GetAllQuestionsNotFoundError$Outbound,
  z.ZodTypeDef,
  GetAllQuestionsNotFoundError
> = z.instanceof(GetAllQuestionsNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllQuestionsNotFoundError$ {
  /** @deprecated use `GetAllQuestionsNotFoundError$inboundSchema` instead. */
  export const inboundSchema = GetAllQuestionsNotFoundError$inboundSchema;
  /** @deprecated use `GetAllQuestionsNotFoundError$outboundSchema` instead. */
  export const outboundSchema = GetAllQuestionsNotFoundError$outboundSchema;
  /** @deprecated use `GetAllQuestionsNotFoundError$Outbound` instead. */
  export type Outbound = GetAllQuestionsNotFoundError$Outbound;
}
