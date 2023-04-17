import {
    FETCH_GROUPDATA_DATABASE,
    FETCH_GROUPDATA_DATABASE_FAILURE,
    FETCH_GROUPDATA_DATABASE_SUCCESS,
    ADD_GROUPDATA_ARRAY,
    ADD_ATTRIBUTE_DETAILS
} from "../actions/schemaActionTypes";
import { GroupdataDataBaseActions,GroupdataDataBaseState } from "../actions/schemaTypes";

const initialGroupdataDataBaseState: GroupdataDataBaseState = {
    pending: false,
    groupdataDatabase: [],
    error: null,
    myGroupdataArray: [],
    lastIndices: [],

};




export default (state = initialGroupdataDataBaseState, action: GroupdataDataBaseActions) => {
    
    switch (action.type) {
        case FETCH_GROUPDATA_DATABASE:
            console.log("testttttttttttttttttttt")
            return {
                ...state,
                pending: true,
            };
        case FETCH_GROUPDATA_DATABASE_SUCCESS:
            console.log("reducerrrrr",action.payload.groupdataDatabase)
            return {
                ...state,
                pending: false,
                groupdataDatabase: action.payload.groupdataDatabase,
                error: null,
            };
        case FETCH_GROUPDATA_DATABASE_FAILURE:
            {console.log(action.payload.error,"actionnnnnnnnnnnnn");}
            return {
                ...state,
                pending: false,
                groupdataDatabase: [],
                error: action.payload.error,
            };
        case ADD_GROUPDATA_ARRAY:
            if (Array.isArray(action.payload)) {
                console.log(action.payload, "payload groupData")
                return {
                    ...state,
                    myGroupdataArray: [...state.myGroupdataArray, ...action.payload]
                };
            } else {
                // Handle non-iterable payload, e.g. throw an error or log a warning
            };
            case ADD_ATTRIBUTE_DETAILS:
                console.log("Received data in ADD_ATTRIBUTE_DETAILS -------reducer:", action.payload);
                  const exists = state.lastIndices.some((node) => node.uid === action.payload.uid);
                  if (!exists) {
                    return {
                      ...state,
                      lastIndices: [...state.lastIndices, action.payload],
                    };
                  } else {
                    return state;
                  }
        default:
            return {
                ...state,
            };
    }
};
