import React, { useState } from 'react'
import { Button, Input, InputNumber } from 'antd';
import styles from "./Schedule.module.css"
import { CheckOutlined } from '@ant-design/icons';

const ScheduleTimePicker = () => {

    const [timeSelectedAM, settimeSelectedAM] = useState(true);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <InputNumber placeholder="HH" style={{
                alignContent: "center",
                width: '3.5rem',
                height: '4rem',
                margin: '0.5rem',
            }}
                min={0}
                max={12}
                formatter={value => `${value}`.padStart(2, '0')}
                parser={value => value.replace(/^0+/, '')} />
            <h2> : </h2>
            <InputNumber placeholder="MM" style={{
                width: '3.5rem',
                height: '4rem',
                margin: '0.5rem',
            }}
                min={0}
                max={59}
                formatter={value => `${value}`.padStart(2, '0')}
                parser={value => value.replace(/^0+/, '')}
            />
            <h2> : </h2>
            <InputNumber placeholder="SS" style={{
                width: '3.5rem',
                height: '4rem',
                margin: '0.5rem',
            }}
                min={0}
                max={59}
                formatter={value => `${value}`.padStart(2, '0')}
                parser={value => value.replace(/^0+/, '')} />

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
