import { DB_CONNECTION_FAILURE, DB_CONNECTION_REQUEST, DB_CONNECTION_SUCCESS } from "../actions/actionTypes";
import {

  ADD_ARRAY,
  POST_GROUPDATA_DATABASE_FAILURE,
  POST_GROUPDATA_DATABASE_SUCCESS,
  REMOVE_NODE,
  ADD_LAST_INDEX,
  REMOVE_LAST_INDEX,
  CLEAR_LAST_INDEXES,
  FETCH_SCHEMA_DATABASE_INFO_ACTION,
  FETCH_SCHEMA_DATABASE_INFO_ACTION_SUCCESS,
  FETCH_SCHEMA_DATABASE_INFO_ACTION_FAILURE,
  POST_TAGS_DESCRIPTION_INFO_ACTION,
  POST_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS,
  POST_TAGS_DESCRIPTION_INFO_ACTION_FAILURE,
  POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION,
  POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS,
  POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_FAILURE,


} from "../actions/schemaActionTypes";
import { DataBaseState, DataBaseActions, PostDataActionTypes, PostDataState, UpdatePostAction, postTagsAndDescriptionState, postTagsAndDescriptionActions, PostColumnTagsAndDescriptionState, PostColumnTagsAndDescriptionActions, PostTagsAndDescriptionInfoState, PostColumnTagsAndDescriptionInfoState } from "../actions/schemaTypes";
import { dbConnecionActions, IDBState } from '../actions/types'

const initialDataBaseState: DataBaseState = {
  pending: false,
  database: [],
  error: null,
  myArray: [],
  lastIndexes: [],
};

export default (state = initialDataBaseState, action: DataBaseActions) => {
  switch (action.type) {
    case FETCH_SCHEMA_DATABASE_INFO_ACTION:
      return {
        ...state,

        pending: true,
      };

    case FETCH_SCHEMA_DATABASE_INFO_ACTION_SUCCESS:
      return {
        ...state,

        pending: false,

        database: action.payload.database,

        error: null,
      };

    case FETCH_SCHEMA_DATABASE_INFO_ACTION_FAILURE:
      return {
        ...state,

        pending: false,

        database: [],

        error: action.payload.error,
      };

    case ADD_ARRAY:
      if (Array.isArray(action.payload)) {

        return {
          ...state,

          myArray: [...state.myArray, ...action.payload],
        };
      } else {
        // Handle non-iterable payload, e.g. throw an error or log a warning
      };
    case REMOVE_NODE:
      const updatedArray = state.myArray.filter(node => node.uid !== action.payload.uid);

      return {
        ...state,
        myArray: updatedArray,
      };
    case ADD_LAST_INDEX:
      const exists = state.lastIndexes.some((node) => node?.uid === action.payload?.uid);
      if (!exists) {
        return {
          ...state,
          lastIndexes: [...state.lastIndexes, action.payload],
        };
      } else {
        return state;
      }
    case REMOVE_LAST_INDEX:
      const index = state.lastIndexes.findIndex((node) => node.uid === action.payload);
      if (index !== -1) {
        state.lastIndexes.splice(index, 1);
      }
      return {
        ...state,
        lastIndexes: [...state.lastIndexes],
      };
    case CLEAR_LAST_INDEXES:
      return {
        ...state,
        lastIndexes: [],
      };

    default:
      return {
        ...state,
      };
  }
};

// reducer.ts

const initialState: PostDataState = {
  loading: false,
  success: false,
  error: null,
};

export const postDataReducer = (state = initialState, action: PostDataActionTypes): PostDataState => {
  switch (action.type) {
    case POST_GROUPDATA_DATABASE_FAILURE:
      return { ...state, loading: true };
    case POST_GROUPDATA_DATABASE_SUCCESS:
      return { ...state, loading: false, success: true };
    case POST_GROUPDATA_DATABASE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


// reducer for posting tags and description

const initialPostState: postTagsAndDescriptionState = {
  pending: false,
  postTableData: [],
  error: null,
};

export const postTagsAndDescriptionReducer = (
  state = initialPostState,
  action: postTagsAndDescriptionActions
): PostTagsAndDescriptionInfoState => {
  switch (action.type) {
    case POST_TAGS_DESCRIPTION_INFO_ACTION:
      return {
        ...state,
        pending: true,
      };
    case POST_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        postTableData: action.payload.postTableData,
        error: null,
      };
    case POST_TAGS_DESCRIPTION_INFO_ACTION_FAILURE:
      return {
        ...state,
        pending: false,
        postTableData: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// post column description and tags
const initialColumnPostState: PostColumnTagsAndDescriptionInfoState = {
  pending: false,
  postColumnData: [],
  error: null,
};

export const postColumnTagsAndDescriptionReducer = (
  state = initialColumnPostState,
  action: PostColumnTagsAndDescriptionActions
): PostColumnTagsAndDescriptionInfoState => {
  switch (action.type) {
    case POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION:
      return {
        ...state,
        pending: true,
      };
    case POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        postColumnData: action.payload.postColumnData,
        error: null,
      };
    case POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_FAILURE:
      return {
        ...state,
        pending: false,
        postColumnData: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};


const dBConnectionState: IDBState = {
  pending: false,
  dataConnection: [],
  error: null,
};

export const dBconnectionReducer = (
  state = dBConnectionState,
  action: dbConnecionActions
): IDBState => {
  console.log('reducer', action.type); // add this line to log the action type
  switch (action.type) {
    case DB_CONNECTION_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case DB_CONNECTION_SUCCESS:
      console.log("Payload of DB_CONNECTION_SUCCESS: ", action.payload);
      return {
        ...state,
        pending: false,
        dataConnection: action.payload.response,
        error: null
      };
    case DB_CONNECTION_FAILURE:
      console.log("Payload of DB_CONNECTION_FAILURE: ", action.payload);
      return {
        ...state,
        dataConnection: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}




