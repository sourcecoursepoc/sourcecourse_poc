import React from 'react'
import { Layout, Row, Button } from 'antd';
import styles from "./content.module.css";
import DescriptionBox from './descriptionbox';
import DisplayBox from './displaybox';
import TagBox from './tagbox';
import { useSelector } from 'react-redux';
import { getSelectedArraySelector } from '../../redux/selector';
import { useTranslation } from 'react-i18next';


const { Content } = Layout;

export default function SchemaContent() {

    const selcectedData = useSelector(getSelectedArraySelector);

    const selectedMetaData = selcectedData.map(node => node.metadata);
    const Description = selcectedData.map(node => node.description);

    const descriptionLastIndex = Description.length - 1;
    const descriptionLastItem = Description[descriptionLastIndex]

    const lastIndex = selectedMetaData.length - 1;
    const lastItem = selectedMetaData[lastIndex];

    const listItems: any = [];
    for (const item in lastItem) {
        listItems.push(
            <DisplayBox title={item} value={lastItem[item]}></DisplayBox>
        );
    }

    const { t } = useTranslation();

    const obj = {
        "totaltables": "total",
        "key2": "value2",
        "key3": "value3"
    };

    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const capitalizeWords = (str: string) => {
        return str.split(' ').map(capitalize).join(' ');
    };

    const capitalizedObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const capitalizedKey = capitalizeWords(t(key));
            const capitalizedValue = capitalizeWords(t(obj[key]));
            capitalizedObj[capitalizedKey] = capitalizedValue;
        }
    }

    console.log(capitalizedObj, "capitalizedObj");


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
