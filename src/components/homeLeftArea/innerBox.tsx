import React from "react";
import { Row, Col, Divider, Statistic } from "antd";
import styles from "./innerBox.module.css";
import { icons } from "antd/es/image/PreviewGroup";
import { Image } from "antd";
import {
  CloudSyncOutlined,
  ClusterOutlined,
  FullscreenExitOutlined,
  GroupOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
export interface ChildComponentProps {
  image: string;
}
interface MyStatisticProps {
  title: string;

  value: number;
}
export default function ({ title, value }: MyStatisticProps) {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          {/*  <Row className={styles.image}> */}
          {/*  <Col> */}
          {title === "initialLoad" && (
            <ClusterOutlined
              style={{ fontSize: "2rem", alignContent: "center" }}
            />
          )}
          {title === "groups" && (
            <GroupOutlined style={{ fontSize: "35px" }}></GroupOutlined>
          )}
          {title === "schema" && (
            <FullscreenExitOutlined style={{ fontSize: "35px" }} />
          )}
          {title === "sync" && (
            <CloudSyncOutlined style={{ fontSize: "35px" }} />
          )}
          {title === "users" && (
            <UsergroupAddOutlined style={{ fontSize: "35px" }} />
          )}
          {title === "user1" && (
            <UsergroupAddOutlined style={{ fontSize: "35px" }} />
          )}

          {/*  </Col> */}
          {/*  </Row> */}
          <Row className={styles.imageName}>
            <Col
              style={{
                marginLeft: "1rem",
                fontSize: "0.7rem",
                marginRight: "0.5rem",
              }}
            >
              {" "}
              {title}
            </Col>
          </Row>
        </div>
        <div className={styles.innerleft}>
          <Row className={styles.items}>
            <Col
              style={{
                alignSelf: "center",
                fontWeight: 350,
                fontSize: "1.3rem",
                color: "gray",
                marginLeft: "-1rem",
              }}
            >
              {value}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
