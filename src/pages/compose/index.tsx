import React, { useState } from "react";
import { Layout, Space, Col, Row, Image } from "antd";
import Header from "../../components/header/header";
import { Divider } from "antd";
import styles from "./index.module.css";
import {
  ApartmentOutlined,
  ClusterOutlined,
  ContainerFilled,
  HddFilled,
  SettingFilled,
} from "@ant-design/icons";
import MainIcons from "../../components/ComposePage/MainContent/mainContentIcons";
import MainContent from "../../components/ComposePage/MainContent/mainContent";
import ButtonComponent from "@/components/ComposePage/buttons/buttonComponent";

import GroupsMainContent from "@/components/ComposePage/GroupsPage/groupsMainContent";
import TextAreaComponent from "@/components/ComposePage/TextArea/textArea";
import { clearLastIndex } from "@/redux/actions/schemasaction";
import { useDispatch } from "react-redux";
import Toast, { showSuccessToast } from "../schemas/toast";
import ReportMainContent from "@/components/ComposePage/ReportPage/ReportMainContent";

const Compose = () => {
  const { Content } = Layout;
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  console.log("name", name);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const dispatch = useDispatch();
  const handleSaveModalOk = () => { 
    setSaveModalVisible(false);
    showSuccessToast("Saved Successfully")
    /* dispatch(clearLastIndex());
    setName(""); */
  };
  const handleSaveModalCancel = () => {
    setSaveModalVisible(false);
  };
  const handleSaveClick = () => {
    if (name.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
  
    if (description.trim() === "") {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
  
    setSaveModalVisible(true);
  };
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleDeleteModalOk = () => {
    setDeleteModalVisible(false);
    dispatch(clearLastIndex());
    setName("");
    setDescription("");
    showSuccessToast("Deleted Successfully")
  };
  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };
  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
  };
  const renderSelectedComponent = () => {
    if (selectedIcon === null) {
      return null; // or handle this case however is appropriate for your application
    }
    else{
    switch (selectedIcon) {
      case "HddFilled":
        return <MainContent />;
       case "ContainerFilled":
        return <GroupsMainContent />; 
        case "Reports":
        return <ReportMainContent />;
      // add additional cases for each icon
      default:
        return null;
    }
    }
  };

  return (
    <>
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content style={{ marginTop: "1rem" }}>
          <Row>
            <TextAreaComponent
              onNameChange={setName}
              nameValue={name}
              onDescriptionChange={setDescription}
              descriptionValue={description}
              nameError={nameError}
              descriptionError={descriptionError}
              className={nameError ? "textAreaError" : ""} 
            />
            <Col
              span={1}
              className={styles.textAreaBorder}
              style={{ borderRight: "1px solid #ccc" }}
            ></Col>
            <ButtonComponent
              saveModalVisible={saveModalVisible}
              handleSaveModalOk={handleSaveModalOk}
              handleSaveModalCancel={handleSaveModalCancel}
              handleSaveClick={handleSaveClick}
              handleDeleteClick={handleDeleteClick}
              handleDeleteModalOk={handleDeleteModalOk}
              handleDeleteModalCancel={handleDeleteModalCancel}
              deleteModalVisible={deleteModalVisible}
              saveBoxMessage={
                nameError ? (
                 "name can not be empty"
                ) :descriptionError? (
                  "description can not be empty"
                ) : nameError&&descriptionError? (
                  "name and description can not be empty"
                ) :(
                  ""
                )
              }
            />
          </Row>

          <Row>
            <Col className={styles.sideButtons}>
               
              <Image
                preview={false}
                src="/Schemas.png"
                style={{
                  width: "3rem",
                  height: "3.5rem",
                  marginLeft: "6rem",
                  borderBottom: "1px solid #ccc",
                  padding:"0.5rem"
                }}
                onClick={() => handleIconClick("HddFilled")}
                alt=""
              />{" "}
              <br />
               
              <Image
                preview={false}
                src="/Groups-Icon1.png"
                style={{
                  width: "3rem",
                  height: "3.5rem",
                  marginLeft: "6rem",
                  borderBottom: "1px solid #ccc",
                  padding:"0.5rem"
                }}
                alt=""
                onClick={() => handleIconClick("ContainerFilled")}
              />
              <br />
               
              <Image
                preview={false}
                src="/DB-Icon1.png"
                style={{
                  width: "3rem",
                  height: "3.5rem",
                  marginLeft: "6rem",
                  borderBottom: "1px solid #ccc",
                  padding:"0.5rem"
                }}
                alt=""
                // onSelect={<ReportMainContent/>}
              />
              <br />
               
              <Image
                preview={false}
                src="/Sync-Icon-1.png"
                style={{
                  width: "3rem",
                  height: "3.5rem",
                  marginLeft: "6rem",
                  borderBottom: "1px solid #ccc",
                  padding:"0.5rem"
                }}
                alt=""
                onClick={() => handleIconClick("Reports")}
              />
              <br />
               
              <Image
                preview={false}
                src="/users-Icon1.png"
                style={{
                  width: "3rem",
                  height: "3.5rem",
                  marginLeft: "6rem",
                  borderBottom: "1px solid #ccc",
                  padding:"0.5rem"
                }}
                alt=""
              />
            </Col>

            <Col span={18}>{renderSelectedComponent()}</Col>
          </Row>
          <Toast/>       
           </Content>
      </Layout>
    </Space>
    </>
  );
};

export default Compose;
