import { combineReducers } from "redux";
import fetchPipelineReducer from "./fetchDataReducer";
import fetchRecordReducer from "./fetchRecordsReducer";
import schemaReducer from "./schemaReducer";
import projectReducer from "./projectReducer";
import schemaDataBaseReducer from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import composeReducer from "./composeReducer";
import fetchRecordsReducer from "./fetchRecordsReducer";

console.log("Creating root reducer...");

const rootReducer = combineReducers({
  pipeline: fetchPipelineReducer,
  schema: schemaReducer,
  database: schemaDataBaseReducer,
  groupdataDatabase: groupdataDatabaseReducer,
  project: projectReducer,
  composePipeline: composeReducer,
  record:fetchRecordsReducer,
});


export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
