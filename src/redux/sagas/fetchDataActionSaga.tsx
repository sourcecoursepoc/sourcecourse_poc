import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataList,fetchPipelineList } from '@/services/dataService';
import {
  IFetchDataAction,
  IFetchDataSuccessAction,
  IFetchDataFailureAction,
  fetchDataActionType,
  fetchDataTypeFailure,
  fetchDataTypeSuccess,
  IFetchPipelineAction,
  IFetchPipelineSuccessAction,
  IFetchPipelineFailureAction,
  fetchPipelineTypeFailure,
  fetchPipelineTypeSuccess,
} from '../actions/fetchDataAction';

export function* _fetchData(action: IFetchDataAction): Generator<any, void, unknown> {
    const datum: any = yield call(fetchDataList, action.params); 
    yield put(fetchDataTypeSuccess(datum));
  }
  
  export function* fetchData() {
    yield takeLatest(fetchDataActionType.FETCH_DATA, _fetchData);
  }

  export function* _fetchPipeline(action: IFetchPipelineAction): Generator<any, void, unknown> {
    const datum: any = yield call(fetchPipelineList, action.params); 
    yield put(fetchPipelineTypeSuccess(datum));
  }
  
  export function* fetchPipeline() {
    yield takeLatest(fetchDataActionType.FETCH_PIPELINE, _fetchPipeline);
  }
