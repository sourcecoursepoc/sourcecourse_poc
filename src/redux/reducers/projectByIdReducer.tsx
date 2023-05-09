import {
    FETCH_PROJECT_BYID_FAILURE,
    FETCH_PROJECT_BYID_REQUEST,
    FETCH_PROJECT_BYID_SUCCESS,
  } from "../actions/actionTypes";
  
  
  import { ProjectByIdActions, ProjectByIdState } from "../actions/types";
  
  const initialState: ProjectByIdState = {
    pending: false,
    projectById: { uid: 0, 
        name: "",
        description: ""},
    error: null,
  };
  
  export default (state = initialState, action: ProjectByIdActions) => {
    switch (action.type) {
      case FETCH_PROJECT_BYID_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_PROJECT_BYID_SUCCESS:
          {console.log("FETCH_PROJECT_BYID_SUCCESS payload:::", action.payload.projectById)}
        return {
          ...state,
          pending: false,
          projectById: action.payload.projectById,
          error: null,
        };
      case FETCH_PROJECT_BYID_FAILURE:
        return {
          ...state,
          pending: false,
          projectById: {},
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
