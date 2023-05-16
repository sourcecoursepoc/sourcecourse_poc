import { Col, Input, Row } from "antd";
import React from "react";
import styles from "./textArea.module.css";

const TextAreaComponent = (props) => {
  return (
    <Col
      span={15}
      style={{ marginLeft: "5rem" }}
      className={styles.textAreaBorder}
    >
      <Row style={{ marginBottom: "1rem", width: "50%" }}>
        <Input
          placeholder="Name"
          className={styles.customTextArea}
          value={props.nameValue}
          onChange={(e) => props.onNameChange(e.target.value)}

        />
      </Row>
      <Row style={{ marginBottom: "1rem", width: "100%" }}>
        <Input
          placeholder="Description"
          className={styles.customTextArea}
          value={props.descriptionValue}
          onChange={(e) => props.onDescriptionChange(e.target.value)}
        />
      </Row>
    </Col>
  );
};

export default TextAreaComponent;
