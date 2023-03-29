import { combineReducers } from "redux";
import  fetchPipelineReducer  from "./fetchDataReducer";
import schemaReducer from "../reducers/schemaReducer";
import projectReducer from "./projectReducer";

import schemaDataBaseReducer from "./schemaDataBaseReducer";
const rootReducer = combineReducers({
    pipeline:fetchPipelineReducer,
    schema: schemaReducer,
    database:schemaDataBaseReducer,
    project:projectReducer

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
