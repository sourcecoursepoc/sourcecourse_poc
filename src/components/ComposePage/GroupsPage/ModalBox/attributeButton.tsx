import { Button } from "antd";
import styles from "../ModalBox/groupsModalBox.module.css";



const AttributeButton=  (props) => {
  
  const {onClickAttribute} = props;
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5 style={{ marginLeft: "0.5rem" }}>Attributes</h5>
        <Button className={styles.attributesbutton} onClick={onClickAttribute}>New Attribute</Button>
      </div>
    );
  }



export default AttributeButton