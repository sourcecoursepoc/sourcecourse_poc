import { ComposePipelineState, ComposePipelineActions, ComposeReportsPipelineActions, ComposeReportsPipelineState, ComposeNameDescState, ComposeNameDescActions } from "../actions/composeTypes";
import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_SCHEMA_NAME_DESC,
  POST_COMPOSE_NAME_DESC_SUCCESS,
  POST_COMPOSE_NAME_DESC_FAILURE,
  POST_COMPOSE_NAME_DESC,
} from "../actions/composeActionTypes";

const initialState: ComposePipelineState = {
  pending: false,
  composePipeline: [],
  error: null,
};

function composeReducer(
  state = initialState,
  action: ComposePipelineActions
): ComposePipelineState {
  switch (action.type) {
    case FETCH_COMPOSE_PIPELINE:
      console.log("FETCH_COMPOSE_PIPELINE action dispatched.");
      return {
        ...state,
        pending: true,
      };
    case FETCH_COMPOSE_PIPELINE_SUCCESS:
      console.log("FETCH_COMPOSE_PIPELINE_SUCCESS action dispatched.");
      return {
        ...state,
        pending: false,
        composePipeline: action.payload.composePipeline,
        error: null,
      };
    case FETCH_COMPOSE_PIPELINE_FAILURE:
      console.log("FETCH_COMPOSE_PIPELINE_FAILURE action dispatched.");
      return {
        ...state,
        pending: false,
        composePipeline: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}


// compose reports pipeline

const initialReportsState: ComposeReportsPipelineState = {
  pending: false,
  composeReportsPipeline: [],
  error: null,
};

function composeReportsPipelineReducer(
  state = initialReportsState,
  action: ComposeReportsPipelineActions
): ComposeReportsPipelineState {
  switch (action.type) {
    case FETCH_REPORTS_PIPELINE:
      console.log("FETCH_COMPOSE_PIPELINE action dispatched.");
      return {
        ...state,
        pending: true,
      };
    case FETCH_REPORTS_PIPELINE_SUCCESS:
      console.log("FETCH_COMPOSE_PIPELINE_SUCCESS action dispatched.");
      return {
        ...state,
        pending: false,
        composeReportsPipeline: action.payload.composeReportsPipeline,
        error: null,
      };
    case FETCH_REPORTS_PIPELINE_FAILURE:
      console.log("FETCH_COMPOSE_PIPELINE_FAILURE action dispatched.");
      return {
        ...state,
        pending: false,
        composeReportsPipeline: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}

//reducer for fetching compose page name and description

const initialNameDescState: ComposeNameDescState = {
  pending: false,
  postData: [],
  error: null,
};

function composeNameDescReducer(
  state = initialNameDescState,
  action: ComposeNameDescActions
): ComposeNameDescState {
  switch (action.type) {
    case POST_COMPOSE_NAME_DESC:
      console.log("FETCH_SCHEMA_NAME_DESC action dispatched.");
      return {
        ...state,
        pending: true,
      };
    case POST_COMPOSE_NAME_DESC_SUCCESS:
      console.log("FETCH_COMPOSE_NAME_DESC_SUCCESS action dispatched.");
      return {
        ...state,
        pending: false,
        postData: action.payload.postData,
        error: null,
      };
    case POST_COMPOSE_NAME_DESC_FAILURE:
      console.log("FETCH_COMPOSE_NAME_DESC_FAILURE action dispatched.");
      return {
        ...state,
        pending: false,
        postData: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}



export { composeReducer, composeReportsPipelineReducer,composeNameDescReducer };
