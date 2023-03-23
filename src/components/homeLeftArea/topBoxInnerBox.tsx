import React from "react";
import { Row, Col, Divider, Statistic, Button } from "antd";
import styles from "./topBoxInnerBox.module.css";
import { icons } from "antd/es/image/PreviewGroup";
import { useDispatch, useSelector, Provider } from "react-redux";

import { fetchProjectList, fetchPipelineList } from "@/services/dataService";

import store from "@/redux/store";
const TopInnerBox: React.FC = () => {
  const dispatch = useDispatch();
  const projectData = useSelector((state: any) => state?.dataList);
  console.log(projectData, "projectDataaaaaaaaaaaaa");
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}>
            <Col>{/* image */}</Col>
          </Row>
          <Row className={styles.imageName}>
            <Col>
              <p className={styles.discover}>Discover</p>
            </Col>
          </Row>
        </div>
        <div className={styles.innerright1}>
          <Row className={styles.image1}>
            <Col>{/* image */}</Col>
          </Row>
          <Row className={styles.imageName1}>
            <Col>
              {" "}
               
              <Button
                type="link"
                href="/schemas"
                style={{
                  fontWeight: 350,
                  fontSize: "26px",
                  marginTop: "-3px",
                  color: "#a19d9d",
                  marginLeft: "-10px",
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
