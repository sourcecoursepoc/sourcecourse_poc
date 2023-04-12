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
import { getSelectorTableNodes } from "@/redux/selector";
import { clearLastIndex } from "@/redux/actions/schemasaction";
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
}) => {
  const dispatch = useDispatch();
  const [exitModalVisible, setExitModalVisible] = useState(false);
  const selectedTableArray= useSelector(getSelectorTableNodes);

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

 

/*   const handleDeleteModalOk = () => {
    setDeleteModalVisible(false);
    dispatch(clearLastIndex());

  };
 */
 
 /*  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
  }; */

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
          message="are you sure want to delete"
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
          onClick={handleSaveClick} /* href={""} */
        />

        <ConfirmationModal
          visible={saveModalVisible}
          onOk={handleSaveModalOk}
          onCancel={handleSaveModalCancel}
          title="Save Confirmation"
          message={saveBoxMessage}
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
