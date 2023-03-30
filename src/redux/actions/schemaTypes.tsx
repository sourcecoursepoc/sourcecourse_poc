import {
    FETCH_SCHEMA_SCHEMADATA,
    FETCH_SCHEMA_SCHEMADATA_FAILURE,
    FETCH_SCHEMA_SCHEMADATA_SUCCESS,
    FETCH_SCHEMA_DATABASE,
    FETCH_SCHEMA_DATABASE_FAILURE,
    FETCH_SCHEMA_DATABASE_SUCCESS,
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




export interface AddArrayAction {
    type: typeof ADD_ARRAY;
    payload: any;
    
}
