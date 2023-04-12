import React, { useState } from "react";
import { Input } from "antd";

import styles from "../../../../styles/floatInput.module.css";

const FloatInput = (props) => {
  const [focus, setFocus] = useState(false);
  let { label, placeholder, type, required,dataValue } = props;

  const [value, setValue] = useState('');

  // if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? `${styles.label} ${styles.aslabel}` : `${styles.label} ${styles.asplaceholder}`

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  const handleBlur = e => {
    console.log("value:::",value)
    setFocus(false)
    setValue(e.target.value);
  };

  return (
    <div
      className={styles.floatlabel}
      
      onFocus={() => setFocus(true)}
    >
      <Input onChange={props.onChange} type={type} defaultValue={value} value={dataValue} onBlur={handleBlur}
      style ={{ borderColor: "#ccc",
      borderRadius: "2px",
      display: "block",
      height: "3rem",
      width: "10rem"}}/>
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatInput;

