
import { Row } from "antd";
import React,{ PureComponent }  from "react";
import styles from "./reportGraph.module.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

interface reportGraphComp{
    title1:string;
    numb1:string;
    numb2:string;
    title2:string;
    slash:string;
}
const ReportGraph:React.FC<reportGraphComp> = ({title1,numb1,numb2,title2,slash}) => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 800 },
      
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <div className={styles.outerbox}>
        <Row className={styles.innerBox1}>
          <p style={{textAlign:"center",textJustify:'inherit'}}>{title1}</p>
        </Row>
        <Row className={styles.innerBox2}>
          <p>{numb1}</p><p>{slash}</p><p>{numb2}</p><p>{' '}</p><p>{title2}</p>
          <PieChart width={200} height={200}>
        <Pie
          data={data}
         
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
   {/*       <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> */} 
            
        </PieChart>
        </Row>
        
      </div>
    </>
  );
};

export default ReportGraph;
