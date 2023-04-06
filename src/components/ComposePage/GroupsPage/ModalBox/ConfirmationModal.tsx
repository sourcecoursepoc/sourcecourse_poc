import {Modal } from "antd";
import { CheckOutlined, CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import ButtonComponent from "../../buttons/buttonComponent";
import Buttons from "../../buttons/buttons";

interface ConfirmationModalProps {
  visible: boolean;
  title: string;
  message: string;
  onOk: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  title,
  message,
  onOk,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      title={title}
      onCancel={onCancel}
      footer={[
      <Buttons text={"Yes"} icon={<CheckOutlined/>} size={"middle"} onClick={onOk}></Buttons> ,
      <Buttons text={"No"} icon={<CloseOutlined/>} size={"middle"} onClick={onCancel}></Buttons>,   
      ]}
    >
      <p>
        {/* <ExclamationCircleOutlined style={{ color: "#FFA500" }} />  */}{message}
      </p>
    </Modal>
  );
};

export default ConfirmationModal;