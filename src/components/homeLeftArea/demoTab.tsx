import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

interface TabProps {
  onBooleanValueChange: (value: boolean) => void;
}

function MyTabs(props: TabProps) {
  const { onBooleanValueChange } = props;

  const handleTabClick = () => {
    onBooleanValueChange(true);
  };
  const tabsStyle = {
    // margin: -0.7rem,
   marginTop:"-0.7rem"
    // backgroundColor: "lightblue", // change the background color of tabs
   
   // change the font size of tabs
  };

  return (
    <Tabs defaultActiveKey="1"
tabBarStyle={tabsStyle} 
     onClick={handleTabClick}>
      
      <TabPane
        tab="All projects " style={{ font: "#fffff"}}
        key="1"
        // style={{ marginTop: " -16px" }}
      ></TabPane>
    </Tabs>
  );
}

export default MyTabs;
