import React from 'react';
import { Tabs } from 'antd';
import styles from "./tabs.module.css";

const TabsInTopBox: React.FC = () => (
  
  <Tabs
  className={styles.tabStyle}
  
    defaultActiveKey="1"
    centered
   
    items={new Array(1).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        tabBarActiveTextColor:"#1890ff",
        label: `All Projects `,
        key: id,
     
      
      };
    })}
  />
);

export default TabsInTopBox;