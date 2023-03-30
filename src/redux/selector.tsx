import { createSelector } from "reselect";

import { AppState } from "./reducers/index";

const getPending = (state: AppState) => state.schema.pending;
const getSchemas = (state: AppState) => state.schema.schemas;
const getProjects = (state: AppState) => state.project.projects;
const getError = (state: AppState) => state.schema.error;
const getDataBase = (state: AppState) => state.database.database;
const getSelectedArray = (state: AppState) => state.database.myArray;

export const getSelectedArraySelector = createSelector(getSelectedArray, (myArray) => myArray)
export const getDataBaseSelector = createSelector(getDataBase, (database) => database)
export const getSchemasSelector = createSelector(getSchemas, (schemas) => schemas);
export const getProjectsSelector = createSelector(getProjects, (projects) => projects);
export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);