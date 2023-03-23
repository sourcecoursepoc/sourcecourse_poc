import React,{useEffect} from "react";
import styles from "./pipelineQueuePage.module.css";
import { Layout, Row, Col, Progress, Button } from "antd";
import {
  ClusterOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useSelector,useDispatch } from "react-redux";
import { getPipelineSelector } from "@/redux/selectors";
import { fetchPipeline } from "@/redux/actions/fetchDataAction";
const { Content } = Layout;

const QueuePage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const pipelineList = useSelector(getPipelineSelector);
  console.log(pipelineList, "projectDataaaaaaaaaaaaa");
  useEffect(() => {
    dispatch(fetchPipeline());
  }, []);
  
  return (
    <Layout className={styles.layout}>
    <Content className={styles.content}>
      <Row className={styles.pinkbar}>
        <p className={styles.textStyle}>Pipeline Queue</p>
      </Row>
      {pipelineList.map((pipeline) => (
        <Row
          key={pipeline.id}
          gutter={[16, 16]}
          className={styles.rowTextStyle}
          align="middle"
          style={{ marginBottom: "20px", marginTop: "10px" }}
        >
          <Col span={4}>
            <ClusterOutlined style={{ fontSize: "26px" }} />
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
              <CloseCircleOutlined
                style={{ color: "red", fontSize: "26px" }}
              />
            )}
          </Col>
          <Col span={4} style={{ borderLeft: "1px solid #ccc" }}>
            <Progress
              type="circle"
              percent={pipeline.statusperecntage}
              strokeWidth={8}
              size={26}
            />
          </Col>
        </Row>
      ))}
      <Row className={styles.lowerDivider}></Row>
      <Button
        type="link"
        href="/pipeline"
        style={{ color: "#7a63a9", marginLeft: "75%", fontWeight: "500" }}
      >
        View All
      </Button>
    </Content>
  </Layout>
  );
};

export default QueuePage;
