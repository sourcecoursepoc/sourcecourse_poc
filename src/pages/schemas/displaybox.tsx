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
                <Image alt="" preview={false} src="/Status-Icon.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
              ) : title === "Size" ? (
                <Image alt="" preview={false} src="/Size.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
              ) : (
                    <Image alt="" preview={false} src="/Sync-Icon-1.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} />
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
          <Row className={styles.items}><Col style={{ width: "100%", textAlign: "-webkit-center" }}><p className={styles.styeText}>{value}</p></Col></Row>
        </div>
      </div>

    </>
  );
};

export default DisplayBox;
