import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react';
import { fetchProjectList, fetchPipelineList } from '@/services/dataService';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import store from "../redux/store"



export default function App({ Component, pageProps }: AppProps) {
  // const dispatch= useDispatch();
  // const projectData=useSelector((state: AppProps) => state.dataList);
  // console.log(projectData,"namaste")
  const fetchData = async () => {
    try {
      const data = await fetchProjectList({});
      console.log('Project Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjectList({});
        console.log("Project Data:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPipeline = async () => {
      try {
        const pipeline = await fetchPipelineList({});
        console.log("Pipeline Data:", pipeline);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPipeline();
  }, []);
  // const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
