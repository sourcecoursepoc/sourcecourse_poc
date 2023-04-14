import { fetchRecord } from '@/redux/actions/fetchDataAction'
import { getRecordSelector } from '@/redux/selectors'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ReportGraph from './reportGraph'
import ReportsFirstContent from './reportsFirstContent'

const SummaryReport = () => {

  const getRecords=useSelector(getRecordSelector);
  const dispatch =useDispatch();
  useEffect(()=>{
  dispatch(fetchRecord())
  },[])

  const pieDataRecord = [  { name: 'Migrated', value: getRecords[0]?.RecordsDetails[0]?.migrated },
  { name: 'Pending', value: getRecords[0]?.RecordsDetails[0]?.migrated }];
  const pieDataAttribute=[{ name: ' Migrated', value: getRecords[0]?.AttributeDetails[0]?.migrated },
  { name: ' Pending', value: getRecords[0]?.AttributeDetails[0]?.pending }]
  const pieDataSize=[{ name: ' Migrated', value: getRecords[0]?.SizeDetails[0]?.migrated },
  { name: ' Pending', value: getRecords[0]?.SizeDetails[0]?.pending }]
  const pieDataPipeline=[ { name: 'Initial Load', value: getRecords[0]?.PipelineExcecution[0]?.initialLoad },
  { name: 'Syncs', value: getRecords[0]?.PipelineExcecution[0]?.syncs }]
  const pieDataPipelineExe=[   { name: 'Success', value: getRecords[0]?.PipelineStatus[0]?.success },
  { name: 'Error', value: getRecords[0]?.PipelineStatus[0]?.error }]
  return (
    <>
    <ReportsFirstContent groupName='Groups' groupNumber={getRecords[0]?.groups} schemaName='Schemas'  schemaNumber={getRecords[0]?.schemaCount} /> 
    <ReportGraph title1="Record Details" numb1={getRecords[0]?.RecordsDetails[0]?.migrated} numb2={getRecords[0]?.RecordsDetails[0]?.pending} slash="/" title2=" Records" pieData={pieDataRecord}/>
     <ReportGraph title1="Attribute Details" numb1={getRecords[0]?.AttributeDetails[0]?.migrated} numb2={getRecords[0]?.AttributeDetails[0]?.pending} slash="/" title2=" Attributes" pieData={pieDataAttribute}/>
    <ReportGraph title1="Size Details" numb1={getRecords[0]?.SizeDetails[0]?.migrated} numb2={getRecords[0]?.SizeDetails[0]?.pending} slash="/" title2=" GB" pieData={pieDataSize}/>
    <ReportGraph title1="Pipeline Execution" numb1={getRecords[0]?.PipelineExcecution[0]?.initialLoad} numb2={getRecords[0]?.AttributeDetails[0]?.syncs} title2=" Excecution" pieData={pieDataPipeline}/> 
    <ReportGraph title1="Pipeline Status" numb1={getRecords[0]?.PipelineStatus[0]?.success} numb2={getRecords[0]?.AttributeDetails[0]?.error} title2=" Execution" pieData={pieDataPipelineExe}/> 
    </>
    )
}

export default SummaryReport