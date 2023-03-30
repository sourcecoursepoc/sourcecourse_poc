import {
  FETCH_SCHEMA_SCHEMADATA,
  FETCH_SCHEMA_SCHEMADATA_SUCCESS,
  FETCH_SCHEMA_SCHEMADATA_FAILURE,
  FETCH_SCHEMA_DATABASE,
  FETCH_SCHEMA_DATABASE_SUCCESS,
  FETCH_SCHEMA_DATABASE_FAILURE,
  ADD_ARRAY,
  REMOVE_NODE
} from "./schemaActionTypes";
import { FetchSchemaRequest, FetchSchemaSuccessPayload, FetchSchemaSuccess, FetchSchemaFailurePayload, FetchSchemaFailure, FetchDataBaseRequest, FetchDataBaseSuccessPayload, FetchDataBaseSuccess, FetchDataBaseFailurePayload, FetchDataBaseFailure, AddArrayAction, RemoveNodeAction } from "./schemaTypes";

export const fetchSchemaRequest = (params: number): FetchSchemaRequest => ({
  type: FETCH_SCHEMA_SCHEMADATA,
  params,
});

export const fetchSchemaSuccess = (
  payload: FetchSchemaSuccessPayload
): FetchSchemaSuccess => ({
  type: FETCH_SCHEMA_SCHEMADATA_SUCCESS,
  payload,
});

export const fetchSchemaFailure = (
  payload: FetchSchemaFailurePayload
): FetchSchemaFailure => ({
  type: FETCH_SCHEMA_SCHEMADATA_FAILURE,
  payload,
});

export const fetchDataBaseRequest = (): FetchDataBaseRequest => ({
  type: FETCH_SCHEMA_DATABASE,
});

export const fetchDataBaseSuccess = (
  payload: FetchDataBaseSuccessPayload
): FetchDataBaseSuccess => ({
  type: FETCH_SCHEMA_DATABASE_SUCCESS,
  payload,
});

export const fetchDataBaseFailure = (
  payload: FetchDataBaseFailurePayload
): FetchDataBaseFailure => ({
  type: FETCH_SCHEMA_DATABASE_FAILURE,
  payload,
});
export const addArray = (payload: any): AddArrayAction => ({
  type: ADD_ARRAY,
  payload,
  
});
export function removeNode(uid: string): RemoveNodeAction {
  console.log("uiddddd",uid)
  return {
    type: REMOVE_NODE,
    payload: { uid},
  };
}

