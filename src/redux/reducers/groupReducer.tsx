
import {
  FETCH_ALLGROUP_DATA_REQUEST,
  FETCH_ALLGROUP_DATA_SUCCESS,
  FETCH_ALLGROUP_DATA_FAILURE
} from "../actions/actionTypes";


import { GroupActions, GroupState } from "../actions/types";

const initialState: GroupState = {
  pending: false,
  groups: [],
  error: null,
};

export default (state = initialState, action: GroupActions) => {
  console.log("Action:", action);
  switch (action.type) {
    case  FETCH_ALLGROUP_DATA_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ALLGROUP_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        groups: action.payload.groups,
        error: null,
      };
    case FETCH_ALLGROUP_DATA_FAILURE:
      return {
        ...state,
        pending: false,
        groups: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};