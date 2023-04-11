import React from 'react'
import { Row } from 'antd';
import styles from "../pinkbar/pinkbar.module.css";
interface componentProps {
    title: any;
}
const Pinkbar: React.FC<componentProps> = ({ title }) => {
    return (
        <>
            <Row className={styles.pinkbar}>
                <p className={styles.text}>
                    {title}
                </p>
            </Row>
        </>
    )
}
export default Pinkbar;