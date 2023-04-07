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
                  src="/Initial Load.png"
                  style={{
                    width: "4.97rem",
                    marginBottom: "-0.2rem",
                    marginLeft: "-1.5rem",
                  }}
                />
              )}
              {title === "Groups" && (
                <GroupOutlined style={{ fontSize: "35px" }}></GroupOutlined>
              )}
              {title === "Schema" && (
                <Image
                preview={false}
                  src="/Schemas.png"
                  style={{
                    height: "1.9rem",
                    marginBottom: "0.1rem",
                    marginLeft: "0.2rem",
                    marginTop: "0.1rem",
                  }}
                />
              )}
              {title === "Sync" && (
                <Image
                preview={false}
                  src="/sync.png"
                  style={{
                    height: "1.9rem",
                    marginBottom: "0.1rem",
                    marginLeft: "-0.8rem",
                    marginTop: "0.1rem",
                  }}
                />
              )}
              {title === "Users" && (
                <UsergroupAddOutlined style={{ fontSize: "35px" }} />
              )}
            </Col>
          </Row>
          <Row className={styles.imageName}>
            <Col
              style={{
                marginLeft: "1rem",
                fontSize: "0.6rem",
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
