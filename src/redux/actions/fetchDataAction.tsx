import {
  FETCH_PIPELINE_REQUEST,
  FETCH_PIPELINE_SUCCESS,
  FETCH_PIPELINE_FAILURE,
} from "./actionTypes";
import {
  FetchPipelineFailurePayload,
  FetchPipelineSuccessPayload,
  FetchPipelineFailure,
  FetchPipelineSuccess,
  PipelineActions,
  FetchPipelineRequest,
} from "./types";

export const fetchPipeline = (): FetchPipelineRequest => ({
  type:  FETCH_PIPELINE_REQUEST,
});
export const fetchPipelineSuccess = (
  payload: FetchPipelineSuccessPayload
): FetchPipelineSuccess => ({ type: FETCH_PIPELINE_SUCCESS, payload });
export const fetchPipelineFailure = (
  payload: FetchPipelineFailurePayload
): FetchPipelineFailure => ({ type: FETCH_PIPELINE_FAILURE, payload });

