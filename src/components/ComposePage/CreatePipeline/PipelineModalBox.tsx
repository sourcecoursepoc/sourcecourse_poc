import { PlayCircleFilled } from "@ant-design/icons";
import { Col, Modal, Row, Card } from "antd";
import React, { useState } from "react";
import Buttons from "../buttons/buttons";

interface MyModalProps {
  showCreatePipeline?: boolean;
  onCancel?: () => void;
}

const PipelineModalBox: React.FC<MyModalProps> = ({ showCreatePipeline, onCancel }) => {

  return (
    <Modal
      visible={showCreatePipeline}
      onCancel={onCancel}
      footer={null}
      closable={false}
      width={1000}
      bodyStyle={{ height: "80vh", borderRadius: "5px", width: "100%" }}
    >

      <Row justify="space-between" style={{ borderBottom: "1px solid #ccc" }}>

        <Col
          flex={3}
          style={{
            display:"flex",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >

          <Col>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  height={10}
                  alt="initial load"
                  src="/Schemas.png"
                />
              }
            >
              <Card.Meta title="Initial Load" />
            </Card>
          </Col>

          <Col  style={{ marginLeft: "1rem" }} >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  height={10}
                  alt="initial load"
                  src="/Schemas.png"
                />
              }
            >
              <Card.Meta title="Sync" />
            </Card>
          </Col>

        </Col>



        <Col
          style={{
            textAlign:"right",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Buttons
            text="Execute"
            icon={<PlayCircleFilled/>}
            size={"middle"}
            onClick={() => { }}
            href={"/"}
          />

        </Col>



      </Row>

      <Row type="flex" justify="center" align="middle">
         
      </Row>  

    </Modal>
  );
};
export default PipelineModalBox;
