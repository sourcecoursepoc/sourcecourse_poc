import { Col, Modal, Row, Card } from "antd";
import React, { useState } from "react";
import Buttons from "../buttons/buttons";
import MiddleNavBar from "./MiddleNavBar";
import UpperSection from "./upperSection";

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

      <UpperSection />

      <MiddleNavBar />

    </Modal>
  );
};
export default PipelineModalBox;
