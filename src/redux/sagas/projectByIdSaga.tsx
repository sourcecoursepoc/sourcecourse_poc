import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {  IPROJECTBYID, FetchProjectByIdRequest } from "../actions/types";
import {  FETCH_PROJECT_BYID_REQUEST} from "../actions/actionTypes";
import { fetchProjectByIdSuccess,fetchProjectByIdFailure } from "../actions/fetchProjectAction";


const getProject = (requestParams: any) =>
axios.get<IPROJECTBYID>("http://localhost:8080/sourcecourse/project/" + requestParams);
/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchProjectByIdSaga(requestParams: FetchProjectByIdRequest):any {

 
  try {
    const response = yield call(() => getProject(requestParams.params));
    {console.log("projectById", response.data)}
   
    yield put(
        fetchProjectByIdSuccess({
        projectById: response.data,
      })
    );
  } catch (e) {
    yield put(
        fetchProjectByIdFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* projectByIdSaga() {
  yield all([takeLatest(FETCH_PROJECT_BYID_REQUEST, fetchProjectByIdSaga)]);
}

export default projectByIdSaga;
