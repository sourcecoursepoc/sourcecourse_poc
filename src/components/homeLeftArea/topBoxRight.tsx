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
            className={styles.Button}
            style={{
              color: "black",
              width: "8rem",
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
            }}
          >
            Compose{" "}
          </Button>
        </div>
      </div>
    </>
  );
};
export default TopBoxRight;
