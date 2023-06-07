import { Layout, Space, Col, Row } from "antd";
import Header from "../../components/header/header";
import styles from "./schemas.module.css";
import TreeView from "./treeview";
import SchemaMenu from "./schemamenu";
import SchemaContent from "./content";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDataBaseSelector, SelectedTreeNodeInfo } from "../../redux/selector";
import { useEffect, useState } from "react";
import { fetchDataBaseInfoAction } from "../../redux/actions/schemasaction";
import Toast from "./toast";
import { createPipelineInfoAction } from "../../redux/actions/composeAction";
interface componentProps {
  handleTagsAndDescriptionSave: () => void
}
const Schemas = ({ handleTagsAndDescriptionSave }: componentProps) => {
  const { Content } = Layout;
  console.log(handleTagsAndDescriptionSave, "boolean")
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [dbData, setDBData] = useState<any>([]);
  const selectedTreeData: any[] = useSelector(SelectedTreeNodeInfo);
  const selcectedDataLastElement = selectedTreeData.slice(-1)[0];
  const [tagDescriptionSave, setTagDescriptionSave] = useState(false);
  console.log(tagDescriptionSave, "tagsave")
  console.log(selectedTreeData, "selectedTreeDataindex");
  console.log("selcectedDataLastElementindex", selcectedDataLastElement ?.uid);
  console.log(tags, "tags");
  console.log(description, "tags");

  useEffect(() => {
    dispatch(fetchDataBaseInfoAction());
    dispatch(
      createPipelineInfoAction(6, {
        loadType: "string",
        exportType: "string",
        recurrence: "string",
        exportFileName: "string",
        intimationList: ["string"],
        time: "string",
        monthlyDays: [0],
        weeklyDays: ["string"],
      })
    );
  }, [dispatch]);

  // useEffect(() => {
  //   // if (tagDescriptionSave) {
  //     updateDatabase();
  //   // }
  // // },[])
  // }, [database?.database]);

  useEffect(() => {
    if (!database.pending && database.database !== undefined) {
      setDBData(database.database);
    }
  }, [database.database]);
console.log(dbData,"dbData")

  const updateDatabase = () => {
    if (!database.pending && database.database !== undefined) {
      const updatedDatabase = dbData.map((db) => {
        if (db?.uid === selcectedDataLastElement?.uid) {
          // console.o
          const updatedDbWithNewData = { ...db, description: description, tags: tags };
          return updatedDbWithNewData;
        }
        if (db.tables.length > 0) {
          const updatedTables = db.tables.map((table) => {
            if (table?.uid === selcectedDataLastElement?.uid) {
              const updatedTableWithNewData = { ...table, description: description, tags: tags };
              const updatedTableData = { ...table, ...updatedTableWithNewData };
              return updatedTableData;
            } else {
              const updatedColumns = table.columns.map((column) => {
                if (column?.uid === selcectedDataLastElement?.uid) {
                  const updatedColumnData = { ...column, description: description, tags: tags };
                  return updatedColumnData;
                }
                return column;
              });
              const updatedTable = { ...table, columns: updatedColumns };
              return updatedTable;
            }
          });
          const updatedDb = { ...db, tables: updatedTables };
          return updatedDb;
        }
        return db;
      });
      console.log(updatedDatabase,'updatedDatabase')
      // const updatedDatabaseState = { ...database, database: updatedDatabase };
      setDBData(updatedDatabase);
      // console.log(updatedDatabaseState ?.database, "checkingdb");
    }
  };

  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <SchemaMenu />
        <Content>
          <Row>
            <Col span={6} className={styles.treeview}>
              {database.pending && database.database !== undefined ? (
                <p>Loading.....</p>
              ) : database.error ? (
                <p>error...</p>
              ) : (
                    database.database.length > 0 && <TreeView db={dbData} />
                  )}
            </Col>
            <Col span={16}>
              <SchemaContent tags={tags} setTags={setTags} description={description} setDescription={setDescription} handleSaveModalOk={handleTagsAndDescriptionSave} updateDatabase={updateDatabase} />
            </Col>
          </Row>
          <Toast />
        </Content>
      </Layout>
    </Space>
  );
};

export default Schemas;
