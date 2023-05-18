import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { DB_CONNECTION_REQUEST } from "../actions/actionTypes";
import { dBConnectionPostAction, dBConnectionPostFailure, dBConnectionPostSuccess } from "../actions/dbConnectionAction";

const dBConnectionPostAPI = 'http://localhost:8080/sourcecourse/db';

function dBConnectionPostAPIcall(name: any, description: any, connectionURL: any, username: any, password: any): Promise<AxiosResponse<any, any>> {
  return axios.post(`${dBConnectionPostAPI}`, { name, description, connectionURL, username, password });
}

function* dBConnectionPostAPISaga(action: ReturnType<typeof dBConnectionPostAction>): Generator<any, void, AxiosResponse<any, any>> {
  try {
    const { name, description, connectionURL, username, password } = action;
    const response = yield call({ fn: dBConnectionPostAPIcall, context: null }, name, description, connectionURL, username, password);
    yield put(dBConnectionPostSuccess(response.data));
  } catch (error) {
    yield put(dBConnectionPostFailure({ error }));
  }
}

export default function* dBConnectionSaga() {
  yield takeLatest(DB_CONNECTION_REQUEST, dBConnectionPostAPISaga);
}
