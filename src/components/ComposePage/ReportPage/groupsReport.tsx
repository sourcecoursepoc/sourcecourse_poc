import { fetchRecord } from '@/redux/actions/fetchDataAction'
import { getRecordSelector } from '@/redux/selectors'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ReportGraph from './reportGraph'
import ReportsCard from './reportsCard'
import styles from './reportsCard.module.css';
import { Col, Row } from "antd";

const GroupsReport = () => {

  const getRecords=useSelector(getRecordSelector);
  const dispatch =useDispatch();
  useEffect(()=>{
  dispatch(fetchRecord())
  },[])

  const pieDataRecord = [  { name: 'Initial Loads', value: getRecords[0]?.RecordsDetails[0]?.initialLoad },
  { name: 'Syncs', value: getRecords[0]?.RecordsDetails[0]?.syncs }];
  const pieDataAttribute=[{ name: ' Initial Loads', value: getRecords[0]?.AttributeDetails[0]?.initialLoad },
  { name: ' Syncs', value: getRecords[0]?.AttributeDetails[0]?.syncs }]
  const pieDataSize=[{ name: ' Initial Loads', value: getRecords[0]?.SizeDetails[0]?.initialLoad },
  { name: ' Syncs', value: getRecords[0]?.SizeDetails[0]?.syncs }]
  const pieDataPipeline=[ { name: 'Initial Loads', value: getRecords[0]?.PipelineExcecution[0]?.initialLoad },
  { name: 'Syncs', value: getRecords[0]?.PipelineExcecution[0]?.syncs }]

  const cardDetails = [{
    cardName : 'Schemas',
    cardNumber : getRecords[0]?.schemaCount
  },
  {
    cardName : 'Syncs',
    cardNumber : getRecords[0]?.sync
  },
  {
    cardName : 'Attributes',
    cardNumber : getRecords[0]?.attributes
  },
  {
    cardName : 'Initial Loads',
    cardNumber : getRecords[0]?.initialLoad
  }]
  
  return (
    <>
    <Col span={24} className={styles.heading} >
    <h3>Item Group</h3>
    <p className={styles.subHeading}>This group is used to export all the item related data</p>
    </Col>
    <Row style={{marginTop: "-20px"}}>
    <div className={styles.outerdiv}>
{cardDetails?.map((node, index) => (
            <ReportsCard  cardName={node.cardName} key={node.cardName}  cardNumber={node.cardNumber} /> 
          ))}
    </div>

    <ReportGraph
        title="Records"
        text={`${pieDataRecord[0].value} / ${pieDataRecord[1].value} Records`}
        pieData={pieDataRecord}
      />
      <ReportGraph
        title="Attributes"
        text={`${pieDataAttribute[0].value} / ${pieDataAttribute[1].value} Attributes`}
        pieData={pieDataAttribute}
      />
      <ReportGraph
        title="Size"
        text={`${pieDataSize[0].value} / ${pieDataSize[1].value} GB`}
        pieData={pieDataSize}
      />
      <ReportGraph
        title="Pipeline Execution"
        text={`${pieDataPipeline[0].value} Excecution`}
        pieData={pieDataPipeline}
      />

    </Row>
    </>
    )
}

export default GroupsReport
