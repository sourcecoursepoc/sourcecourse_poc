import React from 'react'
import ReportGraph from './reportGraph'
import ReportsFirstContent from './reportsFirstContent'

const SummaryReport = () => {
  return (
    <>
    <ReportsFirstContent groupName='Groups' groupNumber='36' schemaName='Schemas' schemaNumber='12'/> 
    <ReportGraph title1="Record Details" numb1="235,678 " numb2="123,456 " slash="/" title2=" Records"/>
   {/*  <ReportGraph title1="Attribute Details" numb1="90 " numb2="150 " slash="/" title2=" Attributes"/>
    <ReportGraph title1="Attribute Details" numb1="90 " numb2="150 " slash="/" title2=" Attributes"/>
    <ReportGraph title1="Attribute Details" numb1="90 " numb2="150 " slash="/" title2=" Attributes"/> */}
    </>
    )
}

export default SummaryReport