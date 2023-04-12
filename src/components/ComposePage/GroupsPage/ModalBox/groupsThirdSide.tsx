import DescriptionBox from "@/pages/schemas/descriptionbox";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import styles from "../ModalBox/groupsModalBox.module.css";
import FloatInput from "./floatInput";
import InfoCircleOutlinedFunction from "./infoCircleOutlined";
interface MyModalProps {
  selectedNodeDetails: any[];
  setSelectedNodeDetails: () => void;
}

const GroupsThirdSide: React.FC<MyModalProps> = ({
  selectedNodeDetails,
  setSelectedNodeDetails,
}) => {
  const { Option } = Select;
  const { TextArea } = Input;
  return (
    <>
      {selectedNodeDetails?.map((node: any) => (
        // eslint-disable-next-line react/jsx-key
        <Col span={10} style={{ marginTop: "0.5rem", paddingLeft: "0.5rem" }}>
          <Row className={styles.descriptionbox}>
            <DescriptionBox
              placeholder="Notes"
              value={node.notes}
              style={{ height: "5rem", width: "25rem" }}
            />
          </Row>
          <Row style={{ borderBottom: "1px solid #ccc", marginTop: "-0.5rem" }}>
            <p style={{ fontSize: "14px",fontWeight:'400',color:'black' }}>Transform</p>
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
                    <FloatInput
                      label="Alias"
                      dataValue={node.alias}
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {
                        <InfoCircleOutlinedFunction
                          value={""}
                          tooltipTitle={"This information is about alias"}
                        />
                      }
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                      label="Prefix Value"
                      dataValue={node.prefixValue}
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {
                        <InfoCircleOutlinedFunction
                          value={""}
                          tooltipTitle={
                            "This information is about prefix value"
                          }
                        />
                      }
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                      label="Default Value"
                      dataValue={node.defaultValue}
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {
                        <InfoCircleOutlinedFunction
                          value={""}
                          tooltipTitle={
                            "This information is about default value"
                          }
                        />
                      }
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                      label="Suffix Value"
                      dataValue={node.suffixValue}
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {
                        <InfoCircleOutlinedFunction
                          value={""}
                          tooltipTitle={
                            "This information is about suffix value"
                          }
                        />
                      }
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
              suffixIcon={
                <InfoCircleOutlined
                  style={{ marginRight: "10rem", color: "#7e60bc" }}
                />
              }
            >
              <Option value="Tag 1">Selection 1</Option>
            </Select>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Select
              style={{ width: "100%", height: "100%" }}
              value="Convert Values"
              suffixIcon={
                <InfoCircleOutlined
                  style={{ marginRight: "15rem", color: "#7e60bc" }}
                />
              }
            >
              <Option value="Value Type 1">Selection 1</Option>
            </Select>
          </Row>
        </Col>
      ))}
    </>
  );
};

export default GroupsThirdSide;
