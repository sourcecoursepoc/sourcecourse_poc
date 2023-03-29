import {
  FETCH_ALLPROJECTS_FAILURE,
  FETCH_ALLPROJECTS_REQUEST,
  FETCH_ALLPROJECTS_SUCCESS,
} from "./actionTypes";
import {
  FetchProjectRequest,
  FetchProjectSuccess,
  FetchProjectSuccessPayload,
  FetchProjectFailure,
  FetchProjectFailurePayload,
} from "../actions/types";

export const fetchProjectRequest = (): FetchProjectRequest => ({
  type: FETCH_ALLPROJECTS_REQUEST,
});

export const fetchProjectSuccess = (
  payload: FetchProjectSuccessPayload
): FetchProjectSuccess => ({
  type:  FETCH_ALLPROJECTS_SUCCESS,
  payload,
});

export const fetchProjectFailure = (
  payload: FetchProjectFailurePayload
): FetchProjectFailure => ({
  type:  FETCH_ALLPROJECTS_FAILURE,
  payload,
});
  