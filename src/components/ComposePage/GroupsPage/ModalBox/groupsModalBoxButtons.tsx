import React from "react";
import { Button, Col, Divider, Input, Modal, Row } from "antd";
import Buttons from "../../buttons/buttons";
import styles from "../ModalBox/groupsModalBox.module.css";
import { CloseOutlined, CopyFilled, DeleteFilled, SaveFilled } from "@ant-design/icons";

const GroupsModalBoxuttons = () => {
    return (
        <>
        <Row style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
            <Col span={6} style={{ padding: "0 6px" }}>
              <Buttons
                text={"Delete"}
                icon={<DeleteFilled className={styles.icon} />}
                size={"middle"}
                onClick={() => {}}
                href={""}
              />
            </Col>
            <Col span={6} style={{ padding: "0 6px" }}>
              <Buttons
                text="Clone"
                icon={<CopyFilled className={styles.icon} />}
                size={"middle"}
                onClick={() => {}}
                href={""}
              />
            </Col>
            <Col span={6} style={{ padding: "0 6px" }}>
              <Buttons
                text="Save"
                icon={<SaveFilled className={styles.icon} />}
                size={"middle"}
                onClick={() => {}}
                href={""}
              />
            </Col>
            <Col span={6} style={{ padding: "0 6px" }}>
              <Buttons
                text="Exit"
                icon={<CloseOutlined className={styles.icon} />}
                size={"middle"}
                onClick={() => {}}
                href={"/"}
              />
            </Col>
          </Row>
          </>
    )
  }
  
  export default GroupsModalBoxuttons