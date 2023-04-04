import React from "react";
import { Card, Row, Col, Divider, Image } from "antd";
import styles from "./displaybox.module.css";
import "./content.module.css";
import { ApartmentOutlined } from "@ant-design/icons";

export interface ChildComponentProps {
  image: string;
}
interface MyComponentProps {
  title: any;
  value: any;
}
const DisplayBox: ({ title, value }: MyComponentProps) => JSX.Element = ({ title, value }) => {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerright}>
          <Row className={styles.image}
          ><Col>
              {title === "Status" ? (
                <Image src="/Status.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
              ) : title === "Size" ? (
                <Image src="/Size.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
              ) : (
                    <Image src="/sync.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
                  )}
              {/* {<ApartmentOutlined />} */}
            </Col>
          </Row>
          <Row className={styles.imageName}>
            <Col className={styles.imageNameText}>
              <p >{title}
              </p>
            </Col>
          </Row>
        </div>
        <div className={styles.innerleft}>
          <Row className={styles.items}><Col><p className={styles.styeText}>{value}</p></Col></Row>
        </div>
      </div>

    </>
  );
};

export default DisplayBox;
