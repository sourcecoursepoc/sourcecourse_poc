import { ApartmentOutlined, DatabaseOutlined, PlusCircleFilled, DeleteFilled } from '@ant-design/icons';
import { Button, Image, Layout, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../buttons/buttons';
import ModalBox from '../ModalBox/modalBox';
import GroupsModalBox from '../GroupsPage/ModalBox/groupsModalBox';
import styles from "./mainContent.module.css";
import MainIcons from './mainContentIcons';
import DisplayBox from '@/pages/schemas/displaybox';
import DisplaySchemaBox from './displaySchema';
import { useSelector } from 'react-redux';
import { getSelectedArraySelector } from '@/redux/selector';
import { useDispatch } from 'react-redux';
import { removeNode } from '@/redux/actions/schemasaction';

const MainContent = () => {
  const { Content } = Layout;
  const [visible, setVisible] = useState(false);
  const [exportClicked, setExportClicked] = useState(false);
  const [selectedValues, setSelectedValues] = useState<any[]>([]);
  const [lastIndexes, setLastIndexes] = useState<any[]>([]);
  const selcectData = useSelector(getSelectedArraySelector);
  const lastIndex = selcectData.slice(-1)[0]

  useEffect(() => {
    if (lastIndex && 'tableName' in lastIndex && lastIndex.columns && lastIndex.columns.length > 0) {
      const exists = lastIndexes && lastIndex && lastIndexes.filter(Boolean).some((node) => node.uid === lastIndex.uid);
      if (lastIndexes && !exists) {
        setLastIndexes(prevLastIndexes => [...prevLastIndexes, lastIndex]);
      }
    }

  }, [selcectData])

  const dispatch = useDispatch();
  const handleRemove = (uid: string) => {
    dispatch(removeNode(uid));
    setLastIndexes(lastIndexes => lastIndexes.filter(node => node.uid !== uid));
  };

  const handleExport = (lastIndexes: any[]) => {
    setExportClicked(true)
    setLastIndexes(lastIndexes);

  };
  const showModal = () => {
    setVisible(true);

  };
  const handleCancel = () => {
    setVisible(false);

  };
  return (
    <>
      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <Row className={styles.pinkbar} ><p className={styles.text}>Schema</p></Row>
          <ModalBox
            visible={visible}
            onCancel={handleCancel}
            onExport={handleExport}
          />
          {exportClicked && (
            <Row >
              {lastIndexes.map((node: any) => (
                <DisplaySchemaBox key={node.tableName} text={node.tableName} uid={node.uid} deleteIcon={<DeleteFilled style={{ color: "red", height: 'auto' }}
                  onClick={() => handleRemove(node.uid)} />}
                  attribute={"ATTRIBUTES / "} icon={<Image preview={false} src="/Schemas.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem", marginBottom: "0.5rem" }}>
                  </Image>}
                  handleRemove={handleRemove} lengthOfColums={node ?.columns ?.length}
                />
              ))}
            </Row>)}
          <Row style={{ marginTop: '1rem' }}>
            <Button icon={<PlusCircleFilled />} style={{ marginLeft: "1.5rem", width: "4rem", height: "3rem", color: "#7E60BC" }}
              onClick={showModal}
            ></Button> </Row>
        </Content>
      </Layout>
    </>
  )
}

export default MainContent