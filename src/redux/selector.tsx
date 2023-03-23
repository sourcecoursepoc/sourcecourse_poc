import { createSelector } from "reselect";

import { AppState } from "../redux/reducers/index";

const getPending = (state: AppState) => state.schema.pending;

const getSchemas = (state: AppState) => state.schema.schemas;

const getError = (state: AppState) => state.schema.error;

export const getSchemasSelector = createSelector(getSchemas, (schemas) => schemas);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);