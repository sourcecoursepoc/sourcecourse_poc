import React from 'react'
import { Layout, Row, Button } from 'antd';
import styles from "./content.module.css";
import DescriptionBox from './descriptionbox';
import DisplayBox from './displaybox';
import TagBox from './tagbox';
import { useSelector } from 'react-redux';
import { getSelectedArraySelector } from '../../redux/selector';
import { useTranslation } from 'react-i18next';
import { Transcription } from './transcriptionFile';


const { Content } = Layout;

export default function SchemaContent() {
    // console.log(transcriptList,"transcriptListtranscriptList")
    const selcectedData = useSelector(getSelectedArraySelector);

    const selectedMetaData = selcectedData.map(node => node.metadata);
    const Description = selcectedData.map(node => node.description);

    const descriptionLastIndex = Description.length - 1;
    const descriptionLastItem = Description[descriptionLastIndex]

    const lastIndex = selectedMetaData.length - 1;
    const lastItem = selectedMetaData[lastIndex];
    const transcriptList = Transcription(lastItem);

    const listItems: any = [];
    for (const item in transcriptList) {
        listItems.push(
            <DisplayBox title={item} value={transcriptList[item]}></DisplayBox>
        );
    }

    return (
        <Layout className={styles.layout}>
            <Content className={styles.content}>
                <Row className={styles.pinkbar} />
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
                    <Button className={styles.button}>Save</Button>
                </Row>
            </Content>
        </Layout>
    )
}
