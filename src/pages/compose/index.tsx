import { Layout, Space, Col, Row } from "antd";
import Header from "../../components/header/header";
import { Divider } from "antd";
import TextArea from "../../components/ComposePage/TextArea/textArea";
import styles from "./index.module.css";
import { ApartmentOutlined, ClusterOutlined, ContainerFilled, HddFilled, SettingFilled } from "@ant-design/icons";
import MainIcons from "../../components/ComposePage/MainContent/mainContentIcons";
import MainContent from "../../components/ComposePage/MainContent/mainContent";
import ButtonComponent from "@/components/ComposePage/buttons/buttonComponent";



const Compose = () => {
  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content style={{ marginTop: "1rem" }}>        
          <Row  >
            <Col span={15} style={{marginLeft:"5rem"}} className={styles.textAreaBorder}  >
              <Row style={{marginBottom:"1rem",width:"50%"}} >
                <TextArea placeholder="Name" />{" "}
              </Row>
              <Row style={{marginBottom:"1rem",width:"100%"}} >
                <TextArea placeholder="Description" />{" "}
              </Row>
            </Col>
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
