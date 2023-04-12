import React, { useState, useEffect } from 'react'
import { Layout, Tabs, Image, Row, Col } from 'antd';
import Pinkbar from '../../pinkbar/pinkbar';
import styles from '../Pipeline/composePipeline.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getComposePipelineSelector } from '../../../redux/selector';
import DisplaySchemaBox from '../MainContent/displaySchema';
import { fetchComposePipelineRequest } from '../../../redux/actions/composeAction';
const { TabPane } = Tabs;

const { Content } = Layout;

export default function ComposePipeline() {
    const dispatch = useDispatch();
    const selectedComposePipeline = useSelector(getComposePipelineSelector);
    console.log(selectedComposePipeline, "selectedComposePipeline")

    const [activeTab, setActiveTab] = useState('1');

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
                                                icon={<Image preview={false} src="InitialLoad-Icon4.png" alt="" style={{ width: "1rem", height: "1rem", marginRight: "0.3125rem" }} />}
                                                text={node.pipelineName} attribute={node.type + " / "} lengthOfColums={node.recordsExported} status={node.time} padding={0.2875}

                                            // deleteIcon={node.status}
                                            />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </TabPane>
                        <TabPane tab={
                            <div>
                                <Image preview={false}
                                    src="Sync-Icon-1.png" alt="" style={{ width: "1rem", height: "1rem", marginRight: "0.3125rem" }} />
                                <span>Sync</span>
                            </div>
                        } key="2">
                            Content for Tab 2
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
        </>
    )
}
