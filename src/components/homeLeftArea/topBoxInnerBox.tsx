import React from "react";
import { Row,Col, Divider, Statistic } from "antd";
import styles from './topBoxInnerBox.module.css'
import { icons } from "antd/es/image/PreviewGroup";

const TopInnerBox: React.FC = () => {
  return (
   
   <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}
          ><Col>
            {/* image */}
            </Col>
        </Row>
          <Row className={styles.imageName}>
          <Col><p className={styles.discover}>Discover</p></Col></Row>
        </div>
        <div className={styles.innerright1}>
          <Row className={styles.image1}
          ><Col>
            {/* image */}
            </Col>
        </Row>
          <Row className={styles.imageName1}>
          <Col> <p className={styles.schema}>SCHEMA'S</p></Col></Row>
        </div>
        {/* <div className={styles.innerleft}>
          <Row className={styles.items}><Col><p>items</p></Col></Row>
        </div> */}
      </div>
  </>
  );
  };
export default TopInnerBox;






