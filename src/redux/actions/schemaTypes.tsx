import {
    FETCH_SCHEMA_DATA,
    FETCH_SCHEMA_DATA_FAILURE,
    FETCH_SCHEMA_DATA_SUCCESS
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
    type: typeof FETCH_SCHEMA_DATA;
    params:string;
}

export type FetchSchemaSuccess = {
    type: typeof FETCH_SCHEMA_DATA_SUCCESS;
    payload: FetchSchemaSuccessPayload;
};

export type FetchSchemaFailure = {
    type: typeof FETCH_SCHEMA_DATA_FAILURE;
    payload: FetchSchemaFailurePayload;
};

export type SchemaActions =
    | FetchSchemaRequest
    | FetchSchemaSuccess
    | FetchSchemaFailure;