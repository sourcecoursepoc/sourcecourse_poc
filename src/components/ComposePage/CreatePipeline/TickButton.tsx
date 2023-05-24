import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { ReactNode, useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import styles from '../buttons/buttonStyle.module.css';

interface MyComponentProps {
    type: "link" | "text" | "dashed" | "ghost" | "default" | "primary" | undefined;
    text: string; 
    size:SizeType;
    onClick: () => void;
    style?: React.CSSProperties;
    selected:boolean;
//buttonLabels: string[];
  }
const TickButtons: React.FC<MyComponentProps>= ({type,text,size,onClick,selected},style) => {

  return (
    <>   
           <Button type={type} shape="round" icon={selected ? <CheckOutlined /> : null} size={size} className={styles.mybutton} onClick={onClick} style={style} >
            {text}
          </Button>          
    </>
  );
};
export default TickButtons
