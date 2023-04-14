import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react';
import { fetchProjectList, fetchPipelineList ,fetchRecordList} from '@/services/dataService';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import store from "../redux/store"



export default function App({ Component, pageProps }: AppProps) {

  const fetchData = async () => {
    try {
      const data = await fetchProjectList({});
    } catch (error) {
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjectList({});
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPipeline = async () => {
      try {
        const pipeline = await fetchPipelineList({});
      } catch (error) {
      }
    };
    fetchPipeline();
  }, []);
  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const records = await fetchRecordList({});
      } catch (error) {
      }
    };
    fetchRecord();
  }, []);
  // const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
