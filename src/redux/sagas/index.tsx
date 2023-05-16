import { all, fork } from "redux-saga/effects";

import pipelineSaga from "../sagas/fetchDataActionSaga";

import { schemaSaga, DataBaseSaga, PostTableTagsAndDescriptionSaga, PostColumnTagsSaga } from "../sagas/schemaActionSaga";

import projectSaga from "../sagas/projectSaga";
import { groupdataDataBaseSaga } from "./groupdataDatabaseSaga";
import {
  ComposeReportsPipelineSaga,
  ComposePipelineSaga,
  schemaComposeSaga,
  PostSchemaRequestSaga,
  deleteSchemaRequestSaga
} from "./composeSaga";
import groupSaga from "./groupSaga";
import recordSaga from "../sagas/fetchRecordActionSaga";
import projectByIdSaga from "../sagas/projectByIdSaga";
import dBConnectionSaga from "./dBConnectionSaga";

export function* rootSaga() {


    yield all([(schemaSaga()), (pipelineSaga()), (DataBaseSaga()), (groupdataDataBaseSaga()), (recordSaga()), (projectSaga()), (ComposePipelineSaga()), (groupSaga()), (ComposeReportsPipelineSaga()), (PostTableTagsAndDescriptionSaga()), (PostColumnTagsSaga()), (dBConnectionSaga())
      schemaComposeSaga(),
      PostSchemaRequestSaga(), projectByIdSaga(),deleteSchemaRequestSaga()]);

}
