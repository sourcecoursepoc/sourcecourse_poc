import { combineReducers } from "redux";
import fetchPipelineReducer from "./fetchDataReducer";
import fetchRecordReducer from "./fetchRecordsReducer";

import projectReducer from "./projectReducer";
import schemaDataBaseReducer, { postTagsAndDescriptionReducer, postColumnTagsAndDescriptionReducer } from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import {
  composeReducer,
  composeReportsPipelineReducer,
  projectSchemaInfoReducer,
} from "./composeReducer";
import fetchRecordsReducer from "./fetchRecordsReducer";

import groupReducer from "./groupReducer";
import projectByIdReducer from "./projectByIdReducer";

const rootReducer = combineReducers({
  pipeline: fetchPipelineReducer,

  database: schemaDataBaseReducer,
  groupdataDatabase: groupdataDatabaseReducer,
  project: projectReducer,
  projectById: projectByIdReducer,
  composePipeline: composeReducer,
  record: fetchRecordsReducer,
  group: groupReducer,
  composeReportsPipeline: composeReportsPipelineReducer,
  schemaComposeData: projectSchemaInfoReducer,
  postTagsAndDescription: postTagsAndDescriptionReducer,
  postColumnTagsAndDescription: postColumnTagsAndDescriptionReducer

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
