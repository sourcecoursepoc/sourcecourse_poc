import React, { useState } from "react";
import { Input, Row, Tag } from "antd";
import styles from "./EmailTagbox.module.css";

interface Props {
  tags: string[];
  setTags: (tags: string[]) => void;
  label: string;
  placeholder: string;
}

const IntimationListInputBox = ({ tags, setTags, label, placeholder }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  const handleInputConfirm = () => {
    setFocus(false);
    if (
      inputValue &&
      tags.indexOf(inputValue) === -1 &&
      validateEmail(inputValue)
    ) {
      const newTags = [...tags, inputValue];
      setTags(newTags);
    }
    setInputValue(" ");
    setValue(" ");
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isOccupied = (focus || (value && value.length !== 0)) && tags.length !== 0 ;

  const handleBlur = e => {
    console.log("value:::",value)
    setFocus(false)
    setValue(e.target.value);
  };

  const labelClass = isOccupied
    ? `${styles.label} ${styles.aslabel}`
    : `${styles.label} ${styles.asplaceholder}`;
  return (
    <div onBlur={handleBlur} className={styles.floatlabelbox} >
      {tags.map((tag) => (
        <Tag
          closable
          onClose={() => handleClose(tag)}
          key={tag}
          style={{ marginRight: "5px", marginBottom: "5px" }}
        >
          {tag}
        </Tag>
      ))}
      <Input
        type="email"
        value={inputValue}
        onChange={handleInputChange}
        onPressEnter={handleInputConfirm}
        onBlur={handleInputConfirm}
        placeholder={!isOccupied ? placeholder : "" }
        style={{ flex: 1, border: "none", boxShadow: "none", padding: 0 }}
      />
      <label className={labelClass}>
        {isOccupied ? label : " "}
      </label>
    </div>
  );
};

export default IntimationListInputBox;
