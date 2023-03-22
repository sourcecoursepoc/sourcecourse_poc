import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProjectList,fetchPipelineList } from '@/services/dataService';
import {
  IFetchProjectAction,
  IFetchProjectSuccessAction,
  IFetchProjectFailureAction,
  fetchDataActionType,
  fetchProjectTypeFailure,
  fetchProjectTypeSuccess,
  IFetchPipelineAction,
  IFetchPipelineSuccessAction,
  IFetchPipelineFailureAction,
  fetchPipelineTypeFailure,
  fetchPipelineTypeSuccess,
} from '../actions/fetchDataAction';

export function* _fetchProject(action: IFetchProjectAction): Generator<any, void, unknown> {
    const datum: any = yield call(fetchProjectList, action.params); 
    yield put(fetchProjectTypeSuccess(datum));
  }
  
  export function* fetchProject() {
    yield takeLatest(fetchDataActionType.FETCH_PROJECT, _fetchProject);
  }

  export function* _fetchPipeline(action: IFetchPipelineAction): Generator<any, void, unknown> {
    const datum: any = yield call(fetchPipelineList, action.params); 
    yield put(fetchPipelineTypeSuccess(datum));
  }
  
  export function* fetchPipeline() {
    yield takeLatest(fetchDataActionType.FETCH_PIPELINE, _fetchPipeline);
  }
