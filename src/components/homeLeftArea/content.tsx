import React from "react";
import { Transcription } from "./transcriptionFile";
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

interface ContentProps {
  heading: string;
  projectDescription: string;
}

const ProjectContent: React.FC<ContentProps> = ({
  heading,
  projectDescription,
}) => {
  const dispatch = useDispatch();
  const projectListData = useSelector(getProjectsSelector);
  const listItems: any = [];
  const projectArray = projectListData[0]?.projects[0]?.projectDetails;
  const transcriptList = Transcription(projectArray);

  useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);

  for (const item in transcriptList) {
    // console.log(`${item}: ${transcriptList[item]}`);
    listItems.push(
      <InnerBox title={item} value={transcriptList[item]}></InnerBox>
    );
  }
  
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.textStyle}>{heading}</p>
        </Row>
        <div className={styles.subHeading}>{projectDescription}</div>
        <div>
          <Space direction="horizontal">
            <Row> {listItems}</Row>
          </Space>
        </div>

        <div className={styles.bottomDivider}>
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
