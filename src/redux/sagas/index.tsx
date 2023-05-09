import { all, fork } from "redux-saga/effects";




import pipelineSaga from "../sagas/fetchDataActionSaga";

import { schemaSaga, DataBaseSaga } from "../sagas/schemaActionSaga";

import projectSaga from "../sagas/projectSaga";

import { groupdataDataBaseSaga } from "./groupdataDatabaseSaga";

import { ComposeReportsPipelineSaga,ComposePipelineSaga,schemaComposeSaga,PostSchemaRequestSaga } from "./composeSaga";
import groupSaga from "./groupSaga";
import recordSaga from "../sagas/fetchRecordActionSaga";
import projectByIdSaga from "../sagas/projectByIdSaga";



export function* rootSaga() {

  console.log("rootSaga: running...");

  yield all([(schemaSaga()), (pipelineSaga()), (DataBaseSaga()),(groupdataDataBaseSaga()),(recordSaga()),(projectSaga()),(ComposePipelineSaga()),(groupSaga()),(ComposeReportsPipelineSaga()),(schemaComposeSaga()),(PostSchemaRequestSaga(),(projectByIdSaga()))]);

}