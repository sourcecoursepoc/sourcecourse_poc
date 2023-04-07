import React from "react";
import { Row, Col, Divider, Statistic, Button, Image } from "antd";
import styles from "./topBoxRight.module.css";

const TopBoxRight: React.FC = () => {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerrightTop}>
          <Image
           preview={false}
            src="./compose.png"
            style={{
              height: "2.5rem",
              marginTop: "1.1rem",
              marginLeft: "2.3rem",
              width: "3.6rem",
            }}
          ></Image>
        </div>
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
