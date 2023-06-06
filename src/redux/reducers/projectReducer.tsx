/* eslint-disable import/no-anonymous-default-export */

 import {
  FETCH_ALLPROJECTS_REQUEST,
  FETCH_ALLPROJECTS_SUCCESS,
  FETCH_ALLPROJECTS_FAILURE,
} from "../actions/actionTypes";


import { ProjectActions, ProjectState, DeleteProjectActions } from "../actions/types";
import { DELETE_PROJECTS_INFO_ACTION, DELETE_PROJECTS_INFO_ACTION_SUCCESS, DELETE_PROJECTS_INFO_ACTION_FAILURE } from "../actions/projectActionTypes";

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


//delete project by id

const initialDeleteState: ProjectState = {
  pending: false,
  projects: [],
  error: null,
};

export const deleteProjectReducer = (
  state = initialDeleteState,
  action: DeleteProjectActions
): ProjectState => {
  switch (action.type) {
    case DELETE_PROJECTS_INFO_ACTION:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case DELETE_PROJECTS_INFO_ACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        projects: state.projects.filter(
          (project) => project.uid !== action.payload.id
        ),
      };
    case DELETE_PROJECTS_INFO_ACTION_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};