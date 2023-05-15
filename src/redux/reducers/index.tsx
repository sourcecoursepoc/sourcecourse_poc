import { combineReducers } from "redux";
import fetchPipelineReducer from "./fetchDataReducer";
import fetchRecordReducer from "./fetchRecordsReducer";
import schemaReducer from "./schemaReducer";
import projectReducer from "./projectReducer";
import schemaDataBaseReducer, { postTagsAndDescriptionReducer, postColumnTagsAndDescriptionReducer, dBconnectionReducer } from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import { composeReducer, composeReportsPipelineReducer,composeSchemaReducer } from "./composeReducer";
import fetchRecordsReducer from "./fetchRecordsReducer";


import groupReducer from "./groupReducer";
import projectByIdReducer from "./projectByIdReducer";

console.log("Creating root reducer...");

const rootReducer = combineReducers({
  pipeline: fetchPipelineReducer,
  schema: schemaReducer,
  database: schemaDataBaseReducer,
  groupdataDatabase: groupdataDatabaseReducer,
  project: projectReducer,
  projectById: projectByIdReducer,
  composePipeline: composeReducer,
  record: fetchRecordsReducer,
  group: groupReducer,
  composeReportsPipeline: composeReportsPipelineReducer,
  postTagsAndDescription: postTagsAndDescriptionReducer,
  postColumnTagsAndDescription: postColumnTagsAndDescriptionReducer,
  dBconnection: dBconnectionReducer
});


export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
