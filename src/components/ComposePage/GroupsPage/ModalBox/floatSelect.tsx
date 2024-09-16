import React, { useState } from "react";
import { Input,Select,SelectProps } from "antd";
import styles from "../../../../styles/floatInput.module.css";

interface FloatSelectProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  dataValue?: string;
}
const FloatSelect: React.FC<FloatSelectProps> = (props) => {
  const [focus, setFocus] = useState(false);
  let { label, placeholder, type, required,dataValue } = props;

  const [value, setValue] = useState('');
  const attributeOptions = ['id', 'name', 'status', 'company', 'supplier_id'];
    const options: SelectProps['options'] = [];

  // if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? `${styles.label} ${styles.aslabel}` : `${styles.label} ${styles.asplaceholder}`

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  const handleBlur = () => {
    console.log("value:::",value)
    setFocus(false)
    setValue(value);
  };

function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    let {name, value} = e.target;
    console.log(`selected ${value}`);
    setValue(value);
    
    }

  for (let i = 0; i < attributeOptions.length; i++) {
    options.push({
      value: attributeOptions[i],
      label: attributeOptions[i],
    });
  }

  return (
    <div
      className={styles.floatlabel}
      
      onFocus={() => setFocus(true)}
    >
        {/* <Select
      onChange={handleChange}
      onBlur={handleBlur}
      style={{ width: "6rem",
    borderRadius: "2px !important"}}
      options={[
        { value: 'EQUALS', label: 'EQUALS' },
        { value: 'NOT EQUALS', label: 'NOT EQUALS' },
        { value: 'LESS THAN', label: 'LESS THAN' },
        { value: 'GREATER THAN', label: 'GREATER THAN'},
        { value: 'LESS THAN AND EQUALS', label: 'LESS THAN AND EQUALS' },
        { value: 'GREATER THAN AND EQUALS', label: 'GREATER THAN AND EQUALS'}
      ]}
    /> */}
    <select onChange={handleChange}
      onBlur={handleBlur}
      style ={{ borderColor: "#ccc",
      borderRadius: "2px",
      display: "block",
      height: "3rem",
      width: "6rem"}}
      > 
      <option value= '' label= ''></option> 
        <option value= 'EQUALS' label= 'EQUALS'>EQUALS</option>  
        <option value= 'NOT EQUALS' label= 'NOT EQUALS'>NOT EQUALS</option>  
        <option value= 'LESS THAN' label= 'LESS THAN'>LESS THAN</option>  
        <option value= 'GREATER THAN' label= 'GREATER THAN'>GREATER THAN</option>  
        <option value= 'LESS THAN AND EQUALS' label= 'LESS THAN AND EQUALS'>LESS THAN AND EQUALS</option>  
        <option value= 'GREATER THAN AND EQUALS' label= 'GREATER THAN AND EQUALS'>GREATER THAN AND EQUALS</option>    
  </select>  
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatSelect;


