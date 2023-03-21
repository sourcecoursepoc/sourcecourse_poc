import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react';
import { fetchDataList } from '@/services/dataService';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataList({});
        console.log('data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);
  return <Component {...pageProps} />
}
