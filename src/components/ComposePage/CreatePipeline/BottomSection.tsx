import { Row, Image } from "antd";
import React, { useState } from "react";
import OutputType from "./OutputType";
import Schedule from "./Schedule";
interface BottomSectionProps {
  cardSelected: any;
  onExportOptionChange: (option: string) => void;
  onExportDay: (option: string) => void;
  onExportMonth: (option: number) => void;
  intimationListValue: (value: string) => void;
  fileName:(floatValue:string)=>void
  onExportSelectedOption: (option: string) => void;
  onExportTime:(time:string|null)=>void;
}
const BottomSection: React.FC<BottomSectionProps> = ({
  cardSelected,
  onExportOptionChange,
  onExportDay,
  onExportMonth,
  intimationListValue,
  fileName,
  onExportSelectedOption,
  onExportTime
}) => {
  const [isScheduleActive, setIsScheduleActive] = useState(true);
  const [selectedExportOption, setSelectedExportOption] = useState<
    string | null
  >();
  const [outputValue, setOutputValue] = useState("");
  const [floatInputValue, setFloatInputValue] = useState("");
  const[day,setDay]=useState("")
  const[month,setMonth]=useState(Number)
  const [parentSelectedOption, setParentSelectedOption] = useState("");
  const handleExportOptionChange = (option) => {
    setSelectedExportOption(option);
    onExportOptionChange(option);
    console.log("Selected Export Option:", selectedExportOption);
  };

  const handleOutputValueChange = (value) => {
    setOutputValue(value);
    intimationListValue(value);
  };
  const handleOnFloatInputChange = (floatValue) => {
    setFloatInputValue(floatValue);
    fileName(floatValue)
  };

  const handleThirdOptionChange = (value) => {
    setDay(value)
    onExportMonth(value)
  };
  
  const handleSecondOptionChange = (value) => {
    setMonth(value)
    onExportDay(value)
  };
  const handleSelectedOptionChange = (option: string ) => {
    setParentSelectedOption(option);
    onExportSelectedOption(option)
  };
  const hadleExportTimeChange=(time:string)=>{
    onExportTime(time)
  }
  return (
    <>
      <Row justify="center" align="middle">
        <div
          onClick={() => setIsScheduleActive(true)}
          style={{
            paddingRight: "0.5rem",
            paddingLeft: "0.1rem",
            marginRight: "0.5rem",
            cursor: "pointer",
            backgroundColor: isScheduleActive ? "white" : "transparent",
            color: isScheduleActive ? "purple" : "black",
            border: "none",
            borderBottom: isScheduleActive ? "2px solid purple" : "none",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <Image
            src="/schedule-icon.png"
            preview={false}
            alt="schedule"
            style={{ width: "1rem", height: "1rem", margin: "0.3rem" }}
          />
          Schedule
        </div>
        <div
          onClick={() => setIsScheduleActive(false)}
          style={{
            paddingRight: "0.5rem",
            paddingLeft: "0.1rem",
            marginRight: "0.5rem",
            cursor: "pointer",
            marginLeft: "0.5rem",
            backgroundColor: !isScheduleActive ? "white" : "transparent",
            color: !isScheduleActive ? "purple" : "black",
            border: "none",
            borderBottom: !isScheduleActive ? "2px solid purple" : "none",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <Image
            src="/output-icon.png"
            preview={false}
            alt="output"
            style={{ width: "1rem", height: "1rem", margin: "0.3rem" }}
          />
          Output Type
        </div>
      </Row>

      {isScheduleActive ? (
        <Schedule cardSelected={cardSelected}
        onThirdOptionChange={handleThirdOptionChange}
        onSecondOptionChange={handleSecondOptionChange}
        onSelectedOptionChange={handleSelectedOptionChange}
        onExportTimeChange={hadleExportTimeChange}
        />
      ) : (
        <OutputType
          selectedExportOption={selectedExportOption}
          setSelectedExportOption={handleExportOptionChange}
          onValueChange={handleOutputValueChange}
          onFloatInputChange={handleOnFloatInputChange}
        />
      )}
    </>
  );
};

export default BottomSection;
