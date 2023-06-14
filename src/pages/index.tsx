import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Layout, Space, Col, Row, Spin } from "antd";
import Header from "../components/header/header";
import HomeLeftArea from "../components/homeLeftArea/homeLeftArea";
import HomeRightArea from "../components/homeRightArea/homeRightArea";
import styles from "./index.module.css";

const Home: React.FunctionComponent = () => {
  const { Content } = Layout;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content>
          {loading ? (
            <div className={styles.loader}>
              <div className={styles.spinnerContainer}>
                <Spin size="large" className={styles.spinner} />
              </div>
            </div>
          ) : (
            <>
              {/* <Schemas /> */}
              <Row>
                <Col span={16}>
                  <HomeLeftArea />
                </Col>
                <Col span={8}>
                  <HomeRightArea />
                </Col>
              </Row>
            </>
          )}
        </Content>
      </Layout>
    </Space>
  );
};

export default Home;
