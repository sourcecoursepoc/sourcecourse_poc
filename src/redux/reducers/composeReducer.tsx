import {
  ComposePipelineState,
  ComposePipelineActions,
  ComposeReportsPipelineActions,
  ComposeReportsPipelineState,
  projectSchemaInfoActions,
  projectSchemaInfoState,
  PostProjectSchemaInfoState,
  PostProjectSchemaInfoActionTypes,
} from "../actions/composeTypes";
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
  POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  POST_PROJECT_SCHEMA_INFO_ACTION,
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
const initialStateCompose: projectSchemaInfoState = {
  pending: false,
  schemas: [],
  error: null,
};
const initialPostStateSchema: PostProjectSchemaInfoState = {
  loading: false,
  postData: [],
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

//fetching schema details from compose page

function composeSchemaReducer(
  state = initialStateCompose,
  action: projectSchemaInfoActions
): projectSchemaInfoState {
  switch (action.type) {
    case FETCH_PROJECT_SCHEMA_INFO_ACTION:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        schemas: action.payload.schemas,
        error: null,
      };
    case FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE:
      return {
        ...state,
        pending: false,
        schemas: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
//posting schema  from compose page
function postProjectSchemaInfoReducer(
  state = initialPostStateSchema,

  action: PostProjectSchemaInfoActionTypes
): PostProjectSchemaInfoState {
  switch (action.type) {
    case POST_PROJECT_SCHEMA_INFO_ACTION:
      console.log("FETCH_SCHEMA_NAME_DESC action dispatched.");

      return {
        ...state,

        loading: true,
      };

    case POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS:
      console.log("FETCH_COMPOSE_NAME_DESC_SUCCESS action dispatched.");

      return {
        ...state,

        loading: false,

        postData: action.payload.postData,

        error: null,
      };

    case POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE:
      console.log("FETCH_COMPOSE_NAME_DESC_FAILURE action dispatched.");

      return {
        ...state,

        loading: false,

        postData: [],

        error: action.payload.error,
      };

    default:
      return state;
  }
}
//post schema Compose
/* const initialStateSchema: PostProjectSchemaInfoState = {
  loading: false,
  postData: [],
  error: null,
};

export const postProjectSchemaInfoReducer = (
  state = initialStateSchema,
  action: PostProjectSchemaInfoActionTypes
): PostProjectSchemaInfoState => {
  switch (action.type) {
    case POST_PROJECT_SCHEMA_INFO_ACTION:
      return { ...state, loading: true };
    case POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS:
      return { ...state, loading: false, success: true };
    case POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}; */

export { composeReducer, composeReportsPipelineReducer, composeSchemaReducer,postProjectSchemaInfoReducer };
