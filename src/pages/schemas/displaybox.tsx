import React from 'react';
import { Card } from 'antd';
import styles from './displaybox.module.css'

const DisplayBox: React.FC = () => (
  <Card  className={styles.displaycard}>
    <p>Card content</p>
  </Card>
);

export default DisplayBox;
