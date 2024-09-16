import { postGroupPipelineInfoAction } from "@/redux/actions/createPipeline";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import React, { useState } from "react";
import BottomSection from "./BottomSection";
import UpperSection from "./UpperSection";

interface MyModalProps {
  showCreatePipeline?: boolean;
  onCancel?: () => void;
}

let exportSelectedOption: string ; 
let timeInParent: string ; 

const PipelineModalBox: React.FC<MyModalProps> = ({
  showCreatePipeline,
  onCancel,
}) => {
  const [cardSelected, setCardSelected] = useState<"initial" | "sync">();
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [exportType, setExportType] = useState("");
  const [intimationListValue, setIntimationListValue] = useState("");
  const [fileName, setFileName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState(Number);
  const[recurrence,setRecurrence]=useState("")
  const handleSyncCardSelect = () => {
    setCardSelected("sync");
    setSelectedCardTitle("Sync");
   };

  const handleInitialCardSelect = () => {
    setCardSelected("initial");
    setSelectedCardTitle("Initial Load");
  };
  const handleExportOptionChange = (option: string) => {
    setExportType(option);
  };

  const handleIntimationListValue = (value: string) => {
    setIntimationListValue(value);
  };
  const handleFileName = (floatValue: string) => {
    setFileName(floatValue);
    console.log(fileName);
  };
  const handleExportDayChange = (option: string) => {
    setDay(option);
  };
  const handleOnExportSelectedOption = (option: string) => {
    exportSelectedOption = option; 
  };
  const handleExportMonthChange = (option: number) => {
    setMonth(option );
  };

  const handleOnExportTime=(time:string)=>{
    timeInParent=time;
    console.log(timeInParent)
  }
  const dispatch = useDispatch();
  const onClickExecute = async () => {
    dispatch(
      postGroupPipelineInfoAction(
        1,
        selectedCardTitle,
        exportType,
        exportSelectedOption,
        fileName,
        [intimationListValue],
        timeInParent,
        [month],
        [day]
      )
    );
    setSelectedCardTitle("");
    setExportType("");
    setFileName("");
    setIntimationListValue("");
    setDay("");
    setMonth(0);
    setRecurrence("")
  };

  return (
    <Modal
      visible={showCreatePipeline}
      onCancel={onCancel}
      footer={null}
      closable={false}
      width={1000}
      bodyStyle={{ borderRadius: "5px", width: "100%", minHeight: "30rem" }}
    >
      <UpperSection
        cardSelected={cardSelected}
        onSelectInitial={handleInitialCardSelect}
        onSelectSync={handleSyncCardSelect}
        onClickExecute={onClickExecute}
      />

      <BottomSection
        cardSelected={cardSelected}
        onExportOptionChange={handleExportOptionChange}
        onExportDay={handleExportDayChange}
        onExportMonth={handleExportMonthChange}
        intimationListValue={handleIntimationListValue}
        fileName={handleFileName}
        onExportSelectedOption={handleOnExportSelectedOption}
        onExportTime={handleOnExportTime}
      />
    </Modal>
  );
};
export default PipelineModalBox;
