import { Button, Col, Image, Modal, Row } from "antd";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SearchBar from "./searchBar";
import styles from "./modalBox.module.css";
import TreeView from "../../../pages/schemas/treeview";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getDataBaseSelector,
  getlastIndexesArraySelector,
  projectSchemaInfoSelector,
  getSelectedArraySelector,
  getSelectorTableNodes,
} from "@/redux/selector";
import { clearLastIndex } from "@/redux/actions/schemasaction";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { postProjectSchemaInfoRequest } from "@/redux/actions/composeAction";
import { searchSchemaByTagsInfoAction } from "../../../redux/actions/composeAction";
import { searchSchemaData } from "../../../redux/selector";

interface MyModalProps {
  visible: boolean;
  onCancel: () => void;
  onExport: () => void;
  projectUid: number;
}

const ModalBox: React.FC<MyModalProps> = ({ visible, onCancel, onExport, projectUid }) => {
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);

  const projectSchemaInfo = useSelector(projectSchemaInfoSelector);//tables in the database
  const selectedTableArray = useSelector(getSelectorTableNodes);//selected tables from the tree
  const [searchText, setSearchText] = useState(""); // State to store the search text
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    if (projectSchemaInfo?.length > 0) {
      dispatch(clearLastIndex());
    }
  }, [dispatch, projectSchemaInfo]);

  useEffect(() => {
    setTreeData(database)
  }, [database])
  const searchData = useSelector(searchSchemaData);

  const combinedArray: any = [...projectSchemaInfo, ...selectedTableArray];

  const tableUidArray = combinedArray.map((table:any) => parseInt(table.uid)); //taking uid's of selected tables

  //POST action
  const handleImport = () => {
    const requestBody = {
      projectUid: projectUid,
      sourceTableUids: tableUidArray,
    };
    dispatch(postProjectSchemaInfoRequest(requestBody.projectUid, requestBody.sourceTableUids));
    onExport();
  };

  // Callback function to update the search text state
  const handleSearch = (text:string) => {
    setSearchText(text);
    if (text) {
      dispatch(searchSchemaByTagsInfoAction(text));
    }
  };

  useEffect(() => {
    if (searchText) {
      if (searchData && searchData.length > 0) {
        const treeArray = [{ dbName: '', description: '', tables: searchData }]
        setTreeData(treeArray);
      }
    } else {
      setTreeData(database);
    }
  }, [searchText, searchData, database]);

  const handleImportButton = () => {
    handleImport();
    onCancel();
  };

  const handleRemove = async (uid: string) => {
    const requestBody = {
      projectUid: projectUid,
      sourceTableUids: [uid],
    };
    try {
      const response = await axios.delete(
        "http://localhost:8080/sourcecourse/project-tables",
        { data: requestBody }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
        closable={false}
        width={800}
        bodyStyle={{
          borderRadius: "5px",
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        <Row>
          <Col span={12} className={styles.modelBoxBorder}>
            <SearchBar onSearch={handleSearch} />
          </Col>
          <Col span={12} className={styles.modelBorder}>
            <Button
              type="primary"
              style={{
                background: "#7E60BC",
                width: "5rem",
                borderRadius: "1px",
                height: "2rem",
              }}
              onClick={handleImportButton}
            >
              Import
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={12} className={styles.treeview}>
            {treeData.length > 0 ? (
              <TreeView
                db={treeData}
                iconImage={
                  <PlusOutlined
                    style={{
                      width: "3rem",
                      fontSize: "0.8rem",
                      color: "#7E60BC",
                      strokeWidth: "2",
                    }}
                  />
                }
              />
            ) : (
                <p>No data </p>
              )}
          </Col>
          <Col
            span={12}
            style={{
              borderTop: "1px solid #ccc",
              borderRight: "1px solid #ccc",
            }}
          >
            {combinedArray &&
              combinedArray?.map((node: any) => (
                <>
                  {" "}
                  <Row align={"middle"}>
                    <Col
                      span={18}
                      key={node.tableName}
                      className={styles.rowTextStyle}
                    >
                      {node && node?.tableName && (
                        <p>
                          <span>
                            {" "}
                            <Image
                              atl=""
                              src="/Schemas.png"
                              preview={false}
                              style={{
                                width: "1rem",
                                height: "1rem",
                                marginRight: "0.5rem",
                                marginBottom: "0.3rem",
                              }}
                            ></Image>{" "}
                          </span>
                          {node?.tableName}
                        </p>
                      )}
                    </Col>
                    <Col span={1}>
                      <Button
                        style={{
                          border: "none",
                          color: "red",
                          background: "white",
                          fontWeight: "500",
                          width: "1rem",
                          fontSize: "0.7rem",
                        }}
                        onClick={() => handleRemove(node.uid)}
                      >
                        Remove
                      </Button>
                    </Col>{" "}
                  </Row>
                  <Row className={styles.lowerDivider}></Row>
                </>
              ))}
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModalBox;