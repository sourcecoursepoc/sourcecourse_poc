import React from "react";
import styles from "./homeLeftArea.module.css";
import TopBox from "./topBox";
import { Divider, Row, Tabs } from "antd";
import SearchBar from "./searchBox";
import TabsInTopBox from "./tabs";
import ProjectContent from "./content";
import MyTabs from "./demoTab";
import ProjectContent1 from "./contentBox2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjectRequest } from "@/redux/actions/fetchProjectAction";
import { getProjectsSelector } from "@/redux/selector";
const HomeLeftArea: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const projectListData = useSelector(getProjectsSelector);

  const projectArray = projectListData[0]?.projects;
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
          <SearchBar></SearchBar>
          <MyTabs></MyTabs>
        </Row>
        {projectArray?.map((item) => (
          <Row className={styles.contentStyle} key={item.projectId}>
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
