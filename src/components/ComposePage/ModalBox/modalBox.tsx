import { Button, Col, Modal, Row } from 'antd'
import React, { useState } from 'react'
import SearchBar from './searchBar';
import styles from './modalBox.module.css'
import TreeView from '../../../pages/schemas/treeview';
import { useDispatch } from 'react-redux';
//import { addNode } from '../../redux/actions/schemasaction';

interface MyModalProps {
  visible: boolean;
  onCancel: () => void;
}

const ModalBox: React.FC<MyModalProps> = ({ visible, onCancel }) => {

/*   const [schemaNode, setSchemaNode] = useState<string | null>(null);
   function handleAddIconClick(node:string) {
    setSchemaNode(node);
  }  */

  /* const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addNode(id, name));
  }; */
  return (
    <>
    <Modal
    visible={visible}
   onCancel={onCancel}
   footer={null}
   closable={false}
   width={800} 
   className={styles.modal}
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
            <TreeView  />
            
            </Col>
            <Col span={12} style={{borderTop:"1px solid #ccc",borderRight:"1px solid #ccc"}}>
         {/*    <p>{schemaNode}</p> */}
          
            </Col>
          </Row>
  </Modal> 

  </>
  )
}

export default ModalBox