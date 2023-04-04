import {
    FETCH_SCHEMA_DATABASE,
    FETCH_SCHEMA_DATABASE_FAILURE,
    FETCH_SCHEMA_DATABASE_SUCCESS,
    ADD_ARRAY,
    POST_GROUPDATA_DATABASE_FAILURE,
    POST_GROUPDATA_DATABASE_SUCCESS,
    REMOVE_NODE
} from "../actions/schemaActionTypes";
import { DataBaseState, DataBaseActions, PostDataActionTypes, PostDataState } from "../actions/schemaTypes";

const initialDataBaseState: DataBaseState = {
  pending: false,
  database: [],
  error: null,
  myArray: [],
};

export default (state = initialDataBaseState, action: DataBaseActions) => {
  switch (action.type) {
    case FETCH_SCHEMA_DATABASE:
      return {
        ...state,

        pending: true,
      };

    case FETCH_SCHEMA_DATABASE_SUCCESS:
      return {
        ...state,

        pending: false,

        database: action.payload.database,

        error: null,
      };

    case FETCH_SCHEMA_DATABASE_FAILURE:
      return {
        ...state,

        pending: false,

        database: [],

        error: action.payload.error,
      };

    case ADD_ARRAY:
      if (Array.isArray(action.payload)) {
        console.log(action.payload, "payload");

        return {
          ...state,

          myArray: [...state.myArray, ...action.payload],
        };
      } else {
        // Handle non-iterable payload, e.g. throw an error or log a warning
      };
      case REMOVE_NODE:
                const updatedArray = state.myArray.filter(node => node.uid !== action.payload.uid);
             
                console.log(updatedArray,"updatedArray")
                return {
                    ...state,
                    myArray: updatedArray,
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

