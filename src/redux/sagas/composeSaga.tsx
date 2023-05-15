import {
  ICOMPOSEPIPELINE,
  FetchComposePipelineRequest,
  ICOMPOSEREPORTSPIPELINE,
  FetchSchemaComposeRequest,
  projectSchemaInfo,
} from "../actions/composeTypes";
import {
  FETCH_COMPOSE_PIPELINE,
  FETCH_REPORTS_PIPELINE,
  FETCH_PROJECT_SCHEMA_INFO_ACTION,
  POST_PROJECT_SCHEMA_INFO_ACTION,
  POST_PROJECT_SCHEMA_INFO_ACTION_FAILURE,
  POST_PROJECT_SCHEMA_INFO_ACTION_SUCCESS,
  DELETE_PROJECT_SCHEMA_INFO_ACTION,
} from "../actions/composeActionTypes";
import {
  fetchComposePipelineSuccess,
  fetchComposePipelineFailure,
  fetchComposeReportsPipelineRequestSuccess,
  fetchSchemaComposeSuccess,
  fetchSchemaComposeFailure,
  postProjectSchemaInfoFailure,
  postProjectSchemaInfoRequest,
  postProjectSchemaInfoSuccess,
  deleteProjectSchemaInfoSuccess,
  deleteProjectSchemaInfoFailure,
  deleteProjectSchemaInfoRequest,
} from "../actions/composeAction";
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

const fetchProjectSchemaInfo = (requestParams: any) =>
  axios.get<projectSchemaInfo[]>(
    "http://localhost:8080/sourcecourse/project-tables/" + requestParams
  );

/*
  Worker Saga: Fired on FETCH_PROJECT_SCHEMA_INFO_ACTION action
*/
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
    const response = yield call(() =>
      getComposePipelines(requestParams.params)
    );

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
  "http://localhost:8080/sourcecourse/project-tables";

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

const deleteProjectSchemaInfoAPI =
  "http://localhost:8080/sourcecourse/project-tables";

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
