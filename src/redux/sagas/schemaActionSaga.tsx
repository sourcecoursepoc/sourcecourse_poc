import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchSchemaSuccess, fetchSchemaFailure, fetchDataBaseSuccess, fetchDataBaseFailure } from "../actions/schemasaction";
import { ISchema, FetchSchemaRequest, } from "../actions/schemaTypes";
import { FETCH_SCHEMA_SCHEMADATA, FETCH_SCHEMA_DATABASE } from "../actions/schemaActionTypes";

const getSchema = (requestParams: any) =>
  axios.get<ISchema[]>("http://localhost:8000/schemas?id=" + requestParams);


/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchSchemaSaga(requestParams: FetchSchemaRequest) {

  console.log("saga call", requestParams)
  try {
    const response = yield call(() => getSchema(requestParams.params));
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


const getDatabase = () =>
  axios.get<DBProps[]>("http://localhost:8000/tables");

// console.log("get schemaaa",getSchema())

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchDataBaseSaga() {
  try {
    const response = yield call(getDatabase);
    console.log("respose saga", response);
    yield put(
      fetchDataBaseSuccess({
        database: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchDataBaseFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/

export function* schemaSaga() {
  yield all([takeLatest(FETCH_SCHEMA_SCHEMADATA, fetchSchemaSaga)]);
}


export function* DataBaseSaga() {
  yield all([takeLatest(FETCH_SCHEMA_DATABASE, fetchDataBaseSaga)]);
}
