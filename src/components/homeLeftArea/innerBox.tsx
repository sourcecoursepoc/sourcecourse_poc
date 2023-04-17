import React from "react";
import { Row, Col } from "antd";
import styles from "./innerBox.module.css";

import { Image } from "antd";
import { GroupOutlined, UsergroupAddOutlined } from "@ant-design/icons";

export interface ChildComponentProps {
  image: string;
}

interface InnerBoxProps {
  title: string;
  value: number;
}

export default function ({ title, value }: InnerBoxProps) {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}>
            <Col>
              {title === "Initial Load" && (
                <Image
                  preview={false}
                  src="/InitialLoad-Icon4.png"
                 
                />
              )}
              {title === "Groups" && (
                <Image preview={false} src="./groups-icon.png"  
                  />
              )}
              {title === "Schema" && (
                <Image preview={false} src="./Schemas.png" 
                  />
              )}
              {title === "Sync" && (
                <Image preview={false} src="/Sync-Icon-1.png"  />
              )}
              {title === "Users" && (
                <Image preview={false} src="/users-Icon1.png" /> 
              )}
            </Col>
          </Row>
          <Row className={styles.imageName}>
            <Col
              style={{
                marginLeft: "auto",
                fontSize: "0.6rem",
                marginRight: "auto",
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
