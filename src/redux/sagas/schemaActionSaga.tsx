import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchSchemaFailure, fetchSchemaSuccess, fetchSchema_Data } from "../actions/schemasaction";
import { FETCH_SCHEMA_DATA, FETCH_SCHEMA_DATA_FAILURE, FETCH_SCHEMA_DATA_SUCCESS } from "../actions/schemaActionTypes";
import { SchemaActions } from "../actions/types";

const getSchemas = () =>
  axios.get<SchemaActions[]>("http://localhost:8000/schemas");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchSchemaSaga() {
  try {
    const response = yield call( getSchemas);
    yield put(
      fetchSchemaSuccess({
        schemas: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchSchemaFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* schemaSaga() {
  yield all([takeLatest(FETCH_SCHEMA_DATA, fetchSchemaSaga)]);
}

export default schemaSaga;