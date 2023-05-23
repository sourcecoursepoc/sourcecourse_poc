import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { IPROJECT, FetchProjectInfoAction } from "../actions/types";
import {
  FETCH_ALLPROJECTS_REQUEST,
  DELETE_PROJECTS_INFO_ACTION,
} from "../actions/actionTypes";
import {
  fetchProjectFailure,
  fetchProjectSuccess,
  deleteProjectInfoActionSuccess,
  deleteProjectInfoActionFailure,
} from "../actions/fetchProjectAction";
import { BASE_URL } from "../../constants/config";

const getProjects = () =>
  axios.get<IPROJECT[]>(BASE_URL + "/home");

/*
  Worker Saga: Fired on FETCH_ALLPROJECTS_REQUEST action
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

// delete project saga

const deleteProject = (requestParams: any) =>
  axios.delete("http://localhost:8080/sourcecourse/project/" + requestParams);

/*
  Worker Saga: Fired on DELETE_PROJECTS_INFO_ACTION action
*/
function* deleteProjectSaga(requestParams: FetchProjectInfoAction) {
  try {
    const response = yield call(() => deleteProject(requestParams.payload));
    yield put(deleteProjectInfoActionSuccess(requestParams.payload));
  } catch (e) {
    yield put(
      deleteProjectInfoActionFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ALLPROJECTS_REQUEST` and `DELETE_PROJECTS_INFO_ACTION` actions.
  Allows concurrent handling of the actions.
*/
function* projectSaga() {
  yield all([
    takeLatest(FETCH_ALLPROJECTS_REQUEST, fetchProjectSaga),
    takeLatest(DELETE_PROJECTS_INFO_ACTION, deleteProjectSaga),
  ]);
}

export default projectSaga;
