import Link from "next/link";
import { Layout, Space, Col, Row } from "antd";
import Header from "../components/header/header";
import HomeLeftArea from "../components/homeLeftArea/homeLeftArea";
import HomeRightArea from "../components/homeRightArea/homeRightArea";
import styles from "./index.module.css";

const Home = () => {
  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.spaceStyle} size={[0, 48]}>
      <Layout>
        <Header />
        <Content>
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
