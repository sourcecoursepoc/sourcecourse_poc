import { Modal } from "antd";
import React, { useState } from "react";
import BottomSection from "./BottomSection";
import UpperSection from "./UpperSection";

interface MyModalProps {
  showCreatePipeline?: boolean;
  onCancel?: () => void;
}

const PipelineModalBox: React.FC<MyModalProps> = ({ showCreatePipeline, onCancel }) => {

  const [cardSelected, setCardSelected] = useState<"initial" | "sync">("initial");

  const handleSyncCardSelect = () => {
    setCardSelected("sync");
  };

  const handleInitialCardSelect = () => {
    setCardSelected("initial");
  };

  return (
    <Modal
      visible={showCreatePipeline}
      onCancel={onCancel}
      footer={null}
      closable={false}
      width={1000}
      bodyStyle={{ borderRadius: "5px", width: "100%", minHeight: "30rem" }}
    >

      <UpperSection cardSelected={cardSelected} onSelectInitial={handleInitialCardSelect} onSelectSync={handleSyncCardSelect} />

      <BottomSection cardSelected={cardSelected} />

    </Modal>
  );
};
export default PipelineModalBox;
