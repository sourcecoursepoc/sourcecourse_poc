import React from 'react';
import { Tabs } from 'antd';
import styles from "./tabs.module.css";
const { TabPane } = Tabs;

const MyTabs = () => {
 
  const tabsStyle: React.CSSProperties = {
    backgroundColor: 'white', // set your desired color here
    color: 'white', // set the font color
  };

  return (
    <Tabs defaultActiveKey="1"  style={tabsStyle} >
 
      <TabPane tab="All projects " key="1"  >
       
      </TabPane>
     
    </Tabs>
  );
};

export default MyTabs;