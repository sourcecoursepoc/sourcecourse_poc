import React, { useState } from "react";
import { Input, Row, Tag } from "antd";
import styles from "./EmailTagbox.module.css";

interface Props {
  tags: string[];
  setTags: (tags: string[]) => void;
  label: string;
  placeholder: string;
}

const EmailTagBox = ({ tags, setTags, label, placeholder }: Props) => {
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

  const handleTagClick = (tag: string) => {
    handleClose(tag);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied
    ? `${styles.label} ${styles.aslabel}`
    : `${styles.label} ${styles.asplaceholder}`;

  return (
    <>
    <div
      className={styles.floatlabel}
      
      onFocus={() => setFocus(true)}
    >
      <Row>
        {tags.map((tag) => (
          <Tag
            key={tag}
            closable
            onClose={() => handleClose(tag)}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Tag>
        ))}
        <div className={styles.floatlabel} onFocus={() => setFocus(true)}>
          <Input
            type="email"
            value={inputValue}
            onChange={handleInputChange}
            onPressEnter={handleInputConfirm}
            onBlur={handleInputConfirm}
            className={styles.inputBox}
            
          />
        </div>
      </Row>
      <label className={labelClass}>
            {isOccupied ? label : placeholder}
          </label>
      </div>
    </>
  );
};

export default EmailTagBox;
