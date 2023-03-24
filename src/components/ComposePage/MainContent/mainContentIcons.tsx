import Icon from '@ant-design/icons/lib/components/AntdIcon';
import { Button, Col, Layout, Row } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import  { ReactNode} from 'react'
import styles from "./mainContent.module.css";

interface MyComponentProps {
   // size:SizeType;
    icon: ReactNode;
  
  }
const MainIcons: React.FC<MyComponentProps>= ({icon})=> {
  const { Content } = Layout;
  return (
    
   <Content >            
            <Button icon={icon} size={"large"} style={{width:"3rem",height:"3.5rem",marginLeft:"6rem"}} >
            </Button>
           
    </Content>
   
   )
}

export default MainIcons