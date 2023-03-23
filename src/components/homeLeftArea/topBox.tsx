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
        marginLeft: "60px",
        marginRight: "30px",
        marginTop: "30px",
        borderBottom: "30px",
        minWidth: 900,
        minHeight: 120,
        alignItems: "center",
        backgroundColor: "#B2A4D4",
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
        <TopInnerBox></TopInnerBox>
        </Col>

        <Col span={12}>
          <Card
            style={{
              width: 150,
              marginLeft: 116,
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
             <Button type="link" href="/schemas" style={{ color: "black",    height: 47}}>
            Compose
            
          </Button>
         
          </Card>
         
        </Col>
      </Row>
    </Card>
  );
};
export default TopBox;
