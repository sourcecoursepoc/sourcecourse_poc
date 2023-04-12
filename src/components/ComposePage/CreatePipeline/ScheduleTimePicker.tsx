import React, { useState } from 'react'
import { Button, Input } from 'antd';
import styles from "./Schedule.module.css"
import { CheckOutlined } from '@ant-design/icons';

const ScheduleTimePicker = () => {

    const [timeSelectedAM, settimeSelectedAM] = useState(true);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Input placeholder="HH" style={{
                width: '3.5rem',
                height: '4rem',
                margin: '0.5rem',
            }} />
            <h2> : </h2>
            <Input placeholder="MM" style={{
                width: '3.5rem',
                height: '4rem',
                margin: '0.5rem',
            }} />
            <h2> : </h2>
            <Input placeholder="SS" style={{
                width: '3.5rem',
                height: '4rem',
                margin: '0.5rem',
            }} />

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
