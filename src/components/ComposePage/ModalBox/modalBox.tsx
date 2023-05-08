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
import { addLastIndex, removeLastIndex } from "@/redux/actions/schemasaction";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { fetchProjectSchemaInfoAction, postProjectSchemaInfoRequest } from "@/redux/actions/composeAction";

interface MyModalProps {
  visible: boolean;
  onCancel: () => void;
  onExport: () => void;
}

const ModalBox: React.FC<MyModalProps> = ({ visible, onCancel, onExport }) => {
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const [schemaCompose, setSchemaCompose] = useState([]);
  
  const projectSchemaInfo = useSelector(projectSchemaInfoSelector);//tables in the database
  const selectedTableArray = useSelector(getSelectorTableNodes);//selected tables from the tree

  const combinedArray: any = [...projectSchemaInfo, ...selectedTableArray];
  
  console.log("projectSchemaInfo = ",projectSchemaInfo);
  console.log("selectedTableArray = ",selectedTableArray);

  //console.log("combinedArray combinedArray = ",combinedArray);
  /*  useEffect(() => {
   /// setSchemaCompose(combinedArray);
    dispatch(addLastIndex([...projectSchemaInfo, ...selectedTableArray]));
  }, [ projectSchemaInfo, selectedTableArray]); 
 */

  const tableUidArray = combinedArray.map((table:any) => parseInt(table.uid)); //taking uid's of selected tables

  //POST action
    const handleImport = () => {
    const requestBody = {
      projectUid: 3,
      sourceTableUids: tableUidArray,
    };
  
    dispatch(postProjectSchemaInfoRequest(requestBody.projectUid, requestBody.sourceTableUids));
    dispatch(fetchProjectSchemaInfoAction(3));
    
    onExport();
  };  
  /*   const handleImport = async () => {
    const requestBody = {
      projectUid: 3,
      sourceTableUids: tableUidArray,
    };
    console.log(requestBody);
    try {
      const response = await axios.post(
        "http://localhost:8080/sourcecourse/project-tables",
        requestBody
      );
      dispatch(addLastIndex(response.data));
      dispatch(fetchProjectSchemaInfoAction(3));
      console.log("response post schema api = ",response.data);
      onExport();
    } catch (error) {
      console.error(error);
    }
  }; */
  
  const handleImportButton = () => {
    handleImport();
    onCancel();
  };
 
  const handleRemove = async (uid: string) => {
    const requestBody = {
      projectUid: 3,
      sourceTableUids: [uid],
    };
    try {
      const response = await axios.delete(
        "http://localhost:8080/sourcecourse/project-tables",
        { data: requestBody }
      );
      dispatch(fetchProjectSchemaInfoAction(3));
      console.log("response after deleting",response.data);
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
            <SearchBar />
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
            <TreeView
              db={database}
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
