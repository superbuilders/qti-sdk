// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
	"time"
)

// UpdateAssessmentTestMetadataRequestBody - Update only the metadata fields of an assessment test without affecting its structure. This is a lightweight operation for administrative changes to title, description, and other metadata properties
type UpdateAssessmentTestMetadataRequestBody struct {
	// Additional custom metadata for extending entity properties beyond standard specification for QTI entities.
	Metadata map[string]any `json:"metadata,omitempty"`
}

func (o *UpdateAssessmentTestMetadataRequestBody) GetMetadata() map[string]any {
	if o == nil {
		return nil
	}
	return o.Metadata
}

type UpdateAssessmentTestMetadataRequest struct {
	// The identifier of the assessment test to update
	Identifier string `pathParam:"style=simple,explode=false,name=identifier"`
	// The assessment test metadata to update
	RequestBody UpdateAssessmentTestMetadataRequestBody `request:"mediaType=application/json"`
}

func (o *UpdateAssessmentTestMetadataRequest) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataRequest) GetRequestBody() UpdateAssessmentTestMetadataRequestBody {
	if o == nil {
		return UpdateAssessmentTestMetadataRequestBody{}
	}
	return o.RequestBody
}

// UpdateAssessmentTestMetadataNavigationMode - Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
type UpdateAssessmentTestMetadataNavigationMode string

const (
	UpdateAssessmentTestMetadataNavigationModeLinear    UpdateAssessmentTestMetadataNavigationMode = "linear"
	UpdateAssessmentTestMetadataNavigationModeNonlinear UpdateAssessmentTestMetadataNavigationMode = "nonlinear"
)

func (e UpdateAssessmentTestMetadataNavigationMode) ToPointer() *UpdateAssessmentTestMetadataNavigationMode {
	return &e
}
func (e *UpdateAssessmentTestMetadataNavigationMode) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "linear":
		fallthrough
	case "nonlinear":
		*e = UpdateAssessmentTestMetadataNavigationMode(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateAssessmentTestMetadataNavigationMode: %v", v)
	}
}

// UpdateAssessmentTestMetadataSubmissionMode - Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
type UpdateAssessmentTestMetadataSubmissionMode string

const (
	UpdateAssessmentTestMetadataSubmissionModeIndividual   UpdateAssessmentTestMetadataSubmissionMode = "individual"
	UpdateAssessmentTestMetadataSubmissionModeSimultaneous UpdateAssessmentTestMetadataSubmissionMode = "simultaneous"
)

func (e UpdateAssessmentTestMetadataSubmissionMode) ToPointer() *UpdateAssessmentTestMetadataSubmissionMode {
	return &e
}
func (e *UpdateAssessmentTestMetadataSubmissionMode) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "individual":
		fallthrough
	case "simultaneous":
		*e = UpdateAssessmentTestMetadataSubmissionMode(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateAssessmentTestMetadataSubmissionMode: %v", v)
	}
}

// UpdateAssessmentTestMetadataQtiAssessmentItemRef - Assessment item reference schema for linking assessment items to sections
type UpdateAssessmentTestMetadataQtiAssessmentItemRef struct {
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// URI reference to the assessment item resource location on the service provider
	Href *string `json:"href,omitempty"`
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentItemRef) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentItemRef) GetHref() *string {
	if o == nil {
		return nil
	}
	return o.Href
}

// UpdateAssessmentTestMetadataQtiAssessmentSection - Complete assessment section data with all referenced items. Represents a section containing learning content within a test part.
type UpdateAssessmentTestMetadataQtiAssessmentSection struct {
	// MongoDB document ID generated by the database when a new entity is added to a collection on the service provider.
	ID string `json:"_id"`
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// Human-readable title of the entity on the service provider.
	Title string `json:"title"`
	// Determines whether the assessment section is visible to candidates during test delivery. Sections are visible by default unless explicitly hidden for specific assessment conditions.
	Visible *bool `default:"true" json:"visible"`
	// If a child element is required it must appear (at least once) in the selection.
	Required *bool `default:"true" json:"required"`
	// If a child element is fixed it must never be shuffled. When used in combination with a selection rule fixed elements do not have their position fixed until after selection has taken place.
	Fixed *bool `default:"false" json:"fixed"`
	// Defines the sequential order of this item within its parent section. Must be a positive integer that determines presentation order to candidates.
	Sequence *int64 `json:"sequence,omitempty"`
	// Collection of assessment items that are referenced within this section.
	QtiAssessmentItemRef []UpdateAssessmentTestMetadataQtiAssessmentItemRef `json:"qti-assessment-item-ref,omitempty"`
}

func (u UpdateAssessmentTestMetadataQtiAssessmentSection) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(u, "", false)
}

func (u *UpdateAssessmentTestMetadataQtiAssessmentSection) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &u, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSection) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSection) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSection) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSection) GetVisible() *bool {
	if o == nil {
		return nil
	}
	return o.Visible
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSection) GetRequired() *bool {
	if o == nil {
		return nil
	}
	return o.Required
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSection) GetFixed() *bool {
	if o == nil {
		return nil
	}
	return o.Fixed
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSection) GetSequence() *int64 {
	if o == nil {
		return nil
	}
	return o.Sequence
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSection) GetQtiAssessmentItemRef() []UpdateAssessmentTestMetadataQtiAssessmentItemRef {
	if o == nil {
		return nil
	}
	return o.QtiAssessmentItemRef
}

// UpdateAssessmentTestMetadataQtiTestPart - Complete test part data returned from the service provider. Contains all sections and their configuration.
type UpdateAssessmentTestMetadataQtiTestPart struct {
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
	NavigationMode UpdateAssessmentTestMetadataNavigationMode `json:"navigationMode"`
	// Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
	SubmissionMode       UpdateAssessmentTestMetadataSubmissionMode         `json:"submissionMode"`
	QtiAssessmentSection []UpdateAssessmentTestMetadataQtiAssessmentSection `json:"qti-assessment-section"`
}

func (o *UpdateAssessmentTestMetadataQtiTestPart) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataQtiTestPart) GetNavigationMode() UpdateAssessmentTestMetadataNavigationMode {
	if o == nil {
		return UpdateAssessmentTestMetadataNavigationMode("")
	}
	return o.NavigationMode
}

func (o *UpdateAssessmentTestMetadataQtiTestPart) GetSubmissionMode() UpdateAssessmentTestMetadataSubmissionMode {
	if o == nil {
		return UpdateAssessmentTestMetadataSubmissionMode("")
	}
	return o.SubmissionMode
}

func (o *UpdateAssessmentTestMetadataQtiTestPart) GetQtiAssessmentSection() []UpdateAssessmentTestMetadataQtiAssessmentSection {
	if o == nil {
		return []UpdateAssessmentTestMetadataQtiAssessmentSection{}
	}
	return o.QtiAssessmentSection
}

// UpdateAssessmentTestMetadataCardinality - Defines how scoring information is structured and stored. 'single' for one overall score, 'multiple' for separate scores or points, 'ordered' for scores maintaining a specific sequence, 'record' for complex scoring with multiple named components.
type UpdateAssessmentTestMetadataCardinality string

const (
	UpdateAssessmentTestMetadataCardinalitySingle   UpdateAssessmentTestMetadataCardinality = "single"
	UpdateAssessmentTestMetadataCardinalityMultiple UpdateAssessmentTestMetadataCardinality = "multiple"
	UpdateAssessmentTestMetadataCardinalityOrdered  UpdateAssessmentTestMetadataCardinality = "ordered"
	UpdateAssessmentTestMetadataCardinalityRecord   UpdateAssessmentTestMetadataCardinality = "record"
)

func (e UpdateAssessmentTestMetadataCardinality) ToPointer() *UpdateAssessmentTestMetadataCardinality {
	return &e
}
func (e *UpdateAssessmentTestMetadataCardinality) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "single":
		fallthrough
	case "multiple":
		fallthrough
	case "ordered":
		fallthrough
	case "record":
		*e = UpdateAssessmentTestMetadataCardinality(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateAssessmentTestMetadataCardinality: %v", v)
	}
}

// UpdateAssessmentTestMetadataBaseType - Data type of the outcome variable, determining how values are stored and processed
type UpdateAssessmentTestMetadataBaseType string

const (
	UpdateAssessmentTestMetadataBaseTypeIdentifier   UpdateAssessmentTestMetadataBaseType = "identifier"
	UpdateAssessmentTestMetadataBaseTypeBoolean      UpdateAssessmentTestMetadataBaseType = "boolean"
	UpdateAssessmentTestMetadataBaseTypeInteger      UpdateAssessmentTestMetadataBaseType = "integer"
	UpdateAssessmentTestMetadataBaseTypeFloat        UpdateAssessmentTestMetadataBaseType = "float"
	UpdateAssessmentTestMetadataBaseTypeString       UpdateAssessmentTestMetadataBaseType = "string"
	UpdateAssessmentTestMetadataBaseTypePoint        UpdateAssessmentTestMetadataBaseType = "point"
	UpdateAssessmentTestMetadataBaseTypePair         UpdateAssessmentTestMetadataBaseType = "pair"
	UpdateAssessmentTestMetadataBaseTypeDirectedPair UpdateAssessmentTestMetadataBaseType = "directedPair"
	UpdateAssessmentTestMetadataBaseTypeDuration     UpdateAssessmentTestMetadataBaseType = "duration"
	UpdateAssessmentTestMetadataBaseTypeFile         UpdateAssessmentTestMetadataBaseType = "file"
	UpdateAssessmentTestMetadataBaseTypeURI          UpdateAssessmentTestMetadataBaseType = "uri"
)

func (e UpdateAssessmentTestMetadataBaseType) ToPointer() *UpdateAssessmentTestMetadataBaseType {
	return &e
}
func (e *UpdateAssessmentTestMetadataBaseType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "identifier":
		fallthrough
	case "boolean":
		fallthrough
	case "integer":
		fallthrough
	case "float":
		fallthrough
	case "string":
		fallthrough
	case "point":
		fallthrough
	case "pair":
		fallthrough
	case "directedPair":
		fallthrough
	case "duration":
		fallthrough
	case "file":
		fallthrough
	case "uri":
		*e = UpdateAssessmentTestMetadataBaseType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateAssessmentTestMetadataBaseType: %v", v)
	}
}

// UpdateAssessmentTestMetadataDefaultValue - Optional default value configuration for outcome variables
type UpdateAssessmentTestMetadataDefaultValue struct {
	// The default value to assign to the outcome variable
	Value any `json:"value,omitempty"`
}

func (o *UpdateAssessmentTestMetadataDefaultValue) GetValue() any {
	if o == nil {
		return nil
	}
	return o.Value
}

type UpdateAssessmentTestMetadataQtiOutcomeDeclaration struct {
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// Defines how scoring information is structured and stored. 'single' for one overall score, 'multiple' for separate scores or points, 'ordered' for scores maintaining a specific sequence, 'record' for complex scoring with multiple named components.
	Cardinality *UpdateAssessmentTestMetadataCardinality `default:"single" json:"cardinality"`
	// Data type of the outcome variable, determining how values are stored and processed
	BaseType UpdateAssessmentTestMetadataBaseType `json:"baseType"`
	// Expected maximum value for this outcome variable in normal circumstances
	NormalMaximum *float64 `json:"normalMaximum,omitempty"`
	// Expected minimum value for this outcome variable in normal circumstances
	NormalMinimum *float64 `json:"normalMinimum,omitempty"`
	// Optional default value configuration for outcome variables
	DefaultValue *UpdateAssessmentTestMetadataDefaultValue `json:"defaultValue,omitempty"`
}

func (u UpdateAssessmentTestMetadataQtiOutcomeDeclaration) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(u, "", false)
}

func (u *UpdateAssessmentTestMetadataQtiOutcomeDeclaration) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &u, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclaration) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclaration) GetCardinality() *UpdateAssessmentTestMetadataCardinality {
	if o == nil {
		return nil
	}
	return o.Cardinality
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclaration) GetBaseType() UpdateAssessmentTestMetadataBaseType {
	if o == nil {
		return UpdateAssessmentTestMetadataBaseType("")
	}
	return o.BaseType
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclaration) GetNormalMaximum() *float64 {
	if o == nil {
		return nil
	}
	return o.NormalMaximum
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclaration) GetNormalMinimum() *float64 {
	if o == nil {
		return nil
	}
	return o.NormalMinimum
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclaration) GetDefaultValue() *UpdateAssessmentTestMetadataDefaultValue {
	if o == nil {
		return nil
	}
	return o.DefaultValue
}

type UpdateAssessmentTestMetadataAttributes struct {
	Xmlns             string `json:"xmlns"`
	XmlnsXsi          string `json:"xmlns:xsi"`
	XsiSchemaLocation string `json:"xsi:schemaLocation"`
	Identifier        string `json:"identifier"`
	Title             string `json:"title"`
	ToolName          string `json:"tool-name"`
	ToolVersion       string `json:"tool-version"`
}

func (o *UpdateAssessmentTestMetadataAttributes) GetXmlns() string {
	if o == nil {
		return ""
	}
	return o.Xmlns
}

func (o *UpdateAssessmentTestMetadataAttributes) GetXmlnsXsi() string {
	if o == nil {
		return ""
	}
	return o.XmlnsXsi
}

func (o *UpdateAssessmentTestMetadataAttributes) GetXsiSchemaLocation() string {
	if o == nil {
		return ""
	}
	return o.XsiSchemaLocation
}

func (o *UpdateAssessmentTestMetadataAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataAttributes) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *UpdateAssessmentTestMetadataAttributes) GetToolName() string {
	if o == nil {
		return ""
	}
	return o.ToolName
}

func (o *UpdateAssessmentTestMetadataAttributes) GetToolVersion() string {
	if o == nil {
		return ""
	}
	return o.ToolVersion
}

type UpdateAssessmentTestMetadataQtiOutcomeDeclarationAttributes struct {
	Identifier  string `json:"identifier"`
	Cardinality string `json:"cardinality"`
	BaseType    string `json:"base-type"`
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclarationAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclarationAttributes) GetCardinality() string {
	if o == nil {
		return ""
	}
	return o.Cardinality
}

func (o *UpdateAssessmentTestMetadataQtiOutcomeDeclarationAttributes) GetBaseType() string {
	if o == nil {
		return ""
	}
	return o.BaseType
}

type UpdateAssessmentTestMetadataQtiDefaultValue struct {
	QtiValue any `json:"qti-value,omitempty"`
}

func (o *UpdateAssessmentTestMetadataQtiDefaultValue) GetQtiValue() any {
	if o == nil {
		return nil
	}
	return o.QtiValue
}

type UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration struct {
	Attributes      UpdateAssessmentTestMetadataQtiOutcomeDeclarationAttributes `json:"_attributes"`
	QtiDefaultValue *UpdateAssessmentTestMetadataQtiDefaultValue                `json:"qti-default-value,omitempty"`
	NormalMaximum   *float64                                                    `json:"normal-maximum,omitempty"`
	NormalMinimum   *float64                                                    `json:"normal-minimum,omitempty"`
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration) GetAttributes() UpdateAssessmentTestMetadataQtiOutcomeDeclarationAttributes {
	if o == nil {
		return UpdateAssessmentTestMetadataQtiOutcomeDeclarationAttributes{}
	}
	return o.Attributes
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration) GetQtiDefaultValue() *UpdateAssessmentTestMetadataQtiDefaultValue {
	if o == nil {
		return nil
	}
	return o.QtiDefaultValue
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration) GetNormalMaximum() *float64 {
	if o == nil {
		return nil
	}
	return o.NormalMaximum
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration) GetNormalMinimum() *float64 {
	if o == nil {
		return nil
	}
	return o.NormalMinimum
}

type UpdateAssessmentTestMetadataQtiTestPartAttributes struct {
	Identifier     string `json:"identifier"`
	NavigationMode string `json:"navigation-mode"`
	SubmissionMode string `json:"submission-mode"`
}

func (o *UpdateAssessmentTestMetadataQtiTestPartAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataQtiTestPartAttributes) GetNavigationMode() string {
	if o == nil {
		return ""
	}
	return o.NavigationMode
}

func (o *UpdateAssessmentTestMetadataQtiTestPartAttributes) GetSubmissionMode() string {
	if o == nil {
		return ""
	}
	return o.SubmissionMode
}

type UpdateAssessmentTestMetadataQtiAssessmentSectionAttributes struct {
	Identifier string `json:"identifier"`
	Title      string `json:"title"`
	Visible    string `json:"visible"`
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSectionAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSectionAttributes) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentSectionAttributes) GetVisible() string {
	if o == nil {
		return ""
	}
	return o.Visible
}

type UpdateAssessmentTestMetadataQtiAssessmentItemRefAttributes struct {
	Identifier string `json:"identifier"`
	Href       string `json:"href"`
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentItemRefAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentItemRefAttributes) GetHref() string {
	if o == nil {
		return ""
	}
	return o.Href
}

type UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentItemRef struct {
	Attributes UpdateAssessmentTestMetadataQtiAssessmentItemRefAttributes `json:"_attributes"`
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentItemRef) GetAttributes() UpdateAssessmentTestMetadataQtiAssessmentItemRefAttributes {
	if o == nil {
		return UpdateAssessmentTestMetadataQtiAssessmentItemRefAttributes{}
	}
	return o.Attributes
}

type UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentSection struct {
	Attributes           UpdateAssessmentTestMetadataQtiAssessmentSectionAttributes          `json:"_attributes"`
	QtiAssessmentItemRef []UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentItemRef `json:"qti-assessment-item-ref,omitempty"`
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentSection) GetAttributes() UpdateAssessmentTestMetadataQtiAssessmentSectionAttributes {
	if o == nil {
		return UpdateAssessmentTestMetadataQtiAssessmentSectionAttributes{}
	}
	return o.Attributes
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentSection) GetQtiAssessmentItemRef() []UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentItemRef {
	if o == nil {
		return nil
	}
	return o.QtiAssessmentItemRef
}

type UpdateAssessmentTestMetadataQtiAssessmentTestQtiTestPart struct {
	Attributes           UpdateAssessmentTestMetadataQtiTestPartAttributes                   `json:"_attributes"`
	QtiAssessmentSection []UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentSection `json:"qti-assessment-section"`
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiTestPart) GetAttributes() UpdateAssessmentTestMetadataQtiTestPartAttributes {
	if o == nil {
		return UpdateAssessmentTestMetadataQtiTestPartAttributes{}
	}
	return o.Attributes
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTestQtiTestPart) GetQtiAssessmentSection() []UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentSection {
	if o == nil {
		return []UpdateAssessmentTestMetadataQtiAssessmentTestQtiAssessmentSection{}
	}
	return o.QtiAssessmentSection
}

type UpdateAssessmentTestMetadataQtiAssessmentTest struct {
	Attributes            UpdateAssessmentTestMetadataAttributes                               `json:"_attributes"`
	QtiOutcomeDeclaration []UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration `json:"qti-outcome-declaration"`
	QtiTestPart           []UpdateAssessmentTestMetadataQtiAssessmentTestQtiTestPart           `json:"qti-test-part"`
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTest) GetAttributes() UpdateAssessmentTestMetadataAttributes {
	if o == nil {
		return UpdateAssessmentTestMetadataAttributes{}
	}
	return o.Attributes
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTest) GetQtiOutcomeDeclaration() []UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration {
	if o == nil {
		return []UpdateAssessmentTestMetadataQtiAssessmentTestQtiOutcomeDeclaration{}
	}
	return o.QtiOutcomeDeclaration
}

func (o *UpdateAssessmentTestMetadataQtiAssessmentTest) GetQtiTestPart() []UpdateAssessmentTestMetadataQtiAssessmentTestQtiTestPart {
	if o == nil {
		return []UpdateAssessmentTestMetadataQtiAssessmentTestQtiTestPart{}
	}
	return o.QtiTestPart
}

// UpdateAssessmentTestMetadataContent - Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.
type UpdateAssessmentTestMetadataContent struct {
	QtiAssessmentTest UpdateAssessmentTestMetadataQtiAssessmentTest `json:"qti-assessment-test"`
}

func (o *UpdateAssessmentTestMetadataContent) GetQtiAssessmentTest() UpdateAssessmentTestMetadataQtiAssessmentTest {
	if o == nil {
		return UpdateAssessmentTestMetadataQtiAssessmentTest{}
	}
	return o.QtiAssessmentTest
}

// UpdateAssessmentTestMetadataResponseBody - Complete assessment test data including all test parts, sections, items, and configuration settings
type UpdateAssessmentTestMetadataResponseBody struct {
	// MongoDB document ID generated by the database when a new entity is added to a collection on the service provider.
	ID string `json:"_id"`
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// Human-readable title of the entity on the service provider.
	Title string `json:"title"`
	// Version of the specification used for this assessment test
	QtiVersion  *string                                   `default:"3.0" json:"qtiVersion"`
	QtiTestPart []UpdateAssessmentTestMetadataQtiTestPart `json:"qti-test-part"`
	// Array of outcome variable declarations for storing assessment results and computed values
	QtiOutcomeDeclaration []UpdateAssessmentTestMetadataQtiOutcomeDeclaration `json:"qti-outcome-declaration"`
	// Time limit for the entire assessment test in seconds. When not specified, there is no time limit
	TimeLimit *float64 `json:"timeLimit,omitempty"`
	// Maximum number of attempts allowed for the assessment test. When not specified, unlimited attempts are allowed
	MaxAttempts *float64 `json:"maxAttempts,omitempty"`
	// Configuration of assessment tools available to candidates. Each tool is represented as a key-value pair where the key is the tool name and the value indicates if it's enabled
	ToolsEnabled map[string]bool `json:"toolsEnabled,omitempty"`
	// Additional custom metadata for extending entity properties beyond standard specification for QTI entities.
	Metadata map[string]any `json:"metadata,omitempty"`
	// Raw XML representation of the entity, automatically generated from the JSON or XML sent when creating entities on the service provider. The rawxml field will contain all content sent when creating the entity on the service provider. This field is stable and should be used when working within this QTI API.
	RawXML string `json:"rawXml"`
	// Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.
	Content UpdateAssessmentTestMetadataContent `json:"content"`
	// ISO 8601 timestamp when the entity was created
	CreatedAt time.Time `json:"createdAt"`
	// ISO 8601 timestamp when the entity was last updated
	UpdatedAt time.Time `json:"updatedAt"`
	// MongoDB version key for optimistic concurrency control
	V *float64 `json:"__v,omitempty"`
}

func (u UpdateAssessmentTestMetadataResponseBody) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(u, "", false)
}

func (u *UpdateAssessmentTestMetadataResponseBody) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &u, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetQtiVersion() *string {
	if o == nil {
		return nil
	}
	return o.QtiVersion
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetQtiTestPart() []UpdateAssessmentTestMetadataQtiTestPart {
	if o == nil {
		return []UpdateAssessmentTestMetadataQtiTestPart{}
	}
	return o.QtiTestPart
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetQtiOutcomeDeclaration() []UpdateAssessmentTestMetadataQtiOutcomeDeclaration {
	if o == nil {
		return []UpdateAssessmentTestMetadataQtiOutcomeDeclaration{}
	}
	return o.QtiOutcomeDeclaration
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetTimeLimit() *float64 {
	if o == nil {
		return nil
	}
	return o.TimeLimit
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetMaxAttempts() *float64 {
	if o == nil {
		return nil
	}
	return o.MaxAttempts
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetToolsEnabled() map[string]bool {
	if o == nil {
		return nil
	}
	return o.ToolsEnabled
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetMetadata() map[string]any {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetRawXML() string {
	if o == nil {
		return ""
	}
	return o.RawXML
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetContent() UpdateAssessmentTestMetadataContent {
	if o == nil {
		return UpdateAssessmentTestMetadataContent{}
	}
	return o.Content
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetUpdatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.UpdatedAt
}

func (o *UpdateAssessmentTestMetadataResponseBody) GetV() *float64 {
	if o == nil {
		return nil
	}
	return o.V
}

type UpdateAssessmentTestMetadataResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Assessment test metadata updated successfully
	Object *UpdateAssessmentTestMetadataResponseBody
}

func (o *UpdateAssessmentTestMetadataResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *UpdateAssessmentTestMetadataResponse) GetObject() *UpdateAssessmentTestMetadataResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
