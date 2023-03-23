import { all, fork } from "redux-saga/effects";

import pipelineSaga from "../sagas/fetchDataActionSaga";

export function* rootSaga() {
  yield all([fork(pipelineSaga)]);
}