import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { IPROJECT, DeleteProjectInfoAction, DeleteProjectGroupsInfoAction } from "../actions/types";
import { FETCH_ALLPROJECTS_REQUEST } from "../actions/actionTypes";
import { fetchProjectFailure, fetchProjectSuccess, deleteProjectInfoActionSuccess, deleteProjectInfoActionFailure, deleteProjectGroupsInfoAction, deleteProjectGroupsInfoActionSuccess, deleteProjectGroupsInfoActionFailure } from "../actions/fetchProjectAction";
import { DELETE_PROJECTS_INFO_ACTION, DELETE_PROJECTGROUPS_INFO_ACTION } from "../actions/projectActionTypes";


const getProjects = () =>
  axios.get<IPROJECT[]>("http://localhost:8080/sourcecourse/home");
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


// delete project saga

// const URL = 'http://localhost:8080/sourcecourse/project';

// function* deleteProject(action: DeleteProjectInfoAction) {
//   try {
//     const { id } = action.payload;
//     yield call(axios.delete, `${URL}/${id}`);
//     yield put(deleteProjectInfoActionSuccess(id));
//   } catch (error) {
//     yield put(deleteProjectInfoActionFailure(error.message));
//   }
// }

const deleteProject = (requestParams: any) =>
  axios.delete("http://localhost:8080/sourcecourse/project/" + requestParams);

/*
  Worker Saga: Fired on FETCH_SCHEMA_REQUEST action
*/
function* deleteProjectSaga(requestParams: DeleteProjectInfoAction) {

  try {
    const response = yield call(() => deleteProject(requestParams.payload));
    console.log(response,requestParams,"rrrrrrrr")
    yield put(deleteProjectInfoActionSuccess(requestParams.payload));
  } catch (e) {
    yield put(
      deleteProjectInfoActionFailure({
        error: e.message,
      })
    );
  }
}


const deleteProjectGroups = (requestParams: any) =>
  axios.delete("http://localhost:8080/sourcecourse/project-groups/" + requestParams);

function* deleteProjectGroupSaga(requestParams: DeleteProjectGroupsInfoAction) {
  try {
    const response = yield call(() => deleteProjectGroups(requestParams.payload.id));
    yield put(deleteProjectGroupsInfoActionSuccess(requestParams.payload));
  } catch (e) {
    yield put(deleteProjectGroupsInfoActionFailure({
      error: e.message,
    }))
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* projectSaga() {
  yield all([
    takeLatest(FETCH_ALLPROJECTS_REQUEST, fetchProjectSaga),
    takeLatest(DELETE_PROJECTS_INFO_ACTION, deleteProjectSaga),
    takeLatest(DELETE_PROJECTGROUPS_INFO_ACTION, deleteProjectGroupSaga)
  ]);
}


export default projectSaga;