import { Col, Row } from "antd";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  CloseOutlined,
  CopyFilled,
  DeleteFilled,
  SaveFilled,
} from "@ant-design/icons";

import styles from "./buttonStyle.module.css";

import Buttons from "./buttons";

import ConfirmationModal from "../GroupsPage/ModalBox/ConfirmationModal";
import { getSelectorTableNodes } from "../../../redux/selector";
import { useDispatch } from "react-redux";

const ButtonComponent = ({
  saveModalVisible,
  handleSaveModalOk,
  handleSaveModalCancel,
  handleSaveClick,
  saveBoxMessage,
  handleDeleteClick,
  deleteModalVisible,
  handleDeleteModalOk,
  handleDeleteModalCancel,
  buttonsDisabled,
}) => {
  const dispatch = useDispatch();
  const [exitModalVisible, setExitModalVisible] = useState(false);
  const selectedTableArray = useSelector(getSelectorTableNodes);

  const handleExitClick = () => {
    setExitModalVisible(true);
  };

  const handleExitModalOk = () => {
    setExitModalVisible(false);

    window.location.href = "/";
  };

  const handleExitModalCancel = () => {
    setExitModalVisible(false);
  };

  return (
    <Col span={7} className={styles.buttonAreaBorder}>
      <Row>
        <Buttons
          text={"Delete"}
          icon={<DeleteFilled className={styles.icon} />}
          size={"middle"}
          onClick={handleDeleteClick}
          href=""
          color=""
          disabled={false}        
          />

        <ConfirmationModal
          visible={deleteModalVisible}
          onOk={handleDeleteModalOk}
          onCancel={handleDeleteModalCancel}
          title="Delete Confirmation"
          message="are you sure want to delete"
          href="/"

        />

        <Buttons
          text="Clone"
          icon={<CopyFilled className={styles.icon} />}
          size={"middle"}
          onClick={() => { }}
          href=""
          color=""
          disabled={false} 
        />
      </Row>

      <Row>
        <Buttons
          text="Save"
          icon={<SaveFilled className={styles.icon} />}
          size={"middle"}
          onClick={handleSaveClick} 
          href=""
          color=""
          disabled={false} 
        />

        <ConfirmationModal
          visible={saveModalVisible}
          onOk={handleSaveModalOk}
          onCancel={handleSaveModalCancel}
          title="Save Confirmation"
          message={saveBoxMessage}
          buttonsDisabled={buttonsDisabled}
        />

        <Buttons
          text="Exit"
          icon={<CloseOutlined className={styles.icon} />}
          size={"middle"}
          onClick={handleExitClick}
          href=""
          color=""
          disabled={false} 
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
