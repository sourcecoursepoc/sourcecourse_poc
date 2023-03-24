import React from "react";
import { Row, Col, Divider, Statistic } from "antd";
import styles from "./innerBox.module.css";
import { icons } from "antd/es/image/PreviewGroup";
import { Image } from "antd";
import { CloudSyncOutlined, ClusterOutlined } from "@ant-design/icons";
export interface ChildComponentProps {
  image: string;
}
interface MyStatisticProps {
  prefix: JSX.Element;
  title: string;
  value: number;
}
export default function () {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}>
            <Col>
              <CloudSyncOutlined style={{ fontSize: "45px" }} />
            </Col>
          </Row>
          <Row className={styles.imageName}>
            <Col style={{ marginLeft: "13px" }}>Sync</Col>
          </Row>
        </div>
        <div className={styles.innerleft}>
          <Row className={styles.items}>
            <Col
              style={{
                fontWeight: 350,
                fontSize: "2rem",
                color: "gray",
              }}
            >
              32
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
