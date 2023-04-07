import { Button, Col, Image, Modal, Row } from "antd";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SearchBar from "./searchBar";
import styles from "./modalBox.module.css";
import TreeView from "../../../pages/schemas/treeview";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDataBaseSelector, getSelectedArraySelector } from "@/redux/selector";
import { removeNode } from "@/redux/actions/schemasaction";
import { PlusCircleFilled, PlusOutlined } from "@ant-design/icons";
 //import { fetchDataBaseRequest } from "../../../redux/actions/schemasaction";
//import { addNode } from '../../redux/actions/schemasaction';

interface MyModalProps {
  visible: boolean;
  onCancel: () => void;
  onExport: (selectedData: any[]) => void;
  lastIndexes: any[];
  setLastIndexes: Dispatch<SetStateAction<any[]>>;
}

const ModalBox: React.FC<MyModalProps> = ({ visible, onCancel ,onExport,lastIndexes,setLastIndexes}) => {
  const dispatch = useDispatch();
  const database = useSelector(getDataBaseSelector);
  const selcectData = useSelector(getSelectedArraySelector);
  const lastIndex= selcectData.slice(-1)[0]
  useEffect(()=>{
    if(lastIndex && 'tableName' in lastIndex && lastIndex.columns && lastIndex.columns.length >0)
    {  
      const exists = lastIndexes && lastIndex && lastIndexes.filter(Boolean).some((node) => node.uid === lastIndex.uid  );
      if(lastIndexes && !exists){
      setLastIndexes(prevLastIndexes => [...prevLastIndexes, lastIndex]);   }
    }
   
  },[selcectData])

  const handleExport = () => {
    onExport(lastIndexes);
  };
  const handleExportButton=()=>
  {
    handleExport()
    onCancel()
  }
  const handleRemove = (uid: string) => {
    //dispatch(removeNode(uid));
    setLastIndexes(lastIndexes => lastIndexes.filter(node => node.uid !== uid));
  };
   
  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
        closable={false}
        width={800}
        
        bodyStyle={{  borderRadius: "5px" ,maxHeight:'500px',  overflowY: "auto" }}
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
            <TreeView db={database} iconImage={<PlusOutlined style={{width:'3rem',fontSize:'0.8rem',color:'#7E60BC',strokeWidth: '2' }}/>}/>
          </Col>
          <Col
            span={12}
            style={{
              borderTop: "1px solid #ccc",
              borderRight: "1px solid #ccc",
             
            }}
          >         
           {lastIndexes.map((node:any) => (
           <> <Row align={"middle"} >
             <Col span={18} key={node.tableName}
            className={styles.rowTextStyle}
             >{node && node?.tableName && <p><span> <Image src="/Schemas.png" preview={false} style={{ width: "1rem", height: "1rem", marginRight: "0.5rem", marginBottom: "0.3rem" }}>
             </Image> </span>{node?.tableName}</p>}
             </Col>

               <Col span={1} >
              <Button style={{border:'none',color:'red',background:'white',fontWeight:"500",width:'1rem',fontSize:'0.7rem'}}
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
