import { Col, Row } from 'antd'
import React from 'react'
import { ApartmentOutlined, CloseOutlined, ClusterOutlined, ContainerFilled, CopyFilled, DeleteFilled, HddFilled, SaveFilled, SettingFilled } from "@ant-design/icons";
import styles from "./buttonStyle.module.css";
import Buttons from './buttons';

const ButtonComponent= () => {
  return (
  
    <Col span={7}  className={styles.buttonAreaBorder} >             
                <Row >

                <Buttons text={"Delete"} icon={<DeleteFilled className={styles.icon}/>} size={"middle"} onClick={()=>{}} />
                <Buttons text="Clone" icon={<CopyFilled className={styles.icon}/>} size={"middle"} onClick={()=>{}}/>                                       
                </Row>
                <Row >
                <Buttons text="Save" icon={<SaveFilled className={styles.icon} /> } size={"middle"} onClick={()=>{}}/>
                <Buttons text="Exit" icon={<CloseOutlined className={styles.icon}/>} size={"middle"} onClick={()=>{}}/>
                </Row>             
            </Col>
  )
}

export default ButtonComponent