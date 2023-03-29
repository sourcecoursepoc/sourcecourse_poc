import { fetchDataBaseRequest } from "@/redux/actions/schemasaction";
import {
  getDataBaseSelector,
  getSelectedArraySelector,
} from "@/redux/selector";
import { Col, Input, Modal, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TreeView from "../../../../pages/schemas/treeview";
import styles from "../ModalBox/groupsModalBox.module.css";
import GroupsModalBoxButtons from "./groupsModalBoxButtons";
import SearchBar from "./searchBar";

interface MyModalProps {
  visible?: boolean;
  onCancel?: () => void;
}

const GroupsModalBox: React.FC<MyModalProps> = ({ visible, onCancel }) => {
  const { TextArea } = Input;
  const [schema, setSchema] = useState<string | null>(null);

  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const selcectData = useSelector(getSelectedArraySelector);
  const Columns = selcectData.map(node => node.columns);
  console.log("cccccccccccccc",Columns);

  useEffect(() => {
    dispatch(fetchDataBaseRequest());
  }, []);

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
        <Col
          span={15}
          style={{
            marginLeft: "-1rem",
            marginRight: "0.5rem",
            borderRight: "1px solid #ccc",
            marginBottom: "0.5rem",
          }}
        >
          <Row style={{ marginBottom: "0.5rem", width: "60%" }}>
            <Col span={24}>
              <Input placeholder="Name" style={{ borderRadius: "3px" }} />
            </Col>
          </Row>
          <Row style={{ marginBottom: "1rem", width: "95%" }}>
            <Col span={24}>
              <Input
                placeholder="Description"
                style={{ borderRadius: "3px" }}
              />
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
          <GroupsModalBoxButtons />
        </Col>
      </Row>
      <Row style={{ height: "29rem" }}>
        <Col span={6} style={{ borderRight: "1px solid #ccc", height: "100%" }}>
          <Row style={{ marginTop: "1rem" }}>
            <Col span={24} style={{ marginLeft: "-1rem" }}>
              {/* <SearchBar /> */}
              <Input
                placeholder="Search"
                style={{ borderColor: "#ccc", borderRadius: "3px" }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col span={24} className={styles.treeview}>
              <TreeView db={database} />
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ borderRight: "1px solid #ccc" }}>
          {selcectData.map((node) => (
            <>
              <Row key={node.name} className={styles.rowTextStyle} align="middle">
              <Col span={20}>
              {node.name && <p>{node.name}<br/></p>}
  </Col>
              </Row>
              <Row className={styles.lowerDivider}></Row>
            </>
          ))}
        </Col>
        <Col span={10} style={{ marginTop: "0.5rem", paddingLeft: "0.5rem" }}>
          <Row className={styles.descriptionbox}>
            <TextArea
              rows={2}
              placeholder="Notes"
              style={{ borderRadius: "3px" }}
            />
          </Row>
          <Row
            style={{ borderBottom: "1px solid #ccc", marginTop: "-0.75rem" }}
          >
            <p style={{ fontSize: "14px" }}>Transform</p>
          </Row>
          <Row style={{ marginTop: "0.5rem", width: "40%" }}>
            <Input
              defaultValue="fullName"
              style={{ borderColor: "#ccc", borderRadius: "3px" }}
            />
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
export default GroupsModalBox;
