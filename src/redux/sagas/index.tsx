import { all, fork } from "redux-saga/effects";

import pipelineSaga from "../sagas/fetchDataActionSaga";
import schemaSaga from "../sagas/schemaActionSaga";
export function* rootSaga() {
  yield all([fork(pipelineSaga),(schemaSaga)]);
}