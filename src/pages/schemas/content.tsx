import React from 'react'
import { Layout, Row, Col } from 'antd';
import styles from "./content.module.css";
import DescriptionBox from './descriptionbox';
import DisplayBox from './displaybox';
import TagBox from './tagbox';
const { Content } = Layout;
export default function SchemaContent() {
    return (
        <Layout className={styles.layout}>
            <Content className={styles.content}>
                <Row className={styles.pinkbar} />
                <Row gutter={[16, 16]}>
                    <DisplayBox />
                    <DisplayBox />
                    <DisplayBox />
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
