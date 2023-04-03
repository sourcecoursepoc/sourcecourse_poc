import { ApartmentOutlined, DatabaseOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Button, Layout, Row } from 'antd';
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
  const [selectedValues, setSelectedValues] = useState<any[]>([]);
  const selcectData = useSelector(getSelectedArraySelector); 

  const dispatch = useDispatch();
  const handleRemove = (uid: string) => {
    console.log("uid in main content",uid)
    dispatch(removeNode(uid));
  };

  const handleExport = (selectedData: any[]) => {
    setSelectedValues(selectedData);
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
        onExport={handleExport} 
      />
       <Row >   
      

         
          {selcectData.map((node) => ( 
              <DisplaySchemaBox key={node} text={node.tableName} uid={node.uid} 
              attribute={"ATTRIBUTES / "} icon={<ApartmentOutlined style={{fontSize:'2rem',color:'grey'}}/>} 
              handleRemove={handleRemove} lengthOfColums={node.columns.length}
              />     
          ))}     

       </Row>
       <Row style={{marginTop:'1rem'}}>
        <Button icon={<PlusCircleFilled/>} style={{marginLeft:"1.5rem",width:"4rem",height:"3rem",color:"#7E60BC"}}
        onClick={showModal}
        ></Button>   </Row>                  
    </Content>
</Layout>
</>
  )
}

export default MainContent