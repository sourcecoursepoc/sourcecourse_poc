import { ApartmentOutlined, DatabaseOutlined, PlusCircleFilled } from '@ant-design/icons'; 
import { Button, Image, Layout, Row } from 'antd'; 
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../buttons/buttons'; 
import ModalBox from '../ModalBox/modalBox'; 
import GroupsModalBox from '../GroupsPage/ModalBox/groupsModalBox'; 
import styles from "./mainContent.module.css";
import MainIcons from './mainContentIcons'; 
import DisplayBox from '@/pages/schemas/displaybox'; 
import DisplaySchemaBox from './displaySchema'; 
import { useSelector } from 'react-redux';
import { getSelectedArraySelector } from '@/redux/selector';
import { useDispatch } from 'react-redux'; 
import { removeNode } from '@/redux/actions/schemasaction';

const MainContent = () => { 
const { Content } = Layout; 
const [visible, setVisible] = useState(false); 
const [exportClicked, setExportClicked] = useState(false); 
const [lastIndexes, setLastIndexes] = useState<any[]>([]); 
const handleExport = (lastIndexes: any[]) => {
   setLastIndexes(lastIndexes); 
   setExportClicked(true);
   };

const handleRemove = (uid: string) => { 
  // dispatch(removeNode(uid)); 
  setLastIndexes(lastIndexes => lastIndexes.filter(node => node.uid !== uid)); 
};
const showModal = () => { 
  setVisible(true); 
};
const handleCancel = () => { 
  setVisible(false); 
}; 
console.log("after yes in main ",lastIndexes);
return (
   <> 
   <Layout className={styles.layout}> 
   <Content className={styles.content}>

   <Row className={styles.pinkbar} >
   <p className={styles.text}>Schema</p>
   </Row>
    <ModalBox visible={visible} onCancel={handleCancel} onExport={handleExport} lastIndexes={lastIndexes} setLastIndexes={setLastIndexes} />
    {exportClicked &&( 
    <Row >
       {lastIndexes.map((node:any) => ( 
       <DisplaySchemaBox key={node.tableName} text={node.tableName} uid={node.uid} attribute={"ATTRIBUTES / "} icon={ <Image preview={false}src="/Schemas.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem", marginBottom: "0.5rem" }}> </Image> } handleRemove={handleRemove} lengthOfColums={node?.columns?.length} /> ))}
       </Row>)}
       <Row style={{marginTop:'1rem'}}> 
       <Button icon={<PlusCircleFilled/>} style={{marginLeft:"1.5rem",width:"4rem",height:"3rem",color:"#7E60BC"}} onClick={showModal} >
       </Button> 
       </Row>
       </Content>
       </Layout>
       </> 
       ) 
      } 
      export default MainContent;