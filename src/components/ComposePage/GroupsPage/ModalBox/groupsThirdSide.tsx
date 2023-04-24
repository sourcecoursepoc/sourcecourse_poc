import DescriptionBox from "@/pages/schemas/descriptionbox";
import { addAttributeDetails } from "@/redux/actions/schemasaction";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import styles from "../ModalBox/groupsModalBox.module.css";
import FloatInput from "./floatInput";
import InfoCircleOutlinedFunction from "./infoCircleOutlined";
interface MyModalProps {
  selectedNodeDetails: any[];
  setSelectedNodeDetails: () => void;
  lastIndices: any[];
  setLastIndices: Dispatch<SetStateAction<any[]>>;
}

const GroupsThirdSide: React.FC<MyModalProps> = ({
  selectedNodeDetails,
  setSelectedNodeDetails,
  lastIndices,
  setLastIndices,
}) => {
  const { Option } = Select;
  const { TextArea } = Input;
  const dispatch = useDispatch();
  ////////
 const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  value: string,
  key:string
) => {
  console.log(e,"e")
  console.log(value,"field")
  console.log(key,"key")
  setSelectedNodeDetails(selectedNodeDetails => {
    console.log(lastIndices, "lasttttttttttttttttttttt");
    const updatedNodeDetails = selectedNodeDetails.map(node => {
      // console.log(node?.metadata, "nodeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      // console.log(alias, "aliassss");
      // console.log(prefixValue, "prefixValueeee");
      // return { ...node, metadata: { ...node.metadata, [field]: e.target.value } };
      // if (node?.metadata?.[key] === value) {
      //   return { ...node, metadata: { ...node.metadata, value: e.target.value } };
      // }
      
        return { ...node, metadata: { ...node.metadata, [key]: value } };
      
      // return node;
    });
    return updatedNodeDetails;
  });
};
console.log(selectedNodeDetails, "qqqqqqqqqqqqqqqqqq");


  ////////
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
                        handleInputChange(e, node?.metadata?.alias,'alias')
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
                      onChange={(e) => handleInputChange(e, node?.metadata?.prefixValue,'prefixValue')}
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
                      onChange={(e) => handleInputChange(e, node?.metadata?.defaultValue,'defaultValue')}
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
                      onChange={(e) => handleInputChange(e, node?.metadata?.suffixValue,'suffixValue')}
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
