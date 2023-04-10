import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Col, Divider, Input, Modal, Row } from "antd";
import Buttons from "../../buttons/buttons";
import styles from "../ModalBox/groupsModalBox.module.css";
import {
  CloseOutlined,
  CopyFilled,
  DeleteFilled,
  SaveFilled,
  BranchesOutlined,
} from "@ant-design/icons";
import DeleteButtonModalBox from "./deleteButtonModalBox";
import ConfirmationModal from "./ConfirmationModal";

// interface MyGroupModalProps {
//   onExport: (selectedData: any[]) => void;
//   lastIndices: any[];
//   setLastIndices: Dispatch<SetStateAction<any[]>>;
//   handleSaveModalCancel:()=>void;
//   handleSaveModalOk:()=>void;
//   saveModalVisible:boolean;
//   handleSaveClick:()=>void;
// }

const GroupsModalBoxuttons = ({handleSaveModalCancel,handleSaveModalOk,saveModalVisible,handleSaveClick, onCreatePipeline}) => {
  // const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  // const handleExport = () => {
  //   onExport(lastIndices);
  // };
  // const handleExportButton=()=>
  // {
  //   handleExport()
  // }
  // const handleSaveClick = () => {
  //   setSaveModalVisible(true);
  // };
 
  // const handleSaveModalOk = () => {
  //  handleExportButton();
  //  setSaveModalVisible(false);
  // };

  // const handleSaveModalCancel = () => {
  //   setSaveModalVisible(false);
  // }; 

 
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
    <>
      <Row style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
        <Col span={6} style={{ padding: "0 6px" }}>
          <Button
            className={styles.mygroupbutton}
            icon={<DeleteFilled className={styles.icon} />}
            size={"middle"}
            type="primary"
            shape="round"
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
          <ConfirmationModal
            visible={deleteModalVisible}
            onOk={handleDeleteModalOk}
            onCancel={handleDeleteModalCancel}
            title="Delete Confirmation"
            message="Are you sure you want to Delete?"
          />
        </Col>
        <Col span={6} style={{ padding: "0 6px" }}>
          <Button
            className={styles.mygroupbutton}
            icon={<CopyFilled className={styles.icon} />}
            size={"middle"}
            type="primary"
            shape="round"
            onClick={() => {}}
            href={""}
          >
            Clone
          </Button>
        </Col>
        <Col span={6} style={{ padding: "0 6px" }}>
          <Button
            className={styles.mygroupbutton}
            icon={<SaveFilled className={styles.icon} />}
            size={"middle"}
            type="primary"
            shape="round"
            onClick={handleSaveClick}
                
          >
            Save
          </Button>
          <ConfirmationModal
            visible={saveModalVisible}
            onOk={handleSaveModalOk}
            onCancel={handleSaveModalCancel}
            title="Save Confirmation"
            message="Are you sure you want to save?"
          />
        </Col>
        <Col span={6} style={{ padding: "0 6px" }}>
          <Button
            className={styles.mygroupbutton}
            icon={<CloseOutlined className={styles.icon} />}
            size={"middle"}
            type="primary"
            shape="round"
            onClick={handleExitClick}
          
          >
            Exit
          </Button>
          <ConfirmationModal
            visible={exitModalVisible}
            onOk={handleExitModalOk}
            onCancel={handleExitModalCancel}
            title="Exit Confirmation"
            message="Are you sure you want to Exit?"
          />
        </Col>
        <Col span={6}>
          <Button
            icon={<BranchesOutlined className={styles.icon} />}
            className={styles.pipelinebutton}
            onClick={onCreatePipeline}
          >
            Create Pipeline
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default GroupsModalBoxuttons;
