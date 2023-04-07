import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Layout, Row } from "antd";
import React, { useState } from "react";
import ButtonComponent from "../buttons/buttons";
import ModalBox from "../ModalBox/modalBox";
import GroupsModalBox from "../GroupsPage/ModalBox/groupsModalBox";
import styles from "../MainContent/mainContent.module.css";
import MainIcons from "../../../components/ComposePage/MainContent/mainContentIcons";


const GroupsMainContent = () => {
  const { Content } = Layout;
  const [visible, setVisible] = useState(false);
  const [exportClicked, setExportClicked] = useState(false);
  const [lastIndices, setLastIndices] = useState<any[]>([]); 

  const showGroupsModal = () => {
    setVisible(true);
  };
  const handleGroupsCancel = () => {
    setVisible(false);
  };
  const handleExport = (lastIndexes: any[]) => { 
    setLastIndices(lastIndexes);
    setExportClicked(true);
  };
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.text}>Groups</p>
        </Row>
        <Button
          icon={<PlusCircleFilled />}
          style={{
            marginLeft: "0.5rem",
            width: "4rem",
            height: "3rem",
            color: "#7E60BC",
          }}
          onClick={showGroupsModal}
        ></Button>
        <GroupsModalBox visible={visible} setVisible={setVisible} onCancel={handleGroupsCancel} lastIndices={lastIndices} setLastIndices={setLastIndices}  onExport={handleExport} />
      </Content>
    </Layout>
  );
};

export default GroupsMainContent;
