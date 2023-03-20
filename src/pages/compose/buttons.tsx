import styles from './buttonStyle.module.css';

import React, { ReactNode, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

interface MyComponentProps {
    text: string; 
    icon: ReactNode;
    size:SizeType;
  }
const ButtonComponent: React.FC<MyComponentProps>= ({text,icon,size}) => {
//  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  return (
    <>
          <Button type="primary" shape="round" icon={icon} size={size} className={styles.mybutton}>
            {text}
          </Button>
         
    </>
  );
};
export default ButtonComponent

// import { Button } from 'antd'
/* import React from 'react';
import styles from './buttonStyle.module.css';

//type ButtonType = "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
//shape ButtonShape="default" | "circle" | "round"| undefined;

interface MyComponentProps {
    text: string; 
    
  }
  
const ButtonComponent = ({text}:MyComponentProps) => {
  return (
      
    <Button className={styles.custombutton}>
     {text}
  </Button>
  )
} */
