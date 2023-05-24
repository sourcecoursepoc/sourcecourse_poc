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
} from "../actions/composeTypes";
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
  GET_COMPOSE_NAME_DESC,
  GET_COMPOSE_NAME_DESC_SUCCESS,
  GET_COMPOSE_NAME_DESC_FAILURE,
  ADD_NAME_DESC_ARRAY,
  FETCH_PROJECT_SCHEMA_INFO_ACTION,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  POST_PROJECT_SCHEMA_INFO_ACTION,
  DELETE_PROJECT_SCHEMA_INFO_ACTION,
  DELETE_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  DELETE_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
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
      const { sourceTableUids } = action?.payload;
      const newSchemas = schemas.filter(
        (val) => val?.uid !== sourceTableUids?.[0]
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

//reducer for getting compose page name and description to a redux object

export interface ComposeState {
  nameDescArray: { uid: string; name: string; description: string }[];
}

const initialGetNameDescState: GetComposeNameDescState = {
  pending: false,
  saveData: [],
  error: null,
  nameDescArray: [],
};


function getComposeNameDescReducer(
  state = initialGetNameDescState,
  action: GetComposeNameDescActions
): GetComposeNameDescState {
  switch (action.type) {
    case GET_COMPOSE_NAME_DESC:
      console.log("GET_SCHEMA_NAME_DESC action dispatched.");
      return {
        ...state,
        pending: true,
      };
    case GET_COMPOSE_NAME_DESC_SUCCESS:
      console.log("GET_COMPOSE_NAME_DESC_SUCCESS action dispatched.");
      return {
        ...state,
        pending: false,
        saveData: action.payload.saveData,
        error: null,
      };
    case GET_COMPOSE_NAME_DESC_FAILURE:
      console.log("GET_COMPOSE_NAME_DESC_FAILURE action dispatched.");
      return {
        ...state,
        pending: false,
        saveData: [],
        error: action.payload.error,
      };
      case ADD_NAME_DESC_ARRAY:
      return {
        ...state,
        nameDescArray: [...state.nameDescArray, action.payload],
      };
    default:
      return state;
  }
}


export { composeReducer, composeReportsPipelineReducer,composeNameDescReducer,getComposeNameDescReducer };
export {
  composeReducer,
  composeReportsPipelineReducer,
  projectSchemaInfoReducer,
};
