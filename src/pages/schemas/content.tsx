import React from 'react'
import { Layout, Row, Col } from 'antd';
import styles from "./content.module.css";
import DescriptionBox from './descriptionbox';
import DisplayBox from './displaybox';
import TagBox from './tagbox';
import { DatabaseOutlined, ApartmentOutlined, SyncOutlined } from '@ant-design/icons';
const { Content } = Layout;

export default function SchemaContent() {
    return (
        <Layout className={styles.layout}>
            <Content className={styles.content}>
                <Row className={styles.pinkbar} />
                <Row gutter={[16, 16]}>
                    <DisplayBox text={"IN_WT_TABLES"} iconName={"server"} icon={<DatabaseOutlined />}/>
                    <DisplayBox text={"8"} iconName={"schemas"} icon={<ApartmentOutlined />}/>
                    <DisplayBox text={"ONLINE"} iconName={"status"} icon={<SyncOutlined />}/>
                </Row>
                <Row className={styles.descriptionbox}>
                    <DescriptionBox />
                </Row>
                <Row>
                    <TagBox/>
                </Row>
            </Content>
        </Layout>
    )
}
