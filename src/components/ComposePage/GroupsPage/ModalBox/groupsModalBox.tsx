import { fetchPipeline } from "@/redux/actions/fetchDataAction";
import { fetchDataBaseRequest } from "@/redux/actions/schemasaction";
import {
  getDataBaseSelector,
  getSelectedArraySelector,
} from "@/redux/selector";
import { getPipelineSelector } from "@/redux/selectors";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Input, Modal, Row, Select, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TreeView from "../../../../pages/schemas/treeview";
import styles from "../ModalBox/groupsModalBox.module.css";
import AttributeButton from "./attributeButton";
import GroupsModalBoxButtons from "./groupsModalBoxButtons";
import InfoCircleOutlinedFunction from "./infoCircleOutlined";
import MiddleIcons from "./middleIcons";

interface MyModalProps {
  visible?: boolean;
  onCancel?: () => void;
}

const GroupsModalBox: React.FC<MyModalProps> = ({ visible, onCancel }) => {
  const { Option } = Select;
  const { TextArea } = Input;
  const [schema, setSchema] = useState<string | null>(null);

  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const selcectData = useSelector(getSelectedArraySelector);
  const Columns = selcectData.map((node) => node.columns);
  console.log("cccccccccccccc", Columns);


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
      <Row style={{ height: "29rem" }}>
        <Col span={6} style={{ borderRight: "1px solid #ccc", height: "95%" }}>
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
        <Col span={8} style={{ borderRight: "1px solid #ccc", height: "95%" }}>
          <AttributeButton />
          {selcectData.map((node) => (
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
                <MiddleIcons />
              </div>
              <Row className={styles.lowerDivider}></Row>
            </>
          ))}
        </Col>

        {/* third partition area */}

        <Col span={10} style={{ marginTop: "0.5rem", paddingLeft: "0.5rem" }}>
          <Row className={styles.descriptionbox}>
            <TextArea
              rows={2}
              placeholder="Notes"
              style={{ borderRadius: "3px" }}
            />
          </Row>
          <Row style={{ borderBottom: "1px solid #ccc", marginTop: "-0.5rem" }}>
            <p style={{ fontSize: "14px" }}>Transform</p>
          </Row>
          <Row
            style={{
              marginTop: "1rem",
              marginLeft: "0.5rem",
              borderBottom: "1px solid #ccc",
            }}
          >
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <Input
                      placeholder="Alias"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {<InfoCircleOutlinedFunction value={""} />}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <Input
                      placeholder="Prefix Value"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {<InfoCircleOutlinedFunction value={""} />}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <Input
                      placeholder="Default Value"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {<InfoCircleOutlinedFunction value={""} />}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <Input
                      placeholder="Suffix Value"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {<InfoCircleOutlinedFunction value={""} />}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Select
              style={{ width: "100%", height: "100%" }}
              value="Conditional Data Selection"
              suffixIcon={<InfoCircleOutlined style={{marginRight:"10rem",color:"#7e60bc"}}/>}
            >
              <Option value="Tag 1">Selection 1</Option>
            </Select>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Select
              style={{ width: "100%", height: "100%" }}
              value="Convert Values"
              suffixIcon={<InfoCircleOutlined style={{marginRight:"15rem",color:"#7e60bc"}}/>}
            >
              <Option value="Value Type 1">Selection 1</Option>
            </Select>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
export default GroupsModalBox;
