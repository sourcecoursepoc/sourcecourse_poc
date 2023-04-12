import { Col, Modal, Row, Card } from "antd";
import React, { useState } from "react";
import BottomSection from "./BottomSection";
import UpperSection from "./UpperSection";

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
      bodyStyle={{ borderRadius: "5px", width: "100%", minHeight: "30rem"}}
    >

      <UpperSection />

      <BottomSection />

    </Modal>
  );
};
export default PipelineModalBox;
