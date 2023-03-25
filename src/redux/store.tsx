import { createStore, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";

import rootReducer from "./reducers/index";
import { rootSaga } from "./sagas/index";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = configureStore({ reducer: rootReducer, middleware: (getMiddleWare) => [...getMiddleWare({ thunk: false, immutableCheck: false, serializableCheck: false }), sagaMiddleware] });

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
