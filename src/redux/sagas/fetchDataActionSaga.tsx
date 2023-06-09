import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPIPELINE } from "../actions/types";
import { fetchProjectList, fetchPipelineList } from '@/services/dataService';
import {
  fetchPipelineFailure,
  fetchPipelineSuccess,
} from "../actions/fetchDataAction";
import { FETCH_PIPELINE_REQUEST } from "../actions/actionTypes";

const getPipelines = () =>
  axios.get<IPIPELINE[]>("http://localhost:8000/pipeline");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchPipelineSaga() {
  try {
    const response =yield call(getPipelines);
    console.log(response)
    yield put(
      fetchPipelineSuccess({
        pipelines: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchPipelineFailure({
        error: e.message,
      })
    );
  }
}

function* pipelineSaga() {
  yield all([takeLatest(FETCH_PIPELINE_REQUEST, fetchPipelineSaga)]);
}

export default pipelineSaga;
