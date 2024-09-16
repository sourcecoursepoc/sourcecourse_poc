import { fetchGroupRequest } from "@/redux/actions/fetchGroupActions";
import {
  getGroupSelector,
  getSelectedGroupdataArraySelector,
} from "@/redux/selector";
import { PlusCircleFilled } from "@ant-design/icons";

import { Button, Image, Layout, Row } from "antd";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import PipelineModalBox from "../CreatePipeline/PipelineModalBox";
import GroupsModalBox from "../GroupsPage/ModalBox/groupsModalBox";
import styles from "../MainContent/mainContent.module.css";
import AttributeDisplayBox from "./ModalBox/attributeDisplayBox";
const GroupsMainContent = () => {
  const { Content } = Layout;

  const [visible, setVisible] = useState(false);

  const [exportClicked, setExportClicked] = useState(false);
  const [lastIndices, setLastIndices] = useState<any[]>([]);
  const selectGroupdataAttributeData = useSelector(
    getSelectedGroupdataArraySelector
  );
  const [showPipeline, setShowPipeline] = useState(false);
  const showGroupsModal = () => {
    setVisible(true);
  };

  const handleGroupsCancel = () => {
    setVisible(false);
  };

  const handleExport = (lastIndices: any[]) => {
    setLastIndices(lastIndices);

    setExportClicked(true);
  };
  const handleRemove = (uid: string) => {
    setLastIndices((lastIndices) =>
      lastIndices.filter((node) => node.uid !== uid)
    );
  };

  const toggleCreatePipeline = () => {
    setVisible(false);

    setShowPipeline(true);
  };

  const handlePipelineCancel = () => {
    setShowPipeline(false);
  };

  const data = useSelector(getGroupSelector);
  console.log("groupData", data);
  useEffect(() => {
    dispatch(fetchGroupRequest());
  }, []);
  const dispatch = useDispatch();
  // page for calling the whole content of groups
  const lastIndicesText = lastIndices.map((node: any) => node.name).join(", ");
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.text}>Groups</p>
        </Row>
        <Row>
          {data?.map((node: any) => (
            <AttributeDisplayBox
              key={node.desc}
              text={node.name}
              uid={node.desc}
              desc={node.desc}
              icon={
                <Image
                  preview={false}
                  src="/groups-icon.png"
                  alt="groupIcon"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.5rem",
                    marginTop: "0.5rem",
                  }}
                ></Image>
              }
              attribute={"ATTRIBUTES / "}
              lengthOfColums={node.attributes}
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
            onClick={showGroupsModal}
          ></Button>
        </Row>
        <GroupsModalBox
          visible={visible}
          setVisible={setVisible}
          onCancel={handleGroupsCancel}
          lastIndices={lastIndices}
          setLastIndices={setLastIndices}
          onExport={handleExport}
          onCreatePipeline={toggleCreatePipeline}
        />
        <PipelineModalBox
          showCreatePipeline={showPipeline}
          onCancel={handlePipelineCancel}
        />
      </Content>
    </Layout>
  );
};
export default GroupsMainContent;
