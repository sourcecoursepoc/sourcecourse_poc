import { Layout, Space, Col, Row } from "antd";
import Header from "../../components/header/header";
import styles from "./compose.module.css";
import { Divider } from "antd";

const Compose = () => {
  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <Row>
            <Col span={24}>Top</Col>
          </Row>
          <Divider plain></Divider>
          <Row>
            <Col span={24}>Bottom</Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
};

export default Compose;
