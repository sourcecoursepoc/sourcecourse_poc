import React from "react";
import { Tabs } from "antd";
import styles from "./tabs.module.css";
const { TabPane } = Tabs;
interface MyTabsProps {
  onTabClick: () => void;
}
const MyTabs :React.FC<MyTabsProps> = ({ onTabClick }) => {
  const tabsStyle: React.CSSProperties = {
    backgroundColor: "white", // set your desired color here
    color: "white", // set the font color
  };

  return (
    <Tabs defaultActiveKey="1"  onTabClick={onTabClick} >
      <TabPane tab="All projects " key="1" style={{ marginTop:" -15px" }} ></TabPane>
    </Tabs>
  );
};

export default MyTabs;
