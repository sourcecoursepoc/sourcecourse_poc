import { POST_GROUP_PIPELINE_ACTION, POST_GROUP_PIPELINE_ACTION_FAILURE, POST_GROUP_PIPELINE_ACTION_SUCCESS } from "./createPipelineActions";

// post group Pipeline
export interface PostGroupPipelineInfo {
    uid:any,
    groupUid:any,
    exportType:any;
    loadType:any;
    recurrence:any;
    exportFileName:any;
    intimationList:any;
    time:any;
    monthlyDays:any;
    weeklyDays:any;}

 export interface PostGroupPipelineInfoState {
    pending: boolean;
    postPipelineData: PostGroupPipelineInfo[];
    error: string | null;
}

export interface PostGroupPipelineInfoActionSuccessPayload {
    postPipelineData: PostGroupPipelineInfo[];
}

export interface PostGroupPipelineInfoActionFailurePayload {
    error: string;
}

export interface PostGroupPipelineInfoAction {
    type: typeof POST_GROUP_PIPELINE_ACTION;
    groupId : any;
    loadType: string;
    exportType: string;
    recurrence: string;
    exportFileName: string;
    intimationList: string[];
    time: string;
    monthlyDays:number[];
    weeklyDays:string[];  
}

export type PostGroupPipelineInfoActionSuccess = {
    type: typeof POST_GROUP_PIPELINE_ACTION_SUCCESS;
    payload: PostGroupPipelineInfoActionSuccessPayload;
};

export type PostGroupPipelineInfoActionFailure = {
    type: typeof POST_GROUP_PIPELINE_ACTION_FAILURE;
    payload: PostGroupPipelineInfoActionFailurePayload;
};

export type PostGroupPipelineActions =
    | PostGroupPipelineInfoAction
    | PostGroupPipelineInfoActionSuccess
    | PostGroupPipelineInfoActionFailure;
