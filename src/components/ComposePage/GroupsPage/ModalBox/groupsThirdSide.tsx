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
    value: string | undefined,
    key: string
  ) => {
    console.log(selectedNodeDetails,"first--selectedNodeDetails")
    setSelectedNodeDetails((selectedNodeDetails) => {
      console.log(selectedNodeDetails,"--in--selectedNodeDetails")
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
      // dispatch(addAttributeDetails(updatedSelectedNodeDetails));
      console.log(updatedSelectedNodeDetails, "updatedSelectedNodeDetails--updatedSelectedNodeDetails");
      return updatedSelectedNodeDetails;
    });
    
  };
  console.log(selectedNodeDetails, "--out--selectedNodeDetails--selectedNodeDetails");
  
  ////////


  // const { Panel } = Collapse;

  // const conList = [{id: Math.random(),
  //   component : <ConditionalDataSelection key={Math.random()}/>}]
    
  //   const convList = [{id: Math.random(),
  //     component : <ConvertValues key={Math.random()}/>}]
    
  //   const [conditionalList, setConditionalList] = useState(conList)
  //   const [convertList, setConvertList] = useState(convList)
    
  //   function addCondition(id:number) {
  //     setConditionalList(conditionalList.concat({id:id, component: <ConditionalDataSelection key={id}/>}))
  //   }
    
  //   function addConvertValues(id:number) {
  //     setConvertList(convertList.concat({id:id, component:<ConvertValues key={id} />}))
  //   }
    
  //   const onDeleteClick = (index: number) => {
  //     console.log("deleted index",index)
  //     const newConditionalList = [...conditionalList];
  //     newConditionalList.splice(index, 1);
  //     setConditionalList(newConditionalList);
  //   };
    
  //   const onConvertDeleteClick = (index: number) => {
  //     const newConvertList = [...convertList];
  //     newConvertList.splice(index, 1);
  //     setConvertList(newConvertList);
  //   };
    

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
          {/* <Row style={{ marginTop: "1rem" }}>
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
          </Row> */}
        </Col>
      ))}
    </>
  );
};

export default GroupsThirdSide;
