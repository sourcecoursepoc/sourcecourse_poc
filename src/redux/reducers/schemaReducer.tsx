import {
    FETCH_SCHEMA_DATA,
    FETCH_SCHEMA_DATA_FAILURE,
    FETCH_SCHEMA_DATA_SUCCESS
} from "../actions/schemaActionTypes";

import { SchemaActions, SchemaState } from "../actions/types";

const initialState: SchemaState = {
    pending: false,
    schemas: [],
    error: null,
};

export default (state = initialState, action: SchemaActions) => {
    switch (action.type) {
        case FETCH_SCHEMA_DATA:
            return {
                ...state,
                pending: true,
            };
        case FETCH_SCHEMA_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                schemas: action.payload.schemas,
                error: null,
            };
        case FETCH_SCHEMA_DATA_FAILURE:
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