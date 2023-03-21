import axios from "axios";

interface FetchDataListParams {
    [key: string]: string;
  }
  export const fetchProjectList = async (params: FetchDataListParams) => {
    const query = new URLSearchParams(params).toString();
    const dataURL = "http://localhost:8000/projects";
    const response = await axios.get(dataURL);
    return { data: response.data };
  }; 

  export const fetchPipelineList = async (params: FetchDataListParams) => {
    const query = new URLSearchParams(params).toString();
    const dataURL = "http://localhost:8000/pipeline";
    const response = await axios.get(dataURL);
    return { data: response.data };
  }; 