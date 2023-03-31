import React from 'react';
import { Input, Row, Col } from 'antd';
const { TextArea } = Input;
interface DescriptionBoxProps {
    label: string;
    value: any;

}
const DescriptionBox: React.FC = ({ value }) => (

    <>
        <TextArea placeholder="Description" value={value} />
    </>
);

export default DescriptionBox;