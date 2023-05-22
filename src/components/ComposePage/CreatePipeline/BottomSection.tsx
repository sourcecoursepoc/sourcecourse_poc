import { CalendarOutlined, ExportOutlined } from '@ant-design/icons';
import { Button, Row, Image } from 'antd'
import React, { useState } from 'react'
import OutputType from './OutputType';
import Schedule from './Schedule';

const BottomSection = ({ cardSelected }) => {
  const [isScheduleActive, setIsScheduleActive] = useState(true);

  return (
    <>
      <Row type="flex" justify="center" align="middle">
        <div
          onClick={() => setIsScheduleActive(true)}
          // icon={<CalendarOutlined />}
          style={{
            paddingRight: "0.5rem",
            paddingLeft: "0.1rem",
            marginRight: "0.5rem",
            cursor: "pointer",
            backgroundColor: isScheduleActive ? 'white' : 'transparent',
            color: isScheduleActive ? 'purple' : 'black',
            border: 'none',
            borderBottom: isScheduleActive ? '2px solid purple' : 'none',
            borderRadius: 0,
            boxShadow: 'none',
          }}
        >
          <Image src="/schedule-icon.png" preview={false} style={{ width: "1rem", height: "1rem", margin: "0.3rem" }} />

          Schedule
        </div>
        <div

          onClick={() => setIsScheduleActive(false)}
          icon={<ExportOutlined />}
          style={{
            paddingRight: "0.5rem",
            paddingLeft: "0.1rem",
            marginRight: "0.5rem",
            cursor: "pointer",
            marginLeft: "0.5rem",
            backgroundColor: !isScheduleActive ? 'white' : 'transparent',
            color: !isScheduleActive ? 'purple' : 'black',
            border: 'none',
            borderBottom: !isScheduleActive ? '2px solid purple' : 'none',
            borderRadius: 0,
            boxShadow: 'none',
          }}
        >
          <Image src="/output-icon.png" preview={false} style={{ width: "1rem", height: "1rem", margin: "0.3rem" }} />
          Output Type
        </div>
      </Row>


      {isScheduleActive ? (
        <Schedule cardSelected={cardSelected} />
      ) : (
        <OutputType />
      )}


    </>
  )
}

export default BottomSection