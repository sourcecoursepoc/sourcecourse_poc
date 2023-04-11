import React from "react";
import { Button, Card, Col, Row, Divider } from "antd";
import styles from "./topBox.module.css";
import TopInnerBox from "./topBoxInnerBox";
import TopBoxRight from "./topBoxRight";

const TopBox: React.FC = () => {
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };

  return (
    <div className={styles.topBox}>
      <Row>
        <Col span={12}>
          <TopInnerBox></TopInnerBox>
        </Col>
        <Col
          span={1}
          style={{ borderLeft: "1px solid #9a9696", marginTop: "0.625rem" }}
        ></Col>
        <Col span={11}>
          <TopBoxRight></TopBoxRight>
        </Col>
      </Row>
    </div>
  );
};
export default TopBox;
