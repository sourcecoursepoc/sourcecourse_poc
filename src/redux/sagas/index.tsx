import { all } from "redux-saga/effects";
import pipelineSaga from "../sagas/fetchDataActionSaga";
import recordSaga from "../sagas/fetchRecordActionSaga";
import projectByIdSaga from "../sagas/projectByIdSaga";
import projectSaga from "../sagas/projectSaga";
import { DataBaseSaga, PostColumnTagsSaga, PostTableTagsAndDescriptionSaga, schemaSaga } from "../sagas/schemaActionSaga";
import {
  ComposePipelineSaga, ComposeReportsPipelineSaga, deleteSchemaRequestSaga,
  PostNameAndDescSaga, PostSchemaRequestSaga, schemaComposeSaga
} from "./composeSaga";
import { groupdataDataBaseSaga } from "./groupdataDatabaseSaga";
import groupSaga from "./groupSaga";




export function* rootSaga() {
  console.log("rootSaga: running...");


    yield all([(schemaSaga()), (pipelineSaga()), (DataBaseSaga()), (groupdataDataBaseSaga()), (recordSaga()), (projectSaga()), (ComposePipelineSaga()), (groupSaga()), (ComposeReportsPipelineSaga()), (PostTableTagsAndDescriptionSaga()), (PostColumnTagsSaga()),
      schemaComposeSaga(),
      PostSchemaRequestSaga(), projectByIdSaga(),deleteSchemaRequestSaga(),(PostNameAndDescSaga())]);

}
