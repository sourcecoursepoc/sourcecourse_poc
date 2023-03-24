import React from "react";
import { Row,Col, Divider, Statistic } from "antd";
import styles from './innerBox.module.css'
import { icons } from "antd/es/image/PreviewGroup";
import { Image } from 'antd';
import { ClusterOutlined } from "@ant-design/icons";
export interface ChildComponentProps {
  image: string;
}
interface MyStatisticProps {
  prefix: JSX.Element;
  title: string;
  value: number;
}
export default function (/* props: ChildComponentProps  { prefix, title ,value}: MyStatisticProps*/ ) {
  return (
    <>
    <div className={styles.outerbox}>
      <div className={styles.innerright}>
        <Row className={styles.image}
        ><Col>
       {/*   <Image className={styles.icon} src={props.image} /> */}
        
              
              
               <ClusterOutlined style={{ fontSize: "45px" }} />
             
           {/*  
           <Statistic
      prefix={prefix}
      title={title}
      value={value} 
     
    /> */}
          </Col>
      </Row>
        <Row className={styles.imageName}>
        <Col style={{marginLeft:"13px"}}>initial Load</Col></Row>
      </div>
      <div className={styles.innerleft}>
        <Row className={styles.items}><Col style={{
                  fontWeight: 350,
                  fontSize: "2rem",
                  color:"gray"
                  }}>36</Col></Row>
      </div>
    </div>
</>
  );
};






