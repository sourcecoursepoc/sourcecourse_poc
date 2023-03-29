import { Layout, Row } from "antd";
import React from "react";
import styles from "./homeRightArea.module.css";
import PipelineQueues from "./pipelineQueue";

const { Content } = Layout;
const HomeRightArea: React.FunctionComponent = () => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.textStyle}>Pipeline Queue</p>
        </Row>
       <PipelineQueues/>
      </Content>
    </Layout>
  );
};

export default HomeRightArea;
