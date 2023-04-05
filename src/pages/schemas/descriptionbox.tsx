import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface DescriptionBoxProps {
    value: any;

}
const DescriptionBox: React.FC<DescriptionBoxProps> = ({ value }) => (

    <>
        <TextArea placeholder="Description" value={value} />
    </>
);

export default DescriptionBox;