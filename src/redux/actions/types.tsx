import {
  FETCH_PIPELINE_REQUEST,
  FETCH_PIPELINE_SUCCESS,
  FETCH_PIPELINE_FAILURE,
  FETCH_ALLPROJECTS_FAILURE,
  FETCH_ALLPROJECTS_REQUEST,
  FETCH_ALLPROJECTS_SUCCESS,
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

 export interface IDETAILS{
  schema: number;
  groups:number,
  users:number,
  initialLoad:number,
  sync:number,
 }
 export interface IPROJECT {
      totalSchemas:number,
      projects:[],
      projectDetails:IDETAILS;
      projectId: number;
    projectName: string;
    projectDesc: string;
   
    }
    
    export interface ProjectState {
      pending: boolean;
      projects: IPROJECT[];
      error: string | null;
    }
    
    export interface FetchProjectSuccessPayload {
      projects: IPROJECT[];
    }
    
    export interface FetchProjectFailurePayload {
      error: string;
    }
    
    export interface FetchProjectRequest {
      type: typeof FETCH_ALLPROJECTS_REQUEST;
    }
    
    export type FetchProjectSuccess = {
      type: typeof FETCH_ALLPROJECTS_SUCCESS;
      payload: FetchProjectSuccessPayload;
    };
    
    export type FetchProjectFailure = {
      type: typeof FETCH_ALLPROJECTS_FAILURE;
      payload: FetchProjectFailurePayload;
    };
    
    export type ProjectActions =
      | FetchProjectRequest
      | FetchProjectSuccess
      | FetchProjectFailure;
