import React from "react";
import { Row,Col, Divider, Statistic } from "antd";
import styles from './innerBox.module.css'
import { icons } from "antd/es/image/PreviewGroup";
import { Image } from 'antd';
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
        
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                className={styles.icon}
              />
           {/*  
           <Statistic
      prefix={prefix}
      title={title}
      value={value} 
     
    /> */}
          </Col>
      </Row>
        <Row className={styles.imageName}>
        <Col>schema</Col></Row>
      </div>
      <div className={styles.innerleft}>
        <Row className={styles.items}><Col><p>300</p></Col></Row>
      </div>
    </div>
</>
  );
};






