import {
  FETCH_PIPELINE_REQUEST,
  FETCH_PIPELINE_SUCCESS,
  FETCH_PIPELINE_FAILURE,
  FETCH_RECORDS,
  FETCH_RECORDS_SUCCESS,
  FETCH_RECORDS_FAILURE
} from "./actionTypes";
import {
  FetchPipelineFailurePayload,
  FetchPipelineSuccessPayload,
  FetchPipelineFailure,
  FetchPipelineSuccess,
  PipelineActions,
  FetchPipelineRequest,
  FetchRecordsAction,
  FetchRecordsSuccessAction,
  FetchRecordsFailureAction,
  FetchRecordsSuccessActionPayload,
  FetchRecordsFailureActionPayload
} from "./types";

export const fetchPipeline = (): FetchPipelineRequest => ({
  type: FETCH_PIPELINE_REQUEST,
});
export const fetchPipelineSuccess = (
  payload: FetchPipelineSuccessPayload
): FetchPipelineSuccess => ({ type: FETCH_PIPELINE_SUCCESS, payload });
export const fetchPipelineFailure = (
  payload: FetchPipelineFailurePayload
): FetchPipelineFailure => ({ type: FETCH_PIPELINE_FAILURE, payload });

export const fetchRecord= (): FetchRecordsAction =>({
  type: FETCH_RECORDS,
});

export const fetchRecordSuccess = (
  payload: FetchRecordsSuccessActionPayload
): FetchRecordsSuccessAction => ({
  type: FETCH_RECORDS_SUCCESS,
  payload,
});

export const fetchRecordFailure = (
  payload: FetchRecordsFailureActionPayload
): FetchRecordsFailureAction => ({
  type: FETCH_RECORDS_FAILURE,
  payload,
});
