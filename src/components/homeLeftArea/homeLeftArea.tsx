import React from "react";
import styles from "./homeLeftArea.module.css";
import TopBox from "./topBox";
import { Divider, Row, Tabs } from "antd";
import SearchBar from "./searchBox";
import TabsInTopBox from "./tabs";
import ProjectContent from "./content";
import MyTabs from "./demoTab";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjectRequest } from "@/redux/actions/fetchProjectAction";
import { getProjectsSelector } from "@/redux/selector";
const HomeLeftArea: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const projectListData = useSelector(getProjectsSelector);
  const projectArray = projectListData[0]?.projects;
  const [parentArray, setParentArray] = useState<string[]>([]);
  const handleArrayChange = (array: string[]) => {
    console.log("..array...", JSON.stringify(array));
    parentArray.length = 0;
    setParentArray(array);
  };

  useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);

  return (
    <div className={styles.contentStyle}>
      <div>
        <TopBox></TopBox>
        <Row>
          <div className={styles.borderBottom}></div>
        </Row>
        <Row className={styles.searchAndTabStyle}>
          <SearchBar searchArray={handleArrayChange}></SearchBar>
          <MyTabs></MyTabs>
        </Row>
        {JSON.stringify(parentArray)}
        {parentArray?.map((item) => (
          <Row className={styles.contentStyle} key={item.projectId}>
            {/*  {console.log("sashgscsc")} */}
            <ProjectContent
              heading={item.projectName}
              projectDescription={item.projectDesc}
            ></ProjectContent>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default HomeLeftArea;
