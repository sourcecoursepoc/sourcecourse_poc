import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select } from "antd";
import styles from "../ModalBox/groupsModalBox.module.css";
import FloatInput from "./floatInput";
import InfoCircleOutlinedFunction from "./infoCircleOutlined";

const GroupsThirdSide = () => {
    const { Option } = Select;
    const { TextArea } = Input;
  return (
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
                    <FloatInput
                    label="Alias"
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
                      {<InfoCircleOutlinedFunction value={""} tooltipTitle={"This information is about alias"}/>}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                    label="Prefix Value"
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
                      {<InfoCircleOutlinedFunction value={""} tooltipTitle={"This information is about prefix value"}/>}
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
                      {<InfoCircleOutlinedFunction value={""} tooltipTitle={"This information is about default value"}/>}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                    label="Suffix Value"
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
                      {<InfoCircleOutlinedFunction value={""} tooltipTitle={"This information is about suffix value"}/>}
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
              suffixIcon={<InfoCircleOutlined style={{marginRight:"15rem",color:"#7e60bc"}} />}
            >
              <Option value="Value Type 1">Selection 1</Option>
            </Select>
          </Row>
        </Col>
  );
};

export default GroupsThirdSide;
