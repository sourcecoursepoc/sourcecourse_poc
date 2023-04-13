import {
    FETCH_ALLGROUP_DATA_FAILURE,
    FETCH_ALLGROUP_DATA_REQUEST,
    FETCH_ALLGROUP_DATA_SUCCESS,
  } from "./actionTypes";
  import {
    FetchGroupRequest,
    FetchGroupSuccess,
    FetchGroupSuccessPayload,
    FetchGroupFailure,
    FetchGroupFailurePayload,
  } from "../actions/types";
  
  export const fetchGroupRequest = (): FetchGroupRequest => ({
    type: FETCH_ALLGROUP_DATA_REQUEST,
  });
  
  export const fetchGroupSuccess = (
    payload: FetchGroupSuccessPayload
  ): FetchGroupSuccess => ({
    type:  FETCH_ALLGROUP_DATA_SUCCESS,
    payload,
  });
  
  export const fetchGroupFailure = (
    payload: FetchGroupFailurePayload
  ): FetchGroupFailure => ({
    type:  FETCH_ALLGROUP_DATA_FAILURE,
    payload,
  });
    