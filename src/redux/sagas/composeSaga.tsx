import { ICOMPOSEPIPELINE, FetchComposePipelineRequest, ICOMPOSEREPORTSPIPELINE } from "../actions/composeTypes";
import { FETCH_COMPOSE_PIPELINE, FETCH_REPORTS_PIPELINE } from "../actions/composeActionTypes";
import { fetchComposePipelineSuccess, fetchComposePipelineFailure, fetchComposeReportsPipelineRequestSuccess } from "../actions/composeAction";
import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

const getComposePipelines = (requestParams?: any) =>
  axios.get<ICOMPOSEPIPELINE[]>("http://localhost:8000/composepipeline" + (requestParams ? `?id=${requestParams}` : ""));

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
  axios.get<ICOMPOSEREPORTSPIPELINE[]>("http://localhost:8000/composeReportsPipeline");

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
