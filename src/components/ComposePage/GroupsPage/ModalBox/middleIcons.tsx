import { DeleteFilled, DeleteOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import styles from "../ModalBox/groupsModalBox.module.css";

interface MyComponent{
uid: string;
 handleRemove: (uid: string) => void;
}

const MiddleIcons:React.FC<MyComponent>= ({index,handleRemove,uid}) => {
  return (
   <Space size={8} style={{ marginRight: "0.5rem" }}>
  {index > 0 && (
    <UpOutlined style={{ marginTop: "1rem", fontSize: "10px" }} />
  )}
  {index === length - 1 ? null : (
    <DownOutlined style={{ marginTop: "1rem", fontSize: "10px" }} />
  )}
  <DeleteFilled style={{ color: "red", marginTop: "1rem" }} onClick={() => handleRemove(uid)}/>
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