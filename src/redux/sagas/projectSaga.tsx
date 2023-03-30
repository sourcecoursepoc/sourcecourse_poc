import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {  IPROJECT } from "../actions/types";
import {  FETCH_ALLPROJECTS_REQUEST} from "../actions/actionTypes";
import { fetchProjectFailure, fetchProjectSuccess } from "../actions/fetchProjectAction";


const getProjects = () =>
  axios.get<IPROJECT[]>("http://localhost:8000/projects");
/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchProjectSaga():any {

 
  try {
    const response = yield call(getProjects);
   
    yield put(
      fetchProjectSuccess({
        projects: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchProjectFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* projectSaga() {
  yield all([takeLatest(FETCH_ALLPROJECTS_REQUEST, fetchProjectSaga)]);
}

export default projectSaga;