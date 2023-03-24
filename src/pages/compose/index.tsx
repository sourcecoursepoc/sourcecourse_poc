import { Layout, Space, Col, Row } from "antd";
import Header from "../../components/header/header";
import { Divider } from "antd";
import styles from "./index.module.css";
import { ApartmentOutlined, ClusterOutlined, ContainerFilled, HddFilled, SettingFilled } from "@ant-design/icons";
import MainIcons from "../../components/ComposePage/MainContent/mainContentIcons";
import MainContent from "../../components/ComposePage/MainContent/mainContent";
import ButtonComponent from "@/components/ComposePage/buttons/buttonComponent";
import TextAreaComponent from "@/components/ComposePage/TextArea/textArea";

const Compose = () => {
  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content >        
          <Row >
         <TextAreaComponent/>
          <Col span={1} className={styles.textAreaBorder} style={{borderRight:"1px solid #ccc"}}></Col>
           <ButtonComponent/>
          </Row>      
          <Row  >
            <Col  span={3} className={styles.sideButtons} >      
              
            <MainIcons icon={<HddFilled />}/>
              <MainIcons icon={<ContainerFilled />}/>
              <MainIcons icon={<ApartmentOutlined />}/>
              <MainIcons icon={<ClusterOutlined />}/>
              <MainIcons icon={<SettingFilled />}/>
              
            </Col>           
            <Col span={18}>  
            
            <MainContent/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
};

export default Compose;
