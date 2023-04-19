import {
    FETCH_GROUPDATA_DATABASE,
    FETCH_GROUPDATA_DATABASE_FAILURE,
    FETCH_GROUPDATA_DATABASE_SUCCESS,
    ADD_GROUPDATA_ARRAY,
    ADD_ATTRIBUTE_DETAILS,
    POST_GROUPDATA_FAILURE,
    POST_GROUPDATA_SUCCESS,
    DELETE_GROUP_MODAL
} from "../actions/schemaActionTypes";
import { GroupdataDataBaseActions,GroupdataDataBaseState, PostGroupData, PostGroupDataActionTypes } from "../actions/schemaTypes";

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
                  };
                  case DELETE_GROUP_MODAL:
                    return {
                      ...state,
                      lastIndices: [],
                    }; 
                    
        default:
            return {
                ...state,
            };
    }
};

const initialState: PostGroupData = {
    loading: false,
    success: false,
    error: null,
};

export const postDataReducer = (state = initialState, action: PostGroupDataActionTypes): PostGroupData => {
    switch (action.type) {
        case POST_GROUPDATA_FAILURE:
            return { ...state, loading: true };
        case POST_GROUPDATA_SUCCESS:
            return { ...state, loading: false, success: true };
        case POST_GROUPDATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
