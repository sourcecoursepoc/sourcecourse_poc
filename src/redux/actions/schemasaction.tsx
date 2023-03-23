import {
  FETCH_SCHEMA_DATA,
  FETCH_SCHEMA_DATA_SUCCESS,
  FETCH_SCHEMA_DATA_FAILURE
} from "./schemaActionTypes";
import {
  FetchSchemaFailurePayload,
  FetchSchemaSuccessPayload,
  FetchSchemaFailure,
  FetchSchemaSuccess,
  SchemaActions,
  FetchSchema
} from "./types";

export const fetchSchema_Data = (): FetchSchema => ({
  type: FETCH_SCHEMA_DATA,
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