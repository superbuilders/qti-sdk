// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
)

type UpdateTestPartRequest struct {
	// The unique identifier of the parent assessment test
	AssessmentTestIdentifier string `pathParam:"style=simple,explode=false,name=assessmentTestIdentifier"`
	// The unique identifier of the test part to update
	Identifier string `pathParam:"style=simple,explode=false,name=identifier"`
	// The test part to update
	TestPart components.TestPart `request:"mediaType=application/json"`
}

func (o *UpdateTestPartRequest) GetAssessmentTestIdentifier() string {
	if o == nil {
		return ""
	}
	return o.AssessmentTestIdentifier
}

func (o *UpdateTestPartRequest) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateTestPartRequest) GetTestPart() components.TestPart {
	if o == nil {
		return components.TestPart{}
	}
	return o.TestPart
}

// UpdateTestPartNavigationMode - Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
type UpdateTestPartNavigationMode string

const (
	UpdateTestPartNavigationModeLinear    UpdateTestPartNavigationMode = "linear"
	UpdateTestPartNavigationModeNonlinear UpdateTestPartNavigationMode = "nonlinear"
)

func (e UpdateTestPartNavigationMode) ToPointer() *UpdateTestPartNavigationMode {
	return &e
}
func (e *UpdateTestPartNavigationMode) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "linear":
		fallthrough
	case "nonlinear":
		*e = UpdateTestPartNavigationMode(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateTestPartNavigationMode: %v", v)
	}
}

// UpdateTestPartSubmissionMode - Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
type UpdateTestPartSubmissionMode string

const (
	UpdateTestPartSubmissionModeIndividual   UpdateTestPartSubmissionMode = "individual"
	UpdateTestPartSubmissionModeSimultaneous UpdateTestPartSubmissionMode = "simultaneous"
)

func (e UpdateTestPartSubmissionMode) ToPointer() *UpdateTestPartSubmissionMode {
	return &e
}
func (e *UpdateTestPartSubmissionMode) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "individual":
		fallthrough
	case "simultaneous":
		*e = UpdateTestPartSubmissionMode(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateTestPartSubmissionMode: %v", v)
	}
}

type UpdateTestPartAttributes struct {
	Identifier     string `json:"identifier"`
	NavigationMode string `json:"navigation-mode"`
	SubmissionMode string `json:"submission-mode"`
}

func (o *UpdateTestPartAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateTestPartAttributes) GetNavigationMode() string {
	if o == nil {
		return ""
	}
	return o.NavigationMode
}

func (o *UpdateTestPartAttributes) GetSubmissionMode() string {
	if o == nil {
		return ""
	}
	return o.SubmissionMode
}

type UpdateTestPartQtiAssessmentSectionAttributes struct {
	Identifier string `json:"identifier"`
	Title      string `json:"title"`
	Visible    string `json:"visible"`
	Required   string `json:"required"`
	Fixed      string `json:"fixed"`
}

func (o *UpdateTestPartQtiAssessmentSectionAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateTestPartQtiAssessmentSectionAttributes) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *UpdateTestPartQtiAssessmentSectionAttributes) GetVisible() string {
	if o == nil {
		return ""
	}
	return o.Visible
}

func (o *UpdateTestPartQtiAssessmentSectionAttributes) GetRequired() string {
	if o == nil {
		return ""
	}
	return o.Required
}

func (o *UpdateTestPartQtiAssessmentSectionAttributes) GetFixed() string {
	if o == nil {
		return ""
	}
	return o.Fixed
}

type UpdateTestPartQtiAssessmentItemRefAttributes struct {
	Identifier string `json:"identifier"`
	Href       string `json:"href"`
}

func (o *UpdateTestPartQtiAssessmentItemRefAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateTestPartQtiAssessmentItemRefAttributes) GetHref() string {
	if o == nil {
		return ""
	}
	return o.Href
}

type UpdateTestPartQtiAssessmentItemRef struct {
	Attributes UpdateTestPartQtiAssessmentItemRefAttributes `json:"_attributes"`
}

func (o *UpdateTestPartQtiAssessmentItemRef) GetAttributes() UpdateTestPartQtiAssessmentItemRefAttributes {
	if o == nil {
		return UpdateTestPartQtiAssessmentItemRefAttributes{}
	}
	return o.Attributes
}

type UpdateTestPartQtiAssessmentSection struct {
	Attributes           UpdateTestPartQtiAssessmentSectionAttributes `json:"_attributes"`
	QtiAssessmentItemRef []UpdateTestPartQtiAssessmentItemRef         `json:"qti-assessment-item-ref,omitempty"`
}

func (o *UpdateTestPartQtiAssessmentSection) GetAttributes() UpdateTestPartQtiAssessmentSectionAttributes {
	if o == nil {
		return UpdateTestPartQtiAssessmentSectionAttributes{}
	}
	return o.Attributes
}

func (o *UpdateTestPartQtiAssessmentSection) GetQtiAssessmentItemRef() []UpdateTestPartQtiAssessmentItemRef {
	if o == nil {
		return nil
	}
	return o.QtiAssessmentItemRef
}

type UpdateTestPartQtiTestPart struct {
	Attributes           UpdateTestPartAttributes             `json:"_attributes"`
	QtiAssessmentSection []UpdateTestPartQtiAssessmentSection `json:"qti-assessment-section"`
}

func (o *UpdateTestPartQtiTestPart) GetAttributes() UpdateTestPartAttributes {
	if o == nil {
		return UpdateTestPartAttributes{}
	}
	return o.Attributes
}

func (o *UpdateTestPartQtiTestPart) GetQtiAssessmentSection() []UpdateTestPartQtiAssessmentSection {
	if o == nil {
		return []UpdateTestPartQtiAssessmentSection{}
	}
	return o.QtiAssessmentSection
}

type UpdateTestPartContent struct {
	QtiTestPart UpdateTestPartQtiTestPart `json:"qti-test-part"`
}

func (o *UpdateTestPartContent) GetQtiTestPart() UpdateTestPartQtiTestPart {
	if o == nil {
		return UpdateTestPartQtiTestPart{}
	}
	return o.QtiTestPart
}

// UpdateTestPartResponseBody - Response data returned after successfully updating a test part. Contains the updated XML and parsed content structure.
type UpdateTestPartResponseBody struct {
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
	NavigationMode UpdateTestPartNavigationMode `json:"navigationMode"`
	// Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
	SubmissionMode       UpdateTestPartSubmissionMode `json:"submissionMode"`
	QtiAssessmentSection []components.Section         `json:"qti-assessment-section"`
	// Raw XML representation of the entity, automatically generated from the JSON or XML sent when creating entities on the service provider. The rawxml field will contain all content sent when creating the entity on the service provider. This field is stable and should be used when working within this QTI API.
	RawXML  string                `json:"rawXml"`
	Content UpdateTestPartContent `json:"content"`
}

func (o *UpdateTestPartResponseBody) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateTestPartResponseBody) GetNavigationMode() UpdateTestPartNavigationMode {
	if o == nil {
		return UpdateTestPartNavigationMode("")
	}
	return o.NavigationMode
}

func (o *UpdateTestPartResponseBody) GetSubmissionMode() UpdateTestPartSubmissionMode {
	if o == nil {
		return UpdateTestPartSubmissionMode("")
	}
	return o.SubmissionMode
}

func (o *UpdateTestPartResponseBody) GetQtiAssessmentSection() []components.Section {
	if o == nil {
		return []components.Section{}
	}
	return o.QtiAssessmentSection
}

func (o *UpdateTestPartResponseBody) GetRawXML() string {
	if o == nil {
		return ""
	}
	return o.RawXML
}

func (o *UpdateTestPartResponseBody) GetContent() UpdateTestPartContent {
	if o == nil {
		return UpdateTestPartContent{}
	}
	return o.Content
}

type UpdateTestPartResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Test part updated successfully
	Object *UpdateTestPartResponseBody
}

func (o *UpdateTestPartResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *UpdateTestPartResponse) GetObject() *UpdateTestPartResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
