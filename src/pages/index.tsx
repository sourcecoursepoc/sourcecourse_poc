import Link from "next/link";
import { Layout, Space, Col, Row } from "antd";
import Header from "../components/header/header";
import HomeLeftArea from "../components/homeLeftArea/homeLeftArea";
import HomeRightArea from "../components/homeRightArea/homeRightArea";
import styles from "./index.module.css";

import { useEffect } from "react";
import Schemas from "./schemas";

const Home: React.FunctionComponent = () => {
  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content>
          {/* <Schemas></Schemas>  */}
     <Row>
            <Col span={16}>
              <HomeLeftArea />
            </Col>
            <Col span={8}>
              <HomeRightArea />
            </Col>
          </Row>  
        </Content>
      </Layout>
    </Space>
  );
};

export default Home;
