import React from "react";
import { Row, Col, Divider, Statistic, Button } from "antd";
import styles from "./topBoxInnerBox.module.css";
import { icons } from "antd/es/image/PreviewGroup";
import { useDispatch, useSelector, Provider } from "react-redux";

import { fetchProjectList, fetchPipelineList } from "@/services/dataService";

import store from "@/redux/store";
import { FullscreenExitOutlined } from "@ant-design/icons";
const TopInnerBox: React.FC = () => {
  const dispatch = useDispatch();
  const projectData = useSelector((state: any) => state?.dataList);
  console.log(projectData, "projectDataaaaaaaaaaaaa");
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}>
         
            <Col></Col>
          </Row>
          <Row className={styles.imageName}>
            <Col>
              <p className={styles.discover}>
             <Button type="link" href="/schemas" style={{ color: "black",    height: 47}}>
            Discover
            
          </Button></p>
            </Col>
          </Row>
        </div>
        <div className={styles.innerright1}>
          <Row className={styles.image1}>
            <Col  style={{
                  fontWeight: 350,
                  fontSize: "1.625rem",
                  marginTop: "-0.188rem",
                  color: "#a19d9d",
                  
                  marginLeft: "2rem",
                }}>354</Col>
          </Row>
          <Row className={styles.imageName1}>
            <Col>
              {" "}
               
              <Button
                type="link"
                href="/schemas"
                style={{
                  fontWeight: 350,
                  fontSize: "1.625rem",
                  marginTop: "-0.188rem",
                  color: "#a19d9d",
                  marginLeft: "-0.625rem",
                }}
              >
                SCHEMA'S
              </Button>
            </Col>
          </Row>
        </div>
        {/* <div className={styles.innerleft}>
          <Row className={styles.items}><Col><p>items</p></Col></Row>
        </div> */}
      </div>
    </>
  );
};
export default TopInnerBox;
