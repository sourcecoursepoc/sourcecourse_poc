import React, { useState, ChangeEvent } from "react";
import { Input, InputNumber } from "antd";

import styles from "../../../styles/floatInput.module.css";
interface FloatNumberInputProps {
  label: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  dataValue?: number;
  onChange: (value: number | null) => void;
  min?: number;
  max?: number;
}
const FloatNumberInput: React.FC<FloatNumberInputProps> = (props) => {
  const [focus, setFocus] = useState(false);
  let { label, placeholder, type, required, dataValue } = props;
  const [value, setValue] = useState("");
  const isOccupied = focus || (value && value.length !== 0);
  const labelClass = isOccupied
    ? `${styles.label} ${styles.aslabel}`
    : `${styles.label} ${styles.asplaceholder}`;
  const requiredMark = required ? <span className="text-danger">*</span> : null;
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("value:::", value);
    setFocus(false);
    setValue("0");
  };

  return (
    <div className={styles.floatlabel} onFocus={() => setFocus(true)}>
      <InputNumber
        onChange={props.onChange}
        type={type}
        defaultValue={parseInt(value, 10)}
        value={dataValue}
        onBlur={handleBlur}
        min={props.min}
        max={props.max}
        style={{
          borderColor: "#ccc",
          borderRadius: "2px",
          display: "block",
          height: "4rem",
          width: "3.5rem",
          margin: "0.5rem",
          paddingTop: "1rem",
        }}
      />

      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatNumberInput;
