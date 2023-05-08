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
  FetchProjectByIdFailurePayload
} from "../actions/types";

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
  