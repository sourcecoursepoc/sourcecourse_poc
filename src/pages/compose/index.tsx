import React, { useEffect, useState } from "react";
import { Layout, Space, Col, Row, Image } from "antd";
import Header from "../../components/header/header";
import axios from "axios";
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
import Toast, { showSuccessToast, showErrorToast } from "../schemas/toast";
import ReportMainContent from "@/components/ComposePage/ReportPage/ReportMainContent";
import ComposePipeline from "../../components/ComposePage/Pipeline/composePipeline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {  getProjectByIdSelector, postComposeNameDescSelector, postComposeNameDescSelectorInitial } from "@/redux/selector";
import { fetchProjectByIdRequest } from "@/redux/actions/fetchProjectAction";
import { DELETE_TOAST, DESCRIPTION_ERROR, NAME_DESCRIPTION_ERROR, NAME_ERROR, SUCCESSTOAST, TEXTAREA_ERROR,ERRORTOAST } from "@/constants/constants";
import {  postComposeNameDescRequest } from "@/redux/actions/composeAction";
import { deleteProjectInfoAction } from "../../redux/actions/fetchProjectAction";
import { DELETE_ERROR_TOAST } from "../../constants/constants";

const Compose = () => {
  const { Content } = Layout;
  const [selectedIcon, setSelectedIcon] = useState("HddFilled");
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [projectId, setProjectId] = useState(1);
  const [saveClicked, setSaveClicked] = useState(false);
  const [savedData, setSavedData] = useState(null);
  const dispatch = useDispatch();
  const postComposeNameDescData = useSelector(postComposeNameDescSelector);
  const postComposeNameDescDataInitial = useSelector(postComposeNameDescSelectorInitial);
  const uidFromComposePage = postComposeNameDescData?.uid;

  const router = useRouter();
  const {
    query: { id },
  } = router;

  const { projectById: projectData, pending } = useSelector(
    getProjectByIdSelector
  );
  const [name, setName] = useState(projectData?.name);
  const [description, setDescription] = useState(projectData?.description);

  useEffect(() => {
    dispatch(fetchProjectByIdRequest(id));
    setName(projectData?.name);
    setDescription(projectData?.description);
  }, [projectData?.name, projectData?.description]);

  const handleSaveProjectInfo = async () => {
     setSaveModalVisible(false);
     dispatch(postComposeNameDescRequest(name, description));
     if (!postComposeNameDescDataInitial?.pending && !postComposeNameDescDataInitial?.error ) {
      showSuccessToast(SUCCESSTOAST);
      setProjectId(uidFromComposePage);
    }
    else if(!postComposeNameDescDataInitial?.pending && postComposeNameDescDataInitial?.error)
    {
      showSuccessToast(ERRORTOAST);
    }
  };
  const handleSaveModalCancel = () => {
    setSaveModalVisible(false);
  };
  const handleSaveClick = () => {
    if (name?.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (description?.trim() === "") {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
    setSaveModalVisible(true);
  };
  const handleIconClick = (icon:any) => {
    setSelectedIcon(icon);
  };
  const getIconStyle = (icon:any) => {
    if (selectedIcon === icon) {
      return {
        borderBottom: "2px solid #7E60BC",
      };
    } else {
      return {
        borderBottom: "1px solid #ccc",
      };
    }
  };
  const handleDeleteModalOk = async () => {
    setDeleteModalVisible(false);
    dispatch(clearLastIndex());
  
    try {
      await dispatch(deleteProjectInfoAction(id));
      setName("");
      setDescription("");
      showSuccessToast(DELETE_TOAST);
      window.location.href = "/";
    } catch (error) {
      showErrorToast(DELETE_ERROR_TOAST)
    }
  };
  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };
  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
  };
  const renderSelectedComponent = () => {
    if (selectedIcon === null) {
      return <MainContent  projectUid={id}/>;
    } else {
      switch (selectedIcon) {
        case "HddFilled":
          return <MainContent projectUid={id} />;
        case "ContainerFilled":
          return <GroupsMainContent />;
        case "Reports":
          return <ReportMainContent />;
        case "ComposePipeline":
          return <ComposePipeline />;
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
                className={nameError ? TEXTAREA_ERROR : ""}
              />
              <Col
                span={1}
                className={styles.textAreaBorder}
                style={{ borderRight: "1px solid #ccc" }}
              ></Col>
              <ButtonComponent
                saveModalVisible={saveModalVisible}
                handleSaveModalOk={handleSaveProjectInfo}
                handleSaveModalCancel={handleSaveModalCancel}
                handleSaveClick={handleSaveClick}
                handleDeleteClick={handleDeleteClick}
                handleDeleteModalOk={handleDeleteModalOk}
                handleDeleteModalCancel={handleDeleteModalCancel}
                deleteModalVisible={deleteModalVisible}
                saveBoxMessage={
                  nameError
                    ? NAME_ERROR
                    : descriptionError
                      ? DESCRIPTION_ERROR
                      : nameError && descriptionError
                        ? NAME_DESCRIPTION_ERROR
                        : ""
                }
                buttonsDisabled={nameError || descriptionError ? true : false}
              />
            </Row>
            <Row>
              <Col className={styles.sideButtons}>
                <Image
                  preview={false}
                  src="/schemas-icon.png"
                  style={{
                    ...getIconStyle("HddFilled"),
                    width: "3.5rem",
                    height: "3.5rem",
                    marginLeft: "6rem",
                    padding: "0.5rem",
                    opacity: projectId ? 1 : 0.5,
                  }}
                  onClick={
                    projectId ? () => handleIconClick("HddFilled") : () => { }
                  }
                  alt=""
                />{" "}
                <br />
                <Image
                  preview={false}
                  src="/groups-icon.png"
                  style={{
                    ...getIconStyle("ContainerFilled"),
                    width: "3.5rem",
                    height: "3.5rem",
                    marginLeft: "6rem",
                    padding: "0.5rem",
                    opacity: projectId ? 1 : 0.5,
                  }}
                  alt=""
                  onClick={
                    projectId
                      ? () => handleIconClick("ContainerFilled")
                      : () => { }
                  }
                />
                <br />
                <Image
                  preview={false}
                  src="/compose-pipeline.png"
                  style={{
                    ...getIconStyle("ComposePipeline"),
                    width: "3.5rem",
                    height: "3.5rem",
                    marginLeft: "6rem",

                    padding: "0.3rem",
                    opacity: projectId ? 1 : 0.5,
                  }}
                  alt=""
                  onClick={
                    projectId
                      ? () => handleIconClick("ComposePipeline")
                      : () => { }
                  }
                />
                <br />
                <Image
                  preview={false}
                  src="/reports-icon.png"
                  style={{
                    ...getIconStyle("Reports"),
                    width: "3.5rem",
                    height: "3.5rem",
                    marginLeft: "6rem",
                    padding: "0.3rem",
                    opacity: projectId ? 1 : 0.5,
                  }}
                  alt=""
                  onClick={
                    projectId ? () => handleIconClick("Reports") : () => { }
                  }
                />
                <br />
                <Image
                  preview={false}
                  src="/users-Icon1.png"
                  style={{
                    ...getIconStyle("Users"),
                    width: "3.5rem",
                    height: "3.5rem",
                    marginLeft: "6rem",
                    padding: "0.3rem",
                    opacity: projectId ? 1 : 0.5,
                  }}
                  alt=""
                  onClick={
                    projectId ? () => handleIconClick("Users") : () => { }
                  }
                />
              </Col>

              <Col span={18}>{renderSelectedComponent()}</Col>
            </Row>
            <Toast />
          </Content>
        </Layout>
      </Space>
    </>
  );
};

export default Compose;
