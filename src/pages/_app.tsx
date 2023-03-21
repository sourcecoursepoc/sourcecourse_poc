import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react';
import { fetchDataList,fetchPipelineList } from '@/services/dataService';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataList({});
        console.log('Project Data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchPipeline = async () => {
      try {
        const pipeline = await fetchPipelineList({});
        console.log('Pipeline Data:', pipeline);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchPipeline();
  }, []);
  return <Component {...pageProps} />
}
