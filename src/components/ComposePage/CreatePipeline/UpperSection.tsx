import React from 'react'
import { Col, Modal, Row, Card } from "antd";
import Buttons from '../buttons/buttons';
import { PlayCircleFilled } from "@ant-design/icons";
import CardDisplay from './CardDisplay';
import styles from '../buttons/buttonStyle.module.css'

const UpperSection = () => {
    return (
        <>
            <Row justify="space-between" style={{ borderBottom: "1px solid #ccc" }}>

                <Col
                    flex={3}
                    style={{
                        display:'flex',
                        marginBottom: "1rem",
                        marginTop: "0.5rem",
                    }}
                >
                    <CardDisplay alt="initial load" src="/Schemas.png" title="Initial Load"/>
                    <CardDisplay alt="Sync" src="/Sync-Icon-1.png" title="Sync"/>
                </Col>



                <Col
                    flex={1}
                    style={{
                        textAlign: "right",
                        marginBottom: "1rem",
                        marginTop: "0.5rem",
                    }}
                >
                    <Buttons
                        text="Execute"
                        icon={<PlayCircleFilled /> }
                        size={"large"}
                        style={{minWidth: "8rem"}}
                        onClick={() => { }}
                        href={"/"}
                    />

                </Col>

            </Row>
        </>
    )
}

export default UpperSection