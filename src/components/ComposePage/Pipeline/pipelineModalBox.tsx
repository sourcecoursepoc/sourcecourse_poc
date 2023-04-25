
import React from 'react';
import { Modal, Row, Col, Image } from 'antd';
import { CloseCircleFilled, FileFilled, ArrowDownOutlined, ExportOutlined, CheckOutlined } from '@ant-design/icons';
import styles from "./pipelineModelBox.module.css"
import Buttons from '../buttons/buttons';
import DescriptionBox from '../../../pages/schemas/descriptionbox';
import { useSelector } from 'react-redux';
import { getComposePipelineSelector } from '../../../redux/selector';
import { useDispatch } from 'react-redux';
import { fetchComposePipelineRequest } from '../../../redux/actions/composeAction';

interface ModalBoxProps {
    isModalVisible: boolean;
    handleCancel: () => void;
}

const PipelineModalBox = (props: ModalBoxProps) => {
    const pipelineLogData = useSelector(getComposePipelineSelector);
    const handleIconClick = () => {
        props.handleCancel();
    };
    const status = pipelineLogData ? pipelineLogData.map(item => item ?.Status) : [];


    return (
        <>
            <Modal
                visible={props.isModalVisible}
                footer={null}
                closable={false}
                onCancel={props.handleCancel}
                width={780}
                bodyStyle={{ borderRadius: "5px", maxHeight: '450px', overflowY: "auto", padding: "2px", margin: "-14px" }}
                className={styles.modalContainer}
            >
                <div style={{ display: "flex" }}>
                    <div className={styles.container}>
                        <div className={styles.LeftContainer} >
                            <Row className={styles.projectInfoContainer}>
                                <Col className={styles.ImageContainer}>
                                    <Image src="InitialLoad-Icon4.png" preview={false} style={{ width: "2.5rem", height: "2.5rem", marginTop: "5px" }}></Image>
                                </Col>
                                <Col style={{ flex: 1 }}>
                                    <div>
                                        <span className={styles.headingText}>Group 1</span>
                                        <p className={styles.descriptionText}>This is a group which contains item related information.</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Buttons
                                    text={status} icon={<CheckOutlined style={{ marginLeft: "-9px" }} />} style={{ marginTop: "20px", height: "25px", width: "70px" }} color={status && status.some(item => item ?.toLowerCase() === "failed") ? "#ff4d4f" : "#7E60BC"}
                                />
                            </Row>
                            <div>
                                <Row>
                                    <Col span={12} style={{ marginLeft: "10px" }}>
                                        {pipelineLogData && pipelineLogData ?.map((item) => (
                                            <div key={item.title} style={{ marginBottom: '20px', marginLeft: "10px" }}>
                                                {item && item ?.logs ?.map((data, index) => (
                                                    <Row gutter={[16, 16]} key={index} className={styles.statusBoxContainer}>
                                                        <Col span={4} style={{
                                                            padding: "0px",
                                                            borderRight: "1px solid #ccc"
                                                        }}>
                                                            <div className={styles.statusBoxes}>
                                                                {index + 1}
                                                            </div>
                                                        </Col>
                                                        <Col span={16} style={{ padding: "0px" }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '2px', minHeight: "35px" }}>
                                                                {data.info}
                                                            </div>
                                                        </Col>
                                                        <Col span={4} style={{ padding: "0px" }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '2px', width: "100%", height: "100%" }}>
                                                                <CheckOutlined style={{ width: "10px", height: "10px" }} />                                                            </div>
                                                        </Col>
                                                    </Row>
                                                ))}
                                            </div>
                                        ))}
                                    </Col>
                                    <Col span={8} style={{ marginLeft: "10px" }}>
                                        <Row gutter={[16, 16]}>
                                            {pipelineLogData && pipelineLogData.map(item => (
                                                <>
                                                    <Col span={24} key={item.Triggered}>
                                                        <div style={{ textAlign: 'left', marginLeft: "30px", color: "grey" }}>
                                                            <div style={{ fontSize: '10px' }}>Triggered</div>
                                                            <div style={{ fontSize: '14px' }}>{item.Triggered}</div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24} key={item.Duration}>
                                                        <div style={{ textAlign: 'left', marginLeft: "30px", color: "grey" }}>
                                                            <div style={{ fontSize: '10px' }}>Duration</div>
                                                            <div style={{ fontSize: '14px' }}>{item.Duration}</div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24} key={item.InitiatedBy}>
                                                        <div style={{ textAlign: 'left', marginLeft: "30px", color: "grey" }}>
                                                            <div style={{ fontSize: '10px' }}>Initiated By</div>
                                                            <div style={{ fontSize: '14px' }}>{item.InitiatedBy}</div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24} key={item.Records}>
                                                        <div style={{ textAlign: 'left', marginLeft: "30px", color: "grey" }}>
                                                            <div style={{ fontSize: '10px' }}>Records</div>
                                                            <div style={{ fontSize: '14px' }}>{item.Records}</div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24} key={item.Size}>
                                                        <div style={{ textAlign: 'left', marginLeft: "30px", color: "grey" }}>
                                                            <div style={{ fontSize: '10px' }}>Size</div>
                                                            <div style={{ fontSize: '14px' }}>{item.Size}</div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24} key={item.Status}>
                                                        <div style={{ textAlign: 'left', marginLeft: "30px", color: "grey" }}>
                                                            <div style={{ fontSize: '10px' }}>Status</div>
                                                            <div style={{ fontSize: '14px' }}>{item.Status}</div>
                                                        </div>
                                                    </Col>
                                                </>
                                            ))}

                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1, paddingLeft: "20px", height: "auto" }}>
                        <div className={styles.rightBox}>
                            <Row style={{ height: "auto", marginTop: "10px", borderBottom: "1px solid #ccc" }} >
                                <Col>
                                    <DescriptionBox placeholder="Pipeline Log" style={{ width: "330px", minHeight: "329px", marginLeft: "10px", marginBottom: "20px", marginRight: "10px", border: "1px solid" }} />
                                </Col>
                            </Row>
                            <Row justify="end" align="middle" style={{ minHeight: "42px" }}>
                                <Col style={{ marginRight: "15px", width: "25px", color: "#7E60BC" }}>
                                    <ArrowDownOutlined />
                                </Col>
                                <Col style={{ marginRight: "15px", width: "25px", color: "#7E60BC" }}>
                                    <FileFilled />
                                </Col>
                                <Col style={{ marginRight: "15px", width: "25px", color: "#7E60BC" }}>
                                    <ExportOutlined />
                                </Col>
                                <Col style={{ marginRight: "15px", width: "25px", color: "#7E60BC" }}>
                                    <CloseCircleFilled onClick={handleIconClick} />
                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default PipelineModalBox;
