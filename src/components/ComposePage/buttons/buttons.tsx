import React, { ReactNode, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import styles from './buttonStyle.module.css';

interface MyComponentProps {
    text: string; 
    icon: ReactNode;
    size:SizeType;
    onClick: () => void;
//buttonLabels: string[];
  }
const Buttons: React.FC<MyComponentProps>= ({text,icon,size,onClick}) => {
//  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  return (
    <>   
           <Button type="primary" shape="round" icon={icon} size={size} className={styles.mybutton} onClick={onClick}>
            {text}
          </Button> 
         
    </>
  );
};
export default Buttons
