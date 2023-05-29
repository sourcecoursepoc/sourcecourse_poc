import {
  FETCH_ALLPROJECTS_FAILURE,
  FETCH_ALLPROJECTS_REQUEST,
  FETCH_ALLPROJECTS_SUCCESS,
  FETCH_PROJECT_BYID_REQUEST,
  FETCH_PROJECT_BYID_SUCCESS,
  FETCH_PROJECT_BYID_FAILURE,
} from "./actionTypes";
import {
  FetchProjectRequest,
  FetchProjectByIdRequest,
  FetchProjectSuccess,
  FetchProjectSuccessPayload,
  FetchProjectByIdSuccessPayload,
  FetchProjectFailure,
  FetchProjectByIdFailure,
  FetchProjectFailurePayload,
  FetchProjectByIdSuccess,
  FetchProjectByIdFailurePayload,
  DeleteProjectInfoAction,
  DeleteProjectInfoActionSuccess,
  DeleteProjectInfoActionFailure
} from "../actions/types";
import { DELETE_PROJECTS_INFO_ACTION, DELETE_PROJECTS_INFO_ACTION_SUCCESS, DELETE_PROJECTS_INFO_ACTION_FAILURE } from "./projectActionTypes";

export const fetchProjectRequest = (): FetchProjectRequest => ({
  type: FETCH_ALLPROJECTS_REQUEST,
});

export const fetchProjectByIdRequest = (params: number): FetchProjectByIdRequest => ({
    type: FETCH_PROJECT_BYID_REQUEST,
    params
  });

export const fetchProjectSuccess = (
  payload: FetchProjectSuccessPayload
): FetchProjectSuccess => ({
  type:  FETCH_ALLPROJECTS_SUCCESS,
  payload,
});

export const fetchProjectByIdSuccess = (
    payload: FetchProjectByIdSuccessPayload
  ): FetchProjectByIdSuccess => ({
    type:  FETCH_PROJECT_BYID_SUCCESS,
    payload,
  });

export const fetchProjectFailure = (
  payload: FetchProjectFailurePayload
): FetchProjectFailure => ({
  type:  FETCH_ALLPROJECTS_FAILURE,
  payload,
});

export const fetchProjectByIdFailure = (
    payload: FetchProjectByIdFailurePayload
  ): FetchProjectByIdFailure => ({
    type:  FETCH_PROJECT_BYID_FAILURE,
    payload,
  });
  


  // delete project action

export const deleteProjectInfoAction = (id: any): DeleteProjectInfoAction => {
  return {
    type: DELETE_PROJECTS_INFO_ACTION,
    payload: id,
  };
};

export const deleteProjectInfoActionSuccess = (id: any): DeleteProjectInfoActionSuccess => {
  return {
    type: DELETE_PROJECTS_INFO_ACTION_SUCCESS,
    payload: { id },
  };
};

export const deleteProjectInfoActionFailure = (error: any): DeleteProjectInfoActionFailure => {
  return {
    type: DELETE_PROJECTS_INFO_ACTION_FAILURE,
    payload: { error },
  };
};