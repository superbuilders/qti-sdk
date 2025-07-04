/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assessmentTestManagementCreateAssessmentTest } from "../funcs/assessmentTestManagementCreateAssessmentTest.js";
import { assessmentTestManagementCreateAssessmentTestRaw } from "../funcs/assessmentTestManagementCreateAssessmentTestRaw.js";
import { assessmentTestManagementDeleteAssessmentTest } from "../funcs/assessmentTestManagementDeleteAssessmentTest.js";
import { assessmentTestManagementGetAllQuestions } from "../funcs/assessmentTestManagementGetAllQuestions.js";
import { assessmentTestManagementGetAssessmentTest } from "../funcs/assessmentTestManagementGetAssessmentTest.js";
import { assessmentTestManagementSearchAssessmentTests } from "../funcs/assessmentTestManagementSearchAssessmentTests.js";
import { assessmentTestManagementUpdateAssessmentTest } from "../funcs/assessmentTestManagementUpdateAssessmentTest.js";
import { assessmentTestManagementUpdateAssessmentTestMetadata } from "../funcs/assessmentTestManagementUpdateAssessmentTestMetadata.js";
import { assessmentTestManagementUpdateAssessmentTestRaw } from "../funcs/assessmentTestManagementUpdateAssessmentTestRaw.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AssessmentTestManagement extends ClientSDK {
  /**
   * Search and filter assessment tests
   *
   * @remarks
   * Search and retrieve assessment tests with advanced filtering capabilities. Supports text search across titles and identifiers, filtering by navigation/submission modes, and pagination. Assessment tests are the top-level containers that define complete testing experiences through their test parts and sections.
   */
  async searchAssessmentTests(
    request?: operations.SearchAssessmentTestsRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.SearchAssessmentTestsResponse> {
    return unwrapAsync(assessmentTestManagementSearchAssessmentTests(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new assessment test
   *
   * @remarks
   * Create a new assessment test. Supports both JSON and XML formats.
   */
  async createAssessmentTest(
    request: models.AssessmentTest,
    options?: RequestOptions,
  ): Promise<operations.CreateAssessmentTestResponse> {
    return unwrapAsync(assessmentTestManagementCreateAssessmentTest(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new assessment test
   *
   * @remarks
   * Create a new assessment test. Supports both JSON and XML formats.
   */
  async createAssessmentTestRaw(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array,
    options?: RequestOptions,
  ): Promise<operations.CreateAssessmentTestRawResponse> {
    return unwrapAsync(assessmentTestManagementCreateAssessmentTestRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a complete assessment test with full structure
   *
   * @remarks
   * Retrieve a complete assessment test including all its test parts, sections, and assessment item references. This provides the full hierarchical structure needed to understand the test organization and flow. Supports both JSON and XML response formats based on the Content-Type header.
   */
  async getAssessmentTest(
    request: operations.GetAssessmentTestRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAssessmentTestResponse> {
    return unwrapAsync(assessmentTestManagementGetAssessmentTest(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an entire assessment test
   *
   * @remarks
   * Update an assessment test by replacing its complete structure. This operation updates the entire assessment test including its test parts, sections, and item references. Supports both JSON and XML formats. The updated XML structure is automatically regenerated.
   */
  async updateAssessmentTest(
    request: operations.UpdateAssessmentTestRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateAssessmentTestResponse> {
    return unwrapAsync(assessmentTestManagementUpdateAssessmentTest(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an entire assessment test
   *
   * @remarks
   * Update an assessment test by replacing its complete structure. This operation updates the entire assessment test including its test parts, sections, and item references. Supports both JSON and XML formats. The updated XML structure is automatically regenerated.
   */
  async updateAssessmentTestRaw(
    request: operations.UpdateAssessmentTestRawRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateAssessmentTestRawResponse> {
    return unwrapAsync(assessmentTestManagementUpdateAssessmentTestRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an assessment test
   *
   * @remarks
   * Permanently delete an assessment test and all its associated data including test parts, sections, and item references. This operation cannot be undone. The actual assessment items referenced by this test are not deleted.
   */
  async deleteAssessmentTest(
    request: operations.DeleteAssessmentTestRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(assessmentTestManagementDeleteAssessmentTest(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all assessment items referenced by an assessment test
   *
   * @remarks
   * Retrieve all assessment items (questions) that are referenced by an assessment test, along with their structural context (test part and section). This endpoint aggregates items from all sections across all test parts, providing both the item references and the actual assessment item data from the assessment-items collection.
   */
  async getAllQuestions(
    request: operations.GetAllQuestionsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAllQuestionsResponse> {
    return unwrapAsync(assessmentTestManagementGetAllQuestions(
      this,
      request,
      options,
    ));
  }

  /**
   * Update assessment test metadata only
   *
   * @remarks
   * Update only the metadata fields (title, description, etc.) of an assessment test without affecting its structure, test parts, sections, or assessment items. This is a lightweight operation for administrative changes.
   */
  async updateAssessmentTestMetadata(
    request: operations.UpdateAssessmentTestMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateAssessmentTestMetadataResponse> {
    return unwrapAsync(assessmentTestManagementUpdateAssessmentTestMetadata(
      this,
      request,
      options,
    ));
  }
}
