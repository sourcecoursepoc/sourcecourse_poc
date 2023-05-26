import DescriptionBox from "@/pages/schemas/descriptionbox";
import { addAttributeDetails } from "@/redux/actions/schemasaction";
import { PlusCircleFilled } from "@ant-design/icons";
import { Col, Collapse, Input, Row, Select } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import styles from "../ModalBox/groupsModalBox.module.css";
import ConditionalDataSelection from "./conditionalDataSelection";
import ConvertValues from "./convertValues";
import FloatInput from "./floatInput";
import InfoCircleOutlinedFunction from "./infoCircleOutlined";

interface MyGroupsThirdProps {
  selectedNodeDetails: any[];
  setSelectedNodeDetails: () => void;
  lastIndices: any[];
  setLastIndices: any[];
}

const GroupsThirdSide: React.FC<MyGroupsThirdProps> = ({
  selectedNodeDetails,
  setSelectedNodeDetails,
  lastIndices,
  setLastIndices,
}) => {
  const { Option } = Select;
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string | undefined,
    key: string
  ) => {
    setSelectedNodeDetails((selectedNodeDetails) => {
      const updatedSelectedNodeDetails = selectedNodeDetails.map((node) => {
        if (node?.metadata?.[key] === value) {
          return {
            ...node,
            metadata: {
              ...node.metadata,
              [key]: e.target.value
            }
          };
        } else {
          return node;
        }
      });

      // Update the selected node directly in lastIndices
      const nodeIndexInLastIndices = lastIndices.findIndex(
        (selectedNode) => selectedNode?.id === updatedSelectedNodeDetails[0]?.id
      );
      const updatedLastIndices = [...lastIndices];
      updatedLastIndices[nodeIndexInLastIndices] = updatedSelectedNodeDetails[0];
      setLastIndices(updatedLastIndices);

      return updatedSelectedNodeDetails;
    });
  };

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
            <p style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>
              Transform
            </p>
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
                      dataValue={node?.metadata?.alias}
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                      onChange={(e) =>
                        handleInputChange(e, node?.metadata?.alias, 'alias')
                      }
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
                      dataValue={node?.metadata?.prefixValue}
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                      onChange={(e) => handleInputChange(e, node?.metadata?.prefixValue, 'prefixValue')}
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
                      dataValue={node?.metadata?.defaultValue}
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                      onChange={(e) => handleInputChange(e, node?.metadata?.defaultValue, 'defaultValue')}
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
                      dataValue={node?.metadata?.suffixValue}
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                      onChange={(e) => handleInputChange(e, node?.metadata?.suffixValue, 'suffixValue')}
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
        </Col>
      ))}
    </>
  );
};

export default GroupsThirdSide;
