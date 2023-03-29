import React from "react";
import { Card, Row, Col, Divider } from "antd";
import styles from "./displaybox.module.css";
import "./content.module.css";
import { ClusterOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { getSelectedArraySelector } from "../../redux/selector";

interface MyComponentProps {
  title: string;
  iconName: string;
  icon: ReactNode;
}

const DisplayBox = ({ text, iconName, icon }) => {
  const selcectedMetaData = useSelector(getSelectedArraySelector);
  const selectedMetaData = selcectedMetaData.map(node => node.metadata);
  console.log(selectedMetaData, "selectedMetaDataselectedMetaDataselectedMetaData");
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}
          ><Col>
              {icon}
            </Col>
          </Row>
          <Row className={styles.imageName}>
            <Col className={styles.imageNameText}>
              <p >{iconName}
              </p>
            </Col></Row>
        </div>
        <div className={styles.innerleft}>
          <Row className={styles.items}><Col><p className={styles.styeText}>{text}</p></Col></Row>
        </div>
      </div>

    </>
  );
};

export default DisplayBox;
