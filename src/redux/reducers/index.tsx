import { combineReducers } from "redux";
import  fetchPipelineReducer  from "./fetchDataReducer";
import schemaReducer from "../reducers/schemaReducer";
import projectReducer from "./projectReducer";
const rootReducer = combineReducers({
    pipeline:fetchPipelineReducer,
    schema: schemaReducer,
    project:projectReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
