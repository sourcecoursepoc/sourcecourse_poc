import {
  FETCH_SCHEMA_SCHEMADATA,
  FETCH_SCHEMA_SCHEMADATA_SUCCESS,
  FETCH_SCHEMA_SCHEMADATA_FAILURE,
  FETCH_SCHEMA_DATABASE,
  FETCH_SCHEMA_DATABASE_SUCCESS,
  FETCH_SCHEMA_DATABASE_FAILURE,
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
  DELETE_GROUP_MODAL_BOX
} from "./schemaActionTypes";


import {
  FetchSchemaRequest,
  FetchSchemaSuccessPayload,
  FetchSchemaSuccess,
  FetchSchemaFailurePayload,
  FetchSchemaFailure,
  FetchDataBaseRequest,
  FetchDataBaseSuccessPayload,
  FetchDataBaseSuccess,
  FetchDataBaseFailurePayload,
  FetchDataBaseFailure,
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
  
} from "./schemaTypes";

export const fetchSchemaRequest = (params: number): FetchSchemaRequest => ({
  type: FETCH_SCHEMA_SCHEMADATA,

  params,
});

export const fetchSchemaSuccess = (
  payload: FetchSchemaSuccessPayload
): FetchSchemaSuccess => ({
  type: FETCH_SCHEMA_SCHEMADATA_SUCCESS,

  payload,
});

export const fetchSchemaFailure = (
  payload: FetchSchemaFailurePayload
): FetchSchemaFailure => ({
  type: FETCH_SCHEMA_SCHEMADATA_FAILURE,

  payload,
});
// ******************************************

export const fetchDataBaseRequest = (): FetchDataBaseRequest => ({
  type: FETCH_SCHEMA_DATABASE,
});

export const fetchDataBaseSuccess = (
  payload: FetchDataBaseSuccessPayload
): FetchDataBaseSuccess => ({
  type: FETCH_SCHEMA_DATABASE_SUCCESS,

  payload,
});

export const fetchDataBaseFailure = (
  payload: FetchDataBaseFailurePayload
): FetchDataBaseFailure => ({
  type: FETCH_SCHEMA_DATABASE_FAILURE,

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
export const addAttributeDetails = (lastIndices: any): AddAttributeDetailsAction=> {
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
    type:DELETE_GROUP_MODAL_BOX,
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
