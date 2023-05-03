import {
    FETCH_SCHEMA_SCHEMADATA,
    FETCH_SCHEMA_SCHEMADATA_FAILURE,
    FETCH_SCHEMA_SCHEMADATA_SUCCESS,
    FETCH_SCHEMA_DATABASE,
    FETCH_SCHEMA_DATABASE_FAILURE,
    FETCH_SCHEMA_DATABASE_SUCCESS,
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
    POST_TAGS_DESCRIPTION_REQUEST,
    POST_TAGS_DESCRIPTION_FAILURE,
    POST_TAGS_DESCRIPTION_SUCCESS,
    POST_COLUMN_TAGS_DESCRIPTION_REQUEST,
    POST_COLUMN_TAGS_DESCRIPTION_SUCCESS,
    POST_COLUMN_TAGS_DESCRIPTION_FAILURE,


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
    type: typeof FETCH_SCHEMA_SCHEMADATA;
    params: number;
}

export type FetchSchemaSuccess = {
    type: typeof FETCH_SCHEMA_SCHEMADATA_SUCCESS;
    payload: FetchSchemaSuccessPayload;
};

export type FetchSchemaFailure = {
    type: typeof FETCH_SCHEMA_SCHEMADATA_FAILURE;
    payload: FetchSchemaFailurePayload;
};

export type SchemaActions =
    | FetchSchemaRequest
    | FetchSchemaSuccess
    | FetchSchemaFailure;


export interface DataBaseState {
    pending: boolean;
    database: DBProps[];
    error: string | null;
    myArray: any[];
    lastIndexes: any[];
}

export interface FetchDataBaseSuccessPayload {
    database: DBProps[];
}

export interface FetchDataBaseFailurePayload {
    error: string;
}



export interface FetchDataBaseRequest {
    type: typeof FETCH_SCHEMA_DATABASE;

}

export type FetchDataBaseSuccess = {
    type: typeof FETCH_SCHEMA_DATABASE_SUCCESS;
    payload: FetchDataBaseSuccessPayload;
};

export type FetchDataBaseFailure = {
    type: typeof FETCH_SCHEMA_DATABASE_FAILURE;
    payload: FetchDataBaseFailurePayload;
};

export interface AddArrayAction {
    type: typeof ADD_ARRAY;
    payload: any;

}
export type DataBaseActions =
    | FetchDataBaseRequest
    | FetchDataBaseSuccess
    | FetchDataBaseFailure
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

export interface PostTagsAndDescription {
    tags: any;
    description: any;
}

export interface PostTagsAndDescriptionState {
    pending: boolean;
    postData: PostTagsAndDescription[];
    error: string | null;
}

export interface PostTagsAndDescriptionSuccessPayload {
    postData: PostTagsAndDescription[];
}

export interface PostTagsAndDescriptionFailurePayload {
    error: string;
}

export interface PostTagsAndDescriptionRequest {
    type: typeof POST_TAGS_DESCRIPTION_REQUEST;
    uid: any;
    tags: string[];
    description: string
}

export type PostTagsAndDescriptionSuccess = {
    type: typeof POST_TAGS_DESCRIPTION_SUCCESS;
    payload: PostTagsAndDescriptionSuccessPayload;
};

export type PostTagsAndDescriptionFailure = {
    type: typeof POST_TAGS_DESCRIPTION_FAILURE;
    payload: PostTagsAndDescriptionFailurePayload;
};

export type PostTagsAndDescriptionActions =
    | PostTagsAndDescriptionRequest
    | PostTagsAndDescriptionSuccess
    | PostTagsAndDescriptionFailure;


// post tags and description for column

export interface PostColumnTagsAndDescription {
    tags: any;
    description: any;
}

export interface PostColumnTagsAndDescriptionState {
    pending: boolean;
    postColumnData: PostColumnTagsAndDescription[];
    error: string | null;
}

export interface PostColumnTagsAndDescriptionSuccessPayload {
    postColumnData: PostColumnTagsAndDescription[];
}

export interface PostColumnTagsAndDescriptionFailurePayload {
    error: string;
}

export interface PostColumnTagsAndDescriptionRequest {
    type: typeof POST_COLUMN_TAGS_DESCRIPTION_REQUEST;
    uid: any;
    tags: string[];
    description: string
}

export type PostColumnTagsAndDescriptionSuccess = {
    type: typeof POST_COLUMN_TAGS_DESCRIPTION_SUCCESS;
    payload: PostColumnTagsAndDescriptionSuccessPayload;
};

export type PostColumnTagsAndDescriptionFailure = {
    type: typeof POST_COLUMN_TAGS_DESCRIPTION_FAILURE;
    payload: PostTagsAndDescriptionFailurePayload;
};

export type PostColumnTagsAndDescriptionActions =
    | PostColumnTagsAndDescriptionRequest
    | PostColumnTagsAndDescriptionSuccess
    | PostColumnTagsAndDescriptionFailure;