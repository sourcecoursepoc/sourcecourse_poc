import { combineReducers } from "redux";
import fetchPipelineReducer from "./fetchDataReducer";
import fetchRecordReducer from "./fetchRecordsReducer";
import schemaReducer from "./schemaReducer";
import projectReducer from "./projectReducer";
import schemaDataBaseReducer from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import { composeNameDescReducer, composeReducer, composeReportsPipelineReducer } from "./composeReducer";
import fetchRecordsReducer from "./fetchRecordsReducer";

import groupReducer from "./groupReducer";

console.log("Creating root reducer...");

const rootReducer = combineReducers({
  pipeline: fetchPipelineReducer,
  schema: schemaReducer,
  database: schemaDataBaseReducer,
  groupdataDatabase: groupdataDatabaseReducer,
  project: projectReducer,
  composePipeline: composeReducer,
  record: fetchRecordsReducer,
  group: groupReducer,
  composeReportsPipeline: composeReportsPipelineReducer,
  composeNameDesc:composeNameDescReducer,
});


export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
