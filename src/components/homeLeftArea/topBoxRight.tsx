
import React from "react";
import { Row, Col, Divider, Statistic, Button, Image } from "antd";
import styles from "./topBoxRight.module.css";
import Link from "next/link";

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
           <Link
            type="link"
            
            href="/compose"
            style={{
              color: "black",
              width: "8rem",
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
            }}
          >
            Compose{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default TopBoxRight;
