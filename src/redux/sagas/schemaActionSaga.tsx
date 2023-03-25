import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchSchemaSuccess, fetchSchemaFailure } from "../actions/schemasaction";
import { ISchema, FetchSchemaRequest } from "../actions/schemaTypes";
import { FETCH_SCHEMA_DATA } from "../actions/schemaActionTypes";

const getSchema = () =>
  axios.get<ISchema[]>("http://localhost:8000/schemas");

// console.log("get schemaaa",getSchema())

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchSchemaSaga(params:FetchSchemaRequest) {
  
  console.log("saga call",params)
  try {
    const response = yield call(getSchema);
    console.log("respose saga", response);
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