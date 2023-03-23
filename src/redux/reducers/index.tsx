import { combineReducers } from "redux";

import schemaReducer from "../reducers/schemaReducer";

const rootReducer = combineReducers({
    schema: schemaReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;