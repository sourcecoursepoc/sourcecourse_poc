import React, { useState } from 'react';
import { Layout, Space, Col, Row, Image } from "antd";
import Header from "../../components/header/header";
import { Divider } from "antd";
import styles from "./index.module.css";
import {
  ApartmentOutlined,
  ClusterOutlined,
  ContainerFilled,
  HddFilled,
  SettingFilled,
} from "@ant-design/icons";
import MainIcons from "../../components/ComposePage/MainContent/mainContentIcons";
import MainContent from "../../components/ComposePage/MainContent/mainContent";
import ButtonComponent from "@/components/ComposePage/buttons/buttonComponent";

import GroupsMainContent from '@/components/ComposePage/GroupsPage/groupsMainContent';
import TextAreaComponent from '@/components/ComposePage/TextArea/textArea';

const Compose = () => {
  const { Content } = Layout;
  const [selectedIcon, setSelectedIcon] = useState(null);
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const renderSelectedComponent = () => {
    switch (selectedIcon) {
      case 'HddFilled':
        return <MainContent />;
      case 'ContainerFilled':
        return <GroupsMainContent />;
      // add additional cases for each icon
      default:
        return null;
    }
  };
  return (
    <Space direction="vertical" className={styles.space} size={[0, 48]}>
      <Layout className={styles.layout}>
        <Header />
        <Content style={{ marginTop: "1rem" }}>
          <Row>
           <TextAreaComponent/>
            <Col
              span={1}
              className={styles.textAreaBorder}
              style={{ borderRight: "1px solid #ccc" }}
            ></Col>
            <ButtonComponent />
          </Row>

          <Row>
            <Col span={3} className={styles.sideButtons}>
            <MainIcons icon={<HddFilled />} onClick={() => handleIconClick('HddFilled')} />
        <MainIcons icon={<ContainerFilled />} onClick={() => handleIconClick('ContainerFilled')} />
        <MainIcons icon={<ApartmentOutlined />} onClick={() => handleIconClick('ApartmentOutlined')} />
        <MainIcons icon={<ClusterOutlined />} onClick={() => handleIconClick('ClusterOutlined')} />
        <MainIcons icon={<SettingFilled />} onClick={() => handleIconClick('SettingFilled')} />
            </Col>
           
            <Col span={18}>
            {renderSelectedComponent()}
            </Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
};

export default Compose;
