import { all, fork } from "redux-saga/effects";

import pipelineSaga from "../sagas/fetchDataActionSaga";
import schemaSaga from "../sagas/schemaActionSaga";
import projectSaga from "../sagas/projectSaga";
export function* rootSaga() {
  yield all([(pipelineSaga()),(schemaSaga()), (projectSaga()) ]);
}