import { fetchRecord } from "@/redux/actions/fetchDataAction";
import { getRecordSelector } from "@/redux/selectors";
import { Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MigrationPiechart from "./migrationPiechart";
import styles from "./migration.module.css";
import MigrationBarChart from "./migrationBarChart";

const SchemaReport = () => {
  const getRecords = useSelector(getRecordSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecord());
  }, [dispatch]);
  const data = [
    {
      name: "Item",
      value1: getRecords[0]?.Item[0]?.record1,
      value2: getRecords[0]?.Item[0]?.record2,
    },
    {
      name: "Item Details",
      value1: getRecords[0]?.ItemDetails[0]?.record1,
      value2: getRecords[0]?.ItemDetails[0]?.record2,
    },
    {
      name: "Item Dimension",
      value1: getRecords[0]?.ItemDimension[0]?.record1,
      value2: getRecords[0]?.ItemDimension[0]?.record2,
    },
    {
      name: "Distributors",
      value1: getRecords[0]?.Distributors[0]?.record1,
      value2: getRecords[0]?.Distributors[0]?.record2,
    },
    {
      name: "Offers",
      value1: getRecords[0]?.Offers[0]?.record1,
      value2: getRecords[0]?.Offers[0]?.record2,
    },
    {
      name: "Item Price",
      value1: getRecords[0]?.ItemPrice[0]?.record1,
      value2: getRecords[0]?.ItemPrice[0]?.record2,
    },
    {
      name: "Item Movement",
      value1: getRecords[0]?.ItemMovement[0]?.record1,
      value2: getRecords[0]?.ItemMovement[0]?.record2,
    },
    {
      name: "Item return",
      value1: getRecords[0]?.Itemreturn[0]?.record1,
      value2: getRecords[0]?.Itemreturn[0]?.record2,
    },
  ];

  return (
    <>
      <div className={styles.outerbox}>
        <Row className={styles.innerBox1}>
          <p className={styles.heading}>Overall Migration Status</p>
        </Row>
        <Row className={styles.innerBox2}>
          <div>
            <MigrationBarChart data={data} />
          </div>
        </Row>
      </div>

      <div className={styles.outerbox2}>
        <Row className={styles.innerBox21}>
          <p className={styles.heading}>Schema Migration Status</p>
        </Row>
        {data.map((item, index) => (
          <MigrationPiechart
            key={index}
            title1={item.name}
            numb1={item.value1}
            numb2={item.value2}
            title2="Records"
            slash="/"
            pieData={[
              { name: "Record1", value: item.value1 },
              { name: "Record2", value: item.value2 },
            ]}
          />
        ))}
      </div>
    </>
  );
};

export default SchemaReport;
