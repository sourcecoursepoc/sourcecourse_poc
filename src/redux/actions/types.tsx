import {
    FETCH_SCHEMA_DATA,
    FETCH_SCHEMA_DATA_SUCCESS,
    FETCH_SCHEMA_DATA_FAILURE,
  } from "./schemaActionTypes";
  
  export interface ISCHEMA {
    id: number;
    name: string;
    type: string;
  }
  
  export interface SchemaState {
    pending: boolean;
    schemas: ISCHEMA[];
    error: string | null;
  }
  
  export interface FetchSchemaSuccessPayload {
    schemas: ISCHEMA[];
  }
  
  export interface FetchSchemaFailurePayload {
    error: string;
  }
  
  export interface FetchSchema {
    type: typeof FETCH_SCHEMA_DATA;
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
    | FetchSchema
    | FetchSchemaSuccess
    | FetchSchemaFailure;