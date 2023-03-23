import {
  FETCH_PIPELINE_REQUEST,
  FETCH_PIPELINE_SUCCESS,
  FETCH_PIPELINE_FAILURE,
} from "../actions/actionTypes";

export interface IPIPELINE {
  id: number;
  type: string;
  pipelineName: string;
  timeStamp: string;
  status: boolean;
  statuspercentage: string;
}

export interface PipelineState {
  pending: boolean;
  pipelines: IPIPELINE[];
  error: string | null;
}

export interface FetchPipelineSuccessPayload {
  pipelines: IPIPELINE[];
}

export interface FetchPipelineFailurePayload {
  error: string;
}

export interface FetchPipelineRequest {
  type: typeof FETCH_PIPELINE_REQUEST;
}

export type FetchPipelineSuccess = {
  type: typeof FETCH_PIPELINE_SUCCESS;
  payload: FetchPipelineSuccessPayload;
};

export type FetchPipelineFailure = {
  type: typeof FETCH_PIPELINE_FAILURE;
  payload: FetchPipelineFailurePayload;
};

export type PipelineActions =
  | FetchPipelineRequest
  | FetchPipelineSuccess
  | FetchPipelineFailure;
