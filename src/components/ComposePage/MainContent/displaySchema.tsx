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
  uid: string; 
  handleRemove: (uid: string) => void;
  lengthOfColums: any;
  minWidth?: any;
  width?:any;
  status: any;
  padding?: any;
  paddingLeft: any;
}
const DisplaySchemaBox: React.FC<MyComponentProps> = ({ text, attribute, icon, uid, handleRemove, lengthOfColums, deleteIcon, minWidth, status, padding, paddingLeft,width }) => {

  return (
    <>
      <div className={styles.outerbox} style={{ minWidth: minWidth,width:width }}>
        <div className={styles.innerright}>
          <Col className={styles.image}>
            {icon}
          </Col>
        </div>
        <div style={{ width: 'inherit' }}>
          <Row className={styles.items} style={{ padding: `${padding}rem` }}><Col className={styles.textColumn} style={{ width: width }}>
            <div>{text}</div>
            <span style={{ fontSize: "0.5rem" }}>{status}</span>
          </Col>
            <Col style={{ paddingLeft: '6.5px' }}>
              {deleteIcon}
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
