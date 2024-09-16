import React, { useEffect, useState } from 'react'
import { Col, Modal, Row, Card } from "antd";
import Buttons from '../buttons/buttons';
import { PlayCircleFilled } from "@ant-design/icons";
import CardDisplay from './CardDisplay';
import styles from '../buttons/buttonStyle.module.css'


interface UpperSectionProps {
    onSelectInitial: () => void;
    onSelectSync: () => void;
    cardSelected: string;
    onClickExecute:()=>void
    cardTitle:string
  }
  
 
const UpperSection: React.FC<UpperSectionProps>= ({ onSelectInitial, onSelectSync, cardSelected,onClickExecute,cardTitle }) => {

    return (
        <>
            <Row justify="space-between" style={{ borderBottom: "1px solid #ccc" }}>

                <Col
                    flex={3}
                    style={{
                        display: 'flex',
                        marginBottom: "1rem",
                        marginTop: "0.5rem",
                    }}
                >
                    <CardDisplay isThisCardSelected={cardSelected === "initial" ? true : false} onSelectCard={onSelectInitial} alt="initial load" src="/Schemas.png" title="Initial Load" />
                    <CardDisplay isThisCardSelected={cardSelected === "sync" ? true : false } onSelectCard={onSelectSync} alt="Sync" src="/Sync-Icon-1.png" title="Sync" />
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
                        icon={<PlayCircleFilled />}
                        size={"large"}
                        style={{ minWidth: "8rem" }}
                       onClick={onClickExecute}
                        
                    />

                </Col>

            </Row>
        </>
    )
}

export default UpperSection