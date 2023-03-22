import React from 'react';
import { Card, Row, Col, Divider } from 'antd';
import styles from "./displaybox.module.css";
import "./content.module.css";
const DisplayBox = () => (
  <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}
          ><Col>
            image
            </Col>
        </Row>
          <Row className={styles.imageName}>
          <Col>schema</Col></Row>
        </div>
        <div className={styles.innerleft}>
          <Row className={styles.items}><Col><p>items</p></Col></Row>
        </div>
      </div>
  </>
);

export default DisplayBox;



