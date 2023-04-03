import React from "react";
import { Tabs } from "antd";
import styles from "./tabs.module.css";
const { TabPane } = Tabs;
interface ChildComponentProps {
  onBooleanValueChange: (value: boolean) => void;
}
function MyTabs(props: ChildComponentProps) {
  const { onBooleanValueChange } = props;

  // handle tab click event
  const handleTabClick = () => {
    onBooleanValueChange(true);
    console.log(onBooleanValueChange,"in tab compo")
  };

  return (
    <Tabs defaultActiveKey="1" onClick={handleTabClick} >
      <TabPane tab="All projects " key="1" style={{ marginTop:" -15px" }} ></TabPane>
    </Tabs>
  );
};

export default MyTabs;
