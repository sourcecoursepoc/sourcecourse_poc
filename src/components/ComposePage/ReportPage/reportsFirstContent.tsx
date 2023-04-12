import { Col, Row } from 'antd';
import React from 'react';
import styles from './reportsFirstContent.module.css';

interface ReportsComponent{
    schemaNumber:string;
    schemaName:string;
    groupNumber:string;
    groupName:string;

}
const ReportsFirstContent:React.FC<ReportsComponent> = ({schemaNumber,schemaName,groupNumber,groupName}) => {
  return (
    <>
    <div className={styles.outerbox}>

      <Row className={styles.innerBox1} >        
      <p className={styles.number}>{schemaNumber}</p><p className={styles.name}>{schemaName}</p>
      </Row>
      <Row className={styles.innerBox2}>        
     <p className={styles.number}> {groupNumber}</p><p className={styles.name}>{groupName}</p>
      </Row>
    </div>
  </>
  )
}

export default ReportsFirstContent