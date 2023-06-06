import { useState } from "react";
import { Button, Modal } from "antd";

interface DeleteModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteButtonModalBox: React.FC<DeleteModalProps>= () => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    // Perform delete action
    setIsDeleteModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  return (
    <>
      {/* <button onClick={handleDeleteClick}>Delete Item</button> */}
      <Modal
        visible={isDeleteModalVisible}
        title="Delete Item"
        okText="Yes"
        cancelText="No"
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      >
        <p>Are you sure you want to delete this item?</p>
        <Button >Yes</Button>
        <Button>No</Button>
      </Modal>
    </>
  );
};

export default DeleteButtonModalBox;
