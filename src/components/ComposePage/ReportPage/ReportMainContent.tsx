import React, { useState } from "react";
import { Button, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import styles from "./ReportMainContent.module.css";
import ReportsFirstContent from "./reportsFirstContent";
import SummaryReport from "./summaryReport";


const ReportMainContent = () => {
 
  const { Content } = Layout;
  const [activeTab, setActiveTab] = useState('Summary');
  const renderSelectedComponent = () => {
      if (activeTab === null) {
        return null; // or handle this case however is appropriate for your application
      }
      else{
      switch (activeTab) {
        case "Summary":
          return <SummaryReport/>;
         
        default:
          return null;
      }
      }
    };
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Row className={styles.pinkbar}>
          <p className={styles.text}>Report</p>
        </Row>
        <Row type="flex">
    <div
      onClick={() => setActiveTab('Summary')}
      style={{
        backgroundColor: activeTab === 'Summary' ? 'white' : 'transparent',
        color: activeTab === 'Summary' ? 'purple' : 'grey',
        borderBottom: activeTab === 'Summary' ? '2px solid purple' : 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        marginLeft:'1rem'
      }}
    >
      Summary
    </div>
    <div
      onClick={() => setActiveTab('Schemas')}
      style={{
        backgroundColor: activeTab === 'Schemas' ? 'white' : 'transparent',
        color: activeTab === 'Schemas' ? 'purple' : 'grey',
        borderBottom: activeTab === 'Schemas' ? '2px solid purple' : 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        marginLeft:'1rem'
      }}
    >
      Schemas
    </div>
    <div
      onClick={() => setActiveTab('Attribute')}
      style={{
        backgroundColor: activeTab === 'Attribute' ? 'white' : 'transparent',
        color: activeTab === 'Attribute' ? 'purple' : 'grey',
        borderBottom: activeTab === 'Attribute' ? '2px solid purple' : 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        marginLeft:'1rem'
      }}
    >
      Attribute
    </div>
    <div
      onClick={() => setActiveTab('Pipeline')}
      style={{
        backgroundColor: activeTab === 'Pipeline' ? 'white' : 'transparent',
        color: activeTab === 'Pipeline' ? 'purple' : 'grey',
        borderBottom: activeTab === 'Pipeline' ? '2px solid purple' : 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        marginLeft:'1rem'
      }}
    >
      Pipeline
    </div>
    <div
      onClick={() => setActiveTab('Groups')}
      style={{
        backgroundColor: activeTab === 'Groups' ? 'white' : 'transparent',
        color: activeTab === 'Groups' ? 'purple' : 'grey',
        borderBottom: activeTab === 'Groups' ? '2px solid purple' : 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        marginLeft:'1rem'
      }}
    >
      Groups
    </div>
    <div
      onClick={() => setActiveTab('Insights')}
      style={{
        backgroundColor: activeTab === 'Insights' ? 'white' : 'transparent',
        color: activeTab === 'Insights' ? 'purple' : 'grey',
        borderBottom: activeTab === 'Insights' ? '2px solid purple' : 'none',
        padding: '0.5rem',
        cursor: 'pointer',
        marginLeft:'1rem'
      }}
    >
      Insights
    </div>
  </Row>
   <Row >
   {renderSelectedComponent()}
   </Row>
       
      </Content>
    </Layout>
  );
};

export default ReportMainContent;
