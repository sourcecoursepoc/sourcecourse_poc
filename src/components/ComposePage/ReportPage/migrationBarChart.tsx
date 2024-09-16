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
import styles from "./migration.module.css";

type DataItem = {
  name?: string;
  value?: number;
}
interface reportGraphComp {
  data: DataItem[];
}
const MigrationBarChart: React.FC<reportGraphComp> = ( { data } ) => {
  
  const COLORS = ["#e37f95", "#73b5de"];
  return (
    <>
      <BarChart width={380} height={300} data={data} layout="vertical" margin={{ top: 20 }}>
        <XAxis type="number"tickLine={false} fontSize={10}angle={-25} width={100} tickCount={10} />
        <YAxis type="category" dataKey="name" tickLine={false} fontSize={10} width={100}/>
        <Tooltip />
       
        <Bar dataKey="value1" fill="#e37f95" stackId="grouped" />
        <Bar dataKey="value2" fill="#73b5de" stackId="grouped" />
        {data.map((entry, index) => (
      <Fragment key={`bar-group-${index}`}>
        <Bar key={`bar-${index}`} dataKey="value1" fill="#e37f95" stackId={`stack-${index}`} />
        <Bar key={`bar-${index}-2`} dataKey="value2" fill="#73b5de" stackId={`stack-${index}`} />
      </Fragment>
    ))}
    
      </BarChart>
    </>
  );
};

export default MigrationBarChart;
