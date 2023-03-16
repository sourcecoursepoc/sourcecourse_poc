import { Layout, Space, Col, Row, Menu } from "antd";
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import Header from "../../components/header/header";
import styles from "./schemas.module.css";
import { Item } from "rc-menu";
import TreeView from "./TreeView";


const Schemas = () => {
  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Menu className={styles.menu}>
          <Row>
            <Col className={styles.rows}>
              <Item key="add" ><PlusOutlined /></Item>
            </Col>
            <Col className={styles.rows}>
              <Item key="icon">icon</Item>
            </Col>
            <Col className={styles.rows}>
              <Item key="icon">icon</Item>
            </Col>
            <Col>
              <Item key="close">
                <CloseOutlined />
              </Item>
            </Col>
          </Row>
        </Menu>
        <Content>
          <Row>
            <Col span={6} className={styles.treeview}><TreeView /></Col>
            <Col span={16}>Right</Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
};

export default Schemas;
