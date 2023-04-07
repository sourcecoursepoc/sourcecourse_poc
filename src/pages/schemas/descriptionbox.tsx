import React, { useState, KeyboardEvent } from "react";
import { Input } from "antd";
import styles from "../../styles/floatInput.module.css";
const { TextArea } = Input;

interface DescriptionBoxProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
}

const DescriptionBox: React.FC<DescriptionBoxProps> = ({
    value,
    onChange,
    placeholder = "Description",
    required,
}) => {
    const [focus, setFocus] = useState(false);

    const isOccupied = focus || (value && value.length !== 0);

    const labelClass = isOccupied
        ? `${styles.label} ${styles.aslabel}`
        : `${styles.label} ${styles.asplaceholder}`;

    const requiredMark = required ? <span className="text-danger">*</span> : null;

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        setFocus(false);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.keyCode === 8) {
            onChange("");
        }
    };

    return (
        <div className={styles.floatlabel} onBlur={handleBlur} onFocus={handleFocus}>
            <TextArea
            style={{height:"7rem"}}
                placeholder={placeholder}
                value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <label className={labelClass}>
                {isOccupied ? placeholder : ""} {requiredMark}
            </label>
        </div>
    );
};

export default DescriptionBox;
