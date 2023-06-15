// post group pipeline

import { POST_GROUP_PIPELINE_ACTION, POST_GROUP_PIPELINE_ACTION_FAILURE, POST_GROUP_PIPELINE_ACTION_SUCCESS } from "./createPipelineActions";
import { PostGroupPipelineActions, PostGroupPipelineInfoActionFailure, PostGroupPipelineInfoActionSuccess } from "./createPipelineTypes";


export const postGroupPipelineInfoAction = ( groupId: any,
  loadType: string,
  exportType: string,
  recurrence: string,
  exportFileName: string,
  intimationList: string[],
  time: string,
  monthlyDays: number[],
  weeklyDays: string[],
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


export const postGroupPipelineInfoActionSuccess = (postPipelineData: any): PostGroupPipelineInfoActionSuccess => ({
  type: POST_GROUP_PIPELINE_ACTION_SUCCESS,
  payload: { postPipelineData },
});
export const postGroupPipelineInfoActionFailure = (error: any): PostGroupPipelineInfoActionFailure => {
  console.log('API Error in action:', error);
  return {
    type: POST_GROUP_PIPELINE_ACTION_FAILURE,
    payload: { error },
  };
};

/* export const postGroupPipelineInfoActionFailure = (error: any): PostGroupPipelineInfoActionFailure => ({
  type: POST_GROUP_PIPELINE_ACTION_FAILURE,
  payload: { error },
}); */






