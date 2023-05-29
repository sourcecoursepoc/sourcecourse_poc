// post group Pipeline

import { POST_GROUP_PIPELINE_ACTION, POST_GROUP_PIPELINE_ACTION_FAILURE, POST_GROUP_PIPELINE_ACTION_SUCCESS } from "./createPipelineActions";

export interface PostGroupPipelineInfo {
    loadType:any;
    exportType:any;
    recurrence:any;
    exportFileName:any;
    intimationList:any;
    time:any;
    monthlyDays:any;
    weeklyDays:any;
}

export interface PostGroupPipelineInfoState {
    pending: boolean;
    postGroupPipeline: PostGroupPipelineInfo[];
    error: string | null;
}

export interface PostGroupPipelineInfoActionSuccessPayload {
    postGroupPipeline: PostGroupPipelineInfo[];
}

export interface PostGroupPipelineInfoActionFailurePayload {
    error: string;
}

export interface PostGroupPipelineInfoAction {
    type: typeof POST_GROUP_PIPELINE_ACTION;
    groupId : any;
    intimationList: string[];
    weeklyDays:string[];
    monthlyDays:number[];
    loadType: string;
    exportType: string;
    recurrence: string;
    exportFileName: string;
    time: string;
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
