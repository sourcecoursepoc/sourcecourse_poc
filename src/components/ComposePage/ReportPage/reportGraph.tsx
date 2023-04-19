
import { Row } from "antd";
import React,{ PureComponent }  from "react";
import styles from "./reportGraph.module.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useSelector } from "react-redux";
import { getRecordSelector } from "@/redux/selectors";
type PieChartData = {
  name: string;
  value: number;
}
interface reportGraphComp{
    title:string;
    text:string;
    pieData: PieChartData[];
}
const ReportGraph:React.FC<reportGraphComp> = ({title,text,pieData}) => {
  const getRecords = useSelector(getRecordSelector);
      const COLORS = ['#1f94dc', '#f16382'];

  return (
    <>
      <div className={styles.outerbox} >
        <Row className={styles.innerBox1}>
          <p style={{textAlign:"center",textJustify:'inherit'}}>{title}</p>
        </Row>
        <Row className={styles.innerBox2}>
        <p>{text}</p>
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>      
          <Legend wrapperStyle={{ fontSize: '10px'}} />
        </PieChart>
        </div>
        </Row>
        
      </div>
    </>
  );
};

export default ReportGraph;
