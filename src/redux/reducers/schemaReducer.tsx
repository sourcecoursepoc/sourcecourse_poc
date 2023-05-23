import {
  FETCH_SCHEMA_SCHEMADATA,
  FETCH_SCHEMA_SCHEMADATA_FAILURE,
  FETCH_SCHEMA_SCHEMADATA_SUCCESS,
} from "../actions/schemaActionTypes";
import { SchemaState, SchemaActions } from "../actions/schemaTypes";

const initialState: SchemaState = {
  pending: false,
  schemas: [],
  error: null,
};

const schemaReducer = (state = initialState, action: SchemaActions) => {
  switch (action.type) {
    case FETCH_SCHEMA_SCHEMADATA:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SCHEMA_SCHEMADATA_SUCCESS:
      return {
        ...state,
        pending: false,
        schemas: action.payload.schemas,
        error: null,
      };
    case FETCH_SCHEMA_SCHEMADATA_FAILURE:
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

export default schemaReducer;
