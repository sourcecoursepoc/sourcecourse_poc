import { ApartmentOutlined, DatabaseOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Button, Layout, Row } from 'antd';
import React, { useState } from 'react'
import ButtonComponent from '../buttons/buttons';
import ModalBox from '../ModalBox/modalBox';
import GroupsModalBox from '../GroupsPage/ModalBox/groupsModalBox';
import styles from "./mainContent.module.css";
import MainIcons from './mainContentIcons';
import DisplayBox from '@/pages/schemas/displaybox';
import DisplaySchemaBox from './displaySchema';
//import { getDataBaseSelector, getSelectedArraySelector } from "@/redux/selector";
//import { useSelector } from 'react-redux';

const MainContent = () => {
  const { Content } = Layout;
  const [visible, setVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState<any[]>([]);

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
          {selectedValues.map((value) => (
         //   <DisplayBox key={value} text={value.tableName} iconName={"server"} icon={<ApartmentOutlined />}  />    
              <DisplaySchemaBox key={value} text={value.tableName} attribute={"Attribute / 5"} icon={<ApartmentOutlined style={{fontSize:'2rem',color:'grey'}}/>}/>     
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