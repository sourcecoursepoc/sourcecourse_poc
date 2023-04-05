import {
  DeleteFilled,
  DeleteOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

import React from "react";
const MiddleIcons = ({ index, name, onUpArrowClick, onDownArrowClick }) => {
  return (
    <Space size={8} style={{ marginRight: "0.5rem" }}>
      {index > 0 && (
        <UpOutlined
          style={{ marginTop: "1rem", fontSize: "10px" }}
          onClick={onUpArrowClick}
        />
      )}
      {/* //array.length-1 */}
      {index < -1 ? null : (
        <DownOutlined
          style={{ marginTop: "1rem", fontSize: "10px" }}
          onClick={onDownArrowClick}
        />
      )}

      <DeleteFilled style={{ color: "red", marginTop: "1rem" }} />
    </Space>
  );
};

export default MiddleIcons;

{/* <Button style={{border:'none',color:'red',background:'white',fontWeight:"normal"}}

 onClick={() => handleRemove(node.uid)}

 >Remove</Button>

const handleRemove = (uid: string) => {

      dispatch(removeNode(uid));
  
    }; */}