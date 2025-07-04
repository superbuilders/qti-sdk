// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package sdkerrors

import (
	"encoding/json"
	"mockserver/internal/sdk/models/components"
)

// GetAssessmentItemInternalServerError - Internal server error response
type GetAssessmentItemInternalServerError struct {
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

var _ error = &GetAssessmentItemInternalServerError{}

func (e *GetAssessmentItemInternalServerError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// GetAssessmentItemNotFoundError - Item not found
type GetAssessmentItemNotFoundError struct {
	Error_   string                  `json:"error"`
	Details  *string                 `json:"details,omitempty"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &GetAssessmentItemNotFoundError{}

func (e *GetAssessmentItemNotFoundError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}
