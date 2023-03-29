import { Button, Col, Divider, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import SearchBar from "./searchBar";
import styles from "../ModalBox/groupsModalBox.module.css";
import TextArea from "../../TextArea/textArea";
import ButtonComponent from "../../buttons/buttonComponent";
import Buttons from "../../buttons/buttons";
import MyTree from "../../../../pages/schemas/treeview";
import {
  CloseOutlined,
  CopyFilled,
  DeleteFilled,
  SaveFilled,
} from "@ant-design/icons";
import DescriptionBox from "@/pages/schemas/descriptionbox";

interface MyModalProps {
  visible?: boolean;
  onCancel?: () => void;
}

const GroupsModalBox: React.FC<MyModalProps > = ({
  visible,
  onCancel
}) => {
  const { TextArea } = Input;
  const [schema, setSchema] = useState<string | null>(null);

  function handleAddIconClick(node: string) {
    setSchema(node);
  }

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      width={1000}
      bodyStyle={{ height: "80vh", borderRadius: "5px" }}
    >
      <Row style={{ borderBottom: "1px solid #ccc" }}>
        <Col span={15} style={{ marginLeft: "-1rem", marginRight: "0.5rem",borderRight:"1px solid #ccc",marginBottom:"0.5rem" }}>
          <Row style={{ marginBottom: "0.5rem", width: "60%" }}>
            <Col span={24}>
              <Input placeholder="Name" style={{borderRadius:"3px"}}/>
            </Col>
          </Row>
          <Row style={{ marginBottom: "1rem", width: "95%" }}>
            <Col span={24}>
              <Input placeholder="Description" style={{borderRadius:"3px"}}/>
            </Col>
          </Row>
        </Col>
        <Col
          span={8}
          style={{
            marginBottom: "1rem",
            marginTop: "1.5rem",
            
          }}
        >
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
        </Col>
      </Row>
      <Row style={{ height:"29rem" }}>
        <Col span={6} style={{ borderRight: "1px solid #ccc",height: "100%" }}>
          <Row style={{ marginTop: "1rem" }}>
            <Col span={24} style={{ marginLeft: "-1rem" }}>
              {/* <SearchBar /> */}
              <Input defaultValue="Search" style={{ borderColor: "#ccc",borderRadius:"3px" }} />
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col span={24} className={styles.treeview}>
              <MyTree /*onAddIconClick={handleAddIconClick}*/ />
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ borderRight: "1px solid #ccc",paddingLeft:"0.5rem" }}>
          <Row>
          </Row>
        </Col>
        <Col span={10} style={{ marginTop: "0.5rem", paddingLeft: "0.5rem" }}>
          <Row className={styles.descriptionbox}>
            <TextArea rows={2} placeholder="Notes" style={{borderRadius:"3px"}}/>
          </Row>
          <Row
            style={{ borderBottom: "1px solid #ccc", marginTop: "-0.75rem" }}
          >
            <p style={{ fontSize: "14px" }}>Transform</p>
          </Row>
          <Row style={{ marginTop: "0.5rem", width: "40%" }}>
            <Input defaultValue="fullName" style={{ borderColor: "#ccc",borderRadius:"3px" }} />
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
export default GroupsModalBox;
