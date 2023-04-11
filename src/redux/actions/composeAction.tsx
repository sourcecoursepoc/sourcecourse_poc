
import { FetchComposePipelineRequest, FetchComposePipelineSuccessPayload, FetchComposePipelineSuccess, FetchComposePipelineFailurePayload, FetchComposePipelineFailure } from "./composeTypes";
import { FETCH_COMPOSE_PIPELINE, FETCH_COMPOSE_PIPELINE_SUCCESS, FETCH_COMPOSE_PIPELINE_FAILURE } from "./composeActionTypes";
  
  export const fetchComposePipelineRequest = (): FetchComposePipelineRequest => ({
    type: FETCH_COMPOSE_PIPELINE,
  });
  
  export const fetchComposePipelineSuccess = (
    payload: FetchComposePipelineSuccessPayload
  ): FetchComposePipelineSuccess => ({
    type:  FETCH_COMPOSE_PIPELINE_SUCCESS,
    payload,
  });
  
  export const fetchComposePipelineFailure = (
    payload: FetchComposePipelineFailurePayload
  ): FetchComposePipelineFailure => ({
    type:  FETCH_COMPOSE_PIPELINE_FAILURE,
    payload,
  });
    