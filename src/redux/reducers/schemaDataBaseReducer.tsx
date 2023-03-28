import {
    FETCH_SCHEMA_DATABASE,
    FETCH_SCHEMA_DATABASE_FAILURE,
    FETCH_SCHEMA_DATABASE_SUCCESS
} from "../actions/schemaActionTypes";
import { DataBaseState, DataBaseActions } from "../actions/schemaTypes";

const initialDataBaseState: DataBaseState = {
    pending: false,
    database: [],
    error: null,
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
        default:
            return {
                ...state,
            };
    }
};