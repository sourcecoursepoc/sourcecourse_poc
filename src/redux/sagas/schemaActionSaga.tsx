import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchSchemaSuccess, fetchSchemaFailure, fetchDataBaseSuccess, fetchDataBaseFailure, postDataRequest, postDataSuccess, postDataFailure } from "../actions/schemasaction";
import { ISchema, FetchSchemaRequest, } from "../actions/schemaTypes";
import { FETCH_SCHEMA_SCHEMADATA, FETCH_SCHEMA_DATABASE } from "../actions/schemaActionTypes";

const getSchema = (requestParams: any) =>
  axios.get<ISchema[]>("http://localhost:8000/schemas?id=" + requestParams);


/*
  Worker Saga: Fired on FETCH_SCHEMA_REQUEST action
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
  axios.get<DBProps[]>("http://localhost:8080/sourcecourse/db");

/*
  Worker Saga: Fired on FETCH_DATABASE_REQUEST action
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
};

//Post Data

const API_URL = 'https://example.com/api';

export const postData = async (data: any) => {
  const response = await fetch(`${API_URL}/post-data`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || 'Failed to post data.');
  }

  return responseData;
};

export const postFormData = (data: any) => async (dispatch: any) => {
  try {
    dispatch(postDataRequest());
    await postData(data);
    dispatch(postDataSuccess());
  } catch (error) {
    dispatch(postDataFailure(error.message));
  }
};


/*
  Starts worker saga on latest dispatched `FETCH_SCHEMA_REQUEST` action.
  Allows concurrent increments.
*/

export function* schemaSaga() {
  yield all([takeLatest(FETCH_SCHEMA_SCHEMADATA, fetchSchemaSaga)]);
}


export function* DataBaseSaga() {
  yield all([takeLatest(FETCH_SCHEMA_DATABASE, fetchDataBaseSaga)]);
}
