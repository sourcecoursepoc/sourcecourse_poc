import { fetchRecord } from "@/redux/actions/fetchDataAction";
import { getRecordSelector } from "@/redux/selectors";
import { Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ReportGraph from "./reportGraph";
import ReportsFirstContent from "./reportsFirstContent";
import styles from "./reportGraph.module.css";

const SummaryReport = () => {
  const getRecords = useSelector(getRecordSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecord());
  }, []);

  const pieDataRecord = [
    { name: "Migrated", value: getRecords[0]?.RecordsDetails[0]?.migrated },
    { name: "Pending", value: getRecords[0]?.RecordsDetails[0]?.pending },
  ];
  const pieDataAttribute = [
    { name: " Migrated", value: getRecords[0]?.AttributeDetails[0]?.migrated },
    { name: " Pending", value: getRecords[0]?.AttributeDetails[0]?.pending },
  ];
  const pieDataSize = [
    { name: " Migrated", value: getRecords[0]?.SizeDetails[0]?.migrated },
    { name: " Pending", value: getRecords[0]?.SizeDetails[0]?.pending },
  ];
  const pieDataPipeline = [
    {
      name: "Initial Load",
      value: getRecords[0]?.PipelineExcecution[0]?.initialLoad,
    },
    { name: "Syncs", value: getRecords[0]?.PipelineExcecution[0]?.syncs },
  ];
  const pieDataPipelineExe = [
    { name: "Success", value: getRecords[0]?.PipelineStatus[0]?.success },
    { name: "Error", value: getRecords[0]?.PipelineStatus[0]?.error },
  ];
  return (
    <>
 
       <ReportsFirstContent
        groupName="Groups"
        groupNumber={getRecords[0]?.groups}
        schemaName="Schemas"
        schemaNumber={getRecords[0]?.schemaCount}
      />
      
      <ReportGraph
        title1="Record Details"
        numb1={pieDataRecord[0].value}
        numb2={pieDataRecord[1].value}
        slash="/"
        title2=" Records"
        pieData={pieDataRecord}
      />
      <ReportGraph
        title1="Attribute Details"
        numb1={pieDataAttribute[0].value}
        numb2={pieDataAttribute[1].value}
        slash="/"
        title2=" Attributes"
        pieData={pieDataAttribute}
      />
      <ReportGraph
        title1="Size Details"
        numb1={pieDataSize[0].value}
        numb2={pieDataSize[1].value}
        slash="/"
        title2=" GB"
        pieData={pieDataSize}
      />
      <ReportGraph
        title1="Pipeline Execution"
        numb1={pieDataPipeline[0].value}
        numb2={null}
        slash=""
        title2=" Excecution"
        pieData={pieDataPipeline}
      />
      <ReportGraph
        title1="Pipeline Status"
        numb1={pieDataPipelineExe[0].value}
        numb2={null}
        slash=""
        title2=" Execution"
        pieData={pieDataPipelineExe}
      /> 
        
    </>
  );
};

export default SummaryReport;
