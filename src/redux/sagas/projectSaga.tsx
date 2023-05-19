import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {  IPROJECT } from "../actions/types";
import {  FETCH_ALLPROJECTS_REQUEST} from "../actions/actionTypes";
import { fetchProjectFailure, fetchProjectSuccess } from "../actions/fetchProjectAction";
import { BASE_URL } from "../../constants/config"

const getProjects = () =>
axios.get<IPROJECT[]>(BASE_URL+"/home");
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