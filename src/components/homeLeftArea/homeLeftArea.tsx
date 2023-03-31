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
  const [isTabClicked, setIsTabClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleArrayChange = (checked: boolean, array: string[]) => {
    console.log("..array...", JSON.stringify(array));
    setIsTabClicked(false);
    console.log("..checked..", checked);
    checked = true;
    console.log("..checked..", checked);
    parentArray.length = 0;
    setIsChecked(checked);
    setParentArray(array);
  };

  useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);

  const handleTabClick = () => {
    setIsChecked(false);
    setIsTabClicked(true);
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
          <MyTabs onTabClick={handleTabClick}></MyTabs>
        </Row>
        {!isChecked && !isTabClicked
          ? parentArray?.map((item) => (
              <Row className={styles.contentStyle} key={item.projectId}>
                <ProjectContent
                  heading={item.projectName}
                  projectDescription={item.projectDesc}
                ></ProjectContent>
              </Row>
            ))
          : []}
        {
          isChecked
            ? parentArray?.map((item) => (
                <Row className={styles.contentStyle} key={item.projectId}>
                  <ProjectContent
                    heading={item.projectName}
                    projectDescription={item.projectDesc}
                  ></ProjectContent>
                </Row>
              ))
            : projectArray?.map((item) => (
                <Row className={styles.contentStyle} key={item.projectId}>
                  <ProjectContent
                    heading={item.projectName}
                    projectDescription={item.projectDesc}
                  ></ProjectContent>
                </Row>
              )) /* ([]) */
        }

        {isTabClicked
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
