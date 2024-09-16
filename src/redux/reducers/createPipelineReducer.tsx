// reducer for posting groupPipeline

import { POST_GROUP_PIPELINE_ACTION, POST_GROUP_PIPELINE_ACTION_FAILURE, POST_GROUP_PIPELINE_ACTION_SUCCESS } from "../actions/createPipelineActions";
import { PostGroupPipelineActions, PostGroupPipelineInfoState } from "../actions/createPipelineTypes";



const initialPostState: PostGroupPipelineInfoState = {
  pending: false,
  postPipelineData: [],
  error: null,
};

export const postGroupPipelineReducer = (
  state = initialPostState,
  action: PostGroupPipelineActions
): PostGroupPipelineInfoState => {
  switch (action.type) {
    case POST_GROUP_PIPELINE_ACTION:
      return {
        ...state,
        pending: true,
      };
    case POST_GROUP_PIPELINE_ACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        postPipelineData: action.payload.postPipelineData,
        error: null,
      };
    case POST_GROUP_PIPELINE_ACTION_FAILURE:
      return {
        ...state,
        pending: false,
        postPipelineData: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
