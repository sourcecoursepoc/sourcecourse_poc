import { createSelector } from "reselect";

import { AppState } from "../redux/reducers/index";

const getPending = (state: AppState) => state.pipeline.pending;

const getPipelines = (state: AppState) => state.pipeline.pipelines;

const getError = (state: AppState) => state.pipeline.error;

export const getPipelineSelector = createSelector(getPipelines, (pipelines) => pipelines);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);