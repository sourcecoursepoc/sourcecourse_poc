import { BASE_URL } from "@/constants/config";
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { postGroupPipelineInfoAction, postGroupPipelineInfoActionFailure, postGroupPipelineInfoActionSuccess } from "../actions/createPipeline";
import { POST_GROUP_PIPELINE_ACTION } from "../actions/createPipelineActions";
const postCreatePipelineAPI ="http://localhost:8080/sourcecourse/group-pipeline";

function postCreatePipelineAPIcall(groupId: any, loadType: string,
exportType: string,
recurrence: string,
exportFileName: string,
intimationList: string[],
time: string,
monthlyDays: number[],
weeklyDays: string[]): Promise<AxiosResponse<any, any>> {
  return axios.post(`${postCreatePipelineAPI}/${groupId}`, {  loadType,
    exportType,
    recurrence,
    exportFileName,
    intimationList,
    time,
    monthlyDays,
    weeklyDays });
}

function* postGroupPipelineSaga(action: ReturnType<typeof postGroupPipelineInfoAction>) {
  try {
    const { groupId,loadType,
      exportType,
      recurrence,
      exportFileName,
      intimationList,
      time,
      monthlyDays,
      weeklyDays } = action;
      console.log('Group ID:', groupId);
      console.log('Load Type:', loadType);
    const response = yield call({ fn: postCreatePipelineAPIcall, context: null }, groupId,  loadType,
      exportType,
      recurrence,
      exportFileName,
      intimationList,
      time,
      monthlyDays,
      weeklyDays);
    yield put(postGroupPipelineInfoActionSuccess(response.data));
    console.log("sucec")
    console.log('API Response:', response);
  } catch (error) {
    console.log("ERROE",error);
    yield put(postGroupPipelineInfoActionFailure({ error }));
  }
}
export function* PostCreatePipelineSaga() {
  yield all([takeLatest(POST_GROUP_PIPELINE_ACTION, postGroupPipelineSaga)])
}
