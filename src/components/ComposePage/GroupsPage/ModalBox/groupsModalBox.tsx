import {
  addAttributeDetails,
  fetchGroupDataRequest,
} from "@/redux/actions/schemasaction";
import {
  getDataBaseSelector,
  getGroupdataDataBaseSelector,
  getSelectedGroupdataArraySelector,
} from "@/redux/selector";
import { Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState, SetStateAction, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import TreeView from "../../../../pages/schemas/treeview";
import styles from "../ModalBox/groupsModalBox.module.css";
import AttributeButton from "./attributeButton";
import GroupsModalBoxButtons from "./groupsModalBoxButtons";
import GroupsThirdSide from "./groupsThirdSide";
import MiddleIcons from "./middleIcons";
import { removeNode } from "@/redux/actions/schemasaction";
import NewAttributeContent from "./newAttributeContent";
import { PlusOutlined } from "@ant-design/icons";
import { fetchDataBaseInfoAction } from "../../../../redux/actions/schemasaction";
import { SelectedTreeNodeInfo } from "../../../../redux/selector";
import { projectSchemaInfoSelector } from "@/redux/selector";

interface MyModalProps {
  visible?: boolean;
  setVisible: (visible: boolean) => void;
  onCancel?: () => void;
  lastIndices: any[];
  setLastIndices: Dispatch<SetStateAction<any[]>>;
  onExport: (selectedData: any[]) => void;
  onCreatePipeline?: () => void;
}

const GroupsModalBox: React.FC<MyModalProps> = ({
  visible,
  setVisible,
  onCancel,
  lastIndices,
  setLastIndices,
  onExport,
  onCreatePipeline,
}) => {
  const [groupModalBoxTreeView, setGroupModalBoxTreeView] = useState(true);
  const [displayAttributeSection, setDisplayAttributeSection] = useState(false);
  const [schema, setSchema] = useState<string | null>(null);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [selectedNodeDetails, setSelectedNodeDetails] = useState<any[]>([]);
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const groupdataDatabaseSelector = useSelector(getGroupdataDataBaseSelector);
  const selcectData = useSelector(SelectedTreeNodeInfo);
  const selectGroupdataData = useSelector(getSelectedGroupdataArraySelector);
  const lastIndexGroup = selectGroupdataData.slice(-1)[0];
  const [attrName,setAttrName] = useState('Attribute Name')
  const [datatype,setDatatype] = useState('VARCHAR')
  const [render,setRender] = useState(false)
  const fetchProjectSchemaInfo = useSelector(projectSchemaInfoSelector);
  const [treeArray,setTreeArray] = useState([]);

  useEffect(()=>{
      if(fetchProjectSchemaInfo && fetchProjectSchemaInfo.length > 0){
        const treeArrayData= [{dbName: '', description:'', tables:fetchProjectSchemaInfo}]
        setTreeArray(treeArrayData);
      }
    },[fetchProjectSchemaInfo]);

  useEffect(() => {
    dispatch(fetchDataBaseInfoAction());
    dispatch(fetchGroupDataRequest());
  }, []);
  useEffect(() => {
    if (lastIndexGroup && "name" in lastIndexGroup) {
      const exists =
        lastIndices &&
        lastIndexGroup &&
        lastIndices
          .filter(Boolean)
          .some((node) => node.uid === lastIndexGroup.uid);
      if (lastIndices && !exists) {
        setLastIndices((prevLastIndices) => [
          ...prevLastIndices,
          lastIndexGroup,
        ]);
      }
    }
  }, [selectGroupdataData,attrName]);
console.log("lastIndiceslastIndices",lastIndices)
  const handleExport = () => {
    onExport(lastIndices);
  };
  const handleExportButton = () => {
    handleExport();
  };
  const handleSaveClick = () => {
    // setSaveModalVisible(true);
    handleExportButton();
    setVisible(false);
  };

  const handleSaveModalOk = () => {
    handleExportButton();
    setVisible(false);
    // setSaveModalVisible(false);
  };

  const handleSaveModalCancel = () => {
    setSaveModalVisible(false);
  };

  const handleRemove = (uid: string) => {
    dispatch(removeNode(uid));
  };
  const handleAddAttributeDetails = (lastIndices: any) => {
    console.log("Received data in handleAddAttributeDetails:", lastIndices);
    dispatch(addAttributeDetails(lastIndices));
  };

  const onDeleteClick = (index: number) => {
    const newLastIndices = [...lastIndices];
    newLastIndices.splice(index, 1);
    setLastIndices(newLastIndices);
  };

  function handleAddIconClick(node: string) {
    setSchema(node);
  }

  function contentToggle() {
    setDisplayAttributeSection(true);
    setDisplayAttributeSection(true)
    setRender(!render)
    setAttrName("Attribute Name")
    const newLastIndices = [...lastIndices];
    newLastIndices.push({name: "Attribute Name", type: "VARCHAR"})
    setLastIndices(newLastIndices);
  }

  function getValues(attributeName:string,selectedDataType:string){
        setAttrName(attributeName)
        setDatatype(selectedDataType)
        selectGroupdataData.slice(-1)[0] = {name: attributeName, type: selectedDataType}
        lastIndices[lastIndices.length-1] = {name: attributeName, type: selectedDataType}
       }

  const handleRowClick = (node:any[]) => {
    console.log("Getting innnnnn");
    setSelectedNodeDetails([node]); 
    handleAddAttributeDetails(lastIndices);
    console.log("Data getting printed on clicking the attribute", lastIndices);
    console.log("selectedNodeDetails", selectedNodeDetails);
    console.log("Getting outttttttt");
  };

  const swapElements = (array: Array<any>, index1: number, index2: number) => {
    const newArray = [...array];
    const temp = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = temp;
    return newArray;
  };

  const handleArrowClick = (index: number, direction: "up" | "down") => {
    const newData = [...lastIndices];
    const currentIndex = index;
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < newData.length) {
      const swappedArray = swapElements(lastIndices, currentIndex, targetIndex);
      setLastIndices(swappedArray);
    }
  };
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      width={1050}
      bodyStyle={{
        minHeight: "30rem",
       overflowY:"auto",
        borderRadius: "5px",
      }}
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
          <GroupsModalBoxButtons
            handleSaveModalCancel={handleSaveModalCancel}
            handleSaveModalOk={handleSaveModalOk}
            saveModalVisible={saveModalVisible}
            handleSaveClick={handleSaveClick}
            onCreatePipeline={onCreatePipeline}
          />
        </Col>
      </Row>
      <Row>
        <Col span={6} style={{ minHeight:"25rem", borderRight: "1px solid #ccc",marginTop: "0.5rem" }}>
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
              {fetchProjectSchemaInfo && (
                <TreeView
                  db={treeArray}
                  setGroupModalBoxTreeView={setGroupModalBoxTreeView}
                  groupModalBoxTreeView={groupModalBoxTreeView}
                  iconImage={<PlusOutlined style={{width:'3rem',fontSize:'0.8rem',color:'#7E60BC',strokeWidth: '2' }}/>}
                />
              )}
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ borderRight: "1px solid #ccc",marginTop: "0.5rem" }}>
          <AttributeButton onClickAttribute={contentToggle} />
          {lastIndices?.map((node, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom:"-1rem"
                }}
              >
                <Row
                  key={node.name}
                  className={styles.rowTextStyle}
                  align="middle"
                  onClick={() => handleRowClick(node.metadata)}
                  style={{ cursor: "pointer" }}
                >
                  <Col span={28}>
                    {node.name && (
                      <p>
                         <span style={{ color: 'black', fontWeight: '500' }}>{node.name}</span>
                        
                        <br />
                        <span style={{ color: 'grey', fontSize: '12px' }}>{node.type.toUpperCase()}</span>
                      </p>
                    )}
                  </Col>
                </Row>
                <MiddleIcons
                  index={index}
                  arrayLength={selectGroupdataData.length - 1}
                  name={node.name}
                  onUpArrowClick={() => handleArrowClick(index, "up")}
                  onDownArrowClick={() => handleArrowClick(index, "down")}
                  onDeleteClick={() => onDeleteClick(index)}
                />
              </div>
              <Row className={styles.lowerDivider}></Row>
            </>
          ))}
        </Col>
        {/* third partition area */}
        {displayAttributeSection ? (
          <NewAttributeContent attributeValues={getValues} reRender={render} key={render}/>
        ) : (
          <GroupsThirdSide selectedNodeDetails={selectedNodeDetails} setSelectedNodeDetails={setSelectedNodeDetails}/>
        )}
      </Row>
    </Modal>
  );
};
export default GroupsModalBox;
