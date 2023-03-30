import { Button, Col, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import styles from "./modalBox.module.css";
import TreeView from "../../../pages/schemas/treeview";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDataBaseSelector, getSelectedArraySelector } from "@/redux/selector";
import { removeNode } from "@/redux/actions/schemasaction";
 //import { fetchDataBaseRequest } from "../../../redux/actions/schemasaction";
//import { addNode } from '../../redux/actions/schemasaction';

interface MyModalProps {
  visible: boolean;
  onCancel: () => void;
  onExport: (selectedData: any[]) => void;
}

const ModalBox: React.FC<MyModalProps> = ({ visible, onCancel ,onExport}) => {
  const selcectData = useSelector(getSelectedArraySelector);
  //const Description = selcectData.map(node => node.description);

  const dispatch = useDispatch();

  const handleExport = () => {
    onExport(selcectData);
  };
  const handleExportButton=()=>
  {
    handleExport()
    onCancel()
  }
  const handleRemove = (uid: string) => {
    dispatch(removeNode(uid));
  };
   const database = useSelector(getDataBaseSelector);
   console.log("dataaaaa",selcectData)
 
  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
        closable={false}
        width={800}
        
        bodyStyle={{ top: "1rem", borderRadius: "5px" ,height: 'auto', overflow: 'auto' }}
      >
        <Row>
          <Col span={12} className={styles.modelBoxBorder}>
            <SearchBar />
          </Col>
          <Col span={12} className={styles.modelBorder}>
            <Button
              type="primary"
              style={{
                background: "#7E60BC",
                width: "5rem",
                borderRadius: "1px",
                height: "2rem",
              }}
              onClick={handleExportButton}
            >
              Import
            </Button>
          </Col>
        </Row>
        <Row >
          <Col span={12} className={styles.treeview}>
            <TreeView db={database} />
          </Col>
          <Col
            span={12}
            style={{
              borderTop: "1px solid #ccc",
              borderRight: "1px solid #ccc",
             
            }}
          >
           {selcectData.map((node:any) => (
           <> <Row align={"middle"} >
             <Col span={18} key={node.tableName}
            className={styles.rowTextStyle}
             >{node.tableName && <p>{node.tableName}</p>}
             </Col>

               <Col span={1} >
              <Button style={{border:'none',color:'red',background:'white',fontWeight:"normal"}}
              onClick={() => handleRemove(node.uid)}
              >Remove</Button>
              </Col> </Row>
                <Row className={styles.lowerDivider}></Row></>
                ))}
         
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModalBox;
