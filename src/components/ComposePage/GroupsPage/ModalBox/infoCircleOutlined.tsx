import React from 'react';
import { Input, Row, Col, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;
interface InfoCircleOutlinedFunctionProps {
    value?: string;
    tooltipTitle?:string;

  }
const InfoCircleOutlinedFunction: React.FC<InfoCircleOutlinedFunctionProps> = ({value,tooltipTitle}) => (
    
    <Tooltip title={tooltipTitle}>
    <InfoCircleOutlined style={{ color: '#7e60bc', marginLeft: '0.5rem' }} value={value}/>
  </Tooltip>

);

export default InfoCircleOutlinedFunction;