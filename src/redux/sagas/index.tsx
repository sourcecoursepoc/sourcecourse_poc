import { all } from 'redux-saga/effects';
import  { fetchData } from './fetchDataActionSaga';

export default function* rootSaga(){
    yield all([fetchData]);
}