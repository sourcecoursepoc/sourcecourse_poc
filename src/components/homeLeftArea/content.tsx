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
import Link from "next/link";
const { Content } = Layout;

interface ContentProps {
  heading: string;
  projectDescription: string;
  uid: number;
}

const ProjectContent: React.FC<ContentProps> = ({
  heading,
  projectDescription,
  uid
}) => {
  const dispatch = useDispatch();
  const projectListData = useSelector(getProjectsSelector);
  const listItems: any = [];
  const projectArray = projectListData[0];
  const transcriptList = Transcription(projectArray);

  useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);

  const dummyArray = [<InnerBox title="Initial Load" value={0} key={Math.random()}></InnerBox>,
  <InnerBox title="Sync" value={0} key={Math.random()}></InnerBox>,
  <InnerBox title="Users" value={0} key={Math.random()}></InnerBox>
]
  listItems.push(
    ...dummyArray
  );

  for (const item in transcriptList) {
    if((item === "Groups") || (item === "Tables")){
    listItems.push(
      <InnerBox title={item} value={transcriptList[item]}></InnerBox>
    );
    }
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
          <Link
            type="link"
            
            href={{
              pathname: "/compose",
              query: { id: uid }
            }}
            style={{ color: "#9179ca", marginLeft: "90%", fontWeight: "600" }}
          >
            More
          </Link>
        </div>
      </Content>
    </Layout>
  );
};
export default ProjectContent;
