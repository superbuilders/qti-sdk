/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { QtiError } from "./qtierror.js";

/**
 * Internal server error response
 */
export type AddAssessmentItemInternalServerErrorData = {
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
export class AddAssessmentItemInternalServerError extends QtiError {
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
  data$: AddAssessmentItemInternalServerErrorData;

  constructor(
    err: AddAssessmentItemInternalServerErrorData,
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

    this.name = "AddAssessmentItemInternalServerError";
  }
}

/**
 * Assessment test, test part, section, or assessment item not found
 */
export type AddAssessmentItemNotFoundErrorData = {
  error: string;
};

/**
 * Assessment test, test part, section, or assessment item not found
 */
export class AddAssessmentItemNotFoundError extends QtiError {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: AddAssessmentItemNotFoundErrorData;

  constructor(
    err: AddAssessmentItemNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "AddAssessmentItemNotFoundError";
  }
}

/**
 * Missing assessment item identifier or item already exists in section
 */
export type AddAssessmentItemBadRequestErrorData = {
  error: string;
  details?: string | undefined;
};

/**
 * Missing assessment item identifier or item already exists in section
 */
export class AddAssessmentItemBadRequestError extends QtiError {
  error: string;
  details?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: AddAssessmentItemBadRequestErrorData;

  constructor(
    err: AddAssessmentItemBadRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;
    if (err.details != null) this.details = err.details;

    this.name = "AddAssessmentItemBadRequestError";
  }
}

/** @internal */
export const AddAssessmentItemInternalServerError$inboundSchema: z.ZodType<
  AddAssessmentItemInternalServerError,
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
    return new AddAssessmentItemInternalServerError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type AddAssessmentItemInternalServerError$Outbound = {
  error: string;
  message: string;
  eventId?: string | undefined;
  details: string;
};

/** @internal */
export const AddAssessmentItemInternalServerError$outboundSchema: z.ZodType<
  AddAssessmentItemInternalServerError$Outbound,
  z.ZodTypeDef,
  AddAssessmentItemInternalServerError
> = z.instanceof(AddAssessmentItemInternalServerError)
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
export namespace AddAssessmentItemInternalServerError$ {
  /** @deprecated use `AddAssessmentItemInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    AddAssessmentItemInternalServerError$inboundSchema;
  /** @deprecated use `AddAssessmentItemInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    AddAssessmentItemInternalServerError$outboundSchema;
  /** @deprecated use `AddAssessmentItemInternalServerError$Outbound` instead. */
  export type Outbound = AddAssessmentItemInternalServerError$Outbound;
}

/** @internal */
export const AddAssessmentItemNotFoundError$inboundSchema: z.ZodType<
  AddAssessmentItemNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new AddAssessmentItemNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type AddAssessmentItemNotFoundError$Outbound = {
  error: string;
};

/** @internal */
export const AddAssessmentItemNotFoundError$outboundSchema: z.ZodType<
  AddAssessmentItemNotFoundError$Outbound,
  z.ZodTypeDef,
  AddAssessmentItemNotFoundError
> = z.instanceof(AddAssessmentItemNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddAssessmentItemNotFoundError$ {
  /** @deprecated use `AddAssessmentItemNotFoundError$inboundSchema` instead. */
  export const inboundSchema = AddAssessmentItemNotFoundError$inboundSchema;
  /** @deprecated use `AddAssessmentItemNotFoundError$outboundSchema` instead. */
  export const outboundSchema = AddAssessmentItemNotFoundError$outboundSchema;
  /** @deprecated use `AddAssessmentItemNotFoundError$Outbound` instead. */
  export type Outbound = AddAssessmentItemNotFoundError$Outbound;
}

/** @internal */
export const AddAssessmentItemBadRequestError$inboundSchema: z.ZodType<
  AddAssessmentItemBadRequestError,
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
    return new AddAssessmentItemBadRequestError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type AddAssessmentItemBadRequestError$Outbound = {
  error: string;
  details?: string | undefined;
};

/** @internal */
export const AddAssessmentItemBadRequestError$outboundSchema: z.ZodType<
  AddAssessmentItemBadRequestError$Outbound,
  z.ZodTypeDef,
  AddAssessmentItemBadRequestError
> = z.instanceof(AddAssessmentItemBadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
    details: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddAssessmentItemBadRequestError$ {
  /** @deprecated use `AddAssessmentItemBadRequestError$inboundSchema` instead. */
  export const inboundSchema = AddAssessmentItemBadRequestError$inboundSchema;
  /** @deprecated use `AddAssessmentItemBadRequestError$outboundSchema` instead. */
  export const outboundSchema = AddAssessmentItemBadRequestError$outboundSchema;
  /** @deprecated use `AddAssessmentItemBadRequestError$Outbound` instead. */
  export type Outbound = AddAssessmentItemBadRequestError$Outbound;
}
