import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_PROJECT_SCHEMA_INFO_ACTION,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  POST_PROJECT_SCHEMA_INFO_ACTION,
  POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
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

export interface projectSchemaInfo {
  id: number;
  name: string;
  type: string;
}

export interface projectSchemaInfoState {
  pending: boolean;
  schemas: projectSchemaInfo[];
  error: string | null;
}

export interface fetchProjectSchemaInfoActionSuccessPayload {
  schemas: projectSchemaInfo[];
}

export interface fetchProjectSchemaInfoActionFailurePayload {
  error: string;
}

export interface FetchSchemaComposeRequest {
  type: typeof FETCH_PROJECT_SCHEMA_INFO_ACTION;
  params: number;
}

export type fetchProjectSchemaInfoActionSuccess = {
  type: typeof FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS;
  payload: fetchProjectSchemaInfoActionSuccessPayload;
};

export type fetchProjectSchemaInfoActionFailure = {
  type: typeof FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE;
  payload: fetchProjectSchemaInfoActionFailurePayload;
};

export type projectSchemaInfoActions =
  | FetchSchemaComposeRequest
  | fetchProjectSchemaInfoActionSuccess
  | fetchProjectSchemaInfoActionFailure;

// post schemas in compose page

export interface POSTSCHEMAREQUEST {
  projectUid: any;
  sourceTableUids: any[];
}
export interface PostProjectSchemaInfoState {
  loading: boolean;
  postData: POSTSCHEMAREQUEST[];
  error: string | null;
}
export interface PostProjectSchemaInfoSuccessPayload {
  postData: POSTSCHEMAREQUEST[];
}

export interface PostProjectSchemaInfoFailurePayload {
  error: string;
}

export interface PostProjectSchemaInfo {
  type: typeof POST_PROJECT_SCHEMA_INFO_ACTION;
  params: any;
}

export type PostProjectSchemaInfoSuccess = {
  type: typeof POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS;

  payload: PostProjectSchemaInfoSuccessPayload;
};

export type PostProjectSchemaInfoFailure = {
  type: typeof POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE;

  payload: PostProjectSchemaInfoFailurePayload;
};

export type PostProjectSchemaInfoActionTypes =
  | PostProjectSchemaInfo
  | PostProjectSchemaInfoSuccess
  | PostProjectSchemaInfoFailure;
