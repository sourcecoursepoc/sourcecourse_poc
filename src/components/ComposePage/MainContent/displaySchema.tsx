import React, { ReactNode } from "react";
import { Card, Row, Col, Divider } from "antd";
import styles from "./displaySchema.module.css";

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
          <Row className={styles.image}
          ><Col>
              {icon}
            </Col>
          </Row>
          {/* <Row className={styles.imageName}>
            <Col className={styles.imageNameText}>
              <p >{attribute}
              </p>
            </Col></Row> */}
        </div>
        <div className={styles.innerleft}>
          <Row className={styles.items}><Col><p >{text}</p></Col>
          
          </Row>
        </div>
      </div>

    </>
  );
};

export default DisplaySchemaBox;
