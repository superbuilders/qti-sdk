// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package sdkerrors

import (
	"encoding/json"
	"mockserver/internal/sdk/models/components"
)

// CreateAssessmentTestInternalServerError - Internal server error response
type CreateAssessmentTestInternalServerError struct {
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

var _ error = &CreateAssessmentTestInternalServerError{}

func (e *CreateAssessmentTestInternalServerError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// CreateAssessmentTestConflictError - Assessment test with this identifier already exists
type CreateAssessmentTestConflictError struct {
	Error_   string                  `json:"error"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &CreateAssessmentTestConflictError{}

func (e *CreateAssessmentTestConflictError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// CreateAssessmentTestBadRequestError - Invalid assessment test data
type CreateAssessmentTestBadRequestError struct {
	Error_   string                  `json:"error"`
	Details  *string                 `json:"details,omitempty"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &CreateAssessmentTestBadRequestError{}

func (e *CreateAssessmentTestBadRequestError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}
