import { FETCH_COMPOSE_PIPELINE, FETCH_COMPOSE_PIPELINE_SUCCESS, FETCH_COMPOSE_PIPELINE_FAILURE } from "./composeActionTypes";

export interface ICOMPOSEPIPELINE {
    id: any;
    type: string;
    pipelineName: string;
    time: string;
    status: any;
    recordsExported: string;
}

export interface ComposePipelineState {
    pending: boolean;
    composePipeline: ICOMPOSEPIPELINE[];
    error: string | null;
}

export interface FetchComposePipelineSuccessPayload {
    composePipeline: ICOMPOSEPIPELINE[];
}

export interface FetchComposePipelineFailurePayload {
    error: string;
}

export interface FetchComposePipelineRequest {
    type: typeof FETCH_COMPOSE_PIPELINE;
    params:any;
}

export type FetchComposePipelineSuccess = {
    type: typeof FETCH_COMPOSE_PIPELINE_SUCCESS;
    payload: FetchComposePipelineSuccessPayload;
};

export type FetchComposePipelineFailure = {
    type: typeof FETCH_COMPOSE_PIPELINE_FAILURE;
    payload: FetchComposePipelineFailurePayload;
};

export type ComposePipelineActions =
    | FetchComposePipelineRequest
    | FetchComposePipelineSuccess
    | FetchComposePipelineFailure;

console.log("composeActionTypes: action types defined");
