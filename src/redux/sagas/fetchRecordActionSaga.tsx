import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Record } from "../actions/types";
import {fetchRecordList } from '@/services/dataService';
import {
 fetchRecordFailure,
 fetchRecordSuccess
} from "../actions/fetchDataAction";
import { FETCH_RECORDS} from "../actions/actionTypes";

const getRecord = () =>
  axios.get<Record[]>("http://localhost:8000/record");


function* fetchRecordSaga() {
  try {
    const response =yield call(getRecord);
    yield put(
        fetchRecordSuccess({
        records: response.data,
      })
    );
  } catch (e) {
    yield put(
        fetchRecordFailure({
        error: e.message,
      })
    );
  }
}

function* recordSaga() {
  yield all([takeLatest(FETCH_RECORDS, fetchRecordSaga)]);
}

export default recordSaga;
