import { FETCH_COMPOSE_PIPELINE, FETCH_COMPOSE_PIPELINE_SUCCESS, FETCH_COMPOSE_PIPELINE_FAILURE, FETCH_REPORTS_PIPELINE, FETCH_REPORTS_PIPELINE_SUCCESS, FETCH_REPORTS_PIPELINE_FAILURE, FETCH_SCHEMA_NAME_DESC_FAILURE, FETCH_SCHEMA_NAME_DESC_SUCCESS, FETCH_SCHEMA_NAME_DESC, POST_COMPOSE_NAME_DESC, POST_COMPOSE_NAME_DESC_SUCCESS, POST_COMPOSE_NAME_DESC_FAILURE } from "./composeActionTypes";

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
    projectId: string,
    projectName: string,
    projectDesc: string,
    schemaCount: number,
    groups: number,
    users: number,
    initialLoad: number,
    sync: number,
    schemas: [],
    RecordsDetails: [{ pending: number, migrated: number }],
    PipelineStatus: [{ success: number, error: number }],
    PipelineExcecution: [{ initialLoad: number, syncs: number }],
    SizeDetails: [{ pending: number, migrated: number }],
    AttributeDetails: [{ pending: number, migrated: number }],
    Item: [{ name: string, record1: number, record2: number }],
    ItemDetails: [{ name: string, record1: number, record2: number }],
    ItemDimension: [{ name: string, record1: number, record2: number }],
    Distributors: [{ name: string, record1: number, record2: number }],
    Offers: [{ name: string, record1: number, record2: number }]
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
        name:any[];
        description:any[];
    }

    export interface ComposeNameDescState {
        pending: boolean;
        postData: ICOMPOSENAMEDESC[];
        error: string | null;
    }
    
    export interface FetchComposeNameDescSuccessPayload {
        postData: ICOMPOSENAMEDESC[];
    }
    
    export interface FetchComposeNameDescFailurePayload {
        error: string;
    }
    
    export interface FetchComposeNameDescRequest {
        type: typeof POST_COMPOSE_NAME_DESC;
        params: any;
    }
    
    export type FetchComposeNameDescSuccess = {
        type: typeof POST_COMPOSE_NAME_DESC_SUCCESS;
        payload: FetchComposeNameDescSuccessPayload;
    };
    
    export type FetchComposeNameDescFailure = {
        type: typeof POST_COMPOSE_NAME_DESC_FAILURE;
        payload: FetchComposeNameDescFailurePayload;
    };
    
    export type ComposeNameDescActions =
        | FetchComposeNameDescRequest
        | FetchComposeNameDescSuccess
        | FetchComposeNameDescFailure;
    
    console.log("composeActionTypes: action types defined for fetching name and description");
    