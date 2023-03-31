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
import { fetchDataBaseRequest } from "../../redux/actions/schemasaction";

const Schemas = () => {
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);

  useEffect(() => {
    dispatch(fetchDataBaseRequest());
  }, []);
  // console.log(database[0].metadata, "database")
  // const metaData = database[0].metadata;

  // console.log(metaData, "meta")
  const metadataArray = database.flatMap((obj) =>
    obj.Tables.map((table) => table.metadata)
  );
  console.log(metadataArray, "meta");

  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <SchemaMenu />
        <Content>
          <Row>
            <Col span={6} className={styles.treeview}>
              {database && <TreeView db={database}  />}
            </Col>
            <Col span={16}>
              <SchemaContent />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
};

export default Schemas;
