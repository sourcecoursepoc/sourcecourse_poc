import React from "react";
import styles from "./homeLeftArea.module.css";
import TopBox from "./topBox";
import { Divider, Row, Tabs } from "antd";
import SearchBar from "./searchBox";

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
  const [isTabClicked, setIsTabClicked] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  const handleArrayChange = (array: string[], isClicked: boolean) => {
    console.log(isClicked,"parent component search")
    setIsSearch(isClicked);
    setIsTabClicked(false)
    setParentArray(array);
  };

  useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);

  const handleBooleanValueChange = (value: boolean) => {
    setIsTabClicked(value);
    setIsSearch(false)
    console.log(isTabClicked, "in home left are");
  };
  return (
    <div className={styles.contentStyle}>
      <div>
        <TopBox></TopBox>
        <Row>
          <div className={styles.borderBottom}></div>
        </Row>
        <Row className={styles.searchAndTabStyle}>
          <SearchBar searchArray={handleArrayChange}></SearchBar>
          <MyTabs onBooleanValueChange={handleBooleanValueChange}></MyTabs>
        </Row>
        
        {isSearch
          ? parentArray?.map((item) => (
              <Row className={styles.contentStyle} key={item.projectId}>
                <ProjectContent
                  heading={item.projectName}
                  projectDescription={item.projectDesc}
                ></ProjectContent>
              </Row>
            ))
          :[]}

        {isTabClicked &&!isSearch
          ? projectArray?.map((item) => (
              <Row className={styles.contentStyle} key={item.projectId}>
                <ProjectContent
                  heading={item.projectName}
                  projectDescription={item.projectDesc}
                ></ProjectContent>
              </Row>
            ))
          : []}
      </div>
    </div>
  );
};

export default HomeLeftArea;
