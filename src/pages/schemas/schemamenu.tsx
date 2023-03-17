import { Menu, Row, Col } from 'antd';
import { Item } from 'rc-menu';
import styles from "./schemas.module.css";
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const SchemaMenu: React.FC = () => {
    return (
        <Menu className={styles.menu}>
            <Row>
                <Col className={styles.rows}>
                    <Item key="add" ><PlusOutlined/></Item>
                </Col>
                <Col className={styles.rows}>
                    <Item key="icon">icon</Item>
                </Col>
                <Col className={styles.rows}>
                    <Item key="icon">icon</Item>
                </Col>
                <Col className={styles.closebutton}>
                    <Item key="close" >
                        <CloseOutlined />
                    </Item>
                </Col>
            </Row>
        </Menu>

    );
}
export default SchemaMenu;