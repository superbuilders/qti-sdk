// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package sdkerrors

import (
	"encoding/json"
	"mockserver/internal/sdk/models/components"
)

// SearchSectionsInternalServerError - Internal server error response
type SearchSectionsInternalServerError struct {
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

var _ error = &SearchSectionsInternalServerError{}

func (e *SearchSectionsInternalServerError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// SearchSectionsNotFoundError - Assessment test or test part not found
type SearchSectionsNotFoundError struct {
	Error_   string                  `json:"error"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &SearchSectionsNotFoundError{}

func (e *SearchSectionsNotFoundError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}

// SearchSectionsBadRequestError - Missing required parameters
type SearchSectionsBadRequestError struct {
	Error_   string                  `json:"error"`
	Details  *string                 `json:"details,omitempty"`
	HTTPMeta components.HTTPMetadata `json:"-"`
}

var _ error = &SearchSectionsBadRequestError{}

func (e *SearchSectionsBadRequestError) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}
