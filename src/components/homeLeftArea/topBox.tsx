import React from "react";
import { Card, Col, Row,} from "antd";


const TopBox: React.FC = () =>  {
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
       
          
        <Card
            style={{
              width: 275,
              marginLeft: 330,
              height: 146,
            }}
            bordered={true}
            type="inner"
          
          >  </Card>
        </Col>

        <Col span={12}>
          <Card
            style={{
              width: 150,
              marginLeft: 116,
              alignItems: "center",
            }}
            bordered={true}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            type="inner"
          >
            Compose
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
export default TopBox;
