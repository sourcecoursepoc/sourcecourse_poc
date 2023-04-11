import React, { useState } from "react";
import { Button, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import styles from "./ReportMainContent.module.css";

const ReportMainContent = () => {
  const [isScheduleActive, setIsScheduleActive] = useState(true);
  const { Content } = Layout;
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.text}>Report</p>
        </Row>

        <Row type="flex">
          <Button
            onClick={() => setIsScheduleActive(true)}
            style={{
              backgroundColor: isScheduleActive ? "white" : "transparent",
              color: isScheduleActive ? "purple" : "black",
              border: "none",
              borderBottom: isScheduleActive ? "2px solid purple" : "none",
              borderRadius: " 0",
              boxShadow: "none",
            }}
          >
            summary
          </Button>

          <Button
            style={{
              border: "none",
              borderBottom: "1px solid #ccc",
              borderRadius: " 0",
              boxShadow: "none",
            }}
          >
            Pipeline
          </Button>
        </Row>
      </Content>
    </Layout>
  );
};

export default ReportMainContent;
