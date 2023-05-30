import {
  FetchComposePipelineRequest,
  FetchComposePipelineSuccessPayload,
  FetchComposePipelineSuccess,
  FetchComposePipelineFailurePayload,
  FetchComposePipelineFailure,
  FetchComposeReportsPipelineRequest,
  FetchComposeReportsPipelineSuccessPayload,
  FetchComposeReportsPipelineSuccess,
  FetchComposeReportsPipelineFailurePayload,
  FetchComposeReportsPipelineFailure,
  FetchSchemaComposeRequest,
  fetchProjectSchemaInfoActionSuccess,
  fetchProjectSchemaInfoActionFailure,
  fetchProjectSchemaInfoActionSuccessPayload,
  fetchProjectSchemaInfoActionFailurePayload,
  PostProjectSchemaInfoActionTypes,
  PostProjectSchemaInfo,
  PostProjectSchemaInfoSuccess,
  PostProjectSchemaInfoFailure,
  DeleteProjectSchemaInfoAction,
  DeleteProjectSchemaInfoSuccessAction,
  DeleteProjectSchemaInfoFailureAction,
  /* DELETESCHEMAREQUEST, */
  DeleteProjectSchemaInfoSuccessPayload,
  DeleteProjectSchemaInfoFailurePayload,
  SearchSchemaByTagInfoAction,
  SearchSchemaByTagInfoActionSuccessPayload,
  SearchSchemaByTagInfoSuccessAction,
  SearchSchemaByTagInfoActionFailurePayload,
  SearchSchemaByTagInfoFailureAction,
  PostComposeNameDescRequest,
  PostComposeNameDescSuccess,
  PostComposeNameDescFailure,
  GetComposeNameDescRequest,
  GetComposeNameDescSuccess,
  GetComposeNameDescFailure,
  AddNameDescArrayAction,
} from "./composeTypes";
import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_COMPOSE_PIPELINE_SUCCESS,
  FETCH_COMPOSE_PIPELINE_FAILURE,
  FETCH_REPORTS_PIPELINE,
  FETCH_REPORTS_PIPELINE_SUCCESS,
  FETCH_REPORTS_PIPELINE_FAILURE,
  FETCH_PROJECT_SCHEMA_INFO_ACTION,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  POST_PROJECT_SCHEMA_INFO_ACTION,
  POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  DELETE_PROJECT_SCHEMA_INFO_ACTION,
  DELETE_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  DELETE_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION_SUCCESS,
  SEARCH_SCHEMA_BY_TAG_INFO_ACTION_FAILURE,
  POST_COMPOSE_NAME_DESC,
  POST_COMPOSE_NAME_DESC_SUCCESS,
  POST_COMPOSE_NAME_DESC_FAILURE,
  GET_COMPOSE_NAME_DESC,
  GET_COMPOSE_NAME_DESC_SUCCESS,
  GET_COMPOSE_NAME_DESC_FAILURE,
  ADD_NAME_DESC_ARRAY,
} from "./composeActionTypes";

export const fetchComposePipelineRequest = (
  params: any
): FetchComposePipelineRequest => {
  return {
    type: FETCH_COMPOSE_PIPELINE,
    params,
  };
};

export const fetchComposePipelineSuccess = (
  payload: FetchComposePipelineSuccessPayload
): FetchComposePipelineSuccess => {
  return {
    type: FETCH_COMPOSE_PIPELINE_SUCCESS,
    payload,
  };
};

export const fetchComposePipelineFailure = (
  payload: FetchComposePipelineFailurePayload
): FetchComposePipelineFailure => {
  return {
    type: FETCH_COMPOSE_PIPELINE_FAILURE,
    payload,
  };
};

// REPORTS PIPELINE ACTION
export const fetchComposeReportsPipelineRequest =
  (): FetchComposeReportsPipelineRequest => {
    return {
      type: FETCH_REPORTS_PIPELINE,
    };
  };

export const fetchComposeReportsPipelineRequestSuccess = (
  payload: FetchComposeReportsPipelineSuccessPayload
): FetchComposeReportsPipelineSuccess => {
  return {
    type: FETCH_REPORTS_PIPELINE_SUCCESS,
    payload,
  };
};

export const fetchComposeReportsPipelineFailure = (
  payload: FetchComposeReportsPipelineFailurePayload
): FetchComposeReportsPipelineFailure => {
  return {
    type: FETCH_REPORTS_PIPELINE_FAILURE,
    payload,
  };
};

// GET schema compose action

export const fetchProjectSchemaInfoAction = (
  params: number
): FetchSchemaComposeRequest => ({
  type: FETCH_PROJECT_SCHEMA_INFO_ACTION,
  params,
});

export const fetchSchemaComposeSuccess = (
  payload: fetchProjectSchemaInfoActionSuccessPayload
): fetchProjectSchemaInfoActionSuccess => ({
  type: FETCH_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  payload,
});

export const fetchSchemaComposeFailure = (
  payload: fetchProjectSchemaInfoActionFailurePayload
): fetchProjectSchemaInfoActionFailure => ({
  type: FETCH_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  payload,
});

//POST schema compose
export const postProjectSchemaInfoRequest = (
  projectUid: any,
  sourceTableUids: any[]
): PostProjectSchemaInfo => ({
  type: POST_PROJECT_SCHEMA_INFO_ACTION,
  projectUid,
  sourceTableUids,
});

export const postProjectSchemaInfoSuccess = (
  postData: any
): PostProjectSchemaInfoSuccess => ({
  type: POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  payload: { postData },
});

export const postProjectSchemaInfoFailure = (
  error: any
): PostProjectSchemaInfoFailure => ({
  type: POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  payload: { error },
});

//DELETE schema compose
export const deleteProjectSchemaInfoRequest = (
  projectUid: any,
  sourceTableUids: any[]
): DeleteProjectSchemaInfoAction => ({
  type: DELETE_PROJECT_SCHEMA_INFO_ACTION,
  projectUid,
  sourceTableUids,
});

export const deleteProjectSchemaInfoSuccess = (
  isDelete: boolean,
  sourceTableUids: any[]
): DeleteProjectSchemaInfoSuccessAction => ({
  type: DELETE_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  payload: { isDelete, sourceTableUids },
});

export const deleteProjectSchemaInfoFailure = (
  error: string
): DeleteProjectSchemaInfoFailureAction => ({
  type: DELETE_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  payload: { error },
});


// search by tag in compose schema

export const searchSchemaByTagsInfoAction = (searchValue: any): SearchSchemaByTagInfoAction => ({
  type: SEARCH_SCHEMA_BY_TAG_INFO_ACTION,
  searchValue,
});

export const searchSchemaByTagsInfoSuccessAction = (
  payload: SearchSchemaByTagInfoActionSuccessPayload
): SearchSchemaByTagInfoSuccessAction => ({
  type: SEARCH_SCHEMA_BY_TAG_INFO_ACTION_SUCCESS,
  payload,
});

export const searchSchemaByTagsInfoFailureAction = (
  payload: SearchSchemaByTagInfoActionFailurePayload
): SearchSchemaByTagInfoFailureAction => ({
  type: SEARCH_SCHEMA_BY_TAG_INFO_ACTION_FAILURE,
  payload,
});

  // POST COMPOSE NAME AND DESC
  console.log("getting into action page");

  export const postComposeNameDescRequest = (
    name:any,
    description:any
  ): PostComposeNameDescRequest => ({
      type: POST_COMPOSE_NAME_DESC,
      name,
      description,
  });
  
  export const postComposeNameDescRequestSuccess = (
    postData: any
  ): PostComposeNameDescSuccess => ({
      type: POST_COMPOSE_NAME_DESC_SUCCESS,
      payload: { postData },
  
  });
  
  export const postComposeNameDescRequestFailure = (
    error: any
  ): PostComposeNameDescFailure => ({
      type: POST_COMPOSE_NAME_DESC_FAILURE,
      payload: { error },
  });
  
  
  // GET COMPOSE NAME AND DESC
  
  export const getComposeNameDescRequest = (
    // uid: any,
    // name: any,
    // description: any
  ): GetComposeNameDescRequest => {
    console.log("getComposeNameDescRequest action creator called");
    return {
      type: GET_COMPOSE_NAME_DESC,
      // uid,
      // name,
      // description,
    };
  };
  
  export const getComposeNameDescRequestSuccess = (
    saveData: any
  ): GetComposeNameDescSuccess => ({
    type: GET_COMPOSE_NAME_DESC_SUCCESS,
    payload: { saveData },
  });
  
  export const getComposeNameDescRequestFailure = (
    error: any
  ): GetComposeNameDescFailure => ({
    type: GET_COMPOSE_NAME_DESC_FAILURE,
    payload: { error },
  });
  
  //action to store the uid,name,desc in a array
  export const addNameDescArray = (payload: any): AddNameDescArrayAction => ({
    type: ADD_NAME_DESC_ARRAY,
    payload,
  });
  