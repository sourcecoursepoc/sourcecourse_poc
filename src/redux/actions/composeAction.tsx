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
  PostComposeNameDescFailure as PostComposeNameDescFailure,
  PostComposeNameDescFailurePayload,
  PostComposeNameDescSuccess as PostComposeNameDescSuccess,
  PostComposeNameDescSuccessPayload,
  PostComposeNameDescRequest as PostComposeNameDescRequest,
  GetComposeNameDescSuccess as GetComposeNameDescSuccess,
  GetComposeNameDescFailure as GetComposeNameDescFailure,
  GetComposeNameDescRequest as GetComposeNameDescRequest,
} from "./composeTypes";
import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  POST_COMPOSE_NAME_DESC_FAILURE,
  POST_COMPOSE_NAME_DESC_SUCCESS,
  POST_COMPOSE_NAME_DESC,
  GET_COMPOSE_NAME_DESC_FAILURE as GET_COMPOSE_NAME_DESC_FAILURE,
  GET_COMPOSE_NAME_DESC_SUCCESS as GET_COMPOSE_NAME_DESC_SUCCESS,
  GET_COMPOSE_NAME_DESC as GET_COMPOSE_NAME_DESC,
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

// POST COMPOSE NAME AND DESC

export const postComposeNameDescRequest = (
  name: any[],
  description: any[]
): PostComposeNameDescRequest => {
  console.log("postComposeNameDescRequest action creator called");
  return {
    type: POST_COMPOSE_NAME_DESC,
    name,
    description,
  };
};

export const postComposeNameDescRequestSuccess = (
  postData: any
): PostComposeNameDescSuccess => ({
  type: POST_COMPOSE_NAME_DESC_SUCCESS,
  payload: { postData },
});

export const postComposeNameDescRequestFailure = (
  error: any
): PostComposeNameDescFailure => ({
  type: POST_COMPOSE_NAME_DESC_FAILURE,
  payload: { error },
});

// GET COMPOSE NAME AND DESC

export const getComposeNameDescRequest = (
  uid: string,
  name: any[],
  description: any[]
): GetComposeNameDescRequest => {
  console.log("getComposeNameDescRequest action creator called");
  return {
    type: GET_COMPOSE_NAME_DESC,
    uid,
    name,
    description,
  };
};

export const getComposeNameDescRequestSuccess = (
  saveData: any
): GetComposeNameDescSuccess => ({
  type: GET_COMPOSE_NAME_DESC_SUCCESS,
  payload: { saveData },
});

export const getComposeNameDescRequestFailure = (
  error: any
): GetComposeNameDescFailure => ({
  type: GET_COMPOSE_NAME_DESC_FAILURE,
  payload: { error },
});
