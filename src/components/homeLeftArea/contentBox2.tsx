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
import { UserOutlined } from "@ant-design/icons";
import styles from "./content.module.css";
import Link from "next/link";
import DashBoard from "./dashBoard";
import InnerBox from "./innerBox";
import Sync from "./sync";
import Users from "./users";
import Group from "./group";
import Schema from "./schema";

const { Content } = Layout;
const ProjectContent1: React.FC = () => {
  const image: string = "http://dlib.org/dlib/october97/ibm/schema.gif";
  const image1: string =
    "http://www.google.comwww.aperfectworld.org/clipart/shapes/triangle11a.png";
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.textStyle}>Pricing Migration</p>
        </Row>

        <div className={styles.subHeading}>
          Pricing Migration project to transfer data to target system
        </div>
        <div>
          <Space direction="horizontal">
            <Schema></Schema>
            <Group></Group>
            <Users></Users>

            <InnerBox></InnerBox>
            <Sync></Sync>
          </Space>
        </div>

        <div className={styles.bottomDivider}>
          {/*  <Divider className={styles.dividerStyle}> </Divider> */}
          <Button
            type="link"
            href="/compose"
            style={{ color: "#9179ca", marginLeft: "94%", fontWeight: "600" }}
          >
            More
          </Button>
        </div>
      </Content>
    </Layout>
  );
};
export default ProjectContent1;
