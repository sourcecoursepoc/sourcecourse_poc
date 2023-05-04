import {
  ComposePipelineState,
  ComposePipelineActions,
  ComposeReportsPipelineActions,
  ComposeReportsPipelineState,
  SchemaComposeActions,
  SchemaComposeState,
} from "../actions/composeTypes";
import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_SCHEMA_COMPOSE,
  FETCH_SCHEMA_COMPOSE_SUCCESS,
  FETCH_SCHEMA_COMPOSE_FAILURE,
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
const initialStateCompose: SchemaComposeState = {
  pending: false,
  schemas: [],
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
    action: SchemaComposeActions
  ): SchemaComposeState {
    switch (action.type) {
    case FETCH_SCHEMA_COMPOSE:
      return {
        ...state,
        pending: true,
      };
    case  FETCH_SCHEMA_COMPOSE_SUCCESS:
      return {
        ...state,
        pending: false,
        schemas: action.payload.schemas,
        error: null,
      };
    case  FETCH_SCHEMA_COMPOSE_FAILURE:
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
};


export { composeReducer, composeReportsPipelineReducer, composeSchemaReducer };
