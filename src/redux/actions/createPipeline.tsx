// post group pipeline

import { POST_GROUP_PIPELINE_ACTION, POST_GROUP_PIPELINE_ACTION_FAILURE, POST_GROUP_PIPELINE_ACTION_SUCCESS } from "./createPipelineActions";
import { PostGroupPipelineActions, PostGroupPipelineInfoActionFailure, PostGroupPipelineInfoActionSuccess } from "./createPipelineTypes";

export const postGroupPipelineInfoAction = (
  groupId: any,
  intimationList: string[],
  weeklyDays: string[],
  monthlyDays: number[],
  loadType: string,
  exportType: string,
  recurrence: string,
  exportFileName: string,
  time: string
): PostGroupPipelineActions => ({
  type: POST_GROUP_PIPELINE_ACTION,
  groupId,
  loadType,
  exportType,
  recurrence,
  exportFileName,
  intimationList,
  time,
  monthlyDays,
  weeklyDays,
});

export const postGroupPipelineInfoActionSuccess = (
  postGroupPipeline: any
): PostGroupPipelineInfoActionSuccess => ({
  type: POST_GROUP_PIPELINE_ACTION_SUCCESS,
  payload: { postGroupPipeline },
});

export const postGroupPipelineInfoActionFailure = (
  error: any
): PostGroupPipelineInfoActionFailure => ({
  type: POST_GROUP_PIPELINE_ACTION_FAILURE,
  payload: { error },
});
