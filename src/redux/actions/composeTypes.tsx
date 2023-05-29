import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_SCHEMA_NAME_DESC_FAILURE,
  FETCH_SCHEMA_NAME_DESC_SUCCESS,
  FETCH_SCHEMA_NAME_DESC,
  POST_COMPOSE_NAME_DESC,
  POST_COMPOSE_NAME_DESC_SUCCESS,
  POST_COMPOSE_NAME_DESC_FAILURE,
  GET_COMPOSE_NAME_DESC_FAILURE,
  GET_COMPOSE_NAME_DESC_SUCCESS,
  GET_COMPOSE_NAME_DESC,
  ADD_NAME_DESC_ARRAY,
  FETCH_PROJECT_SCHEMA_INFO_ACTION,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  POST_PROJECT_SCHEMA_INFO_ACTION,
  POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  DELETE_PROJECT_SCHEMA_INFO_ACTION,
  DELETE_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  DELETE_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION_SUCCESS,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION_FAILURE,
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


//compose page name & desc action

export interface ICOMPOSENAMEDESC {
  name: any;
  description: any;
}

export interface ComposeNameDescState {
  pending: boolean;
  postData: ICOMPOSENAMEDESC[];
  error: string | null;
}

export interface PostComposeNameDescSuccessPayload {
  postData: ICOMPOSENAMEDESC[];
}

export interface PostComposeNameDescFailurePayload {
  error: string;
}

export interface PostComposeNameDescRequest {
  type: typeof POST_COMPOSE_NAME_DESC;
    name: any,
    description: any
}

export type PostComposeNameDescSuccess = {
  type: typeof POST_COMPOSE_NAME_DESC_SUCCESS;
  payload: PostComposeNameDescSuccessPayload;
};

export type PostComposeNameDescFailure = {
  type: typeof POST_COMPOSE_NAME_DESC_FAILURE;
  payload: PostComposeNameDescFailurePayload;
};

export type ComposeNameDescActions =
  | PostComposeNameDescRequest
  | PostComposeNameDescSuccess
  | PostComposeNameDescFailure;

console.log(
  "composeActionTypes: action types defined for fetching name and description"
);

//save id,name,desc of project to the redux object

export interface IGETCOMPOSENAMEDESC {
  uid: any[],
  name: any[];
  description: any[];
}

export interface GetComposeNameDescState {
  pending: boolean;
  saveData: IGETCOMPOSENAMEDESC[];
  error: string | null;
}

export interface GetComposeNameDescSuccessPayload {
  saveData: ICOMPOSENAMEDESC[];
}

export interface GetComposeNameDescFailurePayload {
  error: string;
}

export interface GetComposeNameDescRequest {
  type: typeof GET_COMPOSE_NAME_DESC;
  //   params: any;
}

export type GetComposeNameDescSuccess = {
  type: typeof GET_COMPOSE_NAME_DESC_SUCCESS;
  payload: GetComposeNameDescSuccessPayload;
};

export type GetComposeNameDescFailure = {
  type: typeof GET_COMPOSE_NAME_DESC_FAILURE;
  payload: GetComposeNameDescFailurePayload;
};

//to add uid,name,desc to an array 
export interface AddNameDescArrayAction {
  type: typeof ADD_NAME_DESC_ARRAY;
  payload: any;
}

export type GetComposeNameDescActions =
  | GetComposeNameDescRequest
  | GetComposeNameDescSuccess
  | GetComposeNameDescFailure
  | AddNameDescArrayAction;
export interface projectSchemaInfo {
  uid: any;
  projectUid: any;
  sourceTableUids: any[];
}
export interface POSTSCHEMAREQUEST {
  projectUid: any;
  sourceTableUids: any[];
}
export interface projectSchemaInfoState {
  isFetching: boolean;
  schemas: projectSchemaInfo[];
  postData: projectSchemaInfo[];
  isDelete: boolean;
  error: string | null;
}

//GET schema compose
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

// POST schemas compose

export interface PostProjectSchemaInfoSuccessPayload {
  postData: projectSchemaInfo[];
}

export interface PostProjectSchemaInfoFailurePayload {
  error: string;
}

export interface PostProjectSchemaInfo {
  type: typeof POST_PROJECT_SCHEMA_INFO_ACTION;
  projectUid: any;
  sourceTableUids: any[];
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

//delete schema compose

export interface DeleteProjectSchemaInfoSuccessPayload {
  isDelete: boolean;
}

export interface DeleteProjectSchemaInfoFailurePayload {
  error: string;
}

export interface DeleteProjectSchemaInfoAction {
  type: typeof DELETE_PROJECT_SCHEMA_INFO_ACTION;
  projectUid: any;
  sourceTableUids: any[];
}

export interface DeleteProjectSchemaInfoSuccessAction {
  type: typeof DELETE_PROJECT_SCHEMA_INFO_ACTION_SUCCESS;
  payload: DeleteProjectSchemaInfoSuccessPayload;
}

export interface DeleteProjectSchemaInfoFailureAction {
  type: typeof DELETE_PROJECT_SCHEMA_INFO_ACTION_FAILURE;
  payload: DeleteProjectSchemaInfoFailurePayload;
}

export type DeleteProjectSchemaInfoActionTypes =
  | DeleteProjectSchemaInfoAction
  | DeleteProjectSchemaInfoSuccessAction
  | DeleteProjectSchemaInfoFailureAction;



// search schema by tag

export interface SearchSchemaByTagInfoState {
  pending: boolean;
  searchData: any[];
  error: any | null
}

export interface SearchSchemaByTagInfoActionSuccessPayload {
  searchData: any;
}

export interface SearchSchemaByTagInfoActionFailurePayload {
  error: any;
}

export interface SearchSchemaByTagInfoAction {
  type: typeof SEARCH_SCHEMA_BY_TAG_INFO_ACTION;
  searchValue: any;

};

export interface SearchSchemaByTagInfoSuccessAction {
  type: typeof SEARCH_SCHEMA_BY_TAG_INFO_ACTION_SUCCESS;
  payload: SearchSchemaByTagInfoActionSuccessPayload
};

export interface SearchSchemaByTagInfoFailureAction {
  type: typeof SEARCH_SCHEMA_BY_TAG_INFO_ACTION_FAILURE;
  payload: SearchSchemaByTagInfoActionFailurePayload;
}


export type SearchSchemaByTagActions =
  |SearchSchemaByTagInfoAction
  | SearchSchemaByTagInfoSuccessAction
  | SearchSchemaByTagInfoFailureAction;