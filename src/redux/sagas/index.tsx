import { all } from "redux-saga/effects";
import pipelineSaga from "../sagas/fetchDataActionSaga";
<<<<<<< HEAD
=======

import { schemaSaga, DataBaseSaga, PostTableTagsAndDescriptionSaga, PostColumnTagsSaga } from "../sagas/schemaActionSaga";

import projectSaga from "../sagas/projectSaga";
import { groupdataDataBaseSaga } from "./groupdataDatabaseSaga";
import {
  ComposeReportsPipelineSaga,
  ComposePipelineSaga,
  schemaComposeSaga,
  PostSchemaRequestSaga,
  deleteSchemaRequestSaga,
  searchSchemaByTagRequestSaga
} from "./composeSaga";
import groupSaga from "./groupSaga";
>>>>>>> 00424be4443597f4720e53aa0aa057844cecc343
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
<<<<<<< HEAD
      PostSchemaRequestSaga(), projectByIdSaga(),deleteSchemaRequestSaga(),(PostNameAndDescSaga())]);
=======
      PostSchemaRequestSaga(), projectByIdSaga(),deleteSchemaRequestSaga(),(searchSchemaByTagRequestSaga())]);
>>>>>>> 00424be4443597f4720e53aa0aa057844cecc343

}
