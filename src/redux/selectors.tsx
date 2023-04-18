import { createSelector } from "reselect";

import { AppState } from "../redux/reducers/index";

const getPending = (state: AppState) => state.pipeline.pending;

const getPipelines = (state: AppState) => state.pipeline.pipelines;

const getError = (state: AppState) => state.pipeline.error;
//Record
const getLoadingRecord = (state: AppState) => state.record.loading;

const getRecord= (state: AppState) => state.record.data;

const getRecordError = (state: AppState) => state.record.error;

export const getPipelineSelector = createSelector(
  getPipelines,
  (pipelines) => pipelines
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);

//Record
export const getRecordSelector = createSelector(
  getRecord,
  (records) => records
);
export const getLoadingSelector = createSelector(
  getLoadingRecord,
  (loading) => loading
);

export const getRecordErrorSelector = createSelector(getRecordError, (error) => error);
