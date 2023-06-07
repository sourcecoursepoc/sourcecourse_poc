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
import { DELETE_CONFIRMATION_MESSAGE, EXIT_CONFIRMATION_MESSAGE, SAVE_CONFIRMATION_MESSAGE } from "@/constants/constants";
interface ButtonComponentProps {
  saveModalVisible: boolean;
  handleSaveModalOk: () => void;
  handleSaveModalCancel: () => void;
  handleSaveClick: () => void;
  saveBoxMessage: string;
  handleDeleteClick: () => void;
  deleteModalVisible: boolean;
  handleDeleteModalOk: () => void;
  handleDeleteModalCancel: () => void;
  buttonsDisabled: boolean;
}
const  ButtonComponent: React.FC<ButtonComponentProps> =  ({
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
          title={DELETE_CONFIRMATION_MESSAGE}
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
          title={SAVE_CONFIRMATION_MESSAGE}
          message={saveBoxMessage}
          buttonsDisabled={buttonsDisabled}
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
          title={EXIT_CONFIRMATION_MESSAGE}
        />
      </Row>
    </Col>
  );
};

export default ButtonComponent;
