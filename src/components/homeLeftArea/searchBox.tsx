import { Button, Input, Row } from "antd";
import styles from "./searchBox.module.css";
const { Search } = Input;

import { Tooltip } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjectRequest } from "@/redux/actions/fetchProjectAction";
import { getProjectsSelector } from "@/redux/selector";
import { addArray } from "../../redux/actions/actions";
interface ChildProps {
  searchArray: (array: string[], isClicked: boolean) => void;
}
function SearchBar(props: ChildProps) {
  const { searchArray } = props;
  const dispatch = useDispatch();
  const searchData = useSelector(getProjectsSelector);
  // const searchArrayData = searchData[0]?.projects;
  const [searchInput, setSearchInput] = useState("");
 
useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);

  const handleSearchItems = (searchValue: string) => {
    console.log("searchValue", searchValue);
    // if (searchValue !== "") {
      const filteredData = searchData?.filter((item) =>
        item?.projectName.toLowerCase().includes(searchValue.toLowerCase())
      );
      searchArray(filteredData, true);
    // }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    handleSearchItems(value);
  };

  return (
    <>
      <Search
        className={styles.searchStyle}
        placeholder="Search"
        style={{ height: "4rem" }}
        onSearch={(e) => handleSearchItems(e)}
        onChange={handleInputChange}
        size="large"
      />
    </>
  );
}
export default SearchBar;
