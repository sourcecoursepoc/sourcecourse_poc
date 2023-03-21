export const fetchDataActionType = {
    FETCH_DATA: 'FETCH_DATA',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
    FETCH_PIPELINE:'FETCH_PIPELINE',
    FETCH_PIPELINE_SUCCESS: 'FETCH_PIPELINE_SUCCESS',
    FETCH_PIPELINE_FAILURE: 'FETCH_PIPELINE_FAILURE',

  };
  //action function to fetch project data

  export interface IFetchDataAction {
    type: typeof fetchDataActionType.FETCH_DATA;
    params:any;
  }
  
  export interface IFetchDataSuccessAction {
    type: typeof fetchDataActionType.FETCH_DATA_SUCCESS;
    payload: any; 
  }
  
  export interface IFetchDataFailureAction {
    type: typeof fetchDataActionType.FETCH_DATA_FAILURE;
    error:string;
  }
  

  export const fetchDataType = (params: any): IFetchDataAction => {
    return {
      type: fetchDataActionType.FETCH_DATA,
      params,
    };
  };
  
  export const fetchDataTypeSuccess = (data: any): IFetchDataSuccessAction => {
    return {
      type: fetchDataActionType.FETCH_DATA_SUCCESS,
      payload: data,
    };
  };
  
  export const fetchDataTypeFailure = (error: string): IFetchDataFailureAction => {
    return {
      type: fetchDataActionType.FETCH_DATA_FAILURE,
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