import axios from "axios"; 

  export const fetchPipelineList = async () => {
    const query = new URLSearchParams().toString();
    const dataURL = "http://localhost:8000/pipeline";
    const response = await axios.get(dataURL);
    return { data: response.data };
  }; 