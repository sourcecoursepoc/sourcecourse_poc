import { Col, Row } from 'antd';
import React from 'react';
import styles from './reportsCard.module.css';

interface ReportsComponent{
    cardNumber:number;
    cardName:string;
}
const ReportsCard:React.FC<ReportsComponent> = ({cardNumber,cardName}) => {
  return (
    <>
      <Row className={styles.innerBox1} >        
      <p className={styles.number}>{cardNumber}</p><p className={styles.name}>{cardName}</p>
      </Row>
  </>
  )
}

export default ReportsCard
