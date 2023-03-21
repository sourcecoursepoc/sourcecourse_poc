import { Modal } from 'antd'
import React from 'react'

interface MyModalProps {
    visible: boolean;
    onCancel: () => void;
  }
const ModalBox: React.FC<MyModalProps> = ({ visible, onCancel }) => {
  return (
    <Modal
    visible={visible}
    onCancel={onCancel}
    style={{ padding:"50px 50px",top:"50px"}}
   >
  </Modal>
  )
}

export default ModalBox