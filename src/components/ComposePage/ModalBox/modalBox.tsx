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
  getSelectorTableNodes,
  postComposeNameDescSelector,
  projectSchemaComposeInfoSelector,
} from "@/redux/selector";
import { clearLastIndex } from "@/redux/actions/schemasaction";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import {
  deleteProjectSchemaInfoRequest,
  fetchProjectSchemaInfoAction,
  postProjectSchemaInfoRequest,
} from "@/redux/actions/composeAction";
import { searchSchemaByTagsInfoAction } from "../../../redux/actions/composeAction";
import { searchSchemaData } from "../../../redux/selector";
import { AppState } from "@/redux/reducers";
import { showSuccessToast } from "@/pages/schemas/toast";
import { IMPORT, IMPORTERROR, IMPORTSUCCESS, NO_DATA, REMOVE } from "@/constants/constants";

interface MyModalProps {
  visible: boolean;
  onCancel: () => void;
  onExport: () => void;
  projectUid: number;
}

const ModalBox: React.FC<MyModalProps> = ({ visible, onCancel, onExport, projectUid }) => {
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const projectSchemaInfo = useSelector(projectSchemaInfoSelector); //schema data
  const projectSchemaComposeInfo = useSelector(projectSchemaComposeInfoSelector);//initial data
  const selectedTableArray = useSelector(getSelectorTableNodes); 
  const [searchText, setSearchText] = useState("");
  const [treeData, setTreeData] = useState<any>([]);
  const postComposeNameDescData = useSelector(postComposeNameDescSelector);
  const uidFromComposePage = postComposeNameDescData?.uid;
  useEffect(() => {
    if (projectSchemaInfo?.length > 0) {
      dispatch(clearLastIndex());
    }
  }, [projectSchemaInfo,dispatch]);

  const [combinedArray, setCombinedArray] = useState<any[]>([]);

  useEffect(() => {
    const uniqueValues = [...projectSchemaInfo, ...selectedTableArray].filter(
      (item, index, self) => index === self?.findIndex((t) => t?.uid === item?.uid)
    );

    setCombinedArray(uniqueValues);
  }, [projectSchemaInfo, selectedTableArray]);

  const tableUidArray = combinedArray?.map((table: any) => parseInt(table?.uid)); //taking uid's of selected tables
  useEffect(() => {
    setTreeData(database)
  }, [database])

  const searchData = useSelector(searchSchemaData);
  //POST action
  const handleImport = () => {
    const requestBody = {
      projectUid: uidFromComposePage?uidFromComposePage:projectUid,
      sourceTableUids: tableUidArray,
    };
    dispatch(
      postProjectSchemaInfoRequest(
        requestBody?.projectUid,
        requestBody?.sourceTableUids
      )
    );
    if(!projectSchemaComposeInfo?.isFetching && projectSchemaComposeInfo?.error==null && projectSchemaComposeInfo?.schemas!=null )
  {
    showSuccessToast(IMPORTSUCCESS);
  }
  else if(!projectSchemaComposeInfo?.isFetching && projectSchemaComposeInfo?.error!=null && projectSchemaComposeInfo?.schemas==null)
  {
    showSuccessToast(IMPORTERROR);
  } 
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

  const handleRemove = (uid: string) => {
    const requestBody = {
      projectUid: projectUid,
      sourceTableUids: [uid],
    };
    setCombinedArray((prevArray) =>
      prevArray?.filter((item) => item?.uid !== uid)
    );
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
             {IMPORT}
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
                <p>{NO_DATA} </p>
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
                            alt=""
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
                       {REMOVE}
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
