import { combineReducers } from "redux";
import fetchPipelineReducer from "./fetchDataReducer";
import fetchRecordReducer from "./fetchRecordsReducer";
import {schemaReducer} from "./schemaReducer";

import projectReducer, { deleteProjectReducer } from "./projectReducer";
import { postTagsAndDescriptionReducer, postColumnTagsAndDescriptionReducer, schemaDataBaseReducers, dBconnectionReducer } from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import {
  composeReducer,
  composeReportsPipelineReducer,
  postComposeNameDescReducer,
  projectSchemaInfoReducer,
  searchSchemaByTagReducer,
  createPipelineReducer,
} from "./composeReducer";
import fetchRecordsReducer from "./fetchRecordsReducer";

import groupReducer from "./groupReducer";
import projectByIdReducer from "./projectByIdReducer";

const rootReducer = combineReducers({
  pipeline: fetchPipelineReducer,
  schema: schemaReducer,
  database: schemaDataBaseReducers,
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
  dBconnection: dBconnectionReducer,
  postComposeNameDesc:postComposeNameDescReducer,
  deleteProject: deleteProjectReducer,
  searchSchemaByTag:searchSchemaByTagReducer,
  createPipeline:createPipelineReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
