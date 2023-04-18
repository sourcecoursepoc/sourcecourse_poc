import {
    FETCH_RECORDS,FETCH_RECORDS_SUCCESS,FETCH_RECORDS_FAILURE,
 } from "../actions/actionTypes";
 import {  RecordsState,RecordsAction } from "../actions/types";
 
 const initialStateRecord: RecordsState = {
    data: [],
    loading: false,
    error: null,
  };
  // eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStateRecord, action: RecordsAction) => {
  switch (action.type) {
    case FETCH_RECORDS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.records,
        error: null,
      };
     
    case FETCH_RECORDS_FAILURE:
      return {
        ...state,
        pending: false,
        data: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
  
};