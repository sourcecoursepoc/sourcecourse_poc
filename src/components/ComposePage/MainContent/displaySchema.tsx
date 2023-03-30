import React, { ReactNode } from "react";
import { Card, Row, Col, Divider } from "antd";
import styles from "./displaySchema.module.css";
import { DeleteFilled } from "@ant-design/icons";

interface MyComponentProps {
  text: string;
  attribute: string;
  icon: ReactNode;
}

const DisplaySchemaBox: React.FC<MyComponentProps> = ({ text, attribute, icon }) => {
  
  //const selcectedMetaData = useSelector(getSelectedArraySelector);
  //const selectedMetaData = selcectedMetaData.map(node => node.metadata);
 // console.log(selectedMetaData, "selectedMetaDataselectedMetaDataselectedMetaData");
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
         
          <Col className={styles.image}>
              {icon}
            </Col>
        </div>
        <div style={{width:'inherit'}}>
          <Row className={styles.items}><Col style={{width:'90%',fontSize:'1rem',textAlign:'justify',height:'auto'}}>
            {text}</Col>
          <Col style={{paddingLeft:'10px'}}>
         <DeleteFilled style={{color:"red",height:'auto'}} />
          </Col>
          
          </Row>
          <Row className={styles.imageName}>
            <Col className={styles.imageNameText}>
              <p >{attribute}
              </p>
            </Col></Row>
        </div>
      </div>

    </>
  );
};

export default DisplaySchemaBox;
