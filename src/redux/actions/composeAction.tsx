import {
  FetchComposePipelineRequest,
  FetchComposePipelineSuccessPayload,
  FetchComposePipelineSuccess,
  FetchComposePipelineFailurePayload,
  FetchComposePipelineFailure,
  FetchComposeReportsPipelineRequest,
  FetchComposeReportsPipelineSuccessPayload,
  FetchComposeReportsPipelineSuccess,
  FetchComposeReportsPipelineFailurePayload,
  FetchComposeReportsPipelineFailure,
  FetchSchemaComposeRequest,
  fetchProjectSchemaInfoActionSuccess,
  fetchProjectSchemaInfoActionFailure,
  fetchProjectSchemaInfoActionSuccessPayload,
  fetchProjectSchemaInfoActionFailurePayload,
  PostProjectSchemaInfoActionTypes,
  PostProjectSchemaInfo,
  PostProjectSchemaInfoSuccess,
  PostProjectSchemaInfoFailure,
} from "./composeTypes";
import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_PROJECT_SCHEMA_INFO_ACTION,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  POST_PROJECT_SCHEMA_INFO_ACTION,
  POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
} from "./composeActionTypes";

export const fetchComposePipelineRequest = (
  params: any
): FetchComposePipelineRequest => {
  console.log("fetchComposePipelineRequest action creator called");
  return {
    type: FETCH_COMPOSE_PIPELINE,
    params,
  };
};

export const fetchComposePipelineSuccess = (
  payload: FetchComposePipelineSuccessPayload
): FetchComposePipelineSuccess => {
  console.log(
    "fetchComposePipelineSuccess action creator called with payload: ",
    payload
  );
  return {
    type: FETCH_COMPOSE_PIPELINE_SUCCESS,
    payload,
  };
};

export const fetchComposePipelineFailure = (
  payload: FetchComposePipelineFailurePayload
): FetchComposePipelineFailure => {
  console.log(
    "fetchComposePipelineFailure action creator called with payload: ",
    payload
  );
  return {
    type: FETCH_COMPOSE_PIPELINE_FAILURE,
    payload,
  };
};

// REPORTS PIPELINE ACTION
export const fetchComposeReportsPipelineRequest =
  (): FetchComposeReportsPipelineRequest => {
    console.log("fetchComposePipelineRequest action creator called");
    return {
      type: FETCH_REPORTS_PIPELINE,
    };
  };

export const fetchComposeReportsPipelineRequestSuccess = (
  payload: FetchComposeReportsPipelineSuccessPayload
): FetchComposeReportsPipelineSuccess => {
  console.log(
    "fetchComposePipelineSuccess action creator called with payload: ",
    payload
  );
  return {
    type: FETCH_REPORTS_PIPELINE_SUCCESS,
    payload,
  };
};

export const fetchComposeReportsPipelineFailure = (
  payload: FetchComposeReportsPipelineFailurePayload
): FetchComposeReportsPipelineFailure => {
  console.log(
    "fetchComposePipelineFailure action creator called with payload: ",
    payload
  );
  return {
    type: FETCH_REPORTS_PIPELINE_FAILURE,
    payload,
  };
};

// fetch schema compose action
export const fetchProjectSchemaInfoAction = (
  params: number
): FetchSchemaComposeRequest => ({
  type: FETCH_PROJECT_SCHEMA_INFO_ACTION,
  params,
});

export const fetchSchemaComposeSuccess = (
  payload: fetchProjectSchemaInfoActionSuccessPayload
): fetchProjectSchemaInfoActionSuccess => ({
  type: FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  payload,
});

export const fetchSchemaComposeFailure = (
  payload: fetchProjectSchemaInfoActionFailurePayload
): fetchProjectSchemaInfoActionFailure => ({
  type: FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  payload,
});

export const postProjectSchemaInfoRequest = (
  projectUid: any,
  sourceTableUids: any[]
): PostProjectSchemaInfo => {
  return {
    type: POST_PROJECT_SCHEMA_INFO_ACTION,
    projectUid,
    sourceTableUids,
  };
};

export const postProjectSchemaInfoSuccess = (
  postData: any
): PostProjectSchemaInfoSuccess => ({
  type: POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  payload: { postData },
});

export const postProjectSchemaInfoFailure = (
  error: any
): PostProjectSchemaInfoFailure => ({
  type: POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  payload: { error },
});
