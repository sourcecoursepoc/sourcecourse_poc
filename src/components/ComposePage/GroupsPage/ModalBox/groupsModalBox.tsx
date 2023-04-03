import TableTree from "@/pages/schemas/tableTree";
import TreeView from "@/pages/schemas/treeview";
import { fetchDataBaseRequest, fetchGroupDataRequest } from "@/redux/actions/schemasaction";
import {
  getDataBaseSelector,
  getGroupdataDataBaseSelector,
  getSelectedArraySelector
} from "@/redux/selector";
import { Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../ModalBox/groupsModalBox.module.css";
import AttributeButton from "./attributeButton";
import GroupsModalBoxButtons from "./groupsModalBoxButtons";
import GroupsThirdSide from "./groupsThirdSide";
import MiddleIcons from "./middleIcons";

interface MyModalProps {
  visible?: boolean;
  onCancel?: () => void;
  //tableDb?: TableProps[];
}

const GroupsModalBox: React.FC<MyModalProps> = ({ visible, onCancel}) => {
  const [schema, setSchema] = useState<string | null>(null);
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const groupdataDatabase = useSelector(getGroupdataDataBaseSelector);
  const selcectData = useSelector(getSelectedArraySelector);


  useEffect(() => {
    dispatch(fetchDataBaseRequest());
    dispatch(fetchGroupDataRequest());
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
      bodyStyle={{ height: "80vh", borderRadius: "5px", width: "100%" }}
    >
      <Row style={{ borderBottom: "1px solid #ccc" }}>
        <Col
          span={15}
          style={{
            marginLeft: "0.15rem",
            marginRight: "0.5rem",
            borderRight: "1px solid #ccc",
            marginBottom: "0.25rem",
          }}
        >
          <Row
            style={{ marginBottom: "1rem", width: "60%", marginTop: "0.25rem" }}
          >
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
            marginTop: "0.5rem",
          }}
        >
          <GroupsModalBoxButtons />
        </Col>
      </Row>
      <Row style={{ height: "29rem",width:"60rem" }}>
        <Col span={6} style={{ borderRight: "1px solid #ccc", height: "95%" }}>
          <Row style={{ marginTop: "1rem",width:"14rem" }}>
            <Col span={24} style={{ marginLeft: "0.15rem" }}>
              {/* <SearchBar /> */}
              <Input
                placeholder="Search"
                style={{ borderColor: "#ccc", borderRadius: "3px",width:"40" }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col span={24} className={styles.treeview}>
            {groupdataDatabase && <TreeView db={database}/>}
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ borderRight: "1px solid #ccc", height: "95%" }}>
          <AttributeButton />
          {selcectData.map((node,index) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Row
                  key={node.name}
                  className={styles.rowTextStyle}
                  align="middle"
                >
                  <Col span={28}>
                    {node.name && (
                      <p>
                        {node.name}
                        <br />
                      </p>
                    )}
                  </Col>
                </Row>
                <MiddleIcons index={index} />
              </div>
              <Row className={styles.lowerDivider}></Row>
            </>
          ))}
        </Col>
        {/* third partition area */}
          <GroupsThirdSide/>
       
      </Row>
    </Modal>
  );
};
export default GroupsModalBox;
