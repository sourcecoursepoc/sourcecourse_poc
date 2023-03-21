import { fetchDataActionType } from "../actions/fetchDataAction";
const dataTemplate={
    isFetching:false,
    payload:[],
    error:false,
    errormessage:'',  
};
const initialData={
    dataList:dataTemplate
};
export const fetchDataReducer=(state=initialData,action: { type: string })=>{
    switch(action.type){
        case fetchDataActionType.FETCH_DATA:
            return{
                ...state,
                dataList:{
                    ...state.dataList,
                    isFetching:true,
                },
                tableDataType:'',
            };
    }
}

export const fetchPipelineReducer=(state=initialData,action: { type: string })=>{
    switch(action.type){
        case fetchDataActionType.FETCH_PIPELINE:
            return{
                ...state,
                dataList:{
                    ...state.dataList,
                    isFetching:true,
                },
                tableDataType:'',
            };
    }
}