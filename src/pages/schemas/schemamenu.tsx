import { Menu, Row, Col, Button } from 'antd';
import { Item } from 'rc-menu';
import styles from "./schemas.module.css";
import { CloseOutlined, PlusOutlined, PartitionOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from 'react';
import AddConnectionModalBox from './addConnectionModalBox';

// const { SubMenu } = Menu;
const SchemaMenu: React.FC = () => {

    const [showConnectionBox, setShowConnectionBox] = useState(false);

    const handleAddButtonClick = () => {
        setShowConnectionBox(true)
      }

      const handleConnectionBoxCancel = () => {
        setShowConnectionBox(false);
      };

    return (
        <Menu className={styles.menu}>
            <Row>
                <Col className={styles.rows}>
                    <Item key="add" onClick={handleAddButtonClick} ><PlusOutlined /></Item>
                </Col>
                <Col className={styles.rows}>
                    <Item key="icon"><PartitionOutlined /></Item>
                </Col>
                <Col className={styles.rows}>
                    <Item key="icon"><AppstoreOutlined /></Item>
                </Col>
                <Col className={styles.closebutton}>
                    <Item key="close" >
                        <Button type="link" href="/" className={styles.button}>
                            <CloseOutlined />
                        </Button>
                    </Item>
                </Col>
            </Row>
            <AddConnectionModalBox showConnectionBox={showConnectionBox} onCancel={handleConnectionBoxCancel} />
        </Menu>

    );
}
export default SchemaMenu;