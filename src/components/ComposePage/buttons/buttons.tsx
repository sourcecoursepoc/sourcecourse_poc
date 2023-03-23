import React, { ReactNode, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import styles from './buttonStyle.module.css';

interface MyComponentProps {
    text: string; 
    icon: ReactNode;
    size:SizeType;
//buttonLabels: string[];
  }
const ButtonComponent: React.FC<MyComponentProps>= ({text,icon,size}) => {
//  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  return (
    <>
     {/*  {buttonLabels.map(label => (
        <Button key={label} type="primary" shape="round" icon={icon} size={size} className={styles.mybutton}>
          {label}
        </Button>
      ))} */} 
    
           <Button type="primary" shape="round" icon={icon} size={size} className={styles.mybutton} >
            {text}
          </Button> 
         
    </>
  );
};
export default ButtonComponent
