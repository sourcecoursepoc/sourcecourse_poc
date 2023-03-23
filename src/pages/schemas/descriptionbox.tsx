import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const DescriptionBox: React.FC = () => (
    <>
        <TextArea placeholder="Description" />
    </>
);

export default DescriptionBox;