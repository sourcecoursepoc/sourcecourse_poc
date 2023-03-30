import React from "react";
import { Row, Col, Divider, Statistic, Button } from "antd";
import styles from "./topBoxInnerBox.module.css";
import { icons } from "antd/es/image/PreviewGroup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjectRequest } from "@/redux/actions/fetchProjectAction";
import { getProjectsSelector } from "@/redux/selector";
import Schemas from './../../components/homeLeftArea/Schemas.png';
const TopInnerBox: React.FC = () => {
  const dispatch = useDispatch();
  const projectListData = useSelector(getProjectsSelector);

  useEffect(() => {
    dispatch(fetchProjectRequest());
  }, []);
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <div className={styles.innerrightTop}>
        <img src="Shemas.png" alt=""></img>
          </div>
          <Button
            type="link"
            href="/schemas"
            className={styles.Button}
            style={{
              color: "black",
              height: 47,
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
            }}
          >
            Discover
          </Button>
        </div>
        <div className={styles.innerleft}>
          <div className={styles.innerleft}>
            <div className={styles.innerleftTop}>
              <p className={styles.schemaNumber}>
                {projectListData[0]?.totalSchemas}
              </p>
            </div>
            <p className={styles.schemaStyle}>SCHEMA'S</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopInnerBox;
