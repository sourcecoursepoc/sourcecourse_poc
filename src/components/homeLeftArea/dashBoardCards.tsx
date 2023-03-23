import { SlackSquareOutlined } from "@ant-design/icons";
import { Input, Row, Space, Statistic } from "antd";
import Card from "antd/es/card/Card";
import styles from "./searchBox.module.css";

function DashBoardCard({title,value})  {
  return (
    <Card>
      <Space direction="horizontal">
        <SlackSquareOutlined />
        <Statistic title={title} value={value}></Statistic>
      </Space>
    </Card>
  );
};
export default DashBoardCard;
