import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from'./sagas';
const sagaMiddleware=createSagaMiddleware();
const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware({thunk:false,immutableCheck:false,serializableCheck:false}),
    sagaMiddleware,
],
});
sagaMiddleware.run(rootSaga);
export default store;