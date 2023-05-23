import React from 'react'
import { useState } from "react";
import { Row, Col, Button } from "antd";
import { CheckOutlined } from '@ant-design/icons';
import styles from "./Schedule.module.css"
import ScheduleTimePicker from './ScheduleTimePicker';

const Schedule = () => {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [secondSelectedOption, setSecondSelectedOption] = useState<string | null>(null);
    const [thirdSelectedOption, setThirdSelectedOption] = useState<number>(0);

    const handleOptionClick = (option: string) => {
        if (option === selectedOption) {
            setSelectedOption(null);
        } else {
            setSelectedOption(option);
        }
    };

    const handleSecondOptionClick = (option: string) => {
        if (option === secondSelectedOption) {
            setSecondSelectedOption(null);
        } else {
            setSecondSelectedOption(option);
        }
    };

    const handleThirdOptionClick = (option: number) => {
        if (option == thirdSelectedOption) {
            setThirdSelectedOption(-1);
        } else {
            setThirdSelectedOption(option);
        }
    };

    return (
        <Row gutter={[16, 16]} align="middle" style={{ marginTop: "2.5rem" }} >
            <Col span={24}>
                <Button className={styles.buttonCalender}
                    icon={selectedOption === "Now" ? <CheckOutlined /> : undefined}
                    onClick={() => handleOptionClick("Now")}
                    type={selectedOption === "Now" ? "primary" : undefined}
                    style={{ backgroundColor: selectedOption === "Now" ? "#7E60BC" : undefined }}
                >
                    Now
                </Button>
                <Button className={styles.buttonCalender}
                    icon={selectedOption === "Daily" ? <CheckOutlined /> : undefined}
                    onClick={() => handleOptionClick("Daily")}
                    type={selectedOption === "Daily" ? "primary" : undefined}
                    style={{ backgroundColor: selectedOption === "Daily" ? "#7E60BC" : undefined }}
                >
                    Daily
                </Button>
                <Button className={styles.buttonCalender}
                    icon={selectedOption === "Weekly" ? <CheckOutlined /> : undefined}
                    onClick={() => handleOptionClick("Weekly")}
                    type={selectedOption === "Weekly" ? "primary" : undefined}
                    style={{ backgroundColor: selectedOption === "Weekly" ? "#7E60BC" : undefined }}
                >
                    Weekly
                </Button>
                <Button className={styles.buttonCalender}
                    icon={selectedOption === "Monthly" ? <CheckOutlined /> : undefined}
                    onClick={() => handleOptionClick("Monthly")}
                    type={selectedOption === "Monthly" ? "primary" : undefined}
                    style={{ backgroundColor: selectedOption === "Monthly" ? "#7E60BC" : undefined }}
                >
                    Monthly
                </Button>
            </Col>

            {selectedOption === "Weekly" && (
                <Col span={24}>
                    <Button icon={secondSelectedOption === "Monday" ? <CheckOutlined /> : undefined}
                        onClick={() => handleSecondOptionClick("Monday")}
                        type={secondSelectedOption === "Monday" ? "primary" : undefined} className={styles.buttonCalender}
                        style={{ backgroundColor: secondSelectedOption === "Monday" ? "#7E60BC" : undefined }}
                    >Monday</Button>
                    <Button icon={secondSelectedOption === "Tuesday" ? <CheckOutlined /> : undefined}
                        onClick={() => handleSecondOptionClick("Tuesday")}
                        type={secondSelectedOption === "Tuesday" ? "primary" : undefined} className={styles.buttonCalender}
                        style={{ backgroundColor: secondSelectedOption === "Tuesday" ? "#7E60BC" : undefined }}
                    >Tuesday</Button>
                    <Button icon={secondSelectedOption === "Wednesday" ? <CheckOutlined /> : undefined}
                        onClick={() => handleSecondOptionClick("Wednesday")}
                        type={secondSelectedOption === "Wednesday" ? "primary" : undefined} className={styles.buttonCalender}
                        style={{ backgroundColor: secondSelectedOption === "Wednesday" ? "#7E60BC" : undefined }}
                    >Wednesday</Button>
                    <Button icon={secondSelectedOption === "Thursday" ? <CheckOutlined /> : undefined}
                        onClick={() => handleSecondOptionClick("Thursday")}
                        type={secondSelectedOption === "Thursday" ? "primary" : undefined} className={styles.buttonCalender}
                        style={{ backgroundColor: secondSelectedOption === "Thursday" ? "#7E60BC" : undefined }}
                    >Thursday</Button>
                    <Button icon={secondSelectedOption === "Friday" ? <CheckOutlined /> : undefined}
                        onClick={() => handleSecondOptionClick("Friday")}
                        type={secondSelectedOption === "Friday" ? "primary" : undefined} className={styles.buttonCalender}
                        style={{ backgroundColor: secondSelectedOption === "Friday" ? "#7E60BC" : undefined }}
                    >Friday</Button>
                    <Button icon={secondSelectedOption === "Saturday" ? <CheckOutlined /> : undefined}
                        onClick={() => handleSecondOptionClick("Saturday")}
                        type={secondSelectedOption === "Saturday" ? "primary" : undefined} className={styles.buttonCalender}
                        style={{ backgroundColor: secondSelectedOption === "Saturday" ? "#7E60BC" : undefined }}
                    >Saturday</Button>
                    <Button icon={secondSelectedOption === "Sunday" ? <CheckOutlined /> : undefined}
                        onClick={() => handleSecondOptionClick("Sunday")}
                        type={secondSelectedOption === "Sunday" ? "primary" : undefined} className={styles.buttonCalender}
                        style={{ backgroundColor: secondSelectedOption === "Sunday" ? "#7E60BC" : undefined }}
                    >Sunday</Button>
                </Col>
            )}

            {selectedOption === "Monthly" && (
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

            <ScheduleTimePicker />
        </Row>
    )
}

export default Schedule