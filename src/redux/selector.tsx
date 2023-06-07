import { createSelector } from "reselect";

import { AppState } from "./reducers/index";

const getPending = (state: AppState) => state.schema.pending;
const getSchemas = (state: AppState) => state.schema.schemas;
const fetchProjectSchemaInfo = (state: AppState) => state?.schemaComposeData.schemas;
const fetchProjectSchemaComposeInfo = (state: AppState) => state?.schemaComposeData;
const getProjects = (state: AppState) => state.project.projects;
const getProjectById = (state: AppState) => state.projectById;
const getError = (state: AppState) => state.schema.error;
const getDataBase = (state: AppState) => state.database;
const getGroupdataDataBase = (state: AppState) => state.groupdataDatabase.groupdataDatabase;
const getSelectedArray = (state: AppState) => state.database.myArray;
const getSelectedGroupdataArray = (state: AppState) => state.groupdataDatabase.myGroupdataArray;
const getComposePipeline = (state: AppState) => state.composePipeline.composePipeline;
const getGroups = (state: AppState) => state.group.groups;
const getComposeReportsPipeline = (state: AppState) => state.composeReportsPipeline.composeReportsPipeline;
const getSearchSchemaData = (state: AppState) => state.searchSchemaByTag.searchData;
const getUpdatedTagsArray = (state: AppState) => state.postTagsAndDescription;
const getUpdatedColumnTags = (state: AppState) => state.postColumnTagsAndDescription;

export const updatedColumnTagArray = createSelector(getUpdatedColumnTags, (postColumnTagsAndDescription => postColumnTagsAndDescription));
export const updatedTagArray = createSelector(getUpdatedTagsArray, (postTagsAndDescription) => postTagsAndDescription);
export const searchSchemaData = createSelector(getSearchSchemaData,(searchData) => searchData);

const postComposePageNameDesc = (state: AppState) => state.postComposeNameDesc.postData;
const postComposePageNameDescInitial = (state: AppState) => state.postComposeNameDesc
export const postComposeNameDescSelectorInitial = createSelector(postComposePageNameDescInitial, (postComposeNameDesc) => postComposeNameDesc)
export const postComposeNameDescSelector = createSelector(postComposePageNameDesc, (postData) => postData)
export const getComposeReportsPipelineSelector = createSelector(getComposeReportsPipeline, (composeReportsPipeline) => composeReportsPipeline)
export const SelectedTreeNodeInfo = createSelector(getSelectedArray, (myArray) => myArray)
export const getSelectedGroupdataArraySelector = createSelector(getSelectedGroupdataArray, (myGroupdataArray) => myGroupdataArray)
const getLastIndexesArray = (state: AppState) => state.database.lastIndexes;
export const getSelectorTableNodes = createSelector(getLastIndexesArray, (lastIndexes) => lastIndexes)
export const getComposePipelineSelector = createSelector(getComposePipeline, (composePipeline) => composePipeline);
export const getlastIndexesArraySelector = createSelector(getSelectedArray, (myArray) => myArray)
export const getDataBaseSelector = createSelector(getDataBase, (database) => database)
export const getGroupdataDataBaseSelector = createSelector(getGroupdataDataBase, (groupdataDatabase) => groupdataDatabase)
export const getSchemasSelector = createSelector(getSchemas, (schemas) => schemas);
export const projectSchemaInfoSelector = createSelector(fetchProjectSchemaInfo, (schemas) => schemas);
export const projectSchemaComposeInfoSelector = createSelector(fetchProjectSchemaComposeInfo, (schemaComposeData) => schemaComposeData);
export const getProjectsSelector = createSelector(getProjects, (projects) => projects);
export const getProjectByIdSelector = createSelector(getProjectById, (projectById) => projectById);
export const getGroupSelector = createSelector(getGroups, (groups) => groups);
export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);
5
export const getErrorSelector = createSelector(getError, (error) => error);