export const fetchDataActionType = {
    FETCH_DATA: 'FETCH_DATA',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
  };
  
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