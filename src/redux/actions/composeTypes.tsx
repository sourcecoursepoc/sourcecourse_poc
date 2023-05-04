import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_SCHEMA_COMPOSE,
  FETCH_SCHEMA_COMPOSE_SUCCESS,
  FETCH_SCHEMA_COMPOSE_FAILURE,
} from "./composeActionTypes";

export interface ICOMPOSEPIPELINE {
  id: any;
  type: string;
  pipelineName: string;
  time: string;
  status: any;
  recordsExported: string;
}

export interface ComposePipelineState {
  pending: boolean;
  composePipeline: ICOMPOSEPIPELINE[];
  error: string | null;
}

export interface FetchComposePipelineSuccessPayload {
  composePipeline: ICOMPOSEPIPELINE[];
}

export interface FetchComposePipelineFailurePayload {
  error: string;
}

export interface FetchComposePipelineRequest {
  type: typeof FETCH_COMPOSE_PIPELINE;
  params: any;
}

export type FetchComposePipelineSuccess = {
  type: typeof FETCH_COMPOSE_PIPELINE_SUCCESS;
  payload: FetchComposePipelineSuccessPayload;
};

export type FetchComposePipelineFailure = {
  type: typeof FETCH_COMPOSE_PIPELINE_FAILURE;
  payload: FetchComposePipelineFailurePayload;
};

export type ComposePipelineActions =
  | FetchComposePipelineRequest
  | FetchComposePipelineSuccess
  | FetchComposePipelineFailure;

console.log("composeActionTypes: action types defined");

// compose reports pipeline
export interface ICOMPOSEREPORTSPIPELINE {
  projectId: string;
  projectName: string;
  projectDesc: string;
  schemaCount: number;
  groups: number;
  users: number;
  initialLoad: number;
  sync: number;
  schemas: [];
  RecordsDetails: [{ pending: number; migrated: number }];
  PipelineStatus: [{ success: number; error: number }];
  PipelineExcecution: [{ initialLoad: number; syncs: number }];
  SizeDetails: [{ pending: number; migrated: number }];
  AttributeDetails: [{ pending: number; migrated: number }];
  Item: [{ name: string; record1: number; record2: number }];
  ItemDetails: [{ name: string; record1: number; record2: number }];
  ItemDimension: [{ name: string; record1: number; record2: number }];
  Distributors: [{ name: string; record1: number; record2: number }];
  Offers: [{ name: string; record1: number; record2: number }];
}

export interface ComposeReportsPipelineState {
  pending: boolean;
  composeReportsPipeline: ICOMPOSEREPORTSPIPELINE[];
  error: string | null;
}

export interface FetchComposeReportsPipelineSuccessPayload {
  composeReportsPipeline: ICOMPOSEREPORTSPIPELINE[];
}

export interface FetchComposeReportsPipelineFailurePayload {
  error: string;
}

export interface FetchComposeReportsPipelineRequest {
  type: typeof FETCH_REPORTS_PIPELINE;
}

export type FetchComposeReportsPipelineSuccess = {
  type: typeof FETCH_REPORTS_PIPELINE_SUCCESS;
  payload: FetchComposeReportsPipelineSuccessPayload;
};

export type FetchComposeReportsPipelineFailure = {
  type: typeof FETCH_REPORTS_PIPELINE_FAILURE;
  payload: FetchComposePipelineFailurePayload;
};

export type ComposeReportsPipelineActions =
  | FetchComposeReportsPipelineRequest
  | FetchComposeReportsPipelineSuccess
  | FetchComposeReportsPipelineFailure;



//fetch schema compose data


export interface SchemaCompose {
  id: number;
  name: string;
  type: string;
}

export interface SchemaComposeState {
  pending: boolean;
  schemas: SchemaCompose[];
  error: string | null;
}

export interface FetchSchemaComposeSuccessPayload {
  schemas: SchemaCompose[];
}

export interface FetchSchemaComposeFailurePayload {
  error: string;
}

export interface FetchSchemaComposeRequest {
  type: typeof FETCH_SCHEMA_COMPOSE;
  params: number;
}

export type FetchSchemaComposeSuccess = {
  type: typeof FETCH_SCHEMA_COMPOSE_SUCCESS;
  payload: FetchSchemaComposeSuccessPayload;
};

export type FetchSchemaComposeFailure = {
  type: typeof FETCH_SCHEMA_COMPOSE_FAILURE;
  payload: FetchSchemaComposeFailurePayload;
};

export type SchemaComposeActions =
  | FetchSchemaComposeRequest
  | FetchSchemaComposeSuccess
  | FetchSchemaComposeFailure;

console.log(
  "composeActionTypes: action types defined for fetching name and description"
);
