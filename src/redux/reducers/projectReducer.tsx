
 import {
  FETCH_ALLPROJECTS_REQUEST,
  FETCH_ALLPROJECTS_SUCCESS,
  FETCH_ALLPROJECTS_FAILURE,
} from "../actions/actionTypes";


import { ProjectActions, ProjectState } from "../actions/types";

const initialState: ProjectState = {
  pending: false,
  projects: [],
  error: null,
};

export default (state = initialState, action: ProjectActions) => {
  switch (action.type) {
    case FETCH_ALLPROJECTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ALLPROJECTS_SUCCESS:
      return {
        ...state,
        pending: false,
        projects: action.payload.projects,
        error: null,
      };
    case FETCH_ALLPROJECTS_FAILURE:
      return {
        ...state,
        pending: false,
        projects: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};