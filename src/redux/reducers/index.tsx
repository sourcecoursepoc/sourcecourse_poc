import { combineReducers } from "redux";
import fetchPipelineReducer from "./fetchDataReducer";
import fetchRecordReducer from "./fetchRecordsReducer";
import schemaReducer from "./schemaReducer";
import projectReducer, { deleteProjectReducer, deleteProjectGroupsReducer } from "./projectReducer";
import  { postTagsAndDescriptionReducer, postColumnTagsAndDescriptionReducer,dataBaseReducer } from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import {
  composeReducer,
  composeReportsPipelineReducer,
  projectSchemaInfoReducer,
  searchSchemaByTag,
} from "./composeReducer";
import fetchRecordsReducer from "./fetchRecordsReducer";

import groupReducer from "./groupReducer";
import projectByIdReducer from "./projectByIdReducer";

const rootReducer = combineReducers({
  pipeline: fetchPipelineReducer,
  schema: schemaReducer,
  database: dataBaseReducer,
  groupdataDatabase: groupdataDatabaseReducer,
  project: projectReducer,
  projectById: projectByIdReducer,
  composePipeline: composeReducer,
  record: fetchRecordsReducer,
  group: groupReducer,
  composeReportsPipeline: composeReportsPipelineReducer,
  schemaComposeData: projectSchemaInfoReducer,
  postTagsAndDescription: postTagsAndDescriptionReducer,
  postColumnTagsAndDescription: postColumnTagsAndDescriptionReducer,
  deleteProject: deleteProjectReducer,
  deleteProjectGroups: deleteProjectGroupsReducer,
  searchSchemaByTag: searchSchemaByTag,

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
