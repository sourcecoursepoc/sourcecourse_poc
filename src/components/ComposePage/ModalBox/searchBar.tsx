import { SearchOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import React, { ChangeEvent } from 'react';
import styles from './modalBox.module.css';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    onSearch(text); 
  };

  return (
    <Input
      className={styles.searchStyle}
      placeholder="Search"
      size="large"
      suffix={<Tooltip><SearchOutlined /></Tooltip>}
      onChange={handleInputChange} // Add the onChange event handler
    />
  );
};

export default SearchBar;
