// post group pipeline

import { POST_GROUP_PIPELINE_ACTION, POST_GROUP_PIPELINE_ACTION_FAILURE, POST_GROUP_PIPELINE_ACTION_SUCCESS } from "./createPipelineActions";
import { PostGroupPipelineActions, PostGroupPipelineInfoAction, PostGroupPipelineInfoActionFailure, PostGroupPipelineInfoActionSuccess } from "./createPipelineTypes";

export const postGroupPipelineInfoAction = (
  groupId: any,
  loadType: string,
  exportType: string,
  recurrence: string,
  exportFileName: string,
  intimationList: string[],
  time: string,
  weeklyDays: string[],
  monthlyDays: number[],

):PostGroupPipelineInfoAction => {
    console.log('Executing postGroupPipelineInfoAction');
    console.log('groupId:', groupId);
    console.log('loadType:', loadType);
    console.log('exportType:', exportType);
    console.log('recurrence:', recurrence);
    console.log('exportFileName:', exportFileName);
    console.log('intimationList:', intimationList);
    console.log('time:', time);
    console.log('weeklyDays:', weeklyDays);
    console.log('monthlyDays:', monthlyDays);
  
    return {
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
    };
  };
  export const postGroupPipelineInfoActionSuccess = (
    postGroupPipeline: any
  ): PostGroupPipelineInfoActionSuccess => {
    console.log('postGroupPipelineInfoActionSuccess');
    console.log('postGroupPipeline:', postGroupPipeline);
  
    return {
      type: POST_GROUP_PIPELINE_ACTION_SUCCESS,
      payload: { postGroupPipeline },
    };
  };
  
  export const postGroupPipelineInfoActionFailure = (
    error: any
  ): PostGroupPipelineInfoActionFailure => {
    console.log('postGroupPipelineInfoActionFailure');
    console.log('error:', error);
  
    return {
      type: POST_GROUP_PIPELINE_ACTION_FAILURE,
      payload: { error },
    };
  };