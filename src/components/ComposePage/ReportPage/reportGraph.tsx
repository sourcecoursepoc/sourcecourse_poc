
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
  return (
    <>
      <div className={styles.outerbox}>
        <Row className={styles.innerBox1}>
          <p style={{textAlign:"center",textJustify:'inherit'}}>{title1}</p>
        </Row>
        <Row className={styles.innerBox2}>
          <p>{numb1}</p><p>{slash}</p><p>{numb2}</p><p>{' '}</p><p>{title2}</p>
        </Row>
        <Row>
        <PieChart width={800} height={400}>

            
        </PieChart>
        </Row>
      </div>
    </>
  );
};

export default ReportGraph;
