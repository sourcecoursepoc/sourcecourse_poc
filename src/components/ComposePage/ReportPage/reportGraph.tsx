
import { Row } from "antd";
import React,{ PureComponent }  from "react";
import styles from "./reportGraph.module.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

interface reportGraphComp{
    title1:string;
    numb1:string;
    numb2:string;
    title2:string;
    slash:string;
}
const ReportGraph:React.FC<reportGraphComp> = ({title1,numb1,numb2,title2,slash}) => {
    const data = [
      { name: 'Migrated', value: 800 },
        { name: 'Pending', value: 400 },     
      ];
      const COLORS = ['#1f94dc', '#f16382'];

  return (
    <>
      <div className={styles.outerbox}>
        <Row className={styles.innerBox1}>
          <p style={{textAlign:"center",textJustify:'inherit'}}>{title1}</p>
        </Row>
        <Row className={styles.innerBox2}>
          <p>{numb1}</p><p>{slash}</p><p>{numb2}</p><p>{' '}</p><p>{title2}</p>
          <div className={styles.chartcontainer}>
          <PieChart width={200} height={200} >
        <Pie
          data={data}        
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
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
