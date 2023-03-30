import { DeleteOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import styles from "../ModalBox/groupsModalBox.module.css";

const MiddleIcons = () => {
  return (
    <Space size={8} style={{ marginRight: "0.5rem" }}>
      <DownOutlined style={{ marginTop: "1rem" }} />
      <UpOutlined style={{ marginTop: "1rem" }} />
      <DeleteOutlined style={{ color: "orange", marginTop: "1rem" }} />
    </Space>
  );
};

export default MiddleIcons;
