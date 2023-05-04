import {
  FETCH_SCHEMA_COMPOSE,
  FETCH_SCHEMA_COMPOSE_SUCCESS,
  FETCH_SCHEMA_COMPOSE_FAILURE,
} from "../actions/composeActionTypes";
import {
  SchemaComposeState,
  SchemaComposeActions,
} from "../actions/composeTypes";

 const initialState: SchemaComposeState = {
  pending: false,
  schemas: [],
  error: null,
  }; 

export default (state = initialState, action: SchemaComposeActions) => {
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

