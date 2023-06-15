import React from 'react'
import { useState } from "react";
import { Row, Col, Button } from "antd";
import { CheckOutlined } from '@ant-design/icons';
import styles from "./Schedule.module.css"
import ScheduleTimePicker from './ScheduleTimePicker';
import { DAILY, FRIDAY, INITIAL, MONDAY, MONTHLY, NOW, SATURDAY, SUNDAY, SYNC, THURSDAY, TODAY, TUESDAY, WEDNESDAY, WEEKLY } from '@/constants/constants';

interface ScheduleProps {
    cardSelected: string;
    onSecondOptionChange: (option: string | null) => void;
    onThirdOptionChange: (option: number | null) => void;
    onSelectedOptionChange: (option: string | null) => void;
    onExportTimeChange:(time:string|null)=>void;
}

const Schedule: React.FC<ScheduleProps> = ({ cardSelected,onSecondOptionChange,onThirdOptionChange,onSelectedOptionChange,onExportTimeChange }) => {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [secondSelectedOption, setSecondSelectedOption] = useState<string | null>(null);
    const [thirdSelectedOption, setThirdSelectedOption] = useState<number>(0);



    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelectedOptionChange(option);
    };

    const handleSecondOptionClick = (option: string) => {
        if (option === secondSelectedOption) {
            setSecondSelectedOption(null);
            onSecondOptionChange(null);
        } else {
            setSecondSelectedOption(option);
            onSecondOptionChange(option);
        }
    };

    const handleThirdOptionClick = (option: number) => {
        if (option == thirdSelectedOption) {
            setThirdSelectedOption(-1);
            onThirdOptionChange(0); 
        } else {
            setThirdSelectedOption(option);
            onThirdOptionChange(option+1); 
        }
    };
    const handleTimeChange = (time:string) => {
       onExportTimeChange(time)
      };
      
    return (
        <Row gutter={[16, 16]} align="middle" style={{ marginTop: "2.5rem" }} >

            {cardSelected === INITIAL && (
                <Col span={24}>
                    <Button className={styles.buttonCalender}
                        icon={selectedOption === NOW ? <CheckOutlined /> : undefined}
                        onClick={() => handleOptionClick(NOW)}
                        type={selectedOption === NOW ? "primary" : undefined}
                        style={{ backgroundColor: selectedOption === NOW ? "#7E60BC" : undefined }}
                    >
                        {NOW}
                    </Button>
                    <Button className={styles.buttonCalender}
                        icon={selectedOption === TODAY ? <CheckOutlined /> : undefined}
                        onClick={() => handleOptionClick(TODAY)}
                        type={selectedOption === TODAY ? "primary" : undefined}
                        style={{ backgroundColor: selectedOption === TODAY ? "#7E60BC" : undefined }}
                    >
                        {TODAY}
                    </Button>

                </Col>
            )}
            {cardSelected === SYNC && (
                <>

                    <Col span={24}>
                        <Button className={styles.buttonCalender}
                            icon={selectedOption === DAILY ? <CheckOutlined /> : undefined}
                            onClick={() => handleOptionClick(DAILY)}
                            type={selectedOption === DAILY ? "primary" : undefined}
                            style={{ backgroundColor: selectedOption === DAILY ? "#7E60BC" : undefined }}
                        >
                            {DAILY}
                        </Button>
                        <Button className={styles.buttonCalender}
                            icon={selectedOption === WEEKLY ? <CheckOutlined /> : undefined}
                            onClick={() => handleOptionClick(WEEKLY)}
                            type={selectedOption === WEEKLY ? "primary" : undefined}
                            style={{ backgroundColor: selectedOption === WEEKLY ? "#7E60BC" : undefined }}
                        >
                            {WEEKLY}
                        </Button>
                        <Button className={styles.buttonCalender}
                            icon={selectedOption === MONTHLY ? <CheckOutlined /> : undefined}
                            onClick={() => handleOptionClick(MONTHLY)}
                            type={selectedOption === MONTHLY ? "primary" : undefined}
                            style={{ backgroundColor: selectedOption === MONTHLY ? "#7E60BC" : undefined }}
                        >
                            {MONTHLY}
                        </Button>
                    </Col>

                    {selectedOption === WEEKLY && (
                        <Col span={24}>
                            <Button icon={secondSelectedOption === MONDAY ? <CheckOutlined /> : undefined}
                                onClick={() => handleSecondOptionClick(MONDAY)}
                                type={secondSelectedOption === MONDAY ? "primary" : undefined} className={styles.buttonCalender}
                                style={{ backgroundColor: secondSelectedOption === MONDAY ? "#7E60BC" : undefined }}
                            >{MONDAY}</Button>
                            <Button icon={secondSelectedOption === TUESDAY ? <CheckOutlined /> : undefined}
                                onClick={() => handleSecondOptionClick(TUESDAY)}
                                type={secondSelectedOption === TUESDAY ? "primary" : undefined} className={styles.buttonCalender}
                                style={{ backgroundColor: secondSelectedOption === TUESDAY ? "#7E60BC" : undefined }}
                            >{TUESDAY}</Button>
                            <Button icon={secondSelectedOption === WEDNESDAY ? <CheckOutlined /> : undefined}
                                onClick={() => handleSecondOptionClick(WEDNESDAY)}
                                type={secondSelectedOption === WEDNESDAY ? "primary" : undefined} className={styles.buttonCalender}
                                style={{ backgroundColor: secondSelectedOption === WEDNESDAY ? "#7E60BC" : undefined }}
                            >{WEDNESDAY}</Button>
                            <Button icon={secondSelectedOption === THURSDAY ? <CheckOutlined /> : undefined}
                                onClick={() => handleSecondOptionClick(THURSDAY)}
                                type={secondSelectedOption === THURSDAY ? "primary" : undefined} className={styles.buttonCalender}
                                style={{ backgroundColor: secondSelectedOption === THURSDAY ? "#7E60BC" : undefined }}
                            >{THURSDAY}</Button>
                            <Button icon={secondSelectedOption === FRIDAY ? <CheckOutlined /> : undefined}
                                onClick={() => handleSecondOptionClick(FRIDAY)}
                                type={secondSelectedOption === FRIDAY ? "primary" : undefined} className={styles.buttonCalender}
                                style={{ backgroundColor: secondSelectedOption === FRIDAY ? "#7E60BC" : undefined }}
                            >{FRIDAY}</Button>
                            <Button icon={secondSelectedOption === SATURDAY ? <CheckOutlined /> : undefined}
                                onClick={() => handleSecondOptionClick(SATURDAY)}
                                type={secondSelectedOption === SATURDAY ? "primary" : undefined} className={styles.buttonCalender}
                                style={{ backgroundColor: secondSelectedOption === SATURDAY ? "#7E60BC" : undefined }}
                            >{SATURDAY}</Button>
                            <Button icon={secondSelectedOption === SUNDAY ? <CheckOutlined /> : undefined}
                                onClick={() => handleSecondOptionClick(SUNDAY)}
                                type={secondSelectedOption === SUNDAY ? "primary" : undefined} className={styles.buttonCalender}
                                style={{ backgroundColor: secondSelectedOption === SUNDAY ? "#7E60BC" : undefined }}
                            >{SUNDAY}</Button>
                        </Col>
                    )}

                    {selectedOption === MONTHLY && (
                        <Col span={24} >
                            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                                {[...Array(31)].map((_, index) => (
                                    <Button key={index + 1} className={styles.buttonCalender}
                                        icon={thirdSelectedOption === index ? <CheckOutlined /> : undefined}
                                        onClick={() => handleThirdOptionClick(index)}
                                        type={thirdSelectedOption === index ? "primary" : undefined}
                                        style={{ backgroundColor: thirdSelectedOption === index ? "#7E60BC" : undefined }}
                                    >{index + 1}</Button>
                                ))}
                            </div>
                        </Col>
                    )}
                </>
            )}
            {selectedOption !== NOW ? <ScheduleTimePicker onTimeChange={handleTimeChange}/> : undefined}
        </Row>
    )
}

export default Schedule