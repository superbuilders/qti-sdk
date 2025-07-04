// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package sdkerrors

import (
	"encoding/json"
	"mockserver/internal/sdk/models/components"
)

// CreateAssessmentTestRawInternalServerError - Internal server error response
type CreateAssessmentTestRawInternalServerError struct {
	// Error type identifier
	Error_ string `json:"error"`
	// Human-readable error message
	Message string `json:"message"`
	// Sentry event ID for error tracking
	EventID *string `json:"eventId,omitempty"`
	// Stack trace or additional error details
	Details  string                  `json:"details"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &CreateAssessmentTestRawInternalServerError{}

func (e *CreateAssessmentTestRawInternalServerError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// CreateAssessmentTestRawConflictError - Assessment test with this identifier already exists
type CreateAssessmentTestRawConflictError struct {
	Error_   string                  `json:"error"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &CreateAssessmentTestRawConflictError{}

func (e *CreateAssessmentTestRawConflictError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// CreateAssessmentTestRawBadRequestError - Invalid assessment test data
type CreateAssessmentTestRawBadRequestError struct {
	Error_   string                  `json:"error"`
	Details  *string                 `json:"details,omitempty"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &CreateAssessmentTestRawBadRequestError{}

func (e *CreateAssessmentTestRawBadRequestError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}
