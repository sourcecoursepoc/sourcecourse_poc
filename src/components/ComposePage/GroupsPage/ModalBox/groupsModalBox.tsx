import {
  fetchDataBaseRequest,
  fetchGroupDataRequest,
} from "@/redux/actions/schemasaction";
import {
  getDataBaseSelector,
  getGroupdataDataBaseSelector,
  getSelectedArraySelector,
  getSelectedGroupdataArraySelector,
} from "@/redux/selector";
import { Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState,SetStateAction,Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import TreeView from "../../../../pages/schemas/treeview";
import styles from "../ModalBox/groupsModalBox.module.css";
import AttributeButton from "./attributeButton";
import GroupsModalBoxButtons from "./groupsModalBoxButtons";
import GroupsThirdSide from "./groupsThirdSide";
import MiddleIcons from "./middleIcons";
import { removeNode } from "@/redux/actions/schemasaction";
import NewAttributeContent from "./newAttributeContent";

interface MyModalProps {
  visible?: boolean;
  setVisible: (visible: boolean) => void;
  onCancel?: () => void;
  lastIndices: any[];
  setLastIndices: Dispatch<SetStateAction<any[]>>;
  onExport: (selectedData: any[]) => void;
}

const GroupsModalBox: React.FC<MyModalProps> = ({ visible, setVisible, onCancel,lastIndices,setLastIndices,onExport }) => {
  const [groupModalBoxTreeView, setGroupModalBoxTreeView] = useState(true);
  const [displayAttributeSection, setDisplayAttributeSection] = useState(false);
  const [schema, setSchema] = useState<string | null>(null);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const groupdataDatabaseSelector = useSelector(getGroupdataDataBaseSelector);
  const selcectData = useSelector(getSelectedArraySelector);
  const selectGroupdataData = useSelector(getSelectedGroupdataArraySelector);
  const lastIndexGroup= selectGroupdataData.slice(-1)[0]

  useEffect(() => {
    dispatch(fetchDataBaseRequest());
    dispatch(fetchGroupDataRequest());
  }, []);
  useEffect(()=>{
    if(lastIndexGroup && 'name' in lastIndexGroup )
    {  
      const exists = lastIndices && lastIndexGroup && lastIndices.filter(Boolean).some((node) => node.uid === lastIndexGroup.uid  );
      if(lastIndices && !exists){
      setLastIndices(prevLastIndices => [...prevLastIndices, lastIndexGroup]);   }
    }
  },[selectGroupdataData])


  const handleExport = () => {
    onExport(lastIndices);
  };
  const handleExportButton=()=>
  {
    handleExport()
  }
  const handleSaveClick = () => {
    setSaveModalVisible(true);
  };
 
  const handleSaveModalOk = () => {
   handleExportButton();
   setSaveModalVisible(false);
   setVisible(false);
  };

  const handleSaveModalCancel = () => {
    setSaveModalVisible(false);
  }; 

  const handleRemove = (uid: string) => {
    console.log("uid in main content", uid);
    dispatch(removeNode(uid));
  };


  function handleAddIconClick(node: string) {
    setSchema(node);
  }

  function contentToggle() {
    setDisplayAttributeSection(true);
  }

  const handleArrowClick = (index: number, direction: "up" | "down") => {
    const newData = [...selectGroupdataData];
    const currentIndex = index;
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < newData.length) {
      const element = selectGroupdataData.splice(currentIndex, 1)[0];
      const data = selectGroupdataData.splice(targetIndex, 0, element);
      dispatch(fetchDataBaseRequest(data));
    }
  };
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      width={1000}
      bodyStyle={{ height: "80vh", borderRadius: "5px", width: "100%" }}
    >
      <Row style={{ borderBottom: "1px solid #ccc" }}>
        <Col
          span={15}
          style={{
            marginLeft: "0.15rem",
            marginRight: "0.5rem",
            borderRight: "1px solid #ccc",
            marginBottom: "0.25rem",
          }}
        >
          <Row
            style={{ marginBottom: "1rem", width: "60%", marginTop: "0.25rem" }}
          >
            <Col span={24}>
              <Input placeholder="Name" style={{ borderRadius: "3px" }} />
            </Col>
          </Row>
          <Row style={{ marginBottom: "1rem", width: "95%" }}>
            <Col span={24}>
              <Input
                placeholder="Description"
                style={{ borderRadius: "3px" }}
              />
            </Col>
          </Row>
        </Col>
        <Col
          span={8}
          style={{
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <GroupsModalBoxButtons handleSaveModalCancel={handleSaveModalCancel} handleSaveModalOk={handleSaveModalOk} saveModalVisible={saveModalVisible} handleSaveClick={handleSaveClick}/>
        </Col>
      </Row>
      <Row style={{ height: "29rem", width: "60rem" }}>
        <Col span={6} style={{ borderRight: "1px solid #ccc", height: "95%" }}>
          <Row style={{ marginTop: "1rem", width: "14rem" }}>
            <Col span={24} style={{ marginLeft: "0.15rem" }}>
              {/* <SearchBar /> */}
              <Input
                placeholder="Search"
                style={{
                  borderColor: "#ccc",
                  borderRadius: "3px",
                  width: "40",
                }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col span={24} className={styles.treeview}>
              {groupdataDatabaseSelector && (
                <TreeView
                  db={groupdataDatabaseSelector}
                  setGroupModalBoxTreeView={setGroupModalBoxTreeView}
                  groupModalBoxTreeView={groupModalBoxTreeView}
                />
              )}
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ borderRight: "1px solid #ccc", height: "95%" }}>
          <AttributeButton onClickAttribute={contentToggle} />
          {lastIndices?.map((node, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Row
                  key={node.name}
                  className={styles.rowTextStyle}
                  align="middle"
                >
                  <Col span={28}>
                    {node.name && (
                      <p>
                        {node.name}
                        <br />
                      </p>
                    )}
                  </Col>
                </Row>
                <MiddleIcons
                  index={index}
                  arrayLength={selectGroupdataData.length-1}
                  name={node.name}
                  onUpArrowClick={() => handleArrowClick(index, "up")}
                  onDownArrowClick={() => handleArrowClick(index, "down")}
                />
              </div>
              <Row className={styles.lowerDivider}></Row>
            </>
          ))}
        </Col>
        {/* third partition area */}
        {displayAttributeSection ? (
          <NewAttributeContent />
        ) : (
          <GroupsThirdSide />
        )}
      </Row>
    </Modal>
  );
};
export default GroupsModalBox;
