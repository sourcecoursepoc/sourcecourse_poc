import { combineReducers } from "redux";
import  fetchPipelineReducer  from "./fetchDataReducer";
import schemaReducer from "../reducers/schemaReducer";
import projectReducer from "./projectReducer";

import schemaDataBaseReducer from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
const rootReducer = combineReducers({
    pipeline:fetchPipelineReducer,
    schema: schemaReducer,
    database:schemaDataBaseReducer,
    groupdataDatabase:groupdataDatabaseReducer,
    project:projectReducer

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
