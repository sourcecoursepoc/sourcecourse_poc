import {
  FETCH_PIPELINE_REQUEST,
  FETCH_PIPELINE_SUCCESS,
  FETCH_PIPELINE_FAILURE,
} from "../actions/actionTypes";
import {
  FETCH_SCHEMA_DATA,
  FETCH_SCHEMA_DATA_SUCCESS,
  FETCH_SCHEMA_DATA_FAILURE,
} from "./schemaActionTypes";
export interface IPIPELINE {
  id: number;
  type: string;
  pipelineName: string;
  timeStamp: string;
  status: boolean;
  statuspercentage: string;
}

export interface PipelineState {
  pending: boolean;
  pipelines: IPIPELINE[];
  error: string | null;
}

export interface FetchPipelineSuccessPayload {
  pipelines: IPIPELINE[];
}

export interface FetchPipelineFailurePayload {
  error: string;
}

export interface FetchPipelineRequest {
  type: typeof FETCH_PIPELINE_REQUEST;
}

export type FetchPipelineSuccess = {
  type: typeof FETCH_PIPELINE_SUCCESS;
  payload: FetchPipelineSuccessPayload;
};

export type FetchPipelineFailure = {
  type: typeof FETCH_PIPELINE_FAILURE;
  payload: FetchPipelineFailurePayload;
};

export type PipelineActions =
  | FetchPipelineRequest
  | FetchPipelineSuccess
  | FetchPipelineFailure;

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
