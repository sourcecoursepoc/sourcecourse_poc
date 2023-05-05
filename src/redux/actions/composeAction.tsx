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
  SaveComposeNameDescSuccess,
  SaveComposeNameDescFailure,
  SaveComposeNameDescRequest,
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
  SAVE_COMPOSE_NAME_DESC_FAILURE,
  SAVE_COMPOSE_NAME_DESC_SUCCESS,
  SAVE_COMPOSE_NAME_DESC,
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

//SAVE COMPOSE NAME AND DESC

export const saveComposeNameDescRequest = (
  uid:any[],
  name: any[],
  description: any[]
): SaveComposeNameDescRequest => {
  console.log("saveComposeNameDescRequest action creator called");
  return {
    type: SAVE_COMPOSE_NAME_DESC,
    uid,
    name,
    description,
  };
};

export const saveComposeNameDescRequestSuccess = (
  saveData: any
): SaveComposeNameDescSuccess=> ({
  type: SAVE_COMPOSE_NAME_DESC_SUCCESS,

  payload: { saveData },
});

export const saveComposeNameDescRequestFailure = (
  error: any
): SaveComposeNameDescFailure => ({
  type: SAVE_COMPOSE_NAME_DESC_FAILURE,

  payload: { error },
});