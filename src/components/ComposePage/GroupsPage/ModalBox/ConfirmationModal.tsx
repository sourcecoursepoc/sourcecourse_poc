import { Button, Modal } from "antd";

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
        <Button key="cancel" danger onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="ok" type="primary" onClick={onOk}>
          OK
        </Button>,

      ]}
    >
      <p>
        {/* <ExclamationCircleOutlined style={{ color: "#FFA500" }} />  */}{message}
      </p>
    </Modal>
  );
};

export default ConfirmationModal;