import { createSelector } from "reselect";

import { AppState } from "./reducers/index";

const getPending = (state: AppState) => state.schema.pending;
const getSchemas = (state: AppState) => state.schema.schemas;
const getProjects = (state: AppState) => state.project.projects;
const getError = (state: AppState) => state.schema.error;
const getDataBase = (state: AppState) => state.database.database;
const getGroupdataDataBase = (state: AppState) => state.groupdataDatabase.groupdataDatabase;
const getSelectedArray = (state: AppState) => state.database.myArray;
const getSelectedGroupdataArray = (state: AppState) => state.groupdataDatabase.myGroupdataArray;
const getComposePipeline = (state: AppState) => state.composePipeline.composePipeline;
const getGroups = (state: AppState) => state.group.groups;
const getComposeReportsPipeline = (state: AppState) => state.composeReportsPipeline.composeReportsPipeline;
export const getComposeReportsPipelineSelector = createSelector(getComposeReportsPipeline, (composeReportsPipeline) => composeReportsPipeline)


export const getSelectedArraySelector = createSelector(getSelectedArray, (myArray) => myArray)
export const getSelectedGroupdataArraySelector = createSelector(getSelectedGroupdataArray, (myGroupdataArray) => myGroupdataArray)
const getLastIndexesArray = (state: AppState) => state.database.lastIndexes;
export const getSelectorTableNodes = createSelector(getLastIndexesArray, (lastIndexes) => lastIndexes)
export const getComposePipelineSelector = createSelector(getComposePipeline, (composePipeline) => composePipeline);
export const getlastIndexesArraySelector = createSelector(getSelectedArray, (myArray) => myArray)
export const getDataBaseSelector = createSelector(getDataBase, (database) => database)
export const getGroupdataDataBaseSelector = createSelector(getGroupdataDataBase, (groupdataDatabase) => groupdataDatabase)
export const getSchemasSelector = createSelector(getSchemas, (schemas) => schemas);
export const getProjectsSelector = createSelector(getProjects, (projects) => projects);
export const getGroupSelector = createSelector(getGroups, (groups) => groups);
export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);