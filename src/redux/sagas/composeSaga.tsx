import { ICOMPOSEPIPELINE } from "../actions/composeTypes";
import { FETCH_COMPOSE_PIPELINE } from "../actions/composeActionTypes";
import { fetchComposePipelineSuccess, fetchComposePipelineFailure } from "../actions/composeAction";
import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
const getComposePipelines = () =>
  axios.get<ICOMPOSEPIPELINE[]>("http://localhost:8000/composepipeline");


function* fetchComposePipelineSaga() {
  try {
    const response =yield call(getComposePipelines);
    console.log(response,"response")
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
  yield all([takeLatest(FETCH_COMPOSE_PIPELINE, fetchComposePipelineSaga)]);
}

