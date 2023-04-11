import { combineReducers } from "redux";
import  fetchPipelineReducer  from "./fetchDataReducer";
import schemaReducer from "../reducers/schemaReducer";
import projectReducer from "./projectReducer";

import schemaDataBaseReducer from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import composeReducer from "./composeReducer";
const rootReducer = combineReducers({
    pipeline:fetchPipelineReducer,
    schema: schemaReducer,
    database:schemaDataBaseReducer,
    groupdataDatabase:groupdataDatabaseReducer,
    project:projectReducer,
    composePipeline:composeReducer

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
