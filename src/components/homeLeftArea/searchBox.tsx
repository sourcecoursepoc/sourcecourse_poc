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
import ProjectContent from "./content";
const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const searchData = useSelector(getProjectsSelector);
  console.log(searchData)
  const [filteredResults, setFilteredResults] = useState([]);
  const searchProjectNames = searchData[0]?.projects;
  console.log(searchProjectNames, "searchProjectNames");
  useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);

  const searchItems = (searchValue) => {
   
    setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = searchProjectNames.filter((item) => {
              console.log(item,"item")
                return Object?.values(item?.projectNmae).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
            console.log(filteredData,"filteredData")
        }
        else{
            setFilteredResults(searchProjectNames)
        }
  };
  console.log(filteredResults,"ffff")
  return (
    <>
    <Search
      className={styles.searchStyle}
      placeholder="Search"
      style={{height:"4rem"}}
     /*  onChange={} */
      onSearch={(e) => searchItems(e)}
    />
   
    
{/*  {filteredResults?.map((item) => (
  
  <Row className={styles.contentStyle}  key={item.projectId}>
    
    <ProjectContent heading={item.projectName} projectDescription={item.projectDesc}></ProjectContent>
  </Row>))} */}
</>
   
      
  );
 
};
export default SearchBar;
