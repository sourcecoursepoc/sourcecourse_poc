import React, { ReactNode } from "react";
import { Card, Row, Col, Divider } from "antd";
import styles from "./displaySchema.module.css";
import { DeleteFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getSelectedArraySelector } from "@/redux/selector";
import { useDispatch } from "react-redux";
import { removeNode } from "@/redux/actions/schemasaction";

interface MyComponentProps {
  deleteIcon: ReactNode;
  text: string;
  attribute: string;
  icon: ReactNode;
  uid: string; // new prop for the uid of the node
  handleRemove: (uid: string) => void;
  lengthOfColums: any;
  width?:any;
}
const DisplaySchemaBox: React.FC<MyComponentProps> = ({ text, attribute, icon, uid, handleRemove, lengthOfColums, deleteIcon,width }) => {

  return (
    <>
      <div className={styles.outerbox} style={{ width: `${width}px` }}>
        <div className={styles.innerright}>
          <Col className={styles.image}>
            {icon}
          </Col>
        </div>
        <div style={{ width: 'inherit' }}>
          <Row className={styles.items}><Col style={{ width: '90%', fontSize: '1rem', textAlign: 'justify', height: 'auto', color: 'grey' }}>
            {text}</Col>
            <Col style={{ paddingLeft: '6.5px' }}>
              {deleteIcon}
              {/* <DeleteFilled style={{color:"red",height:'auto'}} */}
              {/* onClick={() => handleRemove(uid)}/> */}
            </Col>
          </Row>
          <Row className={styles.imageName}>
            <Col className={styles.imageNameText}>
              <p  >{attribute} {lengthOfColums}
              </p>
            </Col></Row>
        </div>
      </div>
    </>
  );
};

export default DisplaySchemaBox;
