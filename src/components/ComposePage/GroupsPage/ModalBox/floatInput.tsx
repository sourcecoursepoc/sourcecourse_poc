import React, { useState } from "react";
import { Input } from "antd";

import styles from "../../../../styles/floatInput.module.css";

const FloatInput = (props) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, required } = props;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? `${styles.label} ${styles.aslabel}` : `${styles.label} ${styles.asplaceholder}`

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className={styles.floatlabel}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Input onChange={props.onChange} type={type} defaultValue={value} 
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

