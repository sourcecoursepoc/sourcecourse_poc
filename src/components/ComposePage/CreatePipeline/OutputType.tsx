import React from 'react'
import { useState } from "react";
import { Row, Col, Button, Input } from "antd";
import { CheckOutlined } from '@ant-design/icons';
import styles from "./Schedule.module.css"

const OutputType = () => {

    const [selectedExportOption, setSelectedExportOption] = useState<string | null>(null);

    return (
        <>

            <Row>
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

            <Row>
            <Input placeholder="File Name" style={{
                width: '15rem',
                height: '3rem',
                marginTop: '1.5rem',
                marginBottom: "1rem",
                marginLeft: "0.3rem"
            }} />
            </Row>

            <Row>
            <Input placeholder="Intimation List" style={{
                width: '100%',
                height: '3rem',
                marginTop: '1rem',
                marginBottom: "1rem",
                marginLeft: "0.3rem"
            }}
            type="email" />
            </Row>

        </>

    )
}

export default OutputType