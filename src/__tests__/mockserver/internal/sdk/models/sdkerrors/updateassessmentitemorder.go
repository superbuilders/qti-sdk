// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package sdkerrors

import (
	"encoding/json"
	"mockserver/internal/sdk/models/components"
)

// UpdateAssessmentItemOrderInternalServerError - Internal server error response
type UpdateAssessmentItemOrderInternalServerError struct {
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

var _ error = &UpdateAssessmentItemOrderInternalServerError{}

func (e *UpdateAssessmentItemOrderInternalServerError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// UpdateAssessmentItemOrderNotFoundError - Assessment test, test part, section, or item references not found
type UpdateAssessmentItemOrderNotFoundError struct {
	Error_   string                  `json:"error"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &UpdateAssessmentItemOrderNotFoundError{}

func (e *UpdateAssessmentItemOrderNotFoundError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// UpdateAssessmentItemOrderBadRequestError - Invalid items array or validation error
type UpdateAssessmentItemOrderBadRequestError struct {
	Error_   string                  `json:"error"`
	Details  *string                 `json:"details,omitempty"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &UpdateAssessmentItemOrderBadRequestError{}

func (e *UpdateAssessmentItemOrderBadRequestError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}
