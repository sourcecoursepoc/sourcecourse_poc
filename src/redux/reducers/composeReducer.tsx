import {
  ComposePipelineState,
  ComposePipelineActions,
  ComposeReportsPipelineActions,
  ComposeReportsPipelineState,
  projectSchemaInfoActions,
  projectSchemaInfoState,
  PostProjectSchemaInfoState,
  PostProjectSchemaInfoActionTypes,
  DeleteProjectSchemaInfoState,
  DeleteProjectSchemaInfoActionTypes,
  SearchSchemaByTagInfoState,
  SearchSchemaByTagActions,
  ComposeNameDescActions,
  ComposeNameDescState,
  CreatePipelineInfoState,
  CreatePipelineActions,
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
  DELETE_PROJECT_SCHEMA_INFO_ACTION,
  DELETE_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  DELETE_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION_SUCCESS,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION_FAILURE,
  POST_COMPOSE_NAME_DESC,
  POST_COMPOSE_NAME_DESC_SUCCESS,
  POST_COMPOSE_NAME_DESC_FAILURE,
  POST_CREATE_PIPELINE_INFO_ACTION,
  POST_CREATE_PIPELINE_INFO_ACTION_SUCCESS,
  POST_CREATE_PIPELINE_INFO_ACTION_FAILURE,
} from "../actions/composeActionTypes";

const initialState: ComposePipelineState = {
  pending: false,
  composePipeline: [],
  error: null,
};
interface ProjectTablesState {
  loading: boolean;
  error: string | null;
  // Define any state properties you need
}
function composeReducer(
  state = initialState,
  action: ComposePipelineActions
): ComposePipelineState {
  switch (action.type) {
    case FETCH_COMPOSE_PIPELINE:
      return {
        ...state,
        pending: true,
      };
    case FETCH_COMPOSE_PIPELINE_SUCCESS:
      return {
        ...state,
        pending: false,
        composePipeline: action.payload.composePipeline,
        error: null,
      };
    case FETCH_COMPOSE_PIPELINE_FAILURE:
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
      return {
        ...state,
        pending: true,
      };
    case FETCH_REPORTS_PIPELINE_SUCCESS:
      return {
        ...state,
        pending: false,
        composeReportsPipeline: action.payload.composeReportsPipeline,
        error: null,
      };
    case FETCH_REPORTS_PIPELINE_FAILURE:
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

//GET,POST and DELETE Schema Compose
const initialStateCompose: projectSchemaInfoState = {
  isFetching: false,
  schemas: [],
  error: null,
  postData: [],
  isDelete: false,
};
function projectSchemaInfoReducer(
  state = initialStateCompose,
  action:
    | projectSchemaInfoActions
    | PostProjectSchemaInfoActionTypes
    | DeleteProjectSchemaInfoActionTypes
): projectSchemaInfoState {
  switch (action.type) {
    case FETCH_PROJECT_SCHEMA_INFO_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        schemas: action.payload.schemas,
        error: null,
      };
    case FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        schemas: [],
        error: action.payload.error,
      };
    case POST_PROJECT_SCHEMA_INFO_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        schemas: action.payload.postData,
        error: null,
      };
    case POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        schemas: [],
        error: action.payload.error,
      };
    case DELETE_PROJECT_SCHEMA_INFO_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_PROJECT_SCHEMA_INFO_ACTION_SUCCESS:
      const { schemas } = state;
      const { sourceTableUids } = action ?.payload;
      const newSchemas = schemas.filter(
        (val) => val ?.uid !== sourceTableUids ?.[0]
      );
      return {
        ...state,
        schemas: newSchemas,
        isFetching: false,
        isDelete: action.payload.isDelete,
        error: null,
      };
    case DELETE_PROJECT_SCHEMA_INFO_ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        isDelete: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}


const initialSearchSchemaState: SearchSchemaByTagInfoState = {
  pending: false,
  searchData: [],
  error: null,
};

export const searchSchemaByTagReducer = (state = initialSearchSchemaState, action: SearchSchemaByTagActions) => {
  switch (action.type) {
    case SEARCH_SCHEMA_BY_TAG_INFO_ACTION:
      return {
        ...state,
        pending: true,
      };
    case SEARCH_SCHEMA_BY_TAG_INFO_ACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        searchData: action.payload.searchData,
        error: null,
      };
    case SEARCH_SCHEMA_BY_TAG_INFO_ACTION_FAILURE:
      return {
        ...state,
        pending: false,
        searchData: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};


//reducer for posting compose page name and description
const initialPostNameDescState: ComposeNameDescState = {
  pending: false,
  postData: [],
  error: null,
};

export const postComposeNameDescReducer = (
  state = initialPostNameDescState,
  action: ComposeNameDescActions
): ComposeNameDescState => {
  switch (action.type) {
    case POST_COMPOSE_NAME_DESC:
      return {
        ...state,
        pending: true,
      };
    case POST_COMPOSE_NAME_DESC_SUCCESS:
      return {
        ...state,
        pending: false,
        postData: action.payload.postData,
        error: null,
      };
    case POST_COMPOSE_NAME_DESC_FAILURE:
      return {
        ...state,
        pending: false,
        postData: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const initialCreatePipelineState: CreatePipelineInfoState = {
  pending: false,
  postData: [],
  error: null,
};

const createPipelineReducer = (state = initialState, action: CreatePipelineActions) => {
  switch (action.type) {
    case POST_CREATE_PIPELINE_INFO_ACTION:
      return {
        ...state,
        pending: true,
        error: null
      };
    case POST_CREATE_PIPELINE_INFO_ACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        postData: action.payload.postData
      };
    case POST_CREATE_PIPELINE_INFO_ACTION_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export {
  composeReducer,
  composeReportsPipelineReducer,
  projectSchemaInfoReducer,
  createPipelineReducer,
};
