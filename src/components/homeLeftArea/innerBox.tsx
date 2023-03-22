import React from "react";
import { Row, Divider, Statistic } from "antd";
import styles from './innerBox.module.css'
import { icons } from "antd/es/image/PreviewGroup";
import { title } from "process";
const InnerBox = () => {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerleft}>
          <Row
            style={{
              
              height: "100px",
              alignContent: "center",
              padding: "11px",
            }}
          >
        <Statistic></Statistic>
          </Row>
          <Row style={{ alignContent: "center", padding: "11px" }}>{/* schema */}</Row>
        </div>
        <div className={styles.innerright}>
          <Row style={{ textAlign: "center", padding: "11px" }}>
            <p>{/* items */}</p>
          </Row>
        </div>
      </div>
    </>
  );
};

export default InnerBox;
