import React, { ReactNode, useState } from 'react';
import { Button, Radio, Space, Divider } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
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
const Buttons: React.FC<MyComponentProps>= ({text,icon,size,onClick,href},style) => {
//  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  return (
    <>   
           <Button type="primary" shape="round" icon={icon} size={size} className={styles.mybutton} onClick={onClick} href={href} style={style} >
            {text}
          </Button>          
    </>
  );
};
export default Buttons
