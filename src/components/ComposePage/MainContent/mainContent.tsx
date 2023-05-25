import { fetchDataBaseRequest } from "@/redux/actions/schemasaction";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Image, Layout, Row } from "antd";
import React, { useEffect, useState } from "react";
import ModalBox from "../ModalBox/modalBox";
import styles from "./mainContent.module.css";
import DisplaySchemaBox from "./displaySchema";
import { useSelector } from "react-redux";
import { projectSchemaInfoSelector } from "@/redux/selector";
import { useDispatch } from "react-redux";
import { DeleteFilled } from "@ant-design/icons";
import axios from "axios";
import {
  deleteProjectSchemaInfoRequest,
  fetchProjectSchemaInfoAction,
} from "@/redux/actions/composeAction";
import { AppState } from "@/redux/reducers";
import { fetchDataBaseInfoAction } from "../../../redux/actions/schemasaction";
import Toast, { showSuccessToast } from "../../../pages/schemas/toast";

const MainContent = () => {
  const { Content } = Layout;
  const [visible, setVisible] = useState(false);
  const [importClicked, setImportClicked] = useState(false);
  const dispatch = useDispatch();
  const fetchProjectSchemaInfo = useSelector(projectSchemaInfoSelector);
  useEffect(() => {
    dispatch(fetchDataBaseInfoAction());
  },[dispatch]);
  useEffect(() => {
    dispatch(fetchProjectSchemaInfoAction(1));
  }, [dispatch]);
  const handleImport = () => {
    setImportClicked(true);
  };
  //DELETE action
  const handleRemove = (uid: string) => {
    const requestBody = {
      projectUid: 1,
      sourceTableUids: [uid],
    };
    dispatch(
      deleteProjectSchemaInfoRequest(
        requestBody?.projectUid,
        requestBody?.sourceTableUids
      )
    );
  };
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <Row className={styles.pinkbar}>
            <p className={styles.text}>Schema</p>
          </Row>
          <ModalBox
            visible={visible}
            onCancel={handleCancel}
            onExport={handleImport}
          />
          <Row>
            {fetchProjectSchemaInfo.map((node: any) => (
              <DisplaySchemaBox
                key={node.tableName}
                text={node.tableName}
                uid={node.uid}
                deleteIcon={
                  <DeleteFilled
                    style={{ color: "red", height: "auto" }}
                    onClick={() => handleRemove(node.uid)}
                  />
                }
                attribute={"ATTRIBUTES / "}
                icon={
                  <Image
                  alt=""
                    preview={false}
                    src="/schemas-icon.png"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      marginRight: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  ></Image>
                }
                handleRemove={handleRemove}
                lengthOfColums={node?.columns?.length}
              />
            ))}
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Button
              icon={<PlusCircleFilled />}
              style={{
                marginLeft: "1.5rem",
                width: "4rem",
                height: "3rem",
                color: "#7E60BC",
              }}
              onClick={showModal}
            ></Button>{" "}
          </Row>
        </Content>
      </Layout>
    </>
  );
};
export default MainContent;
