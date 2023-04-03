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
    ADD_ARRAY
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

export type DataBaseActions =
    | FetchDataBaseRequest
    | FetchDataBaseSuccess
    | FetchDataBaseFailure
    | AddArrayAction
    ;



    
export interface GroupdataDataBaseState {
    pending: boolean;
    groupdataDatabase: TableProps[];
    error: string | null;
    myArray: any[];
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

export type GroupdataDataBaseActions =
    | FetchGroupdataDataBaseRequest
    | FetchGroupdataDataBaseSuccess
    | FetchGroupdataDataBaseFailure
    | AddArrayAction
    ;


export interface AddArrayAction {
    type: typeof ADD_ARRAY;
    payload: any;
    
}
