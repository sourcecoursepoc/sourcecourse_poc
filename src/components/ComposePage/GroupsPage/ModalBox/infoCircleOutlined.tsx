import React from 'react';
import { Input, Row, Col, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;
interface InfoCircleOutlinedFunctionProps {
    value: string;

  }
const InfoCircleOutlinedFunction: React.FC<InfoCircleOutlinedFunctionProps> = ({value}) => (
    
    <Tooltip title="This is some information about the alias field.">
    <InfoCircleOutlined style={{ color: '#7e60bc', marginLeft: '0.5rem' }} value={value}/>
  </Tooltip>

);

export default InfoCircleOutlinedFunction;