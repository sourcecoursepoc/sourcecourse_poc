import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataList } from '@/services/dataService';
import {
  IFetchDataAction,
  IFetchDataSuccessAction,
  IFetchDataFailureAction,
  fetchDataActionType,
  fetchDataTypeFailure,
  fetchDataTypeSuccess,
} from '../actions/fetchDataAction';

export function* _fetchData(action: IFetchDataAction): Generator<any, void, unknown> {
    const datum: any = yield call(fetchDataList, action.params); 
    yield put(fetchDataTypeSuccess(datum));
  }
  
  export function* fetchData() {
    yield takeLatest(fetchDataActionType.FETCH_DATA, _fetchData);
  }
