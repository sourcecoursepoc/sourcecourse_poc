import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchDataBaseRequest, addArray } from '../../redux/actions/schemasaction';
import { getDataBaseSelector, getSelectedArraySelector } from '../../redux/selector';

const { TreeNode } = Tree;

const TreeView: React.FC<Props> = ({ db }) => {
  const dispatch = useDispatch();
  const data = useSelector(getDataBaseSelector);

  useEffect(() => {
    dispatch(fetchDataBaseRequest());

  }, []);
  const selectTables = (state: DBProps) => state.Tables;
  const selectColumns = (state: TableProps) => state.columns;
  const Tables = useSelector(selectTables);
  const columns = useSelector(selectColumns);
  const selcectData = useSelector(getSelectedArraySelector);

  console.log(selcectData, "aaaaaaaaaaaaaaaaaaaaa")

  const [selectedNode, setSelectedNode] = useState<any[]>([]);
  console.log("useEffect");

  const onSelect = (keys: any, info: any) => {
    console.log(info, "info");

    const selectedKey = keys[0] as string;
    console.log(selectedKey, "selectedKey");

    const selectedObj = findNodeByKey(data, Tables, columns, selectedKey);
    console.log(selectedObj, "selectedObj");

    // Check if the selected object already exists in the array
    const exists = selectedNode.some((node) => node ?.uid === selectedObj ?.uid);
    if (selectedObj && !exists) {
      setSelectedNode([...selectedNode, selectedObj]);
      console.log(selectedObj.metadata, "metadata");
      dispatch(addArray([ selectedObj]));
      console.log(selectedNode, "selectedNode");
    }
  };

  const findNodeByKey = (data: DBProps[], Tables: TableProps[], columns: ColumnProps[], key: string): DBProps | TableProps | ColumnProps | undefined => {
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
      <TreeNode title={table.tableName} key={table.uid} >
        {table.columns.length > 0 && renderColumns(table.columns)}
      </TreeNode>
    ));
  };

  const renderDB = (db: DBProps[]) => {
    if(!db){
      return null;
    }
    return db.map((item: DBProps) => (
      <TreeNode title={item.DBName} key={item.uid} >
        {Array.isArray(item.Tables) && item.Tables.length > 0 && renderTables(item.Tables)}
      </TreeNode>
    ));
  };
  return <Tree onSelect={onSelect}>{renderDB(db)}</Tree>;
};

export default TreeView;
