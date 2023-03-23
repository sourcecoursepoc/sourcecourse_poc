import React from "react";
import { Row,Col, Divider, Statistic } from "antd";
import styles from './innerBox.module.css'
import { icons } from "antd/es/image/PreviewGroup";
interface MyStatisticProps {
  prefix: JSX.Element;
  title: string;
  value: number;
}
export default function ({ prefix, title ,value}: MyStatisticProps) {
  return (
    <>
    <div className={styles.outerbox}>
      <div className={styles.innerright}>
        <Row className={styles.image}
        ><Col>
          <Statistic
      prefix={prefix}
      title={title}
      value={value}
     
    />
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






