import { SearchOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import React from 'react'
import styles from './modalBox.module.css'


const SearchBar=  () => {
  
      return (
        <Input className={styles.searchStyle} placeholder="Search"    size="large"
        suffix={ <Tooltip> <SearchOutlined /></Tooltip>}
 />    
      );
    }
export default SearchBar