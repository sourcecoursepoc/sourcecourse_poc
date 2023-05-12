import { Layout, Space, Col, Row } from "antd";
import Header from "../../components/header/header";
import styles from "./schemas.module.css";
import TreeView from "./treeview";
import SchemaMenu from "./schemamenu";
import SchemaContent from "./content";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDataBaseSelector } from "../../redux/selector";
import { useEffect, useState } from "react";
import { fetchDataBaseInfoAction } from "../../redux/actions/schemasaction";
import Toast from "./toast";
const Schemas = () => {
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);

  useEffect(() => {
    dispatch(fetchDataBaseInfoAction());
  }, []);

  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <SchemaMenu />
        <Content>
          <Row>
            <Col span={6} className={styles.treeview}>
              {database.length>0 && <TreeView db={database} />}
            </Col>
            <Col span={16}>
              <SchemaContent />
            </Col>
          </Row>
          <Toast/>
        </Content>
      </Layout>
    </Space>
  );
};

export default Schemas;
