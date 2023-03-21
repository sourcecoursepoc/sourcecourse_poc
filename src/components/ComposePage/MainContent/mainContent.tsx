import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import ButtonComponent from '../buttons/buttons';
import ModalBox from '../ModalBox/modalBox';
import styles from "./mainContent.module.css";
import MainIcons from './mainContentIcons';
const MainContent = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <Layout className={styles.layout}>
    <Content className={styles.content}>
        <Row className={styles.pinkbar} ><p className={styles.text}>Schema</p></Row>
        <Button icon={<PlusCircleFilled/>} style={{marginLeft:"0.5rem",width:"4rem",height:"3rem",color:"#7E60BC"}}
        onClick={showModal}
        ></Button>
       
       <ModalBox
        visible={visible}
        onCancel={handleCancel}
      />
                   
    </Content>
</Layout>
  )
}

export default MainContent