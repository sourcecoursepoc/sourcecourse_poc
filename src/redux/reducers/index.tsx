import { combineReducers } from "redux";
import fetchPipelineReducer from "./fetchDataReducer";
import schemaReducer from "./schemaReducer";
import projectReducer from "./projectReducer";
import schemaDataBaseReducer from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import composeReducer from "./composeReducer";

import groupReducer from "./groupReducer";

console.log("Creating root reducer...");

const rootReducer = combineReducers({
  pipeline: fetchPipelineReducer,
  schema: schemaReducer,
  database: schemaDataBaseReducer,
  groupdataDatabase: groupdataDatabaseReducer,
  project: projectReducer,
  composePipeline: composeReducer,
  group:groupReducer,
});

console.log("Root reducer created:", rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
