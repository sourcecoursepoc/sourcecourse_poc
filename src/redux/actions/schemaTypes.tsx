import {

    FETCH_GROUPDATA_DATABASE,
    FETCH_GROUPDATA_DATABASE_FAILURE,
    FETCH_GROUPDATA_DATABASE_SUCCESS,
    ADD_ARRAY,
    POST_GROUPDATA_DATABASE,
    POST_GROUPDATA_DATABASE_SUCCESS,
    POST_GROUPDATA_DATABASE_FAILURE,
    REMOVE_NODE,
    ADD_GROUPDATA_ARRAY,
    ADD_LAST_INDEX,
    REMOVE_LAST_INDEX,
    CLEAR_LAST_INDEXES,
    ADD_ATTRIBUTE_DETAILS,
    POST_GROUPDATA,
    POST_GROUPDATA_SUCCESS,
    POST_GROUPDATA_FAILURE,
    DELETE_GROUP_MODAL,
    FETCH_SCHEMA_SCHEMADATA_INFO_ACTION,
    FETCH_SCHEMA_SCHEMADATA_INFO_ACTION_SUCCESS,
    FETCH_SCHEMA_SCHEMADATA_INFO_ACTION_FAILURE,
    FETCH_SCHEMA_DATABASE_INFO_ACTION,
    FETCH_SCHEMA_DATABASE_INFO_ACTION_SUCCESS,
    FETCH_SCHEMA_DATABASE_INFO_ACTION_FAILURE,
    POST_TAGS_DESCRIPTION_INFO_ACTION,
    POST_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS,
    POST_TAGS_DESCRIPTION_INFO_ACTION_FAILURE,
    POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION,
    POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS,
    POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_FAILURE,



} from "./schemaActionTypes";

export interface ISchema {
    id: number;
    name: string;
    type: string;
}

export interface SchemaState {
    pending: boolean;
    schemas: ISchema[];
    error: string | null;
}

export interface FetchSchemaSuccessPayload {
    schemas: ISchema[];
}

export interface FetchSchemaFailurePayload {
    error: string;
}

export interface FetchSchemaRequest {
    type: typeof FETCH_SCHEMA_SCHEMADATA_INFO_ACTION;
    params: number;
}

export type FetchSchemaSuccess = {
    type: typeof FETCH_SCHEMA_SCHEMADATA_INFO_ACTION_SUCCESS;
    payload: FetchSchemaSuccessPayload;
};

export type FetchSchemaFailure = {
    type: typeof FETCH_SCHEMA_SCHEMADATA_INFO_ACTION_FAILURE;
    payload: FetchSchemaFailurePayload;
};

export type SchemaActions =
    | FetchSchemaRequest
    | FetchSchemaSuccess
    | FetchSchemaFailure;


export interface DataBaseInfoState {
    pending: boolean;
    database: DBProps[];
    error: string | null;
    myArray: any[];
    lastIndexes: any[];
}

export interface FetchDataBaseInfoActionSuccessPayload {
    database: DBProps[];
}

export interface FetchDataBaseInfoActionFailurePayload {
    error: string;
}



export interface FetchDataBaseInfoAction {
    type: typeof FETCH_SCHEMA_DATABASE_INFO_ACTION;

}

export type FetchDataBaseInfoActionSuccess = {
    type: typeof FETCH_SCHEMA_DATABASE_INFO_ACTION_SUCCESS;
    payload: FetchDataBaseInfoActionSuccessPayload;
};

export type FetchDataBaseInfoActionFailure = {
    type: typeof FETCH_SCHEMA_DATABASE_INFO_ACTION_FAILURE;
    payload: FetchDataBaseInfoActionFailurePayload;
};

export interface AddArrayAction {
    type: typeof ADD_ARRAY;
    payload: any;

}
export type DataBaseActions =
    | FetchDataBaseInfoAction
    | FetchDataBaseInfoActionSuccess
    | FetchDataBaseInfoActionFailure
    | AddArrayAction
    | RemoveNodeAction
    | AddLastIndexAction
    | RemoveLastIndexAction
    | ClearLastIndexAction
    ;




export interface GroupdataDataBaseState {
    pending: boolean;
    groupdataDatabase: TableProps[];
    error: string | null;
    myGroupdataArray: any[];
    myArray: any[];
    lastIndices: any[];

}

export interface FetchGroupdataDataBaseSuccessPayload {
    groupdataDatabase: TableProps[];
}

export interface FetchGroupdataDataBaseFailurePayload {
    error: string;
}

export interface FetchGroupdataDataBaseRequest {
    type: typeof FETCH_GROUPDATA_DATABASE;

}

export type FetchGroupdataDataBaseSuccess = {
    type: typeof FETCH_GROUPDATA_DATABASE_SUCCESS;
    payload: FetchGroupdataDataBaseSuccessPayload;
};

export type FetchGroupdataDataBaseFailure = {
    type: typeof FETCH_GROUPDATA_DATABASE_FAILURE;
    payload: FetchGroupdataDataBaseFailurePayload;
};

export interface AddGroupArrayAction {
    type: typeof ADD_GROUPDATA_ARRAY;
    payload: any;

}

// action for adding attribute details to array 
export interface AddAttributeDetailsAction {
    type: typeof ADD_ATTRIBUTE_DETAILS;
    payload: any;
}

export const AddAttributeDetails = (lastIndices: any) => {
    return {
        type: ADD_LAST_INDEX,
        payload: lastIndices,
    };
};


export interface RemoveNodeAction {
    type: typeof REMOVE_NODE;
    payload: { uid: string }; // The ID of the node to remove
}
export interface AddLastIndexAction {
    type: typeof ADD_LAST_INDEX;
    payload: any;
}

export interface RemoveLastIndexAction {
    type: typeof REMOVE_LAST_INDEX;
    payload: string;
}

export interface ClearLastIndexAction {
    type: typeof CLEAR_LAST_INDEXES;
    payload: [];
}


export const addLastIndex = (lastIndex: any) => {
    return {
        type: ADD_LAST_INDEX,
        payload: lastIndex,
    };
};

export const removeLastIndex = (uid: any) => {
    return {
        type: REMOVE_LAST_INDEX,
        payload: uid,
    };
};

export interface deleteGroupModalBoxAction {
    type: typeof DELETE_GROUP_MODAL;
    payload: [];
}

export type GroupdataDataBaseActions =
    | FetchGroupdataDataBaseRequest
    | FetchGroupdataDataBaseSuccess
    | FetchGroupdataDataBaseFailure
    | AddGroupArrayAction
    | AddAttributeDetailsAction
    | deleteGroupModalBoxAction
    ;

// Post schemas tags and descriprion

export interface PostDataState {
    loading: boolean;
    success: boolean;
    error: string | null;
}

export interface PostDataRequestAction {
    type: typeof POST_GROUPDATA_DATABASE;
}

export interface PostDataSuccessAction {
    type: typeof POST_GROUPDATA_DATABASE_SUCCESS;
}

export interface PostDataFailureAction {
    type: typeof POST_GROUPDATA_DATABASE_FAILURE;
    payload: string;
}

export type PostDataActionTypes =
    | PostDataRequestAction
    | PostDataSuccessAction
    | PostDataFailureAction;

//post for groupDataBase
export interface PostGroupData {
    loading: boolean;
    success: boolean;
    error: string | null;
}

export interface PostGrooupDataRequestAction {
    type: typeof POST_GROUPDATA;
}

export interface PostGrooupDataSuccessAction {
    type: typeof POST_GROUPDATA_SUCCESS;
}

export interface PostGrooupDataFailureAction {
    type: typeof POST_GROUPDATA_FAILURE;
    payload: string;
}

export type PostGroupDataActionTypes =
    | PostGrooupDataRequestAction
    | PostGrooupDataSuccessAction
    | PostGrooupDataFailureAction;

// post tags and description for table

export interface PostTagsAndDescriptionInfo {
    tags: any;
    description: any;
}

export interface PostTagsAndDescriptionInfoState {
    pending: boolean;
    postTableData: PostTagsAndDescriptionInfo[];
    error: string | null;
}

export interface PostTagsAndDescriptionInfoActionSuccessPayload {
    postTableData: PostTagsAndDescriptionInfo[];
}

export interface PostTagsAndDescriptionInfoActionFailurePayload {
    error: string;
}

export interface PostTagsAndDescriptionInfoAction {
    type: typeof POST_TAGS_DESCRIPTION_INFO_ACTION;
    uid: any;
    tags: string[];
    description: string
}

export type PostTagsAndDescriptionInfoActionSuccess = {
    type: typeof POST_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS;
    payload: PostTagsAndDescriptionInfoActionSuccessPayload;
};

export type PostTagsAndDescriptionInfoActionFailure = {
    type: typeof POST_TAGS_DESCRIPTION_INFO_ACTION_FAILURE;
    payload: PostTagsAndDescriptionInfoActionFailurePayload;
};

export type PostTagsAndDescriptionActions =
    | PostTagsAndDescriptionInfoAction
    | PostTagsAndDescriptionInfoActionSuccess
    | PostTagsAndDescriptionInfoActionFailure;


// post tags and description for column

export interface PostColumnTagsAndDescriptionInfo {
    tags: any;
    description: any;
}

export interface PostColumnTagsAndDescriptionInfoState {
    pending: boolean;
    postColumnData: PostColumnTagsAndDescriptionInfo[];
    error: string | null;
}

export interface PostColumnTagsAndDescriptionInfoActionSuccessPayload {
    postColumnData: PostColumnTagsAndDescriptionInfo[];
}

export interface PostColumnTagsAndDescriptionInfoActionFailurePayload {
    error: string;
}

export interface PostColumnTagsAndDescriptionInfoAction {
    type: typeof POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION;
    uid: any;
    tags: string[];
    description: string
}

export type PostColumnTagsAndDescriptionInfoActionSuccess = {
    type: typeof POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS;
    payload: PostColumnTagsAndDescriptionInfoActionSuccessPayload;
};

export type PostColumnTagsAndDescriptionInfoActionFailure = {
    type: typeof POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_FAILURE;
    payload: PostTagsAndDescriptionInfoActionFailurePayload;
};

export type PostColumnTagsAndDescriptionActions =
    | PostColumnTagsAndDescriptionInfoAction
    | PostColumnTagsAndDescriptionInfoActionSuccess
    | PostColumnTagsAndDescriptionInfoActionFailure;