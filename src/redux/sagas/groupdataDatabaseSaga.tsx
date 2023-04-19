import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FETCH_GROUPDATA_DATABASE } from "../actions/schemaActionTypes";
import { fetchGroupDataFailure, fetchGroupDataSuccess } from "../actions/schemasaction";




const getgroupdataDatabase = () =>
  axios.get<TableProps[]>("http://localhost:8000/groupData");

function* fetchGroupdataDataBaseSaga() {
  try {
    const response = yield call(getgroupdataDatabase);
    console.log("response saga", response);
    yield put(
        fetchGroupDataSuccess({
        groupdataDatabase: response.data,
      })
    );
  } catch (e) {
    yield put(
        fetchGroupDataFailure({
        error: e.message,
      })
    );
  }
}


export function* groupdataDataBaseSaga() {
  yield all([takeLatest(FETCH_GROUPDATA_DATABASE, fetchGroupdataDataBaseSaga)]);
}
