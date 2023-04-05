import React from 'react'
import { Layout, Row, Col } from 'antd';
import styles from "./content.module.css";
import DescriptionBox from './descriptionbox';
import DisplayBox from './displaybox';
import TagBox from './tagbox';
import { useSelector } from 'react-redux';
import { getSelectedArraySelector } from '../../redux/selector';
import { Transcription } from './transcriptionFile';
import Buttons from '../../components/ComposePage/buttons/buttons';

const { Content } = Layout;

export default function SchemaContent() {

    const selcectedData = useSelector(getSelectedArraySelector);
    const selectedMetaData = selcectedData.map(node => node.metadata);
    const Description = selcectedData.map(node => node.description);
    const descriptionLastIndex = Description.length - 1;
    const descriptionLastItem = Description[descriptionLastIndex];
    const selectedMetaDataLastIndex = selectedMetaData.length - 1;
    const selectedMetaDataLastItem = selectedMetaData[selectedMetaDataLastIndex];
    const selcectedDataLastElement = selcectedData.slice(-1)[0];

    let selectedValueName = '';

    if (selcectedDataLastElement) {
        if ('DBName' in selcectedDataLastElement) {
            selectedValueName = selcectedDataLastElement.DBName;
        } else if ('tableName' in selcectedDataLastElement) {
            selectedValueName = selcectedDataLastElement.tableName;
        } else if ('name' in selcectedDataLastElement) {
            selectedValueName = selcectedDataLastElement.name;
        }
    }

    const transcriptList: any = Transcription(selectedMetaDataLastItem);

    const listItems: any = [];
    for (const item in transcriptList) {
        listItems.push(
            <DisplayBox title={item} value={transcriptList[item]}></DisplayBox>
        );
    }

    return (
        <Layout className={styles.layout}>
            <Content className={styles.content}>
                <Row className={styles.pinkbar} >
                    <Col span={4} className={styles.headerText}>{selectedValueName}</Col>
                </Row>
                <Row gutter={[16, 16]}>

                    {listItems}

                </Row>
                <Row className={styles.descriptionbox}>
                    <DescriptionBox value={descriptionLastItem} />
                </Row>
                <Row>
                    <TagBox />
                </Row>
                <Row className={styles.saveButton}>
                    <Buttons text="Save" icon={""} size={"middle"} onClick={() => { }} href={""} />
                </Row>
            </Content>
        </Layout>
    )
}
