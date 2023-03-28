import { Input, Row } from "antd";
import styles from "./searchBox.module.css";
const { Search } = Input;
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
  }
  return (
    <Input
      className={styles.searchStyle}
      placeholder="Search"
      suffix={
        <Tooltip>
          <SearchOutlined />
        </Tooltip>
        
      }
      onChange={(e) => searchItems(e.target.value)}
    />
  );
};
export default SearchBar;
