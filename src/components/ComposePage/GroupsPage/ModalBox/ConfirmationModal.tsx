import {Modal } from "antd";
import { CheckOutlined, CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import ButtonComponent from "../../buttons/buttonComponent";
import Buttons from "../../buttons/buttons";

interface ConfirmationModalProps {
  visible: boolean;
  title?: any;
  message?: string;
  onOk: () => void;
  onCancel?: () => void;
  buttonsDisabled?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  title,
  message,
  onOk,
  onCancel,
  buttonsDisabled,

}) => {
  return (
    <Modal
      visible={visible}
      title={title}
      onCancel={onCancel}
      footer={[
      <Buttons  key="ok" text={"OK"} icon={<CheckOutlined/>} size={"middle"} onClick={onOk} disabled={buttonsDisabled}></Buttons> ,
     // <Buttons   key="cancel" text={"No"} icon={<CloseOutlined/>} size={"middle"} onClick={onCancel} disabled={buttonsDisabled}></Buttons>,   
      ]}
    >
      <p>
        {message}
      </p>
    </Modal>
  );
};

export default ConfirmationModal;