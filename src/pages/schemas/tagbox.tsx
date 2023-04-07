import { useState } from 'react';
import { Tag, Input, Row, Col } from 'antd';
import styles from "./tagbox.module.css";

type Props = {
    tags: string[];
    setTags: (tags: string[]) => void;
};

const TagBox = ({ tags, setTags }: Props) => {
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
                    className={styles.inputBox}
                />
            </Row>
        </>
    );
};

export default TagBox;
