import React, { useEffect } from 'react'
import ReportsFirstContent from "../ReportPage/reportsFirstContent"
import { useSelector } from 'react-redux';
import { getRecordSelector } from '../../../redux/selectors';
import ReportGraph from '../ReportPage/reportGraph';
import { Row, Col } from 'antd';
import MigrationStatus from '../ReportPage/migrationStatus';
import styles from "./ComposeReportsPipeline.module.css";
import { getComposeReportsPipelineSelector } from '../../../redux/selector';
import { useDispatch } from 'react-redux';
import { fetchComposeReportsPipelineRequest } from '../../../redux/actions/composeAction';

export default function ComposeReportsPipeline() {
    const getRecords = useSelector(getRecordSelector);
    const ComposeReportsPipeline=useSelector(getComposeReportsPipelineSelector);
    console.log(ComposeReportsPipeline,"ComposeReportsPipelineComposeReportsPipeline")
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchComposeReportsPipelineRequest());
    },[])
    const pieDataPipeline = [
        {
            name: "Initial Load",
            value: getRecords[0] ?.PipelineExcecution[0] ?.initialLoad,
        },
        { name: "Syncs", value: getRecords[0] ?.PipelineExcecution[0] ?.syncs },
    ];
    const pieDataPipelineExe = [
        { name: "Success", value: getRecords[0] ?.PipelineStatus[0] ?.success },
        { name: "Error", value: getRecords[0] ?.PipelineStatus[0] ?.error },
    ];

    const data = [
        {
            name: "Item",
            value1: getRecords[0] ?.Item[0] ?.record1,
            value2: getRecords[0] ?.Item[0] ?.record2,
        },
        {
            name: "Item Details",
            value1: getRecords[0] ?.ItemDetails[0] ?.record1,
            value2: getRecords[0] ?.ItemDetails[0] ?.record2,
        },
        {
            name: "Item Dimension",
            value1: getRecords[0] ?.ItemDimension[0] ?.record1,
            value2: getRecords[0] ?.ItemDimension[0] ?.record2,
        },
        {
            name: "Distributors",
            value1: getRecords[0] ?.Distributors[0] ?.record1,
            value2: getRecords[0] ?.Distributors[0] ?.record2,
        },
        {
            name: "Offers",
            value1: getRecords[0] ?.Offers[0] ?.record1,
            value2: getRecords[0] ?.Offers[0] ?.record2,
        },
    ];

    return (
        <>
            <div>
                <Row>
                    <Col>
                        <ReportsFirstContent
                            groupName="Initial Load"
                            groupNumber={getRecords[0] ?.initialLoad}
                            schemaName="Sync"
                            schemaNumber={getRecords[0] ?.sync}

                        />
                    </Col>
                    <Col>
                        <ReportGraph
                            title="Pipeline Execution"
                            text={`${pieDataPipeline[0].value} Excecution`}
                            pieData={pieDataPipeline}
                        />
                    </Col>
                    <Col>
                        <ReportGraph
                            title="Pipeline Status"
                            text={`${pieDataPipelineExe[0].value} Excecution`}
                            pieData={pieDataPipelineExe}
                        />
                    </Col>
                    <Col>
                        <div className={styles.outerBox}>
                            <Row className={styles.innerBox1}>
                                <Col style={{width:"100%",marginLeft:"15px"}}>
                                    <p>Pipeline Stages Status</p>
                                </Col>
                            </Row>
                            <Row className={styles.innerBox2}>
                                <Col style={{width:"100%",marginTop:"30px"}}>
                                    <MigrationStatus
                                        data={data} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
