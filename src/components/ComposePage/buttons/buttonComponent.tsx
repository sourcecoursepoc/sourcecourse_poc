import { Col, Row } from "antd";
import React, { useState } from "react";
import {
  CloseOutlined,
  CopyFilled,
  DeleteFilled,
  SaveFilled,
} from "@ant-design/icons";
import styles from "./buttonStyle.module.css";
import Buttons from "./buttons";
import ConfirmationModal from "../GroupsPage/ModalBox/ConfirmationModal";

const ButtonComponent = () => {
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const handleSaveClick = () => {
    setSaveModalVisible(true);
  };

  const handleSaveModalOk = () => {
    setSaveModalVisible(false);
    
  };

  const handleSaveModalCancel = () => {
    setSaveModalVisible(false);
  };

  const handleExitClick = () => {
    setExitModalVisible(true);
  };

  const handleExitModalOk = () => {
    setExitModalVisible(false);
    window.location.href = "";
  };

  const handleExitModalCancel = () => {
    setExitModalVisible(false);
  };
  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handleDeleteModalOk = () => {
    setDeleteModalVisible(false);
  };

  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
  };
  return (
    <Col span={7} className={styles.buttonAreaBorder}>
      <Row>
        <Buttons
          text={"Delete"}
          icon={<DeleteFilled className={styles.icon} />}
          size={"middle"}
          onClick={handleDeleteClick}
         
        />
        <ConfirmationModal
          visible={deleteModalVisible}
          onOk={handleDeleteModalOk}
          onCancel={handleDeleteModalCancel}
          title="Delete Confirmation"
          message="Are you sure you want to Delete?"
        />
        <Buttons
          text="Clone"
          icon={<CopyFilled className={styles.icon} />}
          size={"middle"}
          onClick={() => {}}
         
        />
      </Row>
      <Row>
        <Buttons
          text="Save"
          icon={<SaveFilled className={styles.icon} />}
          size={"middle"}
          onClick={handleSaveClick} /* href={""}  */
        />
        <ConfirmationModal
          visible={saveModalVisible}
          onOk={handleSaveModalOk}
          onCancel={handleSaveModalCancel}
          title="Save Confirmation"
          message="Are you sure you want to save?"
        />
        <Buttons
          text="Exit"
          icon={<CloseOutlined className={styles.icon} />}
          size={"middle"}
          onClick={handleExitClick}
         
        />
        <ConfirmationModal
          visible={exitModalVisible}
          onOk={handleExitModalOk}
          onCancel={handleExitModalCancel}
          title="Exit Confirmation"
          message="Are you sure you want to Exit?"
        />
      </Row>
    </Col>
  );
};
export default ButtonComponent;
