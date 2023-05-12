import React, { useState } from "react";
import { Input, Tag } from "antd";
import styles from "./tagbox.module.css";

interface Props {
    label: string;
    placeholder: string;
    tags: string[];
    setTags: (tags: string[]) => void;
}

const TagBox = ({ label, placeholder, tags, setTags }: Props) => {
    const [inputValue, setInputValue] = useState("");
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
        if (inputValue && (tags ?? []).indexOf(inputValue) === -1) {
            const newTags = [...tags ?? [], inputValue];
            setTags(newTags);
        }
        setInputValue("");
        setValue("");
    };

    const isOccupied =
        (focus || (value && value.length !== 0)) && tags ?.length !== 0;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        setValue(e.target.value);
    };

    const labelClass = isOccupied
        ? `${styles.label} ${styles.aslabel}`
        : `${styles.label} ${styles.asplaceholder}`;

    return (
        <div onBlur={handleBlur} className={styles.floatlabelbox}>
            {tags &&
                tags.map((tag) => (
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
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onPressEnter={handleInputConfirm}
                onBlur={handleInputConfirm}
                placeholder={!isOccupied ? placeholder : ""}
                style={{ flex: 1, border: "none", boxShadow: "none", padding: 0 }}
            />
            <label className={labelClass}>{isOccupied ? label : " "}</label>
        </div>
    );
};

export default TagBox;
