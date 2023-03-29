import { Col, Input, Row } from 'antd'
import React from 'react';
import styles from './textArea.module.css';


const TextAreaComponent = () => {
  return (
<Col span={15} style={{marginLeft:"5rem"}} className={styles.textAreaBorder}  >
              <Row style={{marginBottom:"1rem",width:"50%"}} >
              <Input 
      placeholder="Name"
      className={styles.customTextArea}    
    />         
              </Row>
              <Row style={{marginBottom:"1rem",width:"100%"}} >
              <Input 
      placeholder="Description"
      className={styles.customTextArea}   
    />           
              </Row>
            </Col>
  )
}

export default TextAreaComponent

