import React, { useState, useEffect } from "react";
import { Tree } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchDataBaseRequest,
  addArray,
} from "../../redux/actions/schemasaction";
import {
  getDataBaseSelector,
  getSelectedArraySelector,
} from "../../redux/selector";
import Item from "antd/es/list/Item";

const { TreeNode } = Tree;

// interface ColumnProps {

//   name: string;

//   type: string;

//   isPrimary: boolean;

//   unique: boolean;

//   nullable: boolean;

//   consumed: string | boolean | number;

//   consumers: string[];

//   dataQuality: {

//     score: string;

//     description: string;

//   };

// }

// interface TableProps {

//   tableName: string;

//   columns: ColumnProps[];

//   rowCount: number;

//   size: string;

//   mindate: string;

//   maxdate: string;

//   yoycount: string;

//   momcount: string;

// }

// interface DBProps {

//   DBName: string;

//   Tables: TableProps[];

// }

// interface Props {

//   db: DBProps[];

// }

// const onSelect = (selectedKeys: React.Key[], info: any) => {

//   const node = info.node;

//   console.log(node.props as any, "node")

// };

const TreeView: React.FC<Props> = ({ db }) => {
  const dispatch = useDispatch();

  const data = useSelector(getDataBaseSelector);

  useEffect(() => {
    dispatch(fetchDataBaseRequest());
  }, []); // const data = useSelector((state: Props) => state.db);

  const selectTables = (state: DBProps) => state.Tables;

  const selectColumns = (state: TableProps) => state.columns;

  const Tables = useSelector(selectTables);

  const columns = useSelector(selectColumns);

  const selcectData = useSelector(getSelectedArraySelector);

  console.log(selcectData, "aaaaaaaaaaaaaaaaaaaaa");

  const [selectedNode, setSelectedNode] = useState<
    DBProps | TableProps | ColumnProps | undefined
  >([]);

  console.log("useEffect");

  const onSelect = (keys: any, info: any) => {
    console.log(info, "info");

    const selectedKey = keys[0] as string;

    console.log(selectedKey, "selectedKey");

    const selectedObj = findNodeByKey(data, Tables, columns, selectedKey);

    console.log(selectedObj, "infoselectedNode");

    console.log(selectedNode?.metadata, "metadata"); // Update the state with the selected node // if (selectedObj !== undefined) { //   setSelectedNode(selectedNode.push(selectedObj)); //   console.log(selectedObj, "object") //   // dispatch(addArray(selectedNode)); //   console.log(selectedNode, "infoselectedNode") // }
  };

  const findNodeByKey = (
    data: DBProps[],
    Tables: TableProps[],
    columns: ColumnProps[],
    key: string
  ): DBProps | TableProps | ColumnProps | undefined => {
    for (const node of data) {
      if (node.uid === key) {
        return node;
      }

      for (const table of node.Tables) {
        if (table.uid === key) {
          return table;
        }

        for (const column of table.columns) {
          if (column.uid === key) {
            return column;
          }
        }
      }
    }

    return undefined;
  };

  const renderColumns = (columns: ColumnProps[] | undefined) => {
    if (!columns) {
      return null;
    }

    return columns.map((column: ColumnProps) => (
      <TreeNode title={column.name} key={column.uid} />
    ));
  };

  const renderTables = (tables: TableProps[]) => {
    return tables.map((table: TableProps) => (
      <TreeNode title={table.tableName} key={table.uid}>
        {table.columns.length > 0 && renderColumns(table.columns)}{" "}
      </TreeNode>
    ));
  };

  const renderDB = (db: DBProps[]) => {
    return db.map((item: DBProps) => (
      <TreeNode title={item.DBName} key={item.uid}>
        {" "}
        {Array.isArray(item.Tables) &&
          item.Tables.length > 0 &&
          renderTables(item.Tables)}{" "}
      </TreeNode>
    ));
  };

  return <Tree onSelect={onSelect}>{renderDB(db)}</Tree>;
};

export default TreeView;
