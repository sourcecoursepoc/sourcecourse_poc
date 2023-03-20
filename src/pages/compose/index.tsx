import { Layout, Space, Col, Row } from "antd";
import Header from "../../components/header/header";
import styles from "./compose.module.css";
import { Divider } from "antd";
import ButtonComponent from "./buttons";
import TextArea from "./textArea";
import stylesText from "./index.module.css";
import { CloseOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import MainIcons from "./mainContentIcons";

const Compose = () => {
  const { Content } = Layout;
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content>
         
          <Row >
            <Col span={17} style={{ height: "5rem" }} >
              <Row
                className={stylesText.textAreaRow}
                style={{ width: "30rem" }}
              >
                <TextArea placeholder="Name" />{" "}
              </Row>
              <Row className={stylesText.textAreaRow}>
                <TextArea placeholder="Description" />{" "}
              </Row>
            </Col>
            <Divider type="vertical" ></Divider>
            <Col span={6}>
              
                <Row>
                  <ButtonComponent text={"Delete"} icon={<DeleteOutlined />} size={"middle"} />
                  <ButtonComponent text="Clone" icon={<SaveOutlined />} size={"middle"}/>
                </Row>
                <Row>
                  <ButtonComponent text="Save" icon={<SaveOutlined />} size={"middle"}/>
                  <ButtonComponent text="Exit" icon={<CloseOutlined />} size={"middle"}/>
                </Row>
              
            </Col>
          </Row>
          <Divider plain style={{ height: "5rem" }}></Divider>
          <Row >
            <Col span={5} >
              <MainIcons icon={<SaveOutlined />} />
            </Col>
           
            <Col span={17}>
             <p>ff</p>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
};

export default Compose;
