import { combineReducers } from "redux";
import  fetchPipelineReducer  from "./fetchDataReducer";

const rootReducer = combineReducers({
    pipeline:fetchPipelineReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;