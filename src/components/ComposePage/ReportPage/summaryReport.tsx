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
        title="Record Details"
        text={`${pieDataRecord[0].value} / ${pieDataRecord[1].value} Records`}
        pieData={pieDataRecord}
      />
      <ReportGraph
        title="Attribute Details"
        text={`${pieDataAttribute[0].value} / ${pieDataAttribute[1].value} Attributes`}
        pieData={pieDataAttribute}
      />
      <ReportGraph
        title="Size Details"
        text={`${pieDataSize[0].value} / ${pieDataSize[1].value} GB`}
        pieData={pieDataSize}
      />
      <ReportGraph
        title="Pipeline Execution"
        text={`${pieDataPipeline[0].value} Excecution`}
        pieData={pieDataPipeline}
      />
      <ReportGraph
        title="Pipeline Status"
        text={`${pieDataPipelineExe[0].value} Excecution`}
        pieData={pieDataPipelineExe}
      /> 
    </>
  );
};

export default SummaryReport;
