import React from "react";
import {
  Layout,
  Row,
  Statistic,
  Col,
  Divider,
  Space,
  Card,
  Button,
} from "antd";

import styles from "./content.module.css";

import InnerBox from "./innerBox";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjectRequest } from "@/redux/actions/fetchProjectAction";
import { getProjectsSelector } from "@/redux/selector";
const { Content } = Layout;

interface MyComponentProps {
  heading: string; 
  projectDescription:string
  
//buttonLabels: string[];
}
const ProjectContent:  React.FC<MyComponentProps>= ({heading,projectDescription}) => {
  const image: string = "http://dlib.org/dlib/october97/ibm/schema.gif";
  const image1: string =
    "http://www.google.comwww.aperfectworld.org/clipart/shapes/triangle11a.png";
    const dispatch = useDispatch();
    const projectListData = useSelector(getProjectsSelector);
    const listItems = [];
    const projectArray=projectListData[0]?.projects[0]?.projectDetails;
  
    useEffect(() => {
      dispatch(fetchProjectRequest());
    }, []);
    for (const item in projectArray) {
     /*  console.log(`${item}: ${projectArray[item]}`); */
     listItems.push(<InnerBox title={item} value={projectArray[item]}></InnerBox>);
    }
  return (
 
    <Layout className={styles.layout}>
      
      <Content className={styles.content}>
       <Row className={styles.pinkbar}>
          <p className={styles.textStyle}>{heading}</p>
        </Row>
      <div className={styles.subHeading}>
          {projectDescription}
        </div>
        <div>
          <Space direction="horizontal">
          {listItems}
          </Space>
        </div>

        <div className={styles.bottomDivider}>
          {/*  <Divider className={styles.dividerStyle}> </Divider> */}
          <Button
            type="link"
            href="/compose"
            style={{ color: "#9179ca", marginLeft: "90%", fontWeight: "600" }}
          >
            More
          </Button>
        </div>
      </Content>
    </Layout>
  );
};
export default ProjectContent;
