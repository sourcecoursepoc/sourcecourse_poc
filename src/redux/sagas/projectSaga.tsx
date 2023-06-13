import axios from "axios";
import { call, put, take, takeLatest, all } from "redux-saga/effects";

import { IPROJECT, DeleteProjectInfoAction } from "../actions/types";
import { FETCH_ALLPROJECTS_REQUEST } from "../actions/actionTypes";
import { fetchProjectFailure, fetchProjectSuccess, deleteProjectInfoActionSuccess, deleteProjectInfoActionFailure, deleteProjectInfoAction } from "../actions/fetchProjectAction";
import { BASE_URL } from "../../constants/config";
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

/*
  Worker Saga: Fired on FETCH_SCHEMA_REQUEST action
*/
const deleteProjects = (requestParams: any) =>
  axios.delete<any>(`${BASE_URL}/project/${requestParams}`);

function* deleteProjectSaga(requestParams: DeleteProjectInfoAction) {
  try {
    const response = yield call(deleteProjects, requestParams.payload);
    yield put(deleteProjectInfoActionSuccess(response));
  } catch (e) {
    yield put(deleteProjectInfoActionFailure({ error: e.message }));
  }
}

/*
  Starts worker saga on FETCH_ALLPROJECTS_REQUEST action
  but waits for a take action before actually starting the saga
*/
function* projectSaga(): any {
    let isProjectsFetched = false;

  while (true) {
    const action = yield take([FETCH_ALLPROJECTS_REQUEST, DELETE_PROJECTS_INFO_ACTION]);

    if (action.type === FETCH_ALLPROJECTS_REQUEST && !isProjectsFetched) {
      yield call(fetchProjectSaga);
      isProjectsFetched = true;
    } else if (action.type === DELETE_PROJECTS_INFO_ACTION) {
      yield call(deleteProjectSaga, action);
    } else {
      // Projects already fetched, do not make the API call again
      console.log("Projects already fetched");
    }
  }
}

export default projectSaga;
