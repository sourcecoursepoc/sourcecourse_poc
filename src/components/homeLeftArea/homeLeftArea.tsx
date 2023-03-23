import React from "react";
import styles from "./homeLeftArea.module.css";
import TopBox from "./topBox";
import { Divider, Row, Tabs } from "antd";
import SearchBar from "./searchBox";
import TabsInTopBox from "./tabs";
import ProjectContent from "./content";
import MyTabs from "./demoTab";

const HomeLeftArea: React.FunctionComponent  = () => {
  return (
    <div className={styles.contentStyle}>
      <div >
       
        <TopBox></TopBox>
        <Row ><div className={styles.borderBottom}>
          </div></Row>
        <Row className={styles.searchbar}>  <SearchBar ></SearchBar>
       <MyTabs ></MyTabs></Row>
      <Row>
        <ProjectContent></ProjectContent>
      </Row>
      
      </div>
    </div>
  );
};

export default HomeLeftArea;
