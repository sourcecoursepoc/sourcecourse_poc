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
          <Row className={styles.image}>
            <Col>
              {title === "initialLoad" && (
                <Image
                src="/Initial Load.png"
                style={{
                  width: "4.97rem",
                  marginBottom: "-0.2rem",
                  marginLeft: "-1.5rem",
                  
                }}
           
              />
              )}
              {title === "groups" && (
                <GroupOutlined style={{ fontSize: "35px" }}></GroupOutlined>
              )}
              {title === "schema" && (
                <Image
                  src="/Schemas.png"
                  style={{
                    height: "1.9rem",
                    marginBottom: "0.1rem",
                    marginLeft: "0.2rem",
                    marginTop: "0.1rem",
                  }}
                />
              )}
              {title === "sync" && (
                <Image
                src="/sync.png"
                style={{
                  height: "1.9rem",
                  marginBottom: "0.1rem",
                  marginLeft: "-0.8rem",
                  marginTop: "0.1rem",
                }}
    
              />
              )}
              {title === "users" && (
                <UsergroupAddOutlined style={{ fontSize: "35px" }} />
              )}
              {title === "users1" && (
                <UsergroupAddOutlined style={{ fontSize: "35px" }} />
              )}
            </Col>
          </Row>
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
