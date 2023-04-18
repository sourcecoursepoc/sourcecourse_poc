
import React from 'react';
import { Modal, Row, Col, Image, Divider, List } from 'antd';
import { CloseCircleFilled, FileFilled, ArrowDownOutlined, ExportOutlined, CheckOutlined } from '@ant-design/icons';
import styles from "./pipelineModelBox.module.css"
import Buttons from '../buttons/buttons';
import DescriptionBox from '../../../pages/schemas/descriptionbox';

const data = [
    {
        title: 'Box 1',
        items: [
            { number: 1, name: 'Item 1', icon: <CheckOutlined /> },
            { number: 2, name: 'Item 2', icon: <CheckOutlined /> },
            { number: 3, name: 'Item 3', icon: <CheckOutlined /> },
            { number: 4, name: 'Item 4', icon: <CheckOutlined /> },
            { number: 5, name: 'Item 5', icon: <CheckOutlined /> },
            { number: 6, name: 'Item 6', icon: <CheckOutlined /> },
            // { number: 7, name: 'Item 7', icon: <CheckOutlined /> },
        ],
    },
    // add more boxes as needed
];

const data1 = [
    { key: 'Triggerd', value: '2 Days Ago' },
    { key: 'Duration', value: '3.5 hours' },
    { key: 'Initiated By', value: 'Jack Ryan' },
    { key: 'Size', value: '345 MB' },
    { key: 'Records', value: '321654' }
];
interface ModalBoxProps {
    isModalVisible: boolean;
    handleCancel: () => void;
}

const PipelineModalBox = (props: ModalBoxProps) => {
    const handleIconClick = () => {
        props.handleCancel();
    };

    return (
        <>
            <Modal
                // title="Compose Pipeline Modal"
                visible={props.isModalVisible}
                footer={null}
                closable={false}
                // closeIcon={<CloseCircleFilled />}
                onCancel={props.handleCancel}
                width={780}
                bodyStyle={{ borderRadius: "5px", maxHeight: '400px', overflowY: "auto" }}
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
                                <Buttons text="Success" style={{ marginTop: "20px", height: "25px", width: "70px" }} />
                            </Row>
                            <div>
                                <Row>
                                    <Col span={12} style={{ marginLeft: "10px" }}>
                                        {data.map((box) => (
                                            <div key={box.title} style={{ marginBottom: '20px', marginLeft: "10px" }}>
                                                {box.items.map((item, index) => (
                                                    <Row gutter={[16, 16]} key={index} className={styles.statusBoxContainer}>
                                                        <Col span={4} style={{ paddingLeft: "2px" }}>
                                                            <div className={styles.statusBoxes}>
                                                                {item.number}
                                                            </div>
                                                        </Col>
                                                        <Col span={16}>
                                                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '2px', marginTop: "3px", marginBottom: "3px" }}>
                                                                {item.name}
                                                            </div>
                                                        </Col>
                                                        <Col span={4}>
                                                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '2px', marginTop: "7px", marginBottom: "3px" }}>
                                                                {item.icon}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                ))}
                                            </div>
                                        ))}
                                    </Col>
                                    <Col span={8} style={{ marginLeft: "10px" }}>
                                        <Row gutter={[16, 16]}>
                                            {data1.map(item => (
                                                <Col span={24} key={item.key}>
                                                    <div style={{ textAlign: 'left', marginLeft: "30px",color:"grey" }}>
                                                        <div style={{ fontSize: '10px' }}>{item.key}</div>
                                                        <div style={{ fontSize: '14px' }}>{item.value}</div>
                                                    </div>
                                                </Col>
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
                                    <DescriptionBox placeholder="Pipeline Log" style={{ width: "330px", minHeight: "290px", marginLeft: "10px", marginBottom: "20px", marginRight: "10px", border: "1px solid" }} />
                                </Col>
                            </Row>
                            <Row justify="end" align="middle" style={{ minHeight:"42px" }}>
                                <Col style={{ marginRight: "15px", width: "25px" }}>
                                    <ArrowDownOutlined />
                                </Col>
                                <Col style={{ marginRight: "15px", width: "25px" }}>
                                    <FileFilled />
                                </Col>
                                <Col style={{ marginRight: "15px", width: "25px" }}>
                                    <ExportOutlined />
                                </Col>
                                <Col style={{ marginRight: "15px", width: "25px" }}>
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
