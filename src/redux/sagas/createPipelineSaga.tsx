import { BASE_URL } from "@/constants/config";
import axios, { all, AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { postGroupPipelineInfoAction, postGroupPipelineInfoActionFailure, postGroupPipelineInfoActionSuccess } from "../actions/createPipeline";
import { POST_GROUP_PIPELINE_ACTION } from "../actions/createPipelineActions";

//saga for create pipeline in groups
const postCreatePipelineAPI = BASE_URL+'/group-pipeline';

function postCreatePipelineAPIcall(uid: any, tags: string[], description: string): Promise<AxiosResponse<any, any>> {
  return axios.post(`${postCreatePipelineAPI}/${uid}`, { tags, description });
}

function* postGroupPipelineSaga(action: ReturnType<typeof postGroupPipelineInfoAction>) {
  try {
    const {  groupId,
        loadType,
        exportType,
        recurrence,
        exportFileName,
        intimationList,
        time,
        monthlyDays,
        weeklyDays,} = action;
    const response = yield call({ fn: postCreatePipelineAPIcall, context: null }, groupId,
        loadType,
        exportType,
        recurrence,
        exportFileName,
        intimationList,
        time,
        monthlyDays,
        weeklyDays,);
    yield put(postGroupPipelineInfoActionSuccess(response.data));
  } catch (error) {
    yield put(postGroupPipelineInfoActionFailure({ error }));
  }
}
export function* PostCreatePipelineSaga() {
    yield all([takeLatest(POST_GROUP_PIPELINE_ACTION, postGroupPipelineSaga)])
  }