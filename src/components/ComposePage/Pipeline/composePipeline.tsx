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
    const [nodeId, setNodeId] = useState<number | undefined>(undefined);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setNodeId(undefined)
        setIsModalVisible(false);
    };

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };

    useEffect(() => {
        if (nodeId !== undefined) {
            dispatch(fetchComposePipelineRequest(nodeId));
        } else {
            dispatch(fetchComposePipelineRequest(""));
        }
    }, [nodeId]);

    const PipeLineButtonClick = (node: any, showModal: () => void) => {
        if (node.id !== nodeId) {
            setNodeId(node.id);
        }
        showModal();
    };

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
                                {selectedComposePipeline && selectedComposePipeline.map((node) => {
                                    return (
                                        <Col key={node.id}>
                                            <DisplaySchemaBox
                                                icon={<Image preview={false} src="InitialLoad-Icon4.png" alt="" style={{ width: "2rem", height: "2rem", marginRight: "0.3125rem" }} />}
                                                text={node.pipelineName} attribute={node.type + " / "} lengthOfColums={node.recordsExported} status={node.time} padding={0.2875}
                                                width={"auto"}
                                                deleteIcon={<Buttons text={node.status} onClick={() => PipeLineButtonClick(node, showModal)} style={{
                                                    width: "3.75rem", height: "1.5625rem", fontSize: "0.5rem"
                                                }} color={node.status && node.status.toLowerCase() === "failed" ? "#ff4d4f" : "#7E60BCs"}
                                                />}
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
                                    src="Sync-Icon-1.png" alt="" style={{
                                        width: "1rem", height: "1rem", marginRight: "0.3125rem"
                                    }} />
                                <span>Sync</span>
                            </div>
                        } key="2">
                            <Row >
                                {selectedComposePipeline && selectedComposePipeline.map((node) => {
                                    return (
                                        <Col  key={node.id}>
                                            <DisplaySchemaBox
                                                icon={<Image preview={false} src="InitialLoad-Icon4.png" alt="" style={{ width: "2rem", height: "2rem", marginRight: "0.3125rem" }} />}
                                                text={node.pipelineName} attribute={node.type + " / "} lengthOfColums={node.recordsExported} status={node.time} padding={0.2875}
                                                width={"auto"}
                                                deleteIcon={<Buttons text={node.status} onClick={showModal} style={{
                                                    width: "3.75rem",
                                                    height: "1.5625rem",
                                                    fontSize: "0.5rem",
                                                    backgroundColor: "red"
                                                    // background: node.status.toLowerCase() === "failed" ? "#ff4d4f" : "#7E60BCs",
                                                }}
                                                // color={"red"} onClick={() => PipeLineButtonClick(node)} 
                                                />}
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
