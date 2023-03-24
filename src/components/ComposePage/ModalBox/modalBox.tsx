import { Button, Col, Modal, Row } from 'antd'
import React, { useState } from 'react'
import SearchBar from './searchBar';
import styles from './modalBox.module.css'
import TreeView from '../../../pages/schemas/treeview';

interface MyModalProps {
  visible: boolean;
  onCancel: () => void;
}

const ModalBox: React.FC<MyModalProps> = ({ visible, onCancel }) => {
  const [schema, setSchema] = useState<string | null>(null);

   function handleAddIconClick(node:string) 
  {    setSchema(node);
  }
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closable={false}
      width={800}
      bodyStyle={{ height: '75vh', top: '1rem', borderRadius: '5px' }}

    >
      <Row  >
        <Col span={12} className={styles.modelBoxBorder}>
          <SearchBar />
        </Col>
        <Col span={12} className={styles.modelBorder} >
          <Button type='primary' style={{ background: "#7E60BC", width: "6rem", borderRadius: "1px", height: "2rem" }}>Import</Button>
        </Col>
      </Row>
      <Row>
        <Col span={12} className={styles.treeview}>
          <TreeView onAddIconClick={handleAddIconClick}/>
        </Col>
        <Col span={12} style={{ borderTop: "1px solid #ccc", borderRight: "1px solid #ccc" }}>
{schema}
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalBox