import React from "react";
import { Button, Card, Col, Row ,Divider} from "antd";
import styles from "./topBox.module.css";
import TopInnerBox from "./topBoxInnerBox";
const TopBox: React.FC = () => {
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };

  return (
    <Card
      style={{
        marginBottom: "0.625rem",
        marginLeft: "3.813rem",
        marginRight: "1.875rem",
        marginTop: "1rem",
        borderBottom: "1.875rem",
        minWidth:"45.25rem",
        minHeight: "7.5rem",
        alignItems: "center",
        backgroundColor: "#B2A4D4",
      }}
    >
      <Row gutter={16}>
        <Col span={10}>
        <TopInnerBox></TopInnerBox>
        </Col>
        <Col span={5}  style={{borderRight:"1px solid #9a9696"}}></Col>
        <Col span={9}>
          <Card
            style={{
              width: "9.375rem",
              marginLeft: "0.625rem",
              height: "9.75rem",
              alignItems: "center",
            }}
            
            bordered={true}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                className={styles.img}
              />
            }
          
            type="inner"
            
          >
             <Button type="link" href="/compose" style={{ color: "black",    height: 47}}>
            Compose
            
          </Button>
         
          </Card>
         
        </Col>
      </Row>
    </Card>
  );
};
export default TopBox;