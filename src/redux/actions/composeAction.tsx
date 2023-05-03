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
  FetchComposeNameDescFailure,
  FetchComposeNameDescFailurePayload,
  FetchComposeNameDescSuccess,
  FetchComposeNameDescSuccessPayload,
  FetchComposeNameDescRequest,
} from "./composeTypes";
import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_COMPOSE_NAME_DESC_FAILURE,
  FETCH_COMPOSE_NAME_DESC_SUCCESS,
  FETCH_COMPOSE_NAME_DESC,
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

//COMPOSE NAME AND DESC

export const fetchComposeNameDescRequest = (
  name: any[],
  description: any[]
): FetchComposeNameDescRequest => {
  console.log("fetchComposeNameDescRequest action creator called");
  return {
    type: FETCH_COMPOSE_NAME_DESC,
    name,
    description,
  };
};

export const fetchComposeNameDescRequestSuccess = (
  postData: any
): FetchComposeNameDescSuccess => ({
  type: FETCH_COMPOSE_NAME_DESC_SUCCESS,

  payload: { postData },
});

export const fetchComposeNameDescRequestFailure = (
  error: any
): FetchComposeNameDescFailure => ({
  type: FETCH_COMPOSE_NAME_DESC_FAILURE,

  payload: { error },
});

