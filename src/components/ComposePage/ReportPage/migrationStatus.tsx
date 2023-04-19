import { Row, Tooltip } from "antd";
import React, { Fragment } from "react";
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
import MigrationPiechart from "./migrationPiechart";
import styles from "./migrationStatus.module.css";

type DataItem = {
  name: string;
  value: number;
}
interface reportGraphComp {
  data: DataItem[];
}
const MigrationStatus: React.FC<reportGraphComp> = ( { data } ) => {
  
  const COLORS = ["#1f94dc", "#f16382"];
  return (
    <>
      <BarChart width={150} height={150} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
       
        <Bar dataKey="value1" fill="#1f94dc" stackId="grouped" />
        <Bar dataKey="value2" fill="#f16382" stackId="grouped" />
        {data.map((entry, index) => (
      <Fragment key={`bar-group-${index}`}>
        <Bar key={`bar-${index}`} dataKey="value1" fill="#1f94dc" stackId={`stack-${index}`} />
        <Bar key={`bar-${index}-2`} dataKey="value2" fill="#f16382" stackId={`stack-${index}`} />
      </Fragment>
    ))}
    
      </BarChart>
    </>
  );
};

export default MigrationStatus;
