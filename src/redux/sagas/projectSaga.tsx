import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { IPROJECT, DeleteProjectInfoAction } from "../actions/types";
import { FETCH_ALLPROJECTS_REQUEST } from "../actions/actionTypes";
import { fetchProjectFailure, fetchProjectSuccess, deleteProjectInfoActionSuccess, deleteProjectInfoActionFailure } from "../actions/fetchProjectAction";
import { BASE_URL } from "../../constants/config"
import { DELETE_PROJECTS_INFO_ACTION } from "../actions/projectActionTypes";

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


const deleteProject = (requestParams: any) =>
  axios.delete(BASE_URL + "/project/" + requestParams);

/*
  Worker Saga: Fired on FETCH_SCHEMA_REQUEST action
*/
function* deleteProjectSaga(requestParams: DeleteProjectInfoAction) {

  try {
    const response = yield call(() => deleteProject(requestParams.payload));
    yield put(deleteProjectInfoActionSuccess(response));
  } catch (e) {
    yield put(
      deleteProjectInfoActionFailure({
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
  yield all([
    takeLatest(FETCH_ALLPROJECTS_REQUEST, fetchProjectSaga),
    takeLatest(DELETE_PROJECTS_INFO_ACTION, deleteProjectSaga),
  ]);
}

export default projectSaga;