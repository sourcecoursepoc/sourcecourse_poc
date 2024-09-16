import React, { useEffect, useState } from 'react'
import { Button, Input, InputNumber } from 'antd';
import styles from "./Schedule.module.css"
import { CheckOutlined } from '@ant-design/icons';
import FloatNumberInput from './FloatNumberInput';

interface ScheduleTimePickerProps {
    onTimeChange: (time: string) => void;
  }

const ScheduleTimePicker: React.FC<ScheduleTimePickerProps> = ({ onTimeChange }) => {

    const [timeSelectedAM, settimeSelectedAM] = useState(true);
    const [hh, setHH] = useState(Number);
    const [mm, setMM] = useState(Number);
    const [ss, setSS] = useState(Number);
  
   useEffect(() => {
        const time = `${hh}:${mm}:${ss} ${timeSelectedAM ? "AM" : "PM"}`;
        onTimeChange(time);
        console.log("time",time)
      }, [hh, mm, ss, timeSelectedAM, onTimeChange]); 

    return (
        <div style={{ display: "flex", flexDirection: "row", marginLeft:'0.3rem' }}>
            <FloatNumberInput label="HH"
                placeholder="HH"
                min={0}
                max={12}
                onChange={setHH}
                />
            <h2> : </h2>
            <FloatNumberInput label="MM"
                placeholder="MM"
                min={0}
                max={59}
                onChange={setMM}
                />
            <h2> : </h2>
            <FloatNumberInput label="SS"
                placeholder="SS"
                min={0}
                max={59}
                onChange={setSS}
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

