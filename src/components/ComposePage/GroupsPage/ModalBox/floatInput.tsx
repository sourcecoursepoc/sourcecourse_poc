import React, { useState } from "react";
import { Input } from "antd";

import styles from "../../../../styles/floatInput.module.css";

interface FloatInputProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  dataValue?: string;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?:string;
}
const FloatInput: React.FC<FloatInputProps> = (props) =>  {
  const [focus, setFocus] = useState(false);
  let { label, placeholder, type, required,dataValue,style } = props;

  const [value, setValue] = useState('');

  // if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? `${styles.label} ${styles.aslabel}` : `${styles.label} ${styles.asplaceholder}`

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  const handleBlur =(e: React.FocusEvent<HTMLInputElement>) =>{
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
      style ={style}/>
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatInput;

