import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { IGROUPDATA } from "../actions/types";
import { FETCH_ALLGROUP_DATA_REQUEST } from "../actions/actionTypes";
import {
  fetchGroupFailure,
  fetchGroupSuccess,
} from "../actions/fetchGroupActions";

const getGroups = () => {
  return axios.get<IGROUPDATA[]>("http://localhost:8000/allGroupData");
};
function* fetchGroupSaga(): any {
  try {
    const response = yield call(getGroups);
    yield put(
      fetchGroupSuccess({
        groups: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchGroupFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* groupSaga() {
  yield all([takeLatest(FETCH_ALLGROUP_DATA_REQUEST, fetchGroupSaga)]);
}

export default groupSaga;
