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
  FetchSchemaComposeRequest,FetchSchemaComposeSuccess,
  FetchSchemaComposeFailure,FetchSchemaComposeSuccessPayload,
  FetchSchemaComposeFailurePayload
} from "./composeTypes";
import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_SCHEMA_COMPOSE,
  FETCH_SCHEMA_COMPOSE_SUCCESS,FETCH_SCHEMA_COMPOSE_FAILURE
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

export const fetchSchemaComposeRequest = (params: number): FetchSchemaComposeRequest => ({
  type: FETCH_SCHEMA_COMPOSE,
  params,
});

export const fetchSchemaComposeSuccess = (
  payload: FetchSchemaComposeSuccessPayload
): FetchSchemaComposeSuccess => ({
  type: FETCH_SCHEMA_COMPOSE_SUCCESS,

  payload,
});

export const fetchSchemaComposeFailure = (
  payload: FetchSchemaComposeFailurePayload
): FetchSchemaComposeFailure => ({
  type: FETCH_SCHEMA_COMPOSE_FAILURE,

  payload,
});

/* export const fetchSchemaRequest = (params: number): FetchSchemaRequest => ({
  type: FETCH_SCHEMA_SCHEMADATA,

  params,
});

export const fetchSchemaSuccess = (
  payload: FetchSchemaSuccessPayload
): FetchSchemaSuccess => ({
  type: FETCH_SCHEMA_SCHEMADATA_SUCCESS,

  payload,
});

export const fetchSchemaFailure = (
  payload: FetchSchemaFailurePayload
): FetchSchemaFailure => ({
  type: FETCH_SCHEMA_SCHEMADATA_FAILURE,

  payload,
}); */