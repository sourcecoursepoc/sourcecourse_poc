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

const db = [{ "DBName": "DB Name 1", "Tables": [{ "tableName": "Table1", "columns": [{ "name": "table1col1", "type": "Type", "isPrimary": true, "unique": true, "nullable": false, "consumed": "<true/false (false by default) or Count - Default 0. Increment by whenever it is consumed>", "consumers": ["TargetTable1.ColumnName1", "TargetTable2.ColumnName2"], "dataQuality": { "score": "<Score after checking column value quality>", "description": "<Brief note on the score>" } }, { "name": "table1col2", "type": "Type", "isPrimary": false, "unique": false, "nullable": true, "consumed": "true/false (false by default) or Count - Default 0. Increment by whenever it is consumed", "consumers": ["TargetTable3.ColumnName3"], "dataQuality": { "score": "<Score after checking column value quality>", "description": "<Brief note on the score>" } }], "rowCount": 100000, "size": "100MB", "mindate": "Get Minimum date from date column if it's date field", "maxdate": "Get Maximum date from date column if it's date field", "yoycount": "Row count per Year", "momcount": "Row count per Month&Year" }] }, {
  "DBName": "DB Name 2", "Tables": [{
    "tableName": "Table2", "columns": [{ "name": "Table2Col1", "type": "Type", "isPrimary": true, "unique": true, "nullable": false, "consumed": "<true/false (false by default) or Count - Default 0. Increment by whenever it is consumed>", "consumers": ["TargetTable1.ColumnName1", "TargetTable2.ColumnName2"], "dataQuality": { "score": "<Score after checking column value quality>", "description": "<Brief note on the score>" } }, { "name": "table2col2", "type": "Type", "isPrimary": false, "unique": false, "nullable": true, "consumed": "true/false (false by default) or Count - Default 0. Increment by whenever it is consumed", "consumers": ["TargetTable3.ColumnName3"], "dataQuality": { "score": "<Score after checking column value quality>", "description": "<Brief note on the score>" } }], "rowCount": 100000, "size": "100MB", "mindate": "Get Minimum date from date column if it's date field",

    "maxdate": "Get Maximum date from date column if it's date field", "yoycount": "Row count per Year", "momcount": "Row count per Month/Year"
  }]
}]
const Schemas = () => {
// const[db,setDb]=useState<any>();
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
console.log(database,"database")
   useEffect(() => {
     dispatch(fetchDataBaseRequest());
      // setDb(database);
      // console.log(db,"db")

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
              { db  && <TreeView db={database} />}
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
