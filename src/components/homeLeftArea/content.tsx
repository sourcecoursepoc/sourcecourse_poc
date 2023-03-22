import React from "react";
import { Layout, Row, Statistic, Col, Divider, Space, Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./project.module.css";

import DashBoard from "./dashBoard";

const { Content } = Layout;
const ProjectContent: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.textStyle}>SAMS Migration</p>
        </Row>
      
          <div className={styles.subHeading}>
            Sams Migration project to transfer data from walmart to dataLake
          </div>
        <div>
        <Space direction="horizontal">
          <Card>
            <Space direction="horizontal"></Space>
            <ShoppingCartOutlined></ShoppingCartOutlined>
            <Statistic title="gfdgsd" value={234}></Statistic>
          </Card>
        </Space>
        </div>
        <div></div>
      </Content>
      
    </Layout>
  );
};
export default ProjectContent;
