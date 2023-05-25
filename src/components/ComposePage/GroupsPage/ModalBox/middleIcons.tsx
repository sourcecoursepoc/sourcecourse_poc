import {
  DeleteFilled,
  DeleteOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

import React from "react";
interface MiddleIconsProps {
  index: number;
  name: string;
  onUpArrowClick: () => void;
  onDownArrowClick: () => void;
  arrayLength: number;
  onDeleteClick: () => void;
}
const MiddleIcons: React.FC<MiddleIconsProps> = ({
  index,
  name,
  onUpArrowClick,
  onDownArrowClick,
  arrayLength,
  onDeleteClick,
}) => {
  return (
    <Space size={8} style={{ marginRight: "0.5rem" }}>
      {index > 0 && (
        <UpOutlined
          style={{ marginTop: "1rem", fontSize: "10px" }}
          onClick={onUpArrowClick}
        />
      )}
      {/* //array.length-1 */}
      {index >= arrayLength ? null : (
        <DownOutlined
          style={{ marginTop: "1rem", fontSize: "10px" }}
          onClick={onDownArrowClick}
        />
      )}
      <DeleteFilled style={{ color: "red", marginTop: "1rem" }} onClick={onDeleteClick}/>
    </Space>
  );
};

export default MiddleIcons;

