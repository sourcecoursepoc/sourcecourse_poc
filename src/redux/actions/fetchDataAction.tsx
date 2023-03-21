export const fetchDataActionType = {
    FETCH_PROJECT: 'FETCH_PROJECT',
    FETCH_PROJECT_SUCCESS: 'FETCH_PROJECT_SUCCESS',
    FETCH_PROJECT_FAILURE: 'FETCH_PROJECT_FAILURE',
    FETCH_PIPELINE:'FETCH_PIPELINE',
    FETCH_PIPELINE_SUCCESS: 'FETCH_PIPELINE_SUCCESS',
    FETCH_PIPELINE_FAILURE: 'FETCH_PIPELINE_FAILURE',

  };
  //action function to fetch project data

  export interface IFetchProjectAction {
    type: typeof fetchDataActionType.FETCH_PROJECT;
    params:any;
  }
  
  export interface IFetchProjectSuccessAction {
    type: typeof fetchDataActionType.FETCH_PROJECT_SUCCESS;
    payload: any; 
  }
  
  export interface IFetchProjectFailureAction {
    type: typeof fetchDataActionType.FETCH_PROJECT_FAILURE;
    error:string;
  }
  

  export const fetchProjectType = (params: any): IFetchProjectAction => {
    return {
      type: fetchDataActionType.FETCH_PROJECT,
      params,
    };
  };
  
  export const fetchProjectTypeSuccess = (data: any): IFetchProjectSuccessAction => {
    return {
      type: fetchDataActionType.FETCH_PROJECT_SUCCESS,
      payload: data,
    };
  };
  
  export const fetchProjectTypeFailure = (error: string): IFetchProjectFailureAction => {
    return {
      type: fetchDataActionType.FETCH_PROJECT_FAILURE,
      error,
    };
  };
  
 //action function to fetch pipeline data

 export interface IFetchPipelineAction {
    type: typeof fetchDataActionType.FETCH_PIPELINE;
    params:any;
  }
  
  export interface IFetchPipelineSuccessAction {
    type: typeof fetchDataActionType.FETCH_PIPELINE_SUCCESS;
    payload: any; 
  }
  
  export interface IFetchPipelineFailureAction {
    type: typeof fetchDataActionType.FETCH_PIPELINE_FAILURE;
    error:string;
  }
  

  export const fetchPipelineType = (params: any): IFetchPipelineAction => {
    return {
      type: fetchDataActionType.FETCH_PIPELINE,
      params,
    };
  };
  
  export const fetchPipelineTypeSuccess = (data: any): IFetchPipelineSuccessAction => {
    return {
      type: fetchDataActionType.FETCH_PIPELINE_SUCCESS,
      payload: data,
    };
  };
  
  export const fetchPipelineTypeFailure = (error: string): IFetchPipelineFailureAction => {
    return {
      type: fetchDataActionType.FETCH_PIPELINE_FAILURE,
      error,
    };
  };