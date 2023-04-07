import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface DescriptionBoxProps {
    value: string;
    onChange: (value: string) => void;
}

const DescriptionBox: React.FC<DescriptionBoxProps> = ({ value, onChange }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.keyCode === 8) {
            onChange('');
        }
    };

    return (
        <TextArea
            placeholder="Description"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
};

export default DescriptionBox;
