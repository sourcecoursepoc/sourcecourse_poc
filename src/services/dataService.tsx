import axios from "axios"; 

  export const fetchPipelineList = async () => {
    const query = new URLSearchParams().toString();
    const dataURL = "http://localhost:8000/pipeline";
    const response = await axios.get(dataURL);
    console.log("pipeline",response)
    return { data: response.data };
  }; 
/*   export const fetchSchemas = async (params: FetchDataListParams) => {
   const query = new URLSearchParams(params).toString();
  const dataURL = "http://localhost:8000/schemas";
    const response = await axios.get(dataURL);
    return { data: response.data };
   };  */
  export const fetchProjectsList = async () => {
    const query = new URLSearchParams().toString();
    const dataURL = "http://localhost:8000/projects";
    const response = await axios.get(dataURL);
    console.log("response project",response)
    return { data: response.data };
  }; 