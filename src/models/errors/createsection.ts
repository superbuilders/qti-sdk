/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { QtiError } from "./qtierror.js";

/**
 * XML format not supported
 */
export type CreateSectionNotImplementedErrorData = {
  error: string;
};

/**
 * XML format not supported
 */
export class CreateSectionNotImplementedError extends QtiError {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: CreateSectionNotImplementedErrorData;

  constructor(
    err: CreateSectionNotImplementedErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "CreateSectionNotImplementedError";
  }
}

/**
 * Internal server error response
 */
export type CreateSectionInternalServerErrorData = {
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
export class CreateSectionInternalServerError extends QtiError {
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
  data$: CreateSectionInternalServerErrorData;

  constructor(
    err: CreateSectionInternalServerErrorData,
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

    this.name = "CreateSectionInternalServerError";
  }
}

/**
 * Assessment test or test part not found
 */
export type CreateSectionNotFoundErrorData = {
  error: string;
};

/**
 * Assessment test or test part not found
 */
export class CreateSectionNotFoundError extends QtiError {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: CreateSectionNotFoundErrorData;

  constructor(
    err: CreateSectionNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "CreateSectionNotFoundError";
  }
}

/**
 * Invalid request body or validation error
 */
export type CreateSectionBadRequestErrorData = {
  error: string;
  details?: string | undefined;
};

/**
 * Invalid request body or validation error
 */
export class CreateSectionBadRequestError extends QtiError {
  error: string;
  details?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: CreateSectionBadRequestErrorData;

  constructor(
    err: CreateSectionBadRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;
    if (err.details != null) this.details = err.details;

    this.name = "CreateSectionBadRequestError";
  }
}

/** @internal */
export const CreateSectionNotImplementedError$inboundSchema: z.ZodType<
  CreateSectionNotImplementedError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new CreateSectionNotImplementedError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type CreateSectionNotImplementedError$Outbound = {
  error: string;
};

/** @internal */
export const CreateSectionNotImplementedError$outboundSchema: z.ZodType<
  CreateSectionNotImplementedError$Outbound,
  z.ZodTypeDef,
  CreateSectionNotImplementedError
> = z.instanceof(CreateSectionNotImplementedError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSectionNotImplementedError$ {
  /** @deprecated use `CreateSectionNotImplementedError$inboundSchema` instead. */
  export const inboundSchema = CreateSectionNotImplementedError$inboundSchema;
  /** @deprecated use `CreateSectionNotImplementedError$outboundSchema` instead. */
  export const outboundSchema = CreateSectionNotImplementedError$outboundSchema;
  /** @deprecated use `CreateSectionNotImplementedError$Outbound` instead. */
  export type Outbound = CreateSectionNotImplementedError$Outbound;
}

/** @internal */
export const CreateSectionInternalServerError$inboundSchema: z.ZodType<
  CreateSectionInternalServerError,
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
    return new CreateSectionInternalServerError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type CreateSectionInternalServerError$Outbound = {
  error: string;
  message: string;
  eventId?: string | undefined;
  details: string;
};

/** @internal */
export const CreateSectionInternalServerError$outboundSchema: z.ZodType<
  CreateSectionInternalServerError$Outbound,
  z.ZodTypeDef,
  CreateSectionInternalServerError
> = z.instanceof(CreateSectionInternalServerError)
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
export namespace CreateSectionInternalServerError$ {
  /** @deprecated use `CreateSectionInternalServerError$inboundSchema` instead. */
  export const inboundSchema = CreateSectionInternalServerError$inboundSchema;
  /** @deprecated use `CreateSectionInternalServerError$outboundSchema` instead. */
  export const outboundSchema = CreateSectionInternalServerError$outboundSchema;
  /** @deprecated use `CreateSectionInternalServerError$Outbound` instead. */
  export type Outbound = CreateSectionInternalServerError$Outbound;
}

/** @internal */
export const CreateSectionNotFoundError$inboundSchema: z.ZodType<
  CreateSectionNotFoundError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new CreateSectionNotFoundError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type CreateSectionNotFoundError$Outbound = {
  error: string;
};

/** @internal */
export const CreateSectionNotFoundError$outboundSchema: z.ZodType<
  CreateSectionNotFoundError$Outbound,
  z.ZodTypeDef,
  CreateSectionNotFoundError
> = z.instanceof(CreateSectionNotFoundError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSectionNotFoundError$ {
  /** @deprecated use `CreateSectionNotFoundError$inboundSchema` instead. */
  export const inboundSchema = CreateSectionNotFoundError$inboundSchema;
  /** @deprecated use `CreateSectionNotFoundError$outboundSchema` instead. */
  export const outboundSchema = CreateSectionNotFoundError$outboundSchema;
  /** @deprecated use `CreateSectionNotFoundError$Outbound` instead. */
  export type Outbound = CreateSectionNotFoundError$Outbound;
}

/** @internal */
export const CreateSectionBadRequestError$inboundSchema: z.ZodType<
  CreateSectionBadRequestError,
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
    return new CreateSectionBadRequestError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type CreateSectionBadRequestError$Outbound = {
  error: string;
  details?: string | undefined;
};

/** @internal */
export const CreateSectionBadRequestError$outboundSchema: z.ZodType<
  CreateSectionBadRequestError$Outbound,
  z.ZodTypeDef,
  CreateSectionBadRequestError
> = z.instanceof(CreateSectionBadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
    details: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSectionBadRequestError$ {
  /** @deprecated use `CreateSectionBadRequestError$inboundSchema` instead. */
  export const inboundSchema = CreateSectionBadRequestError$inboundSchema;
  /** @deprecated use `CreateSectionBadRequestError$outboundSchema` instead. */
  export const outboundSchema = CreateSectionBadRequestError$outboundSchema;
  /** @deprecated use `CreateSectionBadRequestError$Outbound` instead. */
  export type Outbound = CreateSectionBadRequestError$Outbound;
}
