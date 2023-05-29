import axios from "axios";
import { call, put, take, takeLatest } from "redux-saga/effects";

import { IPROJECT } from "../actions/types";
import { FETCH_ALLPROJECTS_REQUEST } from "../actions/actionTypes";
import { fetchProjectFailure, fetchProjectSuccess } from "../actions/fetchProjectAction";
import { BASE_URL } from "../../constants/config";

const getProjects = () =>
  axios.get<IPROJECT[]>(BASE_URL + "/home");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchProjectSaga(): any {
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
  Starts worker saga on FETCH_ALLPROJECTS_REQUEST action
  but waits for a take action before actually starting the saga
*/
function* projectSaga(): any {
  let isProjectsFetched = false;

  while (true) {
    // Wait for FETCH_ALLPROJECTS_REQUEST action
    yield take(FETCH_ALLPROJECTS_REQUEST);

    if (!isProjectsFetched) {
      yield call(fetchProjectSaga);
      isProjectsFetched = true;
    } else {
      // Projects already fetched, do not make the API call again
      console.log("Projects already fetched");
    }
  }
}

export default projectSaga;
