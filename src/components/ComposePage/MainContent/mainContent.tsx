import {
  fetchDataBaseRequest,
} from "@/redux/actions/schemasaction";

import {  PlusCircleFilled } from '@ant-design/icons';
import { Button, Image, Layout, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import ModalBox from '../ModalBox/modalBox';
import styles from "./mainContent.module.css";
import DisplaySchemaBox from './displaySchema';
import { useSelector } from 'react-redux';
import { projectSchemaInfoSelector} from '@/redux/selector';
import { useDispatch } from 'react-redux';
import { DeleteFilled } from "@ant-design/icons";
import axios from "axios";
import { fetchProjectSchemaInfoAction } from "@/redux/actions/composeAction";


const MainContent = () => {
  const { Content } = Layout;
  const [visible, setVisible] = useState(false);
  const [importClicked, setImportClicked] = useState(false);
  const dispatch = useDispatch();
  const fetchProjectSchemaInfo=useSelector(projectSchemaInfoSelector);
  useEffect(() => {
    dispatch(fetchDataBaseRequest());
  }, []);
  useEffect(() => {
    dispatch(fetchProjectSchemaInfoAction(3));
  }, []); 
  const handleImport = () => {   
    setImportClicked(true);
  };

  const handleRemove = async (uid: string) => {
    const requestBody = {
      projectUid: 3,
      sourceTableUids: [uid],
    };
    try {
      const response = await axios.delete(
        "http://localhost:8080/sourcecourse/project-tables",
        { data: requestBody }
      );
      // dispatch(fetchProjectSchemaInfoAction(3));
      console.log("response after deleting",response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const showModal = () => {
    setVisible(true);  
  };

  const handleCancel = () => {
    setVisible(false);   
  };

  return (
    <>
    <Layout className={styles.layout}>
    <Content className={styles.content}>
        <Row className={styles.pinkbar} ><p className={styles.text}>Schema</p></Row>
        <ModalBox
        visible={visible}
        onCancel={handleCancel}
        onExport={handleImport}
      />
       <Row >               
           {fetchProjectSchemaInfo.map((node:any) => ( 
              <DisplaySchemaBox key={node.tableName} text={node.tableName} uid={node.uid} deleteIcon={<DeleteFilled style={{color:"red",height:'auto'}} onClick={() => handleRemove(node.uid)}/>}
              attribute={"ATTRIBUTES / "} icon={ <Image preview={false}src="/schemas-icon.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem", marginBottom: "0.5rem" }}>
              </Image> } 
               handleRemove={handleRemove}   lengthOfColums={node?.columns?.length} 
              />     
          ))}    
       </Row>
       <Row style={{marginTop:'1rem'}}>
        <Button icon={<PlusCircleFilled/>} style={{marginLeft:"1.5rem",width:"4rem",height:"3rem",color:"#7E60BC"}}
        onClick={showModal}
        ></Button> </Row>
    </Content>
</Layout>
</>
  )
}
export default MainContent
