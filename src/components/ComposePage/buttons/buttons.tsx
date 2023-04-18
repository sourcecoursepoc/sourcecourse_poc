import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { ReactNode, useState } from 'react';
import styles from './buttonStyle.module.css';

interface MyComponentProps {
    text: string; 
    icon: ReactNode;
    size:SizeType;
    href:string;
    onClick: () => void;
    style?: React.CSSProperties;
//buttonLabels: string[];
  }
const Buttons: React.FC<MyComponentProps>= ({text,icon,size,onClick,href,style}) => {

  return (
    <>   
           <Button type="primary" shape="round" icon={icon} size={size} className={styles.mybutton} onClick={onClick} href={href} style={style} >
            {text}
          </Button>          
    </>
  );
};
export default Buttons
