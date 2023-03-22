import React from "react";
import { Layout, Row, Statistic, Col, Divider, Space, Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./content.module.css";

import DashBoard from "./dashBoard";
import InnerBox from "./innerBox";

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
            <InnerBox></InnerBox>
            <InnerBox></InnerBox>
            <InnerBox></InnerBox>
            <InnerBox></InnerBox>
            <InnerBox></InnerBox>
            
          {/* <Card>
            <Space direction="horizontal"></Space>
            <ShoppingCartOutlined></ShoppingCartOutlined>
            <Statistic title="gfdgsd" value={234}></Statistic>
          </Card> */}
        </Space>
        </div>
        <div>
            <Divider className={styles.dividerStyle}> </Divider>
            <Button type="link"style={{ color:"#9179ca",
        marginLeft:"94%",fontWeight:"600"}}>More</Button>
            
        </div>
      </Content>
      
    </Layout>
  );
};
export default ProjectContent;
