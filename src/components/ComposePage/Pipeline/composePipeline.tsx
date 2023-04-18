import React, { useState, useEffect } from 'react'
import { Layout, Tabs, Image, Row, Col } from 'antd';
import Pinkbar from '../../pinkbar/pinkbar';
import styles from '../Pipeline/composePipeline.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getComposePipelineSelector } from '../../../redux/selector';
import DisplaySchemaBox from '../MainContent/displaySchema';
import { fetchComposePipelineRequest } from '../../../redux/actions/composeAction';
import Buttons from '../buttons/buttons';
import PipelineModalBox from './pipelineModalBox';
const { TabPane } = Tabs;

const { Content } = Layout;

export default function ComposePipeline() {
    const dispatch = useDispatch();
    const selectedComposePipeline = useSelector(getComposePipelineSelector);
    const [activeTab, setActiveTab] = useState('1');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };
    useEffect(() => {
        dispatch(fetchComposePipelineRequest());
    }, []);

    return (
        <>
            <Layout className={styles.layout}>
                <Content className={styles.content}>
                    <Pinkbar title="Pipeline" />
                    <Tabs activeKey={activeTab} onChange={handleTabChange} className={styles.tabs}>
                        <TabPane tab={
                            <div>
                                <Image preview={false}
                                    src="InitialLoad-Icon4.png" alt="" style={{ width: "1rem", height: "1rem", marginRight: "0.3125rem" }} />
                                <span>Initial Load</span>
                            </div>
                        } key="1">
                            <Row >
                                {selectedComposePipeline.map((node) => {
                                    return (
                                        <Col>
                                            <DisplaySchemaBox
                                                icon={<Image preview={false} src="InitialLoad-Icon4.png" alt="" style={{ width: "2rem", height: "2rem", marginRight: "0.3125rem" }} />}
                                                text={node.pipelineName} attribute={node.type + " / "} lengthOfColums={node.recordsExported} status={node.time} padding={0.2875}
                                                width={"auto"}
                                                deleteIcon={<Buttons text={node.status} onClick={showModal} style={{ width: "3.75rem", height: "1.5625rem", fontSize: "0.5rem" }} />}
                                            />
                                        </Col>
                                    );
                                })}
                                <PipelineModalBox
                                    isModalVisible={isModalVisible}
                                    handleOk={handleOk}
                                    handleCancel={handleCancel}
                                />
                            </Row>
                        </TabPane>
                        <TabPane tab={
                            <div>
                                <Image preview={false}
                                    src="Sync-Icon-1.png" alt="" style={{ width: "1rem", height: "1rem", marginRight: "0.3125rem" }} />
                                <span>Sync</span>
                            </div>
                        } key="2">
                            <Row >
                                {selectedComposePipeline.map((node) => {
                                    return (
                                        <Col>
                                            <DisplaySchemaBox
                                                icon={<Image preview={false} src="InitialLoad-Icon4.png" alt="" style={{ width: "2rem", height: "2rem", marginRight: "0.3125rem" }} />}
                                                text={node.pipelineName} attribute={node.type + " / "} lengthOfColums={node.recordsExported} status={node.time} padding={0.2875}
                                                width={"auto"}
                                                deleteIcon={<Buttons text={node.status} onClick={showModal} style={{
                                                    width: "3.75rem",
                                                    height: "1.5625rem",
                                                    fontSize: "0.5rem",
                                                    backgroundColor: node.status.toLowerCase() === "failed" ? "#ff4d4f" : "blue",
                                                }} />}
                                            />
                                        </Col>
                                    );
                                })}
                                <PipelineModalBox
                                    isModalVisible={isModalVisible}
                                    handleOk={handleOk}
                                    handleCancel={handleCancel}
                                />
                            </Row>
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
        </>
    )
}
