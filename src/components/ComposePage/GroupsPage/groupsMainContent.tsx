import { getSelectedGroupdataArraySelector } from "@/redux/selector";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Layout, Row } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import GroupsModalBox from "../GroupsPage/ModalBox/groupsModalBox";
import styles from "../MainContent/mainContent.module.css";
import MainIcons from "../../../components/ComposePage/MainContent/mainContentIcons";
import PipelineModalBox from "../CreatePipeline/PipelineModalBox";
import AttributeDisplayBox from "./ModalBox/attributeDisplayBox";



const GroupsMainContent = () => {
  const { Content } = Layout;
  const [visible, setVisible] = useState(false);
  const [exportClicked, setExportClicked] = useState(false);
  const [showPipeline, setShowPipeline] = useState(false)
  const [lastIndices, setLastIndices] = useState<any[]>([]); 
  const selectGroupdataAttributeData = useSelector(getSelectedGroupdataArraySelector);
  

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
  const toggleCreatePipeline = () => {
    setVisible(false)
    setShowPipeline(true)
  };
  const handlePipelineCancel = () => {
    setShowPipeline(false);
  };

  const handleRemove = (uid: string) => {
    // dispatch(removeNode(uid)); 
     setLastIndices(lastIndices => lastIndices.filter(node => node.uid !== uid));
    
   };
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.text}>Groups</p>
        </Row>

        {exportClicked &&(
       <Row >               
           
              <AttributeDisplayBox key={1} text={""} uid={""} 
              attribute={"ATTRIBUTES / "}  
               handleRemove={handleRemove}   
              />     
            
       </Row>)}
       <Row style={{marginTop:'1rem'}}>
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
        <GroupsModalBox visible={visible} setVisible={setVisible} onCancel={handleGroupsCancel} lastIndices={lastIndices} setLastIndices={setLastIndices}  onExport={handleExport} onCreatePipeline={toggleCreatePipeline} />
        <PipelineModalBox showCreatePipeline={showPipeline} onCancel={handlePipelineCancel}/>
      </Content>
    </Layout>
  );
};

export default GroupsMainContent;
