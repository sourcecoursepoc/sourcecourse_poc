import React from 'react'
import { Col, Input, Row } from "antd";
import FloatInput from "./floatInput";
import { SwapOutlined } from '@ant-design/icons';
import { InfoCircleOutlined,PlusCircleOutlined,DeleteFilled } from "@ant-design/icons";

function convertValues({index,name,arrayLength,onConvertDeleteClick}: { index: number; name: string; arrayLength: number; onConvertDeleteClick: () => void }) {
  return (
    <div>
                      <Row>
                <Col span={7}>
                  <div style={{ position: "relative", marginBottom: "1rem" }} >
                  <FloatInput
                    label="Attribute Value"
                      placeholder="Attribute Value"
                      name="filter"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                   
                  </div>
                </Col>
                <Col span={1} style={{
                        textAlign: "center",
                        marginLeft: "52px",
                        marginTop: "12px",
                        opacity: "0.5"
                      }}>
                <SwapOutlined /> 
                </Col>
                <Col span={11}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                    label="Desired Value"
                      placeholder="Desired Value"
                      name="filter"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    
                  </div>
                </Col>
                <Col>
                    <DeleteFilled style={{ color: "red", marginTop: "1rem" }} onClick={onConvertDeleteClick}/>
                    </Col>
                </Row>
    </div>
  )
}

export default convertValues
