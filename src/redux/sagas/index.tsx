import { all, fork } from "redux-saga/effects";

import schemaSaga from "../sagas/schemaActionSaga";

export function* rootSaga() {
    yield all([fork(schemaSaga)]);
}