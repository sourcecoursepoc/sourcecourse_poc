import { DeleteFilled, DeleteOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import styles from "../ModalBox/groupsModalBox.module.css";

const MiddleIcons = ({index}) => {
  return (
    <Space size={8} style={{ marginRight: "0.5rem" }}>

      {index > 0 && (
      <UpOutlined style={{ marginTop: "1rem", fontSize: "10px" }} />
    )}
    <DownOutlined style={{ marginTop: "1rem", fontSize: "10px" }} />
    <DeleteFilled style={{ color: "red", marginTop: "1rem" }} />
    </Space>
  );
};

export default MiddleIcons;
