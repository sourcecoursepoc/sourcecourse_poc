import { Button, Input, Row } from "antd";
import styles from "./searchBox.module.css";
const { Search } = Input;
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjectRequest } from "@/redux/actions/fetchProjectAction";
import { getProjectsSelector } from "@/redux/selector";
import { addArray } from "../../redux/actions/actions";
interface ChildProps {
  searchArray: (array: string[]) => void;
}
const SearchBar: React.FC<ChildProps> = ({ searchArray }) => {
  const [array, setArray] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const searchData = useSelector(getProjectsSelector);
  const searchProjectNames = searchData[0]?.projects;

  useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);

  const searchItems = (searchValue: string) => {
    console.log("searchValue", searchValue);

    if (searchValue !== "") {
      // console.log("sssssssssssssss");
      const filteredData = searchProjectNames?.filter((item) =>
        item?.projectName.toLowerCase().includes(searchValue.toLowerCase())
      );
      searchArray(filteredData);
    } else {
    }
  };

  return (
    <>
      <Search
        className={styles.searchStyle}
        placeholder="Search"
        style={{ height: "4rem" }}
        onSearch={(e) => searchItems(e)}
      />
    </>
  );
};
export default SearchBar;
