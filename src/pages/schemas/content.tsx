import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Image } from 'antd';
import styles from "./content.module.css";
import DescriptionBox from './descriptionbox';
import DisplayBox from './displaybox';
import TagBox from './tagbox';
import { useSelector, useDispatch } from 'react-redux';
import { SelectedTreeNodeInfo } from '../../redux/selector';
import Buttons from '../../components/ComposePage/buttons/buttons';
import DisplaySchemaBox from '../../components/ComposePage/MainContent/displaySchema';
import ConfirmationModal from '../../components/ComposePage/GroupsPage/ModalBox/ConfirmationModal';
import { CloseOutlined, SaveFilled } from '@ant-design/icons';
import { showSuccessToast, showErrorToast } from './toast';
import { postTagsAndDescriptionInfoAction, postColumnTagsAndDescriptionInfoAction, fetchDataBaseInfoAction } from '../../redux/actions/schemasaction';
import Transcription from './transcriptionFile';

const { Content } = Layout;

export default function SchemaContent() {

    const selectedTreeData = useSelector(SelectedTreeNodeInfo);
    const selectedMetaData = selectedTreeData.map(node => node ?.metadata);
    const selectedTags = selectedTreeData.map((node) => node.tags);
    const selcectedTagsLastElement = selectedTags.slice(-1)[0];
    const Description = selectedTreeData.map(node => node.description);
    const descriptionLastIndex = Description.length - 1;
    const descriptionLastItem = Description[descriptionLastIndex];
    const selectedMetaDataLastIndex = selectedMetaData.length - 1;
    const selectedMetaDataLastItem = selectedMetaData[selectedMetaDataLastIndex];
    const selcectedDataLastElement = selectedTreeData.slice(-1)[0];
    const [columnData, setColumnData] = useState([]);
    const [saveModalVisible, setSaveModalVisible] = useState(false);
    const [cancelModalVisible, setCancelModalVisible] = useState(false);
    const [selectedUid, setSelectedUid] = useState(null);
    const [selectedValueName, setSelectedValueName] = useState("");


    const [description, setDescription] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const dispatch = useDispatch();
    const handleSaveClick = () => {
        setSaveModalVisible(true);
    };

    const handleSaveModalOk = async () => {
        setSaveModalVisible(false);
        if ('tableName' in selcectedDataLastElement) {
            await dispatch(postTagsAndDescriptionInfoAction(selectedUid, tags, description));
        } else if ('name' in selcectedDataLastElement) {
            await dispatch(postColumnTagsAndDescriptionInfoAction(selectedUid, tags, description));
        }
        showSuccessToast("saved successfully");
        dispatch(fetchDataBaseInfoAction());
    };
    const handleSaveModalCancel = () => {
        setSaveModalVisible(false);
    };

    const handleCancelClick = () => {
        setCancelModalVisible(true);
    };

    const handleCancelModalOk = () => {
        setCancelModalVisible(false);
        window.location.href = "/";
    };

    const handleCancelModalCancel = () => {
        setCancelModalVisible(false);
    };

    useEffect(() => {
        if (selcectedDataLastElement && 'tableName' in selcectedDataLastElement && 'columns' in selcectedDataLastElement) {
            setColumnData(selcectedDataLastElement.columns);
        } else {
            setColumnData([]);
        }
    }, [selcectedDataLastElement, setColumnData]);

    let selectedColumnData: any = [];
    for (let column in columnData) {

        if (Array.isArray(columnData) && columnData.length > 0) {
            selectedColumnData.push(
                <DisplaySchemaBox
                    text={columnData[column].name}
                    attribute={columnData[column].metadata.type}
                    icon={columnData[column].metadata.isPrimary ? <Image preview={false} src="/primarykey-icon1.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem", marginBottom: "0.5rem" }} /> : <Image preview={false} src="/column-icon1.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem", marginBottom: "0.5rem" }} />}
                    uid={""}
                    handleRemove={() => ({})}
                    lengthOfColums={""}
                    minWidth={170}
                    width={"auto"}
                />
            );
        }

    }

    useEffect(() => {
        const selectedDataLastElement = selectedTreeData[selectedTreeData.length - 1];
        if (selectedDataLastElement) {
            if ('dbName' in selectedDataLastElement) {
                setSelectedValueName(selectedDataLastElement.dbName);
                setSelectedUid(selectedDataLastElement.uid);
            } else if ('tableName' in selectedDataLastElement) {
                setSelectedValueName(selectedDataLastElement.tableName);
                setSelectedUid(selectedDataLastElement.uid);
            } else if ('name' in selectedDataLastElement) {
                setSelectedValueName(selectedDataLastElement.name);
                setSelectedUid(selectedDataLastElement.uid);
            }
        }
    }, [selectedTreeData]);

    const transcriptList: any = Transcription(selectedMetaDataLastItem);
    const listItems: any = [];
    for (const item in transcriptList) {
        if (transcriptList[item]) {
            listItems.push(
                <DisplayBox title={item} value={transcriptList[item]}></DisplayBox>
            );
        }
    }

    const handleOkButtonClick = () => {
        handleOk();
        handleCancelModalOk();
    };


    useEffect(() => {
        setDescription(descriptionLastItem);
        setTags(selcectedTagsLastElement);
    }, [descriptionLastItem, selcectedTagsLastElement]);
    const handleOk = () => {
        setDescription('');
        setTags([]);
    };

    return (
        <>
            <Layout className={styles.layout}>
                <Content className={styles.content}>
                    <Row className={styles.pinkbar} >
                        <Col span={17} className={styles.headerText}>{selectedValueName}</Col>
                        <Col style={{ marginTop: "8px", marginLeft: "16px" }}>
                            <Buttons text="Save" icon={<SaveFilled />} size={"middle"} onClick={handleSaveClick} />
                            <ConfirmationModal
                                visible={saveModalVisible}
                                onOk={handleSaveModalOk}
                                onCancel={handleSaveModalCancel}
                                title="Save Confirmation"
                                message="Are you sure you want to save?"
                            />
                        </Col>
                        <Col style={{ marginTop: "8px" }}>
                            <Buttons text="Cancel" icon={<CloseOutlined />} size={"middle"} onClick={handleCancelClick} />
                            <ConfirmationModal
                                visible={cancelModalVisible}
                                onOk={handleOkButtonClick}
                                onCancel={handleCancelModalCancel}
                                title="Cancel Confirmation"
                                message="Are you sure you want to cancel?"
                            />
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginRight: "-16px" }}>

                        {listItems}

                    </Row>
                    <Row className={styles.descriptionbox}>
                        <Col style={{ width: "100%" }} >
                            <DescriptionBox value={description} onChange={setDescription} placeholder="Description" />
                        </Col>
                    </Row>
                    <Row className={styles.tagBox}>
                        <TagBox tags={tags} setTags={setTags} placeholder="Tags" label="Tags" />
                    </Row>
                    <Row gutter={[16, 16]} style={{ padding: "10px" }}>
                        {selectedColumnData && selectedColumnData.length > 0 && (
                            <div className={styles.attribute}>
                                <h5 className={styles.attributtext}>Attributes</h5>
                            </div>
                        )}
                        {selectedColumnData}
                    </Row>
                </Content>
            </Layout>
        </>
    );
}
