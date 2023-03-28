import { combineReducers } from "redux";
import  fetchPipelineReducer  from "./fetchDataReducer";
import schemaReducer from "../reducers/schemaReducer";
import schemaDataBaseReducer from "./schemaDataBaseReducer";
const rootReducer = combineReducers({
    pipeline:fetchPipelineReducer,
    schema: schemaReducer,
    database:schemaDataBaseReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;