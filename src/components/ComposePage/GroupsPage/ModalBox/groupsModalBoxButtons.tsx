import React from "react";
import { Button, Col, Divider, Input, Modal, Row } from "antd";
import Buttons from "../../buttons/buttons";
import styles from "../ModalBox/groupsModalBox.module.css";
import { CloseOutlined, CopyFilled, DeleteFilled, SaveFilled,BranchesOutlined } from "@ant-design/icons";
import DeleteButtonModalBox from "./deleteButtonModalBox";

const GroupsModalBoxuttons = () => {
    return (
        <>
        <Row style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
            <Col span={6} style={{ padding: "0 6px" }}>
              <Button className={styles.mygroupbutton}
                icon={<DeleteFilled className={styles.icon} />}
                size={"middle"}
                type="primary"
                shape="round"
                onClick={() => {}}
                href={""}
                
              >Delete</Button>
            </Col>
            <Col span={6} style={{ padding: "0 6px" }}>
            <Button className={styles.mygroupbutton}
                icon={<CopyFilled className={styles.icon} />}
                size={"middle"}
                type="primary"
                shape="round"
                onClick={() => {}}
                href={""}
                
              >Clone</Button>
            </Col>
            <Col span={6} style={{ padding: "0 6px" }}>
            <Button className={styles.mygroupbutton}
                icon={<SaveFilled className={styles.icon} />}
                size={"middle"}
                type="primary"
                shape="round"
                onClick={() => {}}
                href={""}
                
              >Save</Button>
            </Col>
            <Col span={6} style={{ padding: "0 6px" }}>
            <Button className={styles.mygroupbutton}
                icon={<CloseOutlined className={styles.icon} />}
                size={"middle"}
                type="primary"
                shape="round"
                onClick={() => {}}
                href={""}
                
              >Exit</Button>
            </Col>
            <Col span={6} >
              <Button icon={<BranchesOutlined className={styles.icon} />} className={styles.pipelinebutton}>Create Pipeline</Button>
            </Col>
          </Row>
          </>
    )
  }
  
  export default GroupsModalBoxuttons