import { useState } from 'react';
import { Tag, Input, Row, Col } from 'antd';
import styles from "./tagbox.module.css";

const TagBox = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleClose = (removedTag: string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            const newTags = [...tags, inputValue];
            setTags(newTags);
        }
        setInputValue('');
    };

    const handleTagClick = (tag: string) => {
        handleClose(tag);
    };

    return (
        <>
            {/* <div style={{ display: 'flex', flexWrap: 'wrap', border: "1px solid", width: "100%" }}> */}
            <Row className={styles.tagBox}>
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
                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onPressEnter={handleInputConfirm}
                    onBlur={handleInputConfirm}
                    placeholder="Tags"
                    style={{ width: "100%" }}
                    className={styles.inputBox}
                />
            </Row>
            {/* </div> */}
        </>
    );
};

export default TagBox;
