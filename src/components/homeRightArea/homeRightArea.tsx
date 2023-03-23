import React from "react";
import styles from "./homeRightArea.module.css";
import { Layout, Row, Col, Progress } from "antd";
import {
  ClusterOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const HomeRightArea: React.FunctionComponent = () => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.textStyle}>Pipeline Queue</p>
        </Row>
        <Row
          gutter={[16, 16]}
          className={styles.rowTextStyle}
          align="middle"
          style={{ marginBottom: "20px", marginTop: "10px" }}
        >
          <Col span={4}>
            <ClusterOutlined style={{ fontSize: "26px" }} />
          </Col>
          <Col span={12} style={{ fontSize: "11px" }}>
            Transom Initial Load <br /> 02/21/2023 1:00 Am{" "}
          </Col>
          <Col span={4}>
            <CheckCircleOutlined
              style={{ color: "#52c41a", fontSize: "26px" }}
            />
          </Col>
          <Col span={4} style={{ borderLeft: "1px solid #ccc" }}>
            <Progress type="circle" percent={80} strokeWidth={8} size={26} />
          </Col>
        </Row>

        <Row gutter={[16, 16]} className={styles.rowTextStyle} align="middle">
          <Col span={4}>
            <ClusterOutlined style={{ fontSize: "26px" }} />
          </Col>
          <Col span={12} style={{ fontSize: "11px" }}>
            Pricing Daily Sync <br /> 02/21/2023 1:00 Am{" "}
          </Col>
          <Col span={4}>
            <CloseCircleOutlined style={{ color: "red", fontSize: "26px" }} />
          </Col>
          <Col span={4} style={{ borderLeft: "1px solid #ccc" }}>
            <Progress type="circle" percent={0} strokeWidth={8} size={26} />
          </Col>
        </Row>
        <Row className={styles.lowerDivider}></Row>
        <p className={styles.lowerTextStyle}>View All</p>
      </Content>
    </Layout>
  );
};

export default HomeRightArea;
