import { ComposePipelineState, ComposePipelineActions } from "../actions/composeTypes";
import { FETCH_COMPOSE_PIPELINE, FETCH_COMPOSE_PIPELINE_SUCCESS, FETCH_COMPOSE_PIPELINE_FAILURE } from "../actions/composeActionTypes";

 
 const initialState: ComposePipelineState = {
   pending: false,
   composePipeline: [],
   error: null,
 };
 
 // eslint-disable-next-line import/no-anonymous-default-export
 export default (state = initialState, action: ComposePipelineActions) => {
   switch (action.type) {
     case FETCH_COMPOSE_PIPELINE:
       return {
         ...state,
         pending: true,
       };
     case FETCH_COMPOSE_PIPELINE_SUCCESS:
       return {
         ...state,
         pending: false,
         composePipeline: action.payload.composePipeline,
         error: null,
       };
     case FETCH_COMPOSE_PIPELINE_FAILURE:
       return {
         ...state,
         pending: false,
         composePipeline: [],
         error: action.payload.error,
       };
     default:
       return {
         ...state,
       };
   }
 };