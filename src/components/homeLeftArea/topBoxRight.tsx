import React from "react";
import { Row, Col, Divider, Statistic, Button } from "antd";
import styles from "./topBoxRight.module.css";

const TopBoxRight: React.FC = () => {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerrightTop}></div>

        <div className={styles.innerrightBottom}>
          {" "}
          <Button
            type="link"
            href="/compose"
            style={{ color: "black", marginLeft: "1rem" }}
          >
            Compose{" "}
          </Button>
        </div>
      </div>
    </>
  );
};
export default TopBoxRight;
