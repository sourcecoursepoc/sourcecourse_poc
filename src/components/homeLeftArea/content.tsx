import React from "react";
import { Layout, Row, Statistic, Col, Divider, Space, Card, Button  } from "antd";
import { UserOutlined } from '@ant-design/icons';
import styles from "./content.module.css";
import Link from "next/link";
import DashBoard from "./dashBoard";
import InnerBox from "./innerBox";

const { Content } = Layout;
const ProjectContent: React.FC = () => {
  const image: string = "http://dlib.org/dlib/october97/ibm/schema.gif";
  const image1:string="http://www.google.comwww.aperfectworld.org/clipart/shapes/triangle11a.png"
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
          {/*  <InnerBox image={image}></InnerBox>
           <InnerBox image={image1} ></InnerBox> */}
           {/* <InnerBox prefix={<UserOutlined />} title="Total Users" value={100}></InnerBox>
            <InnerBox  prefix={<UserOutlined />} title="Total Users" value={100}></InnerBox>
            <InnerBox  prefix={<UserOutlined />} title="Total Users" value={100}></InnerBox>
            <InnerBox  prefix={<UserOutlined />} title="Total Users" value={100}></InnerBox>  */} 
        </Space>
        </div>
        
        <div className={styles.bottomDivider}>
           {/*  <Divider className={styles.dividerStyle}> </Divider> */}
            <Button type="link" href="/compose" style={{ color:"#9179ca",
            marginLeft:"94%",fontWeight:"600"}}>More</Button>
            
        </div>
      </Content>
      
    </Layout>
  );
};
export default ProjectContent;
