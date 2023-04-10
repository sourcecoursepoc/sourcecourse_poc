import { Row } from 'antd'
import React, { useState } from 'react'

const MiddleNavBar = () => {
    const [isScheduleActive, setIsScheduleActive] = useState(true);
  return (
    <Row type="flex" justify="center" align="middle">
        <button onClick={() => setIsScheduleActive(true)} style={{ backgroundColor: isScheduleActive ? 'cyan' : 'white' }}>Schedule</button>
      <button onClick={() => setIsScheduleActive(false)} style={{ backgroundColor: !isScheduleActive ? 'cyan' : 'white' }}>Output Type</button>
    </Row>  
  )
}

export default MiddleNavBar