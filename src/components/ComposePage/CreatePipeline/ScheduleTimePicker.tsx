import React, { useState } from 'react'
import { Button, Input, InputNumber } from 'antd';
import styles from "./Schedule.module.css"
import { CheckOutlined } from '@ant-design/icons';
import FloatNumberInput from './FloatNumberInput';
import FloatInput from "../GroupsPage/ModalBox/floatInput";

const ScheduleTimePicker = () => {

    const [timeSelectedAM, settimeSelectedAM] = useState(true);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <FloatNumberInput label="HH"
                placeholder="HH"
                min={0}
                max={12}
                />
            <h2> : </h2>
            <FloatNumberInput label="MM"
                placeholder="MM"
                min={0}
                max={59}
                />
            <h2> : </h2>
            <FloatNumberInput label="SS"
                placeholder="SS"
                min={0}
                max={59}
                />

            <div style={{ display: "flex", alignItems: "center" }}>
                <Button className={styles.buttonCalender}
                    icon={timeSelectedAM ? <CheckOutlined /> : undefined}
                    onClick={() => settimeSelectedAM(true)}
                    type={timeSelectedAM ? "primary" : undefined}
                    style={{ backgroundColor: timeSelectedAM ? "#7E60BC" : undefined }}
                >AM</Button>

                <Button className={styles.buttonCalender}
                    icon={timeSelectedAM ? undefined : <CheckOutlined />}
                    onClick={() => settimeSelectedAM(false)}
                    type={timeSelectedAM ? undefined : "primary"}
                    style={{ backgroundColor: timeSelectedAM ? undefined : "#7E60BC" }}
                >PM</Button>
            </div>

        </div>
    )
}

export default ScheduleTimePicker

function handleTimeSelectedOptionClick(arg0: string): void {
    throw new Error('Function not implemented.');
}
