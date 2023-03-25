import {
  FETCH_SCHEMA_DATA,
  FETCH_SCHEMA_DATA_SUCCESS,
  FETCH_SCHEMA_DATA_FAILURE
} from "./schemaActionTypes";
import { FetchSchemaRequest, FetchSchemaSuccessPayload, FetchSchemaSuccess, FetchSchemaFailurePayload, FetchSchemaFailure } from "./schemaTypes";

export const fetchSchemaRequest = (params:string): FetchSchemaRequest => ({
  type: FETCH_SCHEMA_DATA,
  params,
});

export const fetchSchemaSuccess = (
  payload: FetchSchemaSuccessPayload
): FetchSchemaSuccess => ({
  type: FETCH_SCHEMA_DATA_SUCCESS,
  payload,
});

export const fetchSchemaFailure = (
  payload: FetchSchemaFailurePayload
): FetchSchemaFailure => ({
  type: FETCH_SCHEMA_DATA_FAILURE,
  payload,
});