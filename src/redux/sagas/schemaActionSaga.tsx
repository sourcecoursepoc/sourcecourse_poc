import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchSchemaSuccess, fetchSchemaFailure, fetchDataBaseSuccess, fetchDataBaseFailure, postDataRequest, postDataSuccess, postDataFailure, updatePostRequest, updatePostFailure, postTagsAndDescriptionRequest, postTagsAndDescriptionSuccess, postTagsAndDescriptionFailure, postColumnTagsAndDescriptionRequest, postColumnTagsAndDescriptionSuccess, postColumnTagsAndDescriptionFailure, fetchDataBaseInfoActionSuccess, fetchDataBaseInfoActionFailure, postTagsAndDescriptionInfoActionSuccess, postTagsAndDescriptionInfoActionFailure, postTagsAndDescriptionInfoAction, postColumnTagsAndDescriptionInfoAction, postColumnTagsAndDescriptionInfoActionSuccess, postColumnTagsAndDescriptionInfoActionFailure } from "../actions/schemasaction";
import { ISchema, FetchSchemaRequest, } from "../actions/schemaTypes";
import { FETCH_SCHEMA_SCHEMADATA_INFO_ACTION, FETCH_SCHEMA_DATABASE_INFO_ACTION, POST_TAGS_DESCRIPTION_INFO_ACTION, POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION } from "../actions/schemaActionTypes";

const getSchema = (requestParams: any) =>
  axios.get<ISchema[]>("http://localhost:8000/schemas?id=" + requestParams);


/*
  Worker Saga: Fired on FETCH_SCHEMA_REQUEST action
*/
function* fetchSchemaSaga(requestParams: FetchSchemaRequest) {

  try {
    const response = yield call(() => getSchema(requestParams.params));
    yield put(
      fetchSchemaSuccess({
        schemas: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchSchemaFailure({
        error: e.message,
      })
    );
  }
}


const getDatabase = () =>
  axios.get<DBProps[]>("http://localhost:8080/sourcecourse/db");

/*
  Worker Saga: Fired on FETCH_DATABASE_REQUEST action
*/
function* fetchDataBaseInfoSaga() {
  try {
    const response = yield call(getDatabase);
    yield put(
      fetchDataBaseInfoActionSuccess({
        database: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchDataBaseInfoActionFailure({
        error: e.message,
      })
    );
  }
};

//Post Data

const API_URL = 'https://example.com/api';

export const postData = async (data: any) => {
  const response = await fetch(`${API_URL}/post-data`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || 'Failed to post data.');
  }

  return responseData;
};

export const postFormData = (data: any) => async (dispatch: any) => {
  try {
    dispatch(postDataRequest());
    await postData(data);
    dispatch(postDataSuccess());
  } catch (error) {
    dispatch(postDataFailure(error.message));
  }
};


/*
  Starts worker saga on latest dispatched `FETCH_SCHEMA_REQUEST` action.
  Allows concurrent increments.
*/

// saga for post tags and description
const postTagsAndDescriptionAPI = 'http://localhost:8080/sourcecourse/db/table';

function postTagsAndDescriptionAPIcall(uid: any, tags: string[], description: string): Promise<AxiosResponse<any, any>> {
  return axios.post(`${postTagsAndDescriptionAPI}/${uid}`, { tags, description });
}

function* postTagsAndDescriptionInfoSaga(action: ReturnType<typeof postTagsAndDescriptionInfoAction>) {
  try {
    const { uid, tags, description } = action;
    const response = yield call({ fn: postTagsAndDescriptionAPIcall, context: null }, uid, tags, description);
    yield put(postTagsAndDescriptionInfoActionSuccess(response.data));
  } catch (error) {
    yield put(postTagsAndDescriptionInfoActionFailure({ error }));
  }
}

// saga for posting column description and tags
const postColumnTagsAndDescriptionAPI = 'http://localhost:8080/sourcecourse/db/column';

function postColumnTagsAndDescriptionAPIcall(uid: any, tags: string[], description: string): Promise<AxiosResponse<any, any>> {
  return axios.post(`${postColumnTagsAndDescriptionAPI}/${uid}`, { tags, description });
}

function* postColumnTagsAndDescriptionInfoSaga(action: ReturnType<typeof postColumnTagsAndDescriptionInfoAction>) {
  try {
    const { uid, tags, description } = action;
    const response = yield call({ fn: postColumnTagsAndDescriptionAPIcall, context: null }, uid, tags, description);
    yield put(postColumnTagsAndDescriptionInfoActionSuccess(response.data));
  } catch (error) {
    yield put(postColumnTagsAndDescriptionInfoActionFailure({ error }));
  }
}

export function* schemaSaga() {
  yield all([takeLatest(FETCH_SCHEMA_SCHEMADATA_INFO_ACTION, fetchSchemaSaga)]);
}


export function* DataBaseSaga() {
  yield all([takeLatest(FETCH_SCHEMA_DATABASE_INFO_ACTION, fetchDataBaseInfoSaga)]);
}
export function* PostSaga() {
  yield all([takeLatest(POST_TAGS_DESCRIPTION_INFO_ACTION, postTagsAndDescriptionInfoSaga)])
}

export function* PostColumnTagsSaga() {
  yield all([takeLatest(POST_COLUMN_TAGS_DESCRIPTION_INFO_ACTION, postColumnTagsAndDescriptionInfoSaga)])
}