// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
	"time"
)

// CreateAssessmentTestRawNavigationMode - Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
type CreateAssessmentTestRawNavigationMode string

const (
	CreateAssessmentTestRawNavigationModeLinear    CreateAssessmentTestRawNavigationMode = "linear"
	CreateAssessmentTestRawNavigationModeNonlinear CreateAssessmentTestRawNavigationMode = "nonlinear"
)

func (e CreateAssessmentTestRawNavigationMode) ToPointer() *CreateAssessmentTestRawNavigationMode {
	return &e
}
func (e *CreateAssessmentTestRawNavigationMode) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "linear":
		fallthrough
	case "nonlinear":
		*e = CreateAssessmentTestRawNavigationMode(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAssessmentTestRawNavigationMode: %v", v)
	}
}

// CreateAssessmentTestRawSubmissionMode - Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
type CreateAssessmentTestRawSubmissionMode string

const (
	CreateAssessmentTestRawSubmissionModeIndividual   CreateAssessmentTestRawSubmissionMode = "individual"
	CreateAssessmentTestRawSubmissionModeSimultaneous CreateAssessmentTestRawSubmissionMode = "simultaneous"
)

func (e CreateAssessmentTestRawSubmissionMode) ToPointer() *CreateAssessmentTestRawSubmissionMode {
	return &e
}
func (e *CreateAssessmentTestRawSubmissionMode) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "individual":
		fallthrough
	case "simultaneous":
		*e = CreateAssessmentTestRawSubmissionMode(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAssessmentTestRawSubmissionMode: %v", v)
	}
}

// CreateAssessmentTestRawQtiAssessmentItemRef - Assessment item reference schema for linking assessment items to sections
type CreateAssessmentTestRawQtiAssessmentItemRef struct {
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// URI reference to the assessment item resource location on the service provider
	Href *string `json:"href,omitempty"`
}

func (o *CreateAssessmentTestRawQtiAssessmentItemRef) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawQtiAssessmentItemRef) GetHref() *string {
	if o == nil {
		return nil
	}
	return o.Href
}

// CreateAssessmentTestRawQtiAssessmentSection - Complete assessment section data with all referenced items. Represents a section containing learning content within a test part.
type CreateAssessmentTestRawQtiAssessmentSection struct {
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
	QtiAssessmentItemRef []CreateAssessmentTestRawQtiAssessmentItemRef `json:"qti-assessment-item-ref,omitempty"`
}

func (c CreateAssessmentTestRawQtiAssessmentSection) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(c, "", false)
}

func (c *CreateAssessmentTestRawQtiAssessmentSection) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &c, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *CreateAssessmentTestRawQtiAssessmentSection) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *CreateAssessmentTestRawQtiAssessmentSection) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawQtiAssessmentSection) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *CreateAssessmentTestRawQtiAssessmentSection) GetVisible() *bool {
	if o == nil {
		return nil
	}
	return o.Visible
}

func (o *CreateAssessmentTestRawQtiAssessmentSection) GetRequired() *bool {
	if o == nil {
		return nil
	}
	return o.Required
}

func (o *CreateAssessmentTestRawQtiAssessmentSection) GetFixed() *bool {
	if o == nil {
		return nil
	}
	return o.Fixed
}

func (o *CreateAssessmentTestRawQtiAssessmentSection) GetSequence() *int64 {
	if o == nil {
		return nil
	}
	return o.Sequence
}

func (o *CreateAssessmentTestRawQtiAssessmentSection) GetQtiAssessmentItemRef() []CreateAssessmentTestRawQtiAssessmentItemRef {
	if o == nil {
		return nil
	}
	return o.QtiAssessmentItemRef
}

// CreateAssessmentTestRawQtiTestPartResponse - Complete test part data returned from the service provider. Contains all sections and their configuration.
type CreateAssessmentTestRawQtiTestPartResponse struct {
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// Controls how learners navigate through the test part. 'linear' requires items to be responded to in sequence without jumping around, while 'nonlinear' allows candidates to respond to items in any order they choose.
	NavigationMode CreateAssessmentTestRawNavigationMode `json:"navigationMode"`
	// Determines how learner responses are submitted for response processing. 'individual' allows responses to be submitted as each item is completed, while 'simultaneous' means responses for all items are sent when the whole part is completed.
	SubmissionMode       CreateAssessmentTestRawSubmissionMode         `json:"submissionMode"`
	QtiAssessmentSection []CreateAssessmentTestRawQtiAssessmentSection `json:"qti-assessment-section"`
}

func (o *CreateAssessmentTestRawQtiTestPartResponse) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawQtiTestPartResponse) GetNavigationMode() CreateAssessmentTestRawNavigationMode {
	if o == nil {
		return CreateAssessmentTestRawNavigationMode("")
	}
	return o.NavigationMode
}

func (o *CreateAssessmentTestRawQtiTestPartResponse) GetSubmissionMode() CreateAssessmentTestRawSubmissionMode {
	if o == nil {
		return CreateAssessmentTestRawSubmissionMode("")
	}
	return o.SubmissionMode
}

func (o *CreateAssessmentTestRawQtiTestPartResponse) GetQtiAssessmentSection() []CreateAssessmentTestRawQtiAssessmentSection {
	if o == nil {
		return []CreateAssessmentTestRawQtiAssessmentSection{}
	}
	return o.QtiAssessmentSection
}

// CreateAssessmentTestRawCardinality - Defines how scoring information is structured and stored. 'single' for one overall score, 'multiple' for separate scores or points, 'ordered' for scores maintaining a specific sequence, 'record' for complex scoring with multiple named components.
type CreateAssessmentTestRawCardinality string

const (
	CreateAssessmentTestRawCardinalitySingle   CreateAssessmentTestRawCardinality = "single"
	CreateAssessmentTestRawCardinalityMultiple CreateAssessmentTestRawCardinality = "multiple"
	CreateAssessmentTestRawCardinalityOrdered  CreateAssessmentTestRawCardinality = "ordered"
	CreateAssessmentTestRawCardinalityRecord   CreateAssessmentTestRawCardinality = "record"
)

func (e CreateAssessmentTestRawCardinality) ToPointer() *CreateAssessmentTestRawCardinality {
	return &e
}
func (e *CreateAssessmentTestRawCardinality) UnmarshalJSON(data []byte) error {
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
		*e = CreateAssessmentTestRawCardinality(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAssessmentTestRawCardinality: %v", v)
	}
}

// CreateAssessmentTestRawBaseType - Data type of the outcome variable, determining how values are stored and processed
type CreateAssessmentTestRawBaseType string

const (
	CreateAssessmentTestRawBaseTypeIdentifier   CreateAssessmentTestRawBaseType = "identifier"
	CreateAssessmentTestRawBaseTypeBoolean      CreateAssessmentTestRawBaseType = "boolean"
	CreateAssessmentTestRawBaseTypeInteger      CreateAssessmentTestRawBaseType = "integer"
	CreateAssessmentTestRawBaseTypeFloat        CreateAssessmentTestRawBaseType = "float"
	CreateAssessmentTestRawBaseTypeString       CreateAssessmentTestRawBaseType = "string"
	CreateAssessmentTestRawBaseTypePoint        CreateAssessmentTestRawBaseType = "point"
	CreateAssessmentTestRawBaseTypePair         CreateAssessmentTestRawBaseType = "pair"
	CreateAssessmentTestRawBaseTypeDirectedPair CreateAssessmentTestRawBaseType = "directedPair"
	CreateAssessmentTestRawBaseTypeDuration     CreateAssessmentTestRawBaseType = "duration"
	CreateAssessmentTestRawBaseTypeFile         CreateAssessmentTestRawBaseType = "file"
	CreateAssessmentTestRawBaseTypeURI          CreateAssessmentTestRawBaseType = "uri"
)

func (e CreateAssessmentTestRawBaseType) ToPointer() *CreateAssessmentTestRawBaseType {
	return &e
}
func (e *CreateAssessmentTestRawBaseType) UnmarshalJSON(data []byte) error {
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
		*e = CreateAssessmentTestRawBaseType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAssessmentTestRawBaseType: %v", v)
	}
}

// CreateAssessmentTestRawDefaultValue - Optional default value configuration for outcome variables
type CreateAssessmentTestRawDefaultValue struct {
	// The default value to assign to the outcome variable
	Value any `json:"value,omitempty"`
}

func (o *CreateAssessmentTestRawDefaultValue) GetValue() any {
	if o == nil {
		return nil
	}
	return o.Value
}

type CreateAssessmentTestRawQtiOutcomeDeclarationResponse struct {
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// Defines how scoring information is structured and stored. 'single' for one overall score, 'multiple' for separate scores or points, 'ordered' for scores maintaining a specific sequence, 'record' for complex scoring with multiple named components.
	Cardinality *CreateAssessmentTestRawCardinality `default:"single" json:"cardinality"`
	// Data type of the outcome variable, determining how values are stored and processed
	BaseType CreateAssessmentTestRawBaseType `json:"baseType"`
	// Expected maximum value for this outcome variable in normal circumstances
	NormalMaximum *float64 `json:"normalMaximum,omitempty"`
	// Expected minimum value for this outcome variable in normal circumstances
	NormalMinimum *float64 `json:"normalMinimum,omitempty"`
	// Optional default value configuration for outcome variables
	DefaultValue *CreateAssessmentTestRawDefaultValue `json:"defaultValue,omitempty"`
}

func (c CreateAssessmentTestRawQtiOutcomeDeclarationResponse) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(c, "", false)
}

func (c *CreateAssessmentTestRawQtiOutcomeDeclarationResponse) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &c, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationResponse) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationResponse) GetCardinality() *CreateAssessmentTestRawCardinality {
	if o == nil {
		return nil
	}
	return o.Cardinality
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationResponse) GetBaseType() CreateAssessmentTestRawBaseType {
	if o == nil {
		return CreateAssessmentTestRawBaseType("")
	}
	return o.BaseType
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationResponse) GetNormalMaximum() *float64 {
	if o == nil {
		return nil
	}
	return o.NormalMaximum
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationResponse) GetNormalMinimum() *float64 {
	if o == nil {
		return nil
	}
	return o.NormalMinimum
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationResponse) GetDefaultValue() *CreateAssessmentTestRawDefaultValue {
	if o == nil {
		return nil
	}
	return o.DefaultValue
}

type CreateAssessmentTestRawAttributes struct {
	Xmlns             string `json:"xmlns"`
	XmlnsXsi          string `json:"xmlns:xsi"`
	XsiSchemaLocation string `json:"xsi:schemaLocation"`
	Identifier        string `json:"identifier"`
	Title             string `json:"title"`
	ToolName          string `json:"tool-name"`
	ToolVersion       string `json:"tool-version"`
}

func (o *CreateAssessmentTestRawAttributes) GetXmlns() string {
	if o == nil {
		return ""
	}
	return o.Xmlns
}

func (o *CreateAssessmentTestRawAttributes) GetXmlnsXsi() string {
	if o == nil {
		return ""
	}
	return o.XmlnsXsi
}

func (o *CreateAssessmentTestRawAttributes) GetXsiSchemaLocation() string {
	if o == nil {
		return ""
	}
	return o.XsiSchemaLocation
}

func (o *CreateAssessmentTestRawAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawAttributes) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *CreateAssessmentTestRawAttributes) GetToolName() string {
	if o == nil {
		return ""
	}
	return o.ToolName
}

func (o *CreateAssessmentTestRawAttributes) GetToolVersion() string {
	if o == nil {
		return ""
	}
	return o.ToolVersion
}

type CreateAssessmentTestRawQtiOutcomeDeclarationAttributes struct {
	Identifier  string `json:"identifier"`
	Cardinality string `json:"cardinality"`
	BaseType    string `json:"base-type"`
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationAttributes) GetCardinality() string {
	if o == nil {
		return ""
	}
	return o.Cardinality
}

func (o *CreateAssessmentTestRawQtiOutcomeDeclarationAttributes) GetBaseType() string {
	if o == nil {
		return ""
	}
	return o.BaseType
}

type CreateAssessmentTestRawQtiDefaultValue struct {
	QtiValue any `json:"qti-value,omitempty"`
}

func (o *CreateAssessmentTestRawQtiDefaultValue) GetQtiValue() any {
	if o == nil {
		return nil
	}
	return o.QtiValue
}

type CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration struct {
	Attributes      CreateAssessmentTestRawQtiOutcomeDeclarationAttributes `json:"_attributes"`
	QtiDefaultValue *CreateAssessmentTestRawQtiDefaultValue                `json:"qti-default-value,omitempty"`
	NormalMaximum   *float64                                               `json:"normal-maximum,omitempty"`
	NormalMinimum   *float64                                               `json:"normal-minimum,omitempty"`
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration) GetAttributes() CreateAssessmentTestRawQtiOutcomeDeclarationAttributes {
	if o == nil {
		return CreateAssessmentTestRawQtiOutcomeDeclarationAttributes{}
	}
	return o.Attributes
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration) GetQtiDefaultValue() *CreateAssessmentTestRawQtiDefaultValue {
	if o == nil {
		return nil
	}
	return o.QtiDefaultValue
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration) GetNormalMaximum() *float64 {
	if o == nil {
		return nil
	}
	return o.NormalMaximum
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration) GetNormalMinimum() *float64 {
	if o == nil {
		return nil
	}
	return o.NormalMinimum
}

type CreateAssessmentTestRawQtiTestPartAttributes struct {
	Identifier     string `json:"identifier"`
	NavigationMode string `json:"navigation-mode"`
	SubmissionMode string `json:"submission-mode"`
}

func (o *CreateAssessmentTestRawQtiTestPartAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawQtiTestPartAttributes) GetNavigationMode() string {
	if o == nil {
		return ""
	}
	return o.NavigationMode
}

func (o *CreateAssessmentTestRawQtiTestPartAttributes) GetSubmissionMode() string {
	if o == nil {
		return ""
	}
	return o.SubmissionMode
}

type CreateAssessmentTestRawQtiAssessmentSectionAttributes struct {
	Identifier string `json:"identifier"`
	Title      string `json:"title"`
	Visible    string `json:"visible"`
}

func (o *CreateAssessmentTestRawQtiAssessmentSectionAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawQtiAssessmentSectionAttributes) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *CreateAssessmentTestRawQtiAssessmentSectionAttributes) GetVisible() string {
	if o == nil {
		return ""
	}
	return o.Visible
}

type CreateAssessmentTestRawQtiAssessmentItemRefAttributes struct {
	Identifier string `json:"identifier"`
	Href       string `json:"href"`
}

func (o *CreateAssessmentTestRawQtiAssessmentItemRefAttributes) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawQtiAssessmentItemRefAttributes) GetHref() string {
	if o == nil {
		return ""
	}
	return o.Href
}

type CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentItemRef struct {
	Attributes CreateAssessmentTestRawQtiAssessmentItemRefAttributes `json:"_attributes"`
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentItemRef) GetAttributes() CreateAssessmentTestRawQtiAssessmentItemRefAttributes {
	if o == nil {
		return CreateAssessmentTestRawQtiAssessmentItemRefAttributes{}
	}
	return o.Attributes
}

type CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentSection struct {
	Attributes           CreateAssessmentTestRawQtiAssessmentSectionAttributes          `json:"_attributes"`
	QtiAssessmentItemRef []CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentItemRef `json:"qti-assessment-item-ref,omitempty"`
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentSection) GetAttributes() CreateAssessmentTestRawQtiAssessmentSectionAttributes {
	if o == nil {
		return CreateAssessmentTestRawQtiAssessmentSectionAttributes{}
	}
	return o.Attributes
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentSection) GetQtiAssessmentItemRef() []CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentItemRef {
	if o == nil {
		return nil
	}
	return o.QtiAssessmentItemRef
}

type CreateAssessmentTestRawQtiAssessmentTestQtiTestPart struct {
	Attributes           CreateAssessmentTestRawQtiTestPartAttributes                   `json:"_attributes"`
	QtiAssessmentSection []CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentSection `json:"qti-assessment-section"`
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiTestPart) GetAttributes() CreateAssessmentTestRawQtiTestPartAttributes {
	if o == nil {
		return CreateAssessmentTestRawQtiTestPartAttributes{}
	}
	return o.Attributes
}

func (o *CreateAssessmentTestRawQtiAssessmentTestQtiTestPart) GetQtiAssessmentSection() []CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentSection {
	if o == nil {
		return []CreateAssessmentTestRawQtiAssessmentTestQtiAssessmentSection{}
	}
	return o.QtiAssessmentSection
}

type CreateAssessmentTestRawQtiAssessmentTest struct {
	Attributes            CreateAssessmentTestRawAttributes                               `json:"_attributes"`
	QtiOutcomeDeclaration []CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration `json:"qti-outcome-declaration"`
	QtiTestPart           []CreateAssessmentTestRawQtiAssessmentTestQtiTestPart           `json:"qti-test-part"`
}

func (o *CreateAssessmentTestRawQtiAssessmentTest) GetAttributes() CreateAssessmentTestRawAttributes {
	if o == nil {
		return CreateAssessmentTestRawAttributes{}
	}
	return o.Attributes
}

func (o *CreateAssessmentTestRawQtiAssessmentTest) GetQtiOutcomeDeclaration() []CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration {
	if o == nil {
		return []CreateAssessmentTestRawQtiAssessmentTestQtiOutcomeDeclaration{}
	}
	return o.QtiOutcomeDeclaration
}

func (o *CreateAssessmentTestRawQtiAssessmentTest) GetQtiTestPart() []CreateAssessmentTestRawQtiAssessmentTestQtiTestPart {
	if o == nil {
		return []CreateAssessmentTestRawQtiAssessmentTestQtiTestPart{}
	}
	return o.QtiTestPart
}

// CreateAssessmentTestRawContent - Parsed XML content structure for the assessment test. For production use, rawXml is recommended over this parsed structure.
type CreateAssessmentTestRawContent struct {
	QtiAssessmentTest CreateAssessmentTestRawQtiAssessmentTest `json:"qti-assessment-test"`
}

func (o *CreateAssessmentTestRawContent) GetQtiAssessmentTest() CreateAssessmentTestRawQtiAssessmentTest {
	if o == nil {
		return CreateAssessmentTestRawQtiAssessmentTest{}
	}
	return o.QtiAssessmentTest
}

// CreateAssessmentTestRawResponseBody - Complete assessment test data including all test parts, sections, items, and configuration settings
type CreateAssessmentTestRawResponseBody struct {
	// MongoDB document ID generated by the database when a new entity is added to a collection on the service provider.
	ID string `json:"_id"`
	// Unique identifier for the entity on the service provider.
	Identifier string `json:"identifier"`
	// Human-readable title of the entity on the service provider.
	Title string `json:"title"`
	// Version of the specification used for this assessment test
	QtiVersion  *string                                      `default:"3.0" json:"qtiVersion"`
	QtiTestPart []CreateAssessmentTestRawQtiTestPartResponse `json:"qti-test-part"`
	// Array of outcome variable declarations for storing assessment results and computed values
	QtiOutcomeDeclaration []CreateAssessmentTestRawQtiOutcomeDeclarationResponse `json:"qti-outcome-declaration"`
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
	Content CreateAssessmentTestRawContent `json:"content"`
	// ISO 8601 timestamp when the entity was created
	CreatedAt time.Time `json:"createdAt"`
	// ISO 8601 timestamp when the entity was last updated
	UpdatedAt time.Time `json:"updatedAt"`
	// MongoDB version key for optimistic concurrency control
	V *float64 `json:"__v,omitempty"`
	// Indicates whether the generated XML is valid according to schema validation
	IsValidXML bool `json:"isValidXml"`
}

func (c CreateAssessmentTestRawResponseBody) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(c, "", false)
}

func (c *CreateAssessmentTestRawResponseBody) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &c, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *CreateAssessmentTestRawResponseBody) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *CreateAssessmentTestRawResponseBody) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *CreateAssessmentTestRawResponseBody) GetTitle() string {
	if o == nil {
		return ""
	}
	return o.Title
}

func (o *CreateAssessmentTestRawResponseBody) GetQtiVersion() *string {
	if o == nil {
		return nil
	}
	return o.QtiVersion
}

func (o *CreateAssessmentTestRawResponseBody) GetQtiTestPart() []CreateAssessmentTestRawQtiTestPartResponse {
	if o == nil {
		return []CreateAssessmentTestRawQtiTestPartResponse{}
	}
	return o.QtiTestPart
}

func (o *CreateAssessmentTestRawResponseBody) GetQtiOutcomeDeclaration() []CreateAssessmentTestRawQtiOutcomeDeclarationResponse {
	if o == nil {
		return []CreateAssessmentTestRawQtiOutcomeDeclarationResponse{}
	}
	return o.QtiOutcomeDeclaration
}

func (o *CreateAssessmentTestRawResponseBody) GetTimeLimit() *float64 {
	if o == nil {
		return nil
	}
	return o.TimeLimit
}

func (o *CreateAssessmentTestRawResponseBody) GetMaxAttempts() *float64 {
	if o == nil {
		return nil
	}
	return o.MaxAttempts
}

func (o *CreateAssessmentTestRawResponseBody) GetToolsEnabled() map[string]bool {
	if o == nil {
		return nil
	}
	return o.ToolsEnabled
}

func (o *CreateAssessmentTestRawResponseBody) GetMetadata() map[string]any {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *CreateAssessmentTestRawResponseBody) GetRawXML() string {
	if o == nil {
		return ""
	}
	return o.RawXML
}

func (o *CreateAssessmentTestRawResponseBody) GetContent() CreateAssessmentTestRawContent {
	if o == nil {
		return CreateAssessmentTestRawContent{}
	}
	return o.Content
}

func (o *CreateAssessmentTestRawResponseBody) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *CreateAssessmentTestRawResponseBody) GetUpdatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.UpdatedAt
}

func (o *CreateAssessmentTestRawResponseBody) GetV() *float64 {
	if o == nil {
		return nil
	}
	return o.V
}

func (o *CreateAssessmentTestRawResponseBody) GetIsValidXML() bool {
	if o == nil {
		return false
	}
	return o.IsValidXML
}

type CreateAssessmentTestRawResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Assessment test created successfully
	Object *CreateAssessmentTestRawResponseBody
}

func (o *CreateAssessmentTestRawResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *CreateAssessmentTestRawResponse) GetObject() *CreateAssessmentTestRawResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
