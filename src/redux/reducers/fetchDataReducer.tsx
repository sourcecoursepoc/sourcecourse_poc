import {
   FETCH_PIPELINE_REQUEST ,
 FETCH_PIPELINE_SUCCESS ,
 FETCH_PIPELINE_FAILURE,
} from "../actions/actionTypes";

import { PipelineActions, PipelineState } from "../actions/types";

const initialState: PipelineState = {
  pending: false,
  pipelines: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: PipelineActions) => {
  switch (action.type) {
    case FETCH_PIPELINE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PIPELINE_SUCCESS:
      return {
        ...state,
        pending: false,
        pipelines: action.payload.pipelines,
        error: null,
      };
    case FETCH_PIPELINE_FAILURE:
      return {
        ...state,
        pending: false,
        pipelines: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};