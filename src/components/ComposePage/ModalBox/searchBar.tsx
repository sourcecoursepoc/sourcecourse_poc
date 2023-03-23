import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react'
import styles from './searcBar.module.css'


const SearchBar=  () => {
  
    
      return (
        <Input.Search
          placeholder="Search"
          allowClear
         
         // enterButton={<SearchOutlined />}
          size="large"
          
        />
      );
    }
  


export default SearchBar