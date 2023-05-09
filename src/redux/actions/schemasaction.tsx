import {

  ADD_ARRAY,
  REMOVE_NODE,
  FETCH_GROUPDATA_DATABASE,
  FETCH_GROUPDATA_DATABASE_FAILURE,
  FETCH_GROUPDATA_DATABASE_SUCCESS,
  POST_GROUPDATA_DATABASE,
  POST_GROUPDATA_DATABASE_SUCCESS,
  POST_GROUPDATA_DATABASE_FAILURE,
  ADD_LAST_INDEX,
  REMOVE_LAST_INDEX,
  ADD_GROUPDATA_ARRAY,
  CLEAR_LAST_INDEXES,
  ADD_ATTRIBUTE_DETAILS,
  DELETE_GROUP_MODAL,
  DELETE_GROUP_MODAL_BOX,
  FETCH_SCHEMA_SCHEMADATA_INFO_ACTION,
  FETCH_SCHEMA_SCHEMADATA_INFO_ACTION_SUCCESS,
  FETCH_SCHEMA_SCHEMADATA_INFO_ACTION_FAILURE,
  FETCH_SCHEMA_DATABASE_INFO_ACTION,
  FETCH_SCHEMA_DATABASE_INFO_ACTION_SUCCESS,
  FETCH_SCHEMA_DATABASE_INFO_ACTION_FAILURE,
  POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION,
  POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS,
  POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_FAILURE,
  POST_TAGS_DESCRIPTION_INFO_ACTION,
  POST_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS,
  POST_TAGS_DESCRIPTION_INFO_ACTION_FAILURE,

} from "./schemaActionTypes";


import {
  FetchSchemaRequest,
  FetchSchemaSuccessPayload,
  FetchSchemaSuccess,
  FetchSchemaFailurePayload,
  FetchSchemaFailure,
  
  FetchGroupdataDataBaseRequest,
  FetchGroupdataDataBaseSuccessPayload,
  FetchGroupdataDataBaseSuccess,
  FetchGroupdataDataBaseFailurePayload,
  FetchGroupdataDataBaseFailure,
  AddArrayAction,
  PostDataActionTypes,
  RemoveNodeAction,
  AddLastIndexAction,
  RemoveLastIndexAction,
  AddGroupArrayAction,
  ClearLastIndexAction,
  AddAttributeDetailsAction,
  deleteGroupModalAction,
  deleteGroupModalBoxAction,
  UpdatePostAction,
  FetchDataBaseInfoAction,
  FetchDataBaseInfoActionSuccessPayload,
  FetchDataBaseInfoActionSuccess,
  FetchDataBaseInfoActionFailurePayload,
  FetchDataBaseInfoActionFailure,
  
  PostColumnTagsAndDescriptionInfoActionSuccess,
  PostColumnTagsAndDescriptionInfoActionFailure,
  PostTagsAndDescriptionActions,
  PostTagsAndDescriptionInfoActionSuccess,
  PostTagsAndDescriptionInfoActionFailure,
  PostTagsAndDescriptionInfoActions,
  PostColumnTagsAndDescriptionInfoActions,
  PostColumnTagsAndDescriptionActions,
  
} from "./schemaTypes";

export const fetchSchemaRequest = (params: number): FetchSchemaRequest => ({
  type: FETCH_SCHEMA_SCHEMADATA_INFO_ACTION,
  params,
});

export const fetchSchemaSuccess = (
  payload: FetchSchemaSuccessPayload
): FetchSchemaSuccess => ({
  type: FETCH_SCHEMA_SCHEMADATA_INFO_ACTION_SUCCESS,

  payload,
});

export const fetchSchemaFailure = (
  payload: FetchSchemaFailurePayload
): FetchSchemaFailure => ({
  type: FETCH_SCHEMA_SCHEMADATA_INFO_ACTION_FAILURE,

  payload,
});

export const fetchDataBaseInfoAction = (): FetchDataBaseInfoAction => ({
  type: FETCH_SCHEMA_DATABASE_INFO_ACTION,
});

export const fetchDataBaseInfoActionSuccess = (
  payload: FetchDataBaseInfoActionSuccessPayload
): FetchDataBaseInfoActionSuccess => ({
  type: FETCH_SCHEMA_DATABASE_INFO_ACTION_SUCCESS,

  payload,
});

export const fetchDataBaseInfoActionFailure = (
  payload: FetchDataBaseInfoActionFailurePayload
): FetchDataBaseInfoActionFailure => ({
  type: FETCH_SCHEMA_DATABASE_INFO_ACTION_FAILURE,

  payload,
});

export const addArray = (payload: any): AddArrayAction => ({
  type: ADD_ARRAY,

  payload,
});

export const fetchGroupDataRequest = (): FetchGroupdataDataBaseRequest => ({
  type: FETCH_GROUPDATA_DATABASE,
});

export const fetchGroupDataSuccess = (
  payload: FetchGroupdataDataBaseSuccessPayload
): FetchGroupdataDataBaseSuccess => ({
  type: FETCH_GROUPDATA_DATABASE_SUCCESS,

  payload,
});

export const fetchGroupDataFailure = (
  payload: FetchGroupdataDataBaseFailurePayload
): FetchGroupdataDataBaseFailure => ({
  type: FETCH_GROUPDATA_DATABASE_FAILURE,

  payload,
});

export const addGroupdataArray = (payload: any): AddGroupArrayAction => ({
  type: ADD_GROUPDATA_ARRAY,

  payload,
});

//action for adding attribute details to an array
export const addAttributeDetails = (lastIndices: any): AddAttributeDetailsAction => {
  console.log("Received data in addAttributeDetails ---- action:", lastIndices);
  return {
    type: ADD_ATTRIBUTE_DETAILS,
    payload: lastIndices,
  };
};

export function removeNode(uid: string): RemoveNodeAction {
  console.log("uiddddd", uid);
  return {
    type: REMOVE_NODE,

    payload: { uid },
  };
}

export const addLastIndex = (lastIndex: any): AddLastIndexAction => {
  return {
    type: ADD_LAST_INDEX,

    payload: lastIndex,
  };
};

export const removeLastIndex = (uid: string): RemoveLastIndexAction => {
  return {
    type: REMOVE_LAST_INDEX,

    payload: uid,
  };
};

export const clearLastIndex = (): ClearLastIndexAction => {
  return {
    type: CLEAR_LAST_INDEXES,
    payload: [],
  };
};

//delete group data modal box
export const deleteGroupModalBox = (): deleteGroupModalBoxAction => {
  return {
    type: DELETE_GROUP_MODAL_BOX,
    payload: [],
  };
};

// Post Action

export const postDataRequest = (): PostDataActionTypes => ({
  type: POST_GROUPDATA_DATABASE,
});

export const postDataSuccess = (): PostDataActionTypes => ({
  type: POST_GROUPDATA_DATABASE_SUCCESS,
});

export const postDataFailure = (error: string): PostDataActionTypes => ({
  type: POST_GROUPDATA_DATABASE_FAILURE,

  payload: error,
});


// post tags and description for column

export const postColumnTagsAndDescriptionInfoAction = (uid: any, tags: string[], description: string): PostColumnTagsAndDescriptionActions => ({
  type: POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION,
  uid,
  tags,
  description,

});

export const postColumnTagsAndDescriptionInfoActionSuccess = (postColumnData: any): PostColumnTagsAndDescriptionInfoActionSuccess => ({
  type: POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS,
  payload: { postColumnData },
});

export const postColumnTagsAndDescriptionInfoActionFailure = (error: any): PostColumnTagsAndDescriptionInfoActionFailure => ({
  type: POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION_FAILURE,
  payload: { error },
});


// post tags and description for table

export const postTagsAndDescriptionInfoAction = (uid: any, tags: string[], description: string): PostTagsAndDescriptionActions => ({
  type: POST_TAGS_DESCRIPTION_INFO_ACTION,
  uid,
  tags,
  description,

});

export const postTagsAndDescriptionInfoActionSuccess = (postTableData: any): PostTagsAndDescriptionInfoActionSuccess => ({
  type: POST_TAGS_DESCRIPTION_INFO_ACTION_SUCCESS,
  payload: { postTableData },
});

export const postTagsAndDescriptionInfoActionFailure = (error: any): PostTagsAndDescriptionInfoActionFailure => ({
  type: POST_TAGS_DESCRIPTION_INFO_ACTION_FAILURE,
  payload: { error },
});
