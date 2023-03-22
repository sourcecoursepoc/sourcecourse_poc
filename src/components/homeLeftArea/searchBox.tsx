import { Input, Row } from "antd";
import styles from "./searchBox.module.css";
const { Search } = Input;
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const SearchBar: React.FC = () => {
  return (
    <Input
      className={styles.searchStyle}
      placeholder="Search"
      suffix={
        <Tooltip>
          <SearchOutlined />
        </Tooltip>
      }
    />
  );
};
export default SearchBar;
