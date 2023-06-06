import { BASE_URL } from "@/constants/config";
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  deleteProjectSchemaInfoFailure,
  deleteProjectSchemaInfoRequest, deleteProjectSchemaInfoSuccess, fetchComposePipelineFailure, fetchComposePipelineSuccess, fetchComposeReportsPipelineRequestSuccess, fetchSchemaComposeFailure, fetchSchemaComposeSuccess, postComposeNameDescRequest, postComposeNameDescRequestFailure, postComposeNameDescRequestSuccess, postProjectSchemaInfoFailure,
  postProjectSchemaInfoRequest,
  postProjectSchemaInfoSuccess, searchSchemaByTagsInfoFailureAction, searchSchemaByTagsInfoSuccessAction
} from "../actions/composeAction";
import {
  DELETE_PROJECT_SCHEMA_INFO_ACTION, FETCH_COMPOSE_PIPELINE, FETCH_PROJECT_SCHEMA_INFO_ACTION, FETCH_REPORTS_PIPELINE, POST_COMPOSE_NAME_DESC, POST_PROJECT_SCHEMA_INFO_ACTION, SEARCH_SCHEMA_BY_TAG_INFO_ACTION
} from "../actions/composeActionTypes";
import {
  FetchComposePipelineRequest, FetchSchemaComposeRequest, ICOMPOSEPIPELINE, ICOMPOSEREPORTSPIPELINE, projectSchemaInfo,
  SearchSchemaByTagInfoAction
} from "../actions/composeTypes";

const fetchProjectSchemaInfo = (requestParams: any) =>
  axios.get<projectSchemaInfo[]>(
    BASE_URL + "/project-tables/" + requestParams
  );

function* fetchProjectSchemaInfoSaga(requestParams: FetchSchemaComposeRequest) {
  try {
    const response = yield call(() =>
      fetchProjectSchemaInfo(requestParams.params)
    );
    yield put(
      fetchSchemaComposeSuccess({
        schemas: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchSchemaComposeFailure({
        error: e.message,
      })
    );
  }
}
export function* schemaComposeSaga() {
  yield all([
    takeLatest(FETCH_PROJECT_SCHEMA_INFO_ACTION, fetchProjectSchemaInfoSaga),
  ]);
}

const getComposePipelines = (requestParams?: any) =>
  axios.get<ICOMPOSEPIPELINE[]>(
    "http://localhost:8000/composepipeline" +
    (requestParams ? `?id=${requestParams}` : "")
  );

function* fetchComposePipelineSaga(requestParams: FetchComposePipelineRequest) {
  try {
    const response = yield call(() => getComposePipelines(requestParams.params));
    yield put(
      fetchComposePipelineSuccess({
        composePipeline: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchComposePipelineFailure({
        error: e.message,
      })
    );
  }
}

export function* ComposePipelineSaga() {
  yield takeLatest(FETCH_COMPOSE_PIPELINE, fetchComposePipelineSaga);
}

const getComposeReportsPipelines = () =>
  axios.get<ICOMPOSEREPORTSPIPELINE[]>(
    "http://localhost:8000/composeReportsPipeline"
  );

function* fetchComposeReportsPipelineSaga() {
  try {
    const response = yield call(() => getComposeReportsPipelines());
    yield put(
      fetchComposeReportsPipelineRequestSuccess({
        composeReportsPipeline: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchComposePipelineFailure({
        error: e.message,
      })
    );
  }
}

export function* ComposeReportsPipelineSaga() {
  yield takeLatest(FETCH_REPORTS_PIPELINE, fetchComposeReportsPipelineSaga);
}

//posting schemas in compose
const postProjectSchemaInfoAPI =
  BASE_URL + "/project-tables";

function postProjectSchemaInfocall(
  projectUid: any[],

  sourceTableUids: any[]
): Promise<AxiosResponse<any, any>> {
  return axios.post(`${postProjectSchemaInfoAPI}`, {
    projectUid,

    sourceTableUids,
  });
}

function* postProjectSchemaInfoSaga(
  action: ReturnType<typeof postProjectSchemaInfoRequest>
) {
  try {
    const { projectUid, sourceTableUids } = action;
    const response = yield call(
      { fn: postProjectSchemaInfocall, context: null },
      projectUid,
      sourceTableUids
    );
    yield put(postProjectSchemaInfoSuccess(response.data));
  } catch (error) {
    yield put(postProjectSchemaInfoFailure({ error }));
  }
}

export function* PostSchemaRequestSaga() {
  yield all([
    takeLatest(POST_PROJECT_SCHEMA_INFO_ACTION, postProjectSchemaInfoSaga),
  ]);
}

//DELETE SCHEMA SAGA

const deleteProjectSchemaInfoAPI = BASE_URL + "/project-tables";

function deleteProjectSchemaInfoCall(
  projectUid: any,
  sourceTableUids: any[]
): Promise<AxiosResponse<any, any>> {
  return axios.delete(`${deleteProjectSchemaInfoAPI}`, {
    data: {
      projectUid,
      sourceTableUids,
    },
  });
}

function* deleteProjectSchemaInfoSaga(
  action: ReturnType<typeof deleteProjectSchemaInfoRequest>
) {
  try {
    const response = yield call(
      deleteProjectSchemaInfoCall,
      action.projectUid,
      action.sourceTableUids
    );
    yield put(
      deleteProjectSchemaInfoSuccess(
        response.data.isDelete,
        action.sourceTableUids
      )
    );
  } catch (error) {
    yield put(deleteProjectSchemaInfoFailure(error.message));
  }
}

export function* deleteSchemaRequestSaga() {
  yield all([
    takeLatest(DELETE_PROJECT_SCHEMA_INFO_ACTION, deleteProjectSchemaInfoSaga),
  ]);
}

// search compose schema page
const getSearchSchemaByTag = (searchValue: any) =>
  axios.get<[]>(BASE_URL + "/db/table/search/" + searchValue.searchValue);

function* fetchSearchSchemaByTagSaga(searchValue: SearchSchemaByTagInfoAction) {

  try {
    const response = yield call(() => getSearchSchemaByTag(searchValue));
    yield put(searchSchemaByTagsInfoSuccessAction({
      searchData: response.data,
    })
    );
  } catch (e) {
    yield put(searchSchemaByTagsInfoFailureAction({
      error: e.message,
    })
    );
  }
}

export function* searchSchemaByTagRequestSaga() {
  yield all([
    takeLatest(SEARCH_SCHEMA_BY_TAG_INFO_ACTION, fetchSearchSchemaByTagSaga),
  ]);
}

//saga for posting compose page name and description
const postNameAndDescriptionAPI = BASE_URL + "/project";
function postNameAndDescriptionAPIcall(name: any, description: any): Promise<AxiosResponse<any, any>> {
  return axios.post(`${postNameAndDescriptionAPI}`, {
    name: name,
    description: description
  }
  );
}
function* postNameAndDescriptionSaga(action: ReturnType<typeof postComposeNameDescRequest>) {
  try {
    const { name, description } = action;
    const response = yield call({ fn: postNameAndDescriptionAPIcall, context: null }, name, description);
    yield put(postComposeNameDescRequestSuccess(response.data));
  } catch (error) {
    yield put(postComposeNameDescRequestFailure({ error }));
  }
}

export function* PostNameAndDescSaga() {
  yield all([takeLatest(POST_COMPOSE_NAME_DESC, postNameAndDescriptionSaga)]);
}