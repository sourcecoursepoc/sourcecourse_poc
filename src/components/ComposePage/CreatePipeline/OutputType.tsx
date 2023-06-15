import React from 'react'
import { useState } from "react";
import { Row, Col, Button, Input } from "antd";
import { CheckOutlined } from '@ant-design/icons';
import styles from "./Schedule.module.css"
import FloatInput from "../GroupsPage/ModalBox/floatInput"
import IntimationListInputBox from './IntimationListInputBox';

const OutputType = ({ selectedExportOption, setSelectedExportOption,onValueChange ,onFloatInputChange }) => {

    // const [selectedExportOption, setSelectedExportOption] = useState<string | null>(null);

    const [tags, setTags] = useState<string[]>([]);
    const [value, setValue] = useState("");
    const [floatInputValue, setFloatInputValue] = useState("");
    
      React.useEffect(() => {
        onValueChange(value);
      }, [value, onValueChange]);
      const handleFloatInputValueChange = (e) => {
        setFloatInputValue(e.target.value);
        console.log("floatInputValue",floatInputValue)
    }
     React.useEffect(() => {
        onFloatInputChange(floatInputValue);
      }, [floatInputValue, onFloatInputChange]);
  
    return (
        <>
            <Row style={{ marginTop: "2.5rem" }}>
                <Button className={styles.buttonCalender}
                    icon={selectedExportOption === "JSON" ? <CheckOutlined /> : undefined}
                    onClick={() => setSelectedExportOption("JSON")}
                    type={selectedExportOption === "JSON" ? "primary" : undefined}
                    style={{ backgroundColor: selectedExportOption === "JSON" ? "#7E60BC" : undefined }}
                >JSON</Button>
                <Button className={styles.buttonCalender}
                    icon={selectedExportOption === "XML" ? <CheckOutlined /> : undefined}
                    onClick={() => setSelectedExportOption("XML")}
                    type={selectedExportOption === "XML" ? "primary" : undefined}
                    style={{ backgroundColor: selectedExportOption === "XML" ? "#7E60BC" : undefined }}
                >XML</Button>
                <Button className={styles.buttonCalender}
                    icon={selectedExportOption === "EXCEL" ? <CheckOutlined /> : undefined}
                    onClick={() => setSelectedExportOption("EXCEL")}
                    type={selectedExportOption === "EXCEL" ? "primary" : undefined}
                    style={{ backgroundColor: selectedExportOption === "EXCEL" ? "#7E60BC" : undefined }}
                >EXCEL</Button>
                <Button className={styles.buttonCalender}
                    icon={selectedExportOption === "TEXT FILE" ? <CheckOutlined /> : undefined}
                    onClick={() => setSelectedExportOption("TEXT FILE")}
                    type={selectedExportOption === "TEXT FILE" ? "primary" : undefined}
                    style={{ backgroundColor: selectedExportOption === "TEXT FILE" ? "#7E60BC" : undefined }}
                >TEXT FILE</Button>
            </Row>

            <Row style={{
                marginTop: '1.5rem',
                marginLeft: '0.3rem',
            }}>
                <FloatInput label="File Name" placeholder="File Name" style={{
                    width: '15rem',
                    height: '3rem',
                }} 
                dataValue={floatInputValue} // Pass the value prop
                onChange={handleFloatInputValueChange} />
            </Row>

            <Row style={{
                marginTop: '2rem',
                marginLeft: '0.3rem',
            }}>

            <IntimationListInputBox tags={tags} setTags={setTags} placeholder="Intimation List" label="Intimation List"value={value} setValue={setValue} />
            
            </Row>

        </>
    )
}

export default OutputType