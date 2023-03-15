import { Layout, Space, Col, Row } from "antd";
import Header from "../../components/header/header";
import styles from "./schemas.module.css";

const Schemas = () => {
  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content>
          <Row>
            <Col span={8}>Left</Col>
            <Col span={16}>Right</Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
};

export default Schemas;
