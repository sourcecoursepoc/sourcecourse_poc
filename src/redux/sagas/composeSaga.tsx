import {
  ICOMPOSEPIPELINE,
  FetchComposePipelineRequest,
  ICOMPOSEREPORTSPIPELINE,
  ICOMPOSENAMEDESC,
} from "../actions/composeTypes";
import {
  POST_COMPOSE_NAME_DESC,
  FETCH_COMPOSE_PIPELINE,
  FETCH_REPORTS_PIPELINE,
  GET_COMPOSE_NAME_DESC,
} from "../actions/composeActionTypes";
import {
  fetchComposePipelineSuccess,
  fetchComposePipelineFailure,
  fetchComposeReportsPipelineRequestSuccess,
  postComposeNameDescRequest,
  postComposeNameDescRequestFailure,
  postComposeNameDescRequestSuccess,
  getComposeNameDescRequest,
  getComposeNameDescRequestFailure,
  getComposeNameDescRequestSuccess,
} from "../actions/composeAction";
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

const getComposePipelines = (requestParams?: any) =>
  axios.get<ICOMPOSEPIPELINE[]>(
    "http://localhost:8000/composepipeline" +
      (requestParams ? `?id=${requestParams}` : "")
  );

function* fetchComposePipelineSaga(requestParams: FetchComposePipelineRequest) {
  try {
    console.log("fetchComposePipelineSaga: calling API...");
    const response = yield call(() =>
      getComposePipelines(requestParams.params)
    );
    console.log("fetchComposePipelineSaga: response =", response.data);
    yield put(
      fetchComposePipelineSuccess({
        composePipeline: response.data,
      })
    );
  } catch (e) {
    console.error("fetchComposePipelineSaga: error =", e.message);
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
  console.log("ComposePipelineSaga: setting up watcher...");
  yield takeLatest(FETCH_REPORTS_PIPELINE, fetchComposeReportsPipelineSaga);
  console.log("ComposePipelineSaga: watcher set up");
}

//saga for posting compose page name and description

const postNameAndDescriptionAPI = "http://localhost:8080/sourcecourse/project";

function postNameAndDescriptionAPIcall(
  name: any[],
  description: any[]
): Promise<AxiosResponse<any, any>> {
  return axios.post(`${postNameAndDescriptionAPI}`, {
    name,
    description,
  });
}

function* postNameAndDescriptionSaga(
  action: ReturnType<typeof postComposeNameDescRequest>
) {
  try {
    const { name, description } = action;

    const response = yield call(
      { fn: postNameAndDescriptionAPIcall, context: null },
     name,
      description
    );

    yield put(postComposeNameDescRequestSuccess(response.data));
  } catch (error) {
    yield put(postComposeNameDescRequestFailure({ error }));
  }
}

export function* PostNameAndDescSaga() {

  yield all([takeLatest(POST_COMPOSE_NAME_DESC, postNameAndDescriptionSaga)])
  
  }
  
//saga for getting compose page name,description, id

const getNameAndDescriptionAPI = "http://localhost:8080/sourcecourse/project";

function getNameAndDescriptionAPIcall(
  uid:any[],
  name: any[],
  description: any[]
): Promise<AxiosResponse<any, any>> {
  return axios.get(`${getNameAndDescriptionAPI}`, {
    uid,
    name,
    description,
  });
}

function* getNameAndDescriptionSaga(
  action: ReturnType<typeof getComposeNameDescRequest>
) {
  try {
    const { uid,name, description } = action;

    const response = yield call(
      { fn: getNameAndDescriptionAPIcall, context: null },
      uid,
     name,
      description
    );

    yield put(getComposeNameDescRequestSuccess(response.data));
  } catch (error) {
    yield put(getComposeNameDescRequestFailure({ error }));
  }
}

export function* GetNameAndDescSaga() {

  yield all([takeLatest(GET_COMPOSE_NAME_DESC, getNameAndDescriptionSaga)])
  
  }