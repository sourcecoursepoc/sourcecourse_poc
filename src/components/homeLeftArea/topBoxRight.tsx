
import React from "react";
import { Row, Col, Divider, Statistic, Button, Image } from "antd";
import styles from "./topBoxRight.module.css";

const TopBoxRight: React.FC = () => {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.innerrightTop}>
          <Image
          alt=""
           preview={false}
            src="./compose-Icon2.png"
           style={{
            marginLeft: "2rem",
              width: "4rem",
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
