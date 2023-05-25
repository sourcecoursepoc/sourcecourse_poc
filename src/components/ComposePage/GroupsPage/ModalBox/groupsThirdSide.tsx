import DescriptionBox from "@/pages/schemas/descriptionbox";
import { InfoCircleOutlined,PlusCircleOutlined,PlusCircleFilled } from "@ant-design/icons";
import { Col, Input, Row, Select } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "../ModalBox/groupsModalBox.module.css";
import FloatInput from "./floatInput";
import InfoCircleOutlinedFunction from "./infoCircleOutlined";
import { Collapse, Divider,Button } from 'antd';
import ConditionalDataSelection from "./conditionalDataSelection";
import ConvertValues from "./convertValues"

interface MyModalProps {
  selectedNodeDetails: any[];
  setSelectedNodeDetails: (details: any[]) => void;
}

const GroupsThirdSide: React.FC<MyModalProps> = ({
  selectedNodeDetails,
  setSelectedNodeDetails,
}) => {
  const { Option } = Select;
  const { TextArea } = Input;
  const { Panel } = Collapse;

  const conList = [{id: Math.random(),
    component : <ConditionalDataSelection key={Math.random()}/>}]
    
    const convList = [{id: Math.random(),
      component : <ConvertValues key={Math.random()}/>}]
    
    const [conditionalList, setConditionalList] = useState(conList)
    const [convertList, setConvertList] = useState(convList)
    
    function addCondition(id:number) {
      setConditionalList(conditionalList.concat({id:id, component: <ConditionalDataSelection key={id}/>}))
    }
    
    function addConvertValues(id:number) {
      setConvertList(convertList.concat({id:id, component:<ConvertValues key={id} />}))
    }
    
    const onDeleteClick = (index: number) => {
      console.log("deleted index",index)
      const newConditionalList = [...conditionalList];
      newConditionalList.splice(index, 1);
      setConditionalList(newConditionalList);
    };
    
    const onConvertDeleteClick = (index: number) => {
      const newConvertList = [...convertList];
      newConvertList.splice(index, 1);
      setConvertList(newConvertList);
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
          <Collapse style={{ width: "100%", height: "50%" }} expandIconPosition="right">
      <Panel header={<span><span style={{ fontSize: "12px", fontWeight: "bold" }}>Conditional Data Selection
          </span><InfoCircleOutlinedFunction
                          value={""}
                          tooltipTitle={
                            "This information is about suffix value"
                          }
                        /></span>} key="1" >
                          

        {conditionalList.map((node, index) => (

              <div key={node.id}>
                <ConditionalDataSelection
                  index={index}
                  arrayLength={conditionalList.length - 1}
                  name=""
                  onDeleteClick={() => onDeleteClick(index)}
                />
                 
</div>
 ))
              }


<Row>
        <Col span={24}  type="flex" align="middle" >
        <PlusCircleFilled
                          value={"+"}
                          style ={{color:"#7e60bc", fontSize:"20px"}}
                          onClick={()=>addCondition(Math.random())}
                        />
    </Col>
        
                        </Row>
      </Panel>
    </Collapse>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
          <Collapse style={{ width: "100%", height: "50%" }} expandIconPosition="right">
      <Panel header={<span><span style={{ fontSize: "12px", fontWeight: "bold" }}>Convert Values
          </span><InfoCircleOutlinedFunction
                          value={""}
                          tooltipTitle={
                            "This information is about converting values"
                          }
                        /></span>} key="1" >
         {convertList?.map((node, index) => (
             <div key={node.id}>
                <ConvertValues
                  index={index}
                  arrayLength={convertList.length - 1}
                  name=""
                  onConvertDeleteClick={() => onConvertDeleteClick(index)}
                /></div>))
               }

<Row>
        <Col span={24}  type="flex" align="middle" >
        <PlusCircleFilled
                          value={"+"}
                          style ={{color:"#7e60bc", fontSize:"20px"}}
                          onClick={()=>addConvertValues(Math.random())}
                        />
    </Col>
        
                        </Row>
      </Panel>
    </Collapse>
          </Row>
        </Col>
      ))}
    </>
  );
};

export default GroupsThirdSide;
