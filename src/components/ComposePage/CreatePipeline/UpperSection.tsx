import React from 'react'
import { Col, Modal, Row, Card } from "antd";
import Buttons from '../buttons/buttons';
import { PlayCircleFilled } from "@ant-design/icons";
import CardDisplay from './CardDisplay';
import styles from '../buttons/buttonStyle.module.css'
import { postGroupPipelineInfoAction } from '@/redux/actions/createPipeline';
import { useSelector, useDispatch } from 'react-redux';;

interface UpperSectionProps {
    onSelectInitial: () => void;
    onSelectSync: () => void;
    cardSelected: string;
  }
  
 
const UpperSection: React.FC<UpperSectionProps>= ({ onSelectInitial, onSelectSync, cardSelected }) => {
    const dispatch = useDispatch();
     const handleExecute = async () => {
    dispatch(postGroupPipelineInfoAction(3,"a","g","gy","g",["g"],"dgsf",["d"],[0]));
};
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
                        onClick={handleExecute}
                        
                    />

                </Col>

            </Row>
        </>
    )
}

export default UpperSection