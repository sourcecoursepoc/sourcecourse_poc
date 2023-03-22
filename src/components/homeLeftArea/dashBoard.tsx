import React from 'react';
import { Card, Space, Statistic } from 'antd';
import styles from './displaybox.module.css'
import { ShoppingCartOutlined } from '@ant-design/icons';
import InnerBox from './innerBox';

const DashBoard: React.FC = ({}) => (
<div>
<Space direction="horizontal">
    <InnerBox></InnerBox>
{/*   <Card  >
   <Space direction="horizontal"></Space>
   <ShoppingCartOutlined></ShoppingCartOutlined>
   <Statistic title="gfdgsd" value={234}></Statistic>
  </Card> */}
  
  </Space>
  </div>
);

export default DashBoard;