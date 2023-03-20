import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React , { ReactNode} from 'react'
import styles from './index.module.css';

interface MyComponentProps {
   // size:SizeType;
    icon: ReactNode;
  
  }
const MainIcons: React.FC<MyComponentProps>= ({icon})=> {

  return (
    <Button icon={icon}   className={styles.content}>

    </Button>
  )
}

export default MainIcons