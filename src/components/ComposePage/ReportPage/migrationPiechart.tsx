import { Row } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./migrationStatus.module.css";
type PieChartData = {
  name: string;
  value: number; 
  //value2: number;
};
interface reportGraphComp {
  title1: string;
  numb1: number;
  numb2: number | null;
  title2: string;
  slash: string;
  pieData: PieChartData[];
}
const MigrationPiechart: React.FC<reportGraphComp> = ({
  pieData,title2,numb1,numb2,slash,title1
}) => {
  const COLORS = ["#1f94dc", "#f16382"];
  return ( 
    <Row className={styles.innerBox22}>
      <div className={styles.textContainer}>
      {title1}
    <p>{numb1}{' '}{slash}{' '}{numb2}{' '}{title2}</p></div>
    <div className={styles.chartcontainer}>
        <PieChart width={200} height={200} >
          <Pie
          data={pieData}        
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          >
            {pieData?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        </div>
        </Row>
        
   
  );
};

export default MigrationPiechart;
