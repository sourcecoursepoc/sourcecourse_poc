import { fetchPipeline } from "@/redux/actions/fetchDataAction";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClusterOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Progress, Row,Image } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPipelineSelector } from "../../redux/selectors";
import styles from "./homeRightArea.module.css";

const { Content } = Layout;
const PipelineQueues: React.FC = () => {
  const dispatch = useDispatch();
  const pipelineList = useSelector(getPipelineSelector);
  const isDataAvailable = pipelineList?.length > 0;

  useEffect(() => {
    dispatch(fetchPipeline());
  }, []);
  return (
    <>
      {pipelineList.map((pipeline) => (
        <Row
          key={pipeline.id}
          gutter={[16, 16]}
          className={styles.rowTextStyle}
          align="middle"
          style={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <Col span={4}>
            {pipeline.type === "Initial Load" ? (
               <Image
               preview={false}
               src="/InitialLoad-Icon4.png"
             style={{
                 maxWidth: "1.3rem"
                
               }} 
             />
            ) : (
              <Image preview={false} src="/Sync-Icon-1.png"  style={{
                maxWidth: "1.3rem",
              }}  />
            )}
          </Col>
          <Col span={12} style={{ fontSize: "11px" }}>
            {pipeline.pipelineName} <br /> {pipeline.timeStamp}{" "}
          </Col>
          <Col span={4}>
            {pipeline.status === true ? (
              <CheckCircleOutlined
                style={{ color: "#52c41a", fontSize: "26px" }}
              />
            ) : (
              <CloseCircleOutlined style={{ color: "red", fontSize: "26px" }} />
            )}
          </Col>
          <Col span={4} style={{ borderLeft: "1px solid #ccc" }}>
            <Progress
              type="circle"
              strokeColor={"#ffb6c1"}
              percent={pipeline.statusperecntage}
              strokeWidth={8}
              size={26}
            />
          </Col>
        </Row>
      ))}
      <Row className={styles.lowerDivider}></Row>
      {isDataAvailable && (
        <Button
          type="link"
          href="/pipeline"
          className={styles.button}
        >
          View All
        </Button>
      )}

      {!isDataAvailable && (
        <Button
          type="link"
          disabled
          className={styles.button}
         
        >
          View All
        </Button>)}
    </>
  );
};
export default PipelineQueues;
