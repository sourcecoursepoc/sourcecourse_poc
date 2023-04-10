import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import { useState } from "react";
import styles from "../ModalBox/groupsModalBox.module.css";
import InfoCircleOutlinedFunction from "./infoCircleOutlined";
import { Radio,Select,Space } from 'antd';
import type { SelectProps, RadioChangeEvent } from 'antd';
import FloatInput from "./floatInput";


const NewAttributeContent = () => {
    const { Option } = Select;
    const { TextArea } = Input;
    const attributeOptions = ['id', 'name', 'status', 'company', 'supplier_id'];
    const options: SelectProps['options'] = [];

    for (let i = 0; i < attributeOptions.length; i++) {
        options.push({
          value: attributeOptions[i],
          label: attributeOptions[i],
        });
      }

      const handleChange = (value: string | string[]) => {
        console.log(`Selected: ${value}`);
      };

      const [value, setValue] = useState('VARCHAR');
      const [displayAttributeList, setDisplayAttributeList] = useState(false)

      const onChange = ({ target: { value } }: RadioChangeEvent) => {
        setValue(value);
      };

      function setDisplayAttributes(e) {
          setDisplayAttributeList(e.target.checked)
      }
  return (
    <Col span={10} style={{ marginTop: "0.5rem", paddingLeft: "0.5rem" }}>
          <Row className={styles.descriptionbox}>
            <TextArea
              rows={2}
              placeholder="Notes"
              style={{ borderRadius: "3px" }}
            />
          </Row>
          <Row style={{ borderBottom: "1px solid #ccc", marginTop: "-0.5rem" }}>
            <p style={{ fontSize: "14px" }}>Details</p>
          </Row>
          <Row
            style={{
              marginTop: "1rem",
              marginLeft: "0.5rem",
              borderBottom: "1px solid #ccc",
            }}
          >
            <Col span={12} style={{borderRight: "1px solid #ccc", marginTop: "-0.5rem", marginBottom: "0.1rem"}}>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                    label="Attribute"
                      placeholder="Attribute Name"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {<InfoCircleOutlinedFunction value={""} tooltipTitle={"This information is about attribute name"}/>}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <FloatInput
                    label="Default"
                      placeholder="Default Value"
                      name="default"
                      style={{
                        borderColor: "#ccc",
                        borderRadius: "2px",
                        display: "block",
                        height: "3rem",
                        width: "10rem",
                      }}
                    />
                    <div style={{ position: "absolute", top: 10, right: 50 }}>
                      {<InfoCircleOutlinedFunction value={""} />}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

          <Col span={12}>
          
<div className={styles.datatype}>Data Type</div>
<div className={styles.button}>
  <input type="radio" id="varchar" name="datatype"/>
  <label className="btn btn-default" htmlFor="varchar">VARCHAR</label>
</div>
<div className={styles.button}>
  <input type="radio" id="number" name="datatype" />
  <label className="btn btn-default" htmlFor="number">NUMBER</label>
</div>
<div className={styles.button}>
  <input type="radio" id="boolean" name="datatype" />
  <label className="btn btn-default" htmlFor="boolean">BOOLEAN</label>
</div>
<div className={styles.button}>
  <input type="radio" id="datetime" name="datatype" />
  <label className="btn btn-default" htmlFor="datetime">DATETIME</label>
</div>
<div className={styles.button}>
  <input type="radio" id="guid" name="datatype" />
  <label className="btn btn-default" htmlFor="guid">GUID</label>
</div>
<div className={styles.button}>
  <input type="radio" id="blob" name="datatype" />
  <label className="btn btn-default" htmlFor="blob">BLOB</label>
</div>
          </Col>
          
          </Row>
          
          <Row style={{ marginTop: "1rem" }}>
          <input type="checkbox" id="agree" onClick={setDisplayAttributes}/>Combine selected attributes
          </Row>
          {displayAttributeList && <Space direction="vertical" style={{ width: '100%' }}>
        <Select
          mode="multiple"
          placeholder="Select attributes and formatters"
          onChange={handleChange}
          style={{ width: '100%' }}
          options={options}
        />
      </Space>}
          
        </Col>
  );
};

export default NewAttributeContent;

