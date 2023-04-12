import { ICOMPOSEPIPELINE } from "../actions/composeTypes";
import { FETCH_COMPOSE_PIPELINE } from "../actions/composeActionTypes";
import { fetchComposePipelineSuccess, fetchComposePipelineFailure } from "../actions/composeAction";
import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

const getComposePipelines = () =>
  axios.get<ICOMPOSEPIPELINE[]>("http://localhost:8000/composepipeline");

function* fetchComposePipelineSaga() {
  try {
    console.log("fetchComposePipelineSaga: calling API...");
    const response = yield call(getComposePipelines);
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
  console.log("ComposePipelineSaga: setting up watcher...");
  yield takeLatest(FETCH_COMPOSE_PIPELINE, fetchComposePipelineSaga);
  console.log("ComposePipelineSaga: watcher set up");
}