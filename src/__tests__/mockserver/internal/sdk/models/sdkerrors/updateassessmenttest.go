// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package sdkerrors

import (
	"encoding/json"
	"mockserver/internal/sdk/models/components"
)

// UpdateAssessmentTestInternalServerError - Internal server error response
type UpdateAssessmentTestInternalServerError struct {
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

var _ error = &UpdateAssessmentTestInternalServerError{}

func (e *UpdateAssessmentTestInternalServerError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// UpdateAssessmentTestNotFoundError - Assessment test not found
type UpdateAssessmentTestNotFoundError struct {
	Error_   string                  `json:"error"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &UpdateAssessmentTestNotFoundError{}

func (e *UpdateAssessmentTestNotFoundError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}
