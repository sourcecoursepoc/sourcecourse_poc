import React from "react";
import { Row, Col, Image } from "antd";
import styles from "./displaybox.module.css";
import "./content.module.css";

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
                <Image preview={false} src="/Status.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
              ) : title === "Size" ? (
                <Image preview={false} src="/Size.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
              ) : (
                    <Image preview={false} src="/sync.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
                  )}
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
