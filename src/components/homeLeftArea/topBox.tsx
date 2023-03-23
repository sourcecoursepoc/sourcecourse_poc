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
        marginBottom: "10px",
        marginLeft: "61px",
        marginRight: "30px",
        marginTop: "16px",
        borderBottom: "30px",
        minWidth: 900,
        minHeight: 120,
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
              width: 150,
              marginLeft: 10,
              height: 156,
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
