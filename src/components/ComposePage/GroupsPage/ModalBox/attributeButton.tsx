import { Button } from "antd";
import styles from "../ModalBox/groupsModalBox.module.css";


interface AttributeButtonProps {
  onClickAttribute: () => void;
}
const AttributeButton: React.FC<AttributeButtonProps> = ({ onClickAttribute }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5 style={{ marginLeft: "0.5rem" }}>Attributes</h5>
        <Button className={styles.attributesbutton} onClick={onClickAttribute}>New Attribute</Button>
      </div>
    );
  }



export default AttributeButton