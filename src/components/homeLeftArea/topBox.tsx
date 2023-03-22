import React from "react";
import { Card, Col, Row, Divider } from "antd";

const TopBox = () => {
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
        borderBottom:"30px",
        minWidth: 900,
        minHeight: 120,
      
        /* margin-left: 314px;
        margin-right: -272px; */
        alignItems: "center",
        backgroundColor: "#B2A4D4",
      }}
    >
      <Row gutter={50}>
      <Col span={6}>
          <Card
            style={{
              width: 221,
            
              height: 146,
            }}
            bordered={true}
           
            type="inner"
          >
           
          </Card>
          </Col>

        <Col span={6}>
          <Card
            style={{
              width: 150,
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

    /* <Card
    style={{
        marginBottom:"10px",
        marginLeft:"10px",
        marginRight:"10%",
     
      minWidth:900,
     minHeight: 120,
      height:'50%',
      alignItems:"center",
      backgroundColor:"#B2A4D4"
      
    }}
  >
     
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    
      <Card title="Card title" >
        Card content
      </Card>
    
  </Card> */
  );
};
export default TopBox;
