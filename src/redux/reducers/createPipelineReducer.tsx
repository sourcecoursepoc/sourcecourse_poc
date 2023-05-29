// reducer for posting groupPipeline

import { POST_GROUP_PIPELINE_ACTION, POST_GROUP_PIPELINE_ACTION_FAILURE, POST_GROUP_PIPELINE_ACTION_SUCCESS } from "../actions/createPipelineActions";
import { PostGroupPipelineActions, PostGroupPipelineInfoState } from "../actions/createPipelineTypes";

const initialPostState: PostGroupPipelineInfoState = {
    pending: false,
    postGroupPipeline: [],
    error: null,
  };
  
  export const postGroupPipelineReducer = (
    state = initialPostState,
    action: PostGroupPipelineActions
  ): PostGroupPipelineInfoState => {
    console.log('postGroupPipelineReducer - Action:', action);
  
    switch (action.type) {
      case POST_GROUP_PIPELINE_ACTION:
        console.log('postGroupPipelineReducer - POST_GROUP_PIPELINE_ACTION');
        return {
          ...state,
          pending: true,
        };
      case POST_GROUP_PIPELINE_ACTION_SUCCESS:
        console.log('postGroupPipelineReducer - POST_GROUP_PIPELINE_ACTION_SUCCESS');
        console.log('postGroupPipelineReducer - Payload:', action.payload);
  
        return {
          ...state,
          pending: false,
          postGroupPipeline: action.payload.postGroupPipeline,
          error: null,
        };
      case POST_GROUP_PIPELINE_ACTION_FAILURE:
        console.log('postGroupPipelineReducer - POST_GROUP_PIPELINE_ACTION_FAILURE');
        console.log('postGroupPipelineReducer - Error:', action.payload.error);
  
        return {
          ...state,
          pending: false,
          postGroupPipeline: [],
          error: action.payload.error,
        };
      default:
        return state;
    }
  };