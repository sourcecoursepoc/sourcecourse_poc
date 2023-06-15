import React, { useState } from 'react'
import { Col, Input, Row } from "antd";
import FloatInput from "./floatInput";
import FloatSelect from "./floatSelect";
import { SwapOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { InfoCircleOutlined,PlusCircleOutlined,DeleteFilled } from "@ant-design/icons";

interface ConditionalDataSelectionProps {
  index?: number;
  name?: string;
  arrayLength?: number;
  onDeleteClick?: () => void;
}
function ConditionalDataSelection({index,name,arrayLength,onDeleteClick}:ConditionalDataSelectionProps) {
  const options = [
        { label: 'AND', value: 'AND' },
        { label: 'OR', value: 'OR' }
      ];

      const [value3, setRadioValue] = useState('');
      const [andStyle, setAndStyle] = useState({borderColor : "#ccc", padding: "5px", backgroundColor: "white", height:"3rem", borderInlineStart: "1px solid #d9d9d9",borderStartStartRadius: "2px", borderEndStartRadius: "2px"})
      const [orStyle, setOrStyle] = useState({borderColor : "#ccc", padding: "5px", backgroundColor: "white", height:"3rem", borderInlineStart: "1px solid #d9d9d9",borderStartEndRadius: "2px", borderEndEndRadius: "2px"})


      const onChange3 = (event: RadioChangeEvent) => {
          const {value, checked} = event.target
        console.log('radio3 checked', value,checked);
        setRadioValue(value)
        value === "AND" && checked
      ? setAndStyle({ borderColor : "rgb(102,100,100)",padding: "5px", backgroundColor: "rgb(102,100,100)", height:"3rem", borderInlineStart: "1px solid #d9d9d9",borderStartStartRadius: "2px", borderEndStartRadius: "2px"})
      : setAndStyle({borderColor : "#ccc", padding: "5px", backgroundColor: "white", height:"3rem",  borderInlineStart: "1px solid #d9d9d9",borderStartStartRadius: "2px", borderEndStartRadius: "2px"});
      value === "OR" && checked
      ? setOrStyle({ backgroundColor: "rgb(102,100,100)",padding: "5px",  borderColor : "rgb(102,100,100)", height:"3rem", borderInlineStart: "1px solid #d9d9d9",borderStartEndRadius: "2px", borderEndEndRadius: "2px"})
      : setOrStyle({borderColor : "#ccc",padding: "5px", backgroundColor: "white", height:"3rem", borderInlineStart: "1px solid #d9d9d9",borderStartEndRadius: "2px", borderEndEndRadius: "2px"});
      setRadioValue(value);
      };


  return (
    <div>
              <Row>
                <Col span={7}>
                  <div style={{ position: "relative", marginBottom: "1rem" }} >
                    <FloatSelect label="Condition"
                      placeholder="Condition"
                    />
                   
                  </div>
                </Col>
                <Col span={1} style={{
                        textAlign: "center",
                        marginLeft: "-13px",
                        marginTop: "12px",
                        opacity: "0.5"
                      }}>
                <SwapOutlined /> 
                </Col>
                <Col span={8}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                    label="Filter Value"
                      placeholder="Filter Value"
                      name="filter"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "6rem",
                      }}
                    />
                    
                  </div>
                </Col>
                <Col span={1} style={{
                        textAlign: "center",
                        marginLeft: "-29px",
                        marginTop: "12px",
                        opacity: "0.5"
                      }}>
                <SwapOutlined /> 
                </Col>
                <Col><Radio.Group 
                // options={options} 
                onChange={onChange3} 
                 value={value3} 
                optionType="button" 
                buttonStyle="solid"
                 style={{width : "5rem"}}
                >
        <Radio.Button style={andStyle} value="AND" checked={true}>
          AND
        </Radio.Button>
        <Radio.Button style={orStyle} value="OR">
          OR
        </Radio.Button>
                    </Radio.Group></Col>
                    <Col>
                    <DeleteFilled style={{ color: "red", marginTop: "1rem" }} onClick={onDeleteClick}/>
                    </Col>
              </Row>
              <Row>
                
              </Row>
            
    </div>
  )
}

export default ConditionalDataSelection
