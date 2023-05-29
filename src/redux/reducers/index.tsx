import { combineReducers } from "redux";
import fetchPipelineReducer from "./fetchDataReducer";
import fetchRecordReducer from "./fetchRecordsReducer";
import {schemaReducer} from "./schemaReducer";

import projectReducer, { deleteProjectReducer } from "./projectReducer";
import { postTagsAndDescriptionReducer, postColumnTagsAndDescriptionReducer, schemaDataBaseReducers } from "./schemaDataBaseReducer";
import groupdataDatabaseReducer from "./groupdataDatabaseReducer";
import {
  composeReducer,
  composeReportsPipelineReducer,
  getComposeNameDescReducer,
  postComposeNameDescReducer,
  projectSchemaInfoReducer,
  searchSchemaByTagReducer,
} from "./composeReducer";
import fetchRecordsReducer from "./fetchRecordsReducer";

import groupReducer from "./groupReducer";
import projectByIdReducer from "./projectByIdReducer";

const rootReducer = combineReducers({
  pipeline: fetchPipelineReducer,
  schema: schemaReducer,
  database: schemaDataBaseReducers,
  groupdataDatabase: groupdataDatabaseReducer,
  project: projectReducer,
  projectById: projectByIdReducer,
  composePipeline: composeReducer,
  record: fetchRecordsReducer,
  group: groupReducer,
  composeReportsPipeline: composeReportsPipelineReducer,
  // composeNameDesc:getComposeNameDescReducer,
  // getComposeNameDesc:getComposeNameDescReducer,
  postComposeNameDesc:postComposeNameDescReducer,
  schemaComposeData: projectSchemaInfoReducer,
  postTagsAndDescription: postTagsAndDescriptionReducer,
<<<<<<< HEAD
  postColumnTagsAndDescription: postColumnTagsAndDescriptionReducer
=======
  postColumnTagsAndDescription: postColumnTagsAndDescriptionReducer,
  deleteProject: deleteProjectReducer,
  searchSchemaByTag:searchSchemaByTagReducer,

>>>>>>> 00424be4443597f4720e53aa0aa057844cecc343
});


export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

