import React from "react";
import { Button, Card, Col, Row, Divider } from "antd";
import styles from "./topBox.module.css";
import TopInnerBox from "./topBoxInnerBox";
import TopBoxRight from "./topBoxRight";
const TopBox: React.FC = () => {
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };

  return (
    <div className={styles.topBox}>
      <Row>
        <Col span={12}>
          <TopInnerBox></TopInnerBox>
        </Col>
        <Col span={1} style={{borderLeft:"1px solid #9a9696",marginTop:"0.625rem"}}>
         
        </Col>
        <Col span={11}>
          <TopBoxRight></TopBoxRight>
        </Col>
      </Row>
    </div>
    // <Card
    //   style={{
    //     marginBottom: "0.625rem",
    //     marginLeft: "3.813rem",
    //     marginRight: "1.875rem",
    //     marginTop: "3rem",
    //     borderBottom: "1.875rem",
    //   width:"fitcontent",
    //   height:"9rem",
    //     alignItems: "center",
    //     backgroundColor: "#B2A4D4",
    //   }}
    // >
    //   <Row gutter={16}>
    //     <Col span={10}>
    //     <TopInnerBox></TopInnerBox>
    //     </Col>
    //     <Col span={5}  style={{borderRight:"1px solid #9a9696"}}></Col>
    //     <Col span={9}>
    //       <Card
    //         style={{
    //           width: "fitcontent",
    //           marginLeft: "0.625rem",
    //           height:"fitcontent",
    //           alignItems: "center",
    //         }}

    //         bordered={true}
    //        /*  cover={
    //           <img
    //             alt="example"
    //             src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    //             className={styles.img}
    //           />
    //         } */

    //         type="inner"

    //       >
    //          <Button type="link" href="/compose" style={{ color: "black",    height: 47,marginBottom:1}}>
    //         Compose

    //       </Button>

    //       </Card>

    //     </Col>
    //   </Row>
    // </Card>
  );
};
export default TopBox;
