import React, { useState, useEffect } from "react";
import { Tree, Image } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchDataBaseRequest,
  addArray,
} from "../../redux/actions/schemasaction";
import { getDataBaseSelector } from "../../redux/selector";
import {
  DownOutlined,
  DatabaseOutlined,
  PartitionOutlined,
  FolderOutlined,
} from "@ant-design/icons";

const { TreeNode } = Tree;

const TreeView: React.FC<Props | TableProps[]> = ({ db, tableDb }) => {
  const dispatch = useDispatch();
  const data = useSelector(getDataBaseSelector);
  useEffect(() => {
    dispatch(fetchDataBaseRequest());
  }, []);

  const [defaultSelectedKey, setDefaultSelectedKey] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      const firstNode = data[0];
      setSelectedNode([firstNode]);
      dispatch(addArray([firstNode]));
      setDefaultSelectedKey(firstNode.uid); // set the uid of the first node as the default selected key
    }
  }, [data]);

  const selectTables = (state: DBProps) => state.Tables;
  const selectColumns = (state: TableProps) => state.columns;
  const Tables = useSelector(selectTables);
  const columns = useSelector(selectColumns);

  const [selectedNode, setSelectedNode] = useState<any[]>([]);

  const onSelect = (keys: any, info: any) => {
    const selectedKey = keys[0] as string;
    const selectedObj: any = findNodeByKey(data, Tables, columns, selectedKey);
    // Check if the selected object already exists in the array
    const exists =
      selectedNode &&
      selectedObj &&
      selectedNode.filter(Boolean).some((node) => node.uid === selectedObj.uid);
    if (selectedObj && !exists) {
      setSelectedNode([selectedObj]);
      dispatch(addArray([selectedObj]));
    }
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

  console.log(selectedNode, "selectedNode");
  const renderColumns = (columns: ColumnProps[] | undefined) => {
    if (!columns) {
      return null;
    }
    return columns.map((column: ColumnProps) => (
      <TreeNode
        title={column.name}
        key={column.uid}
        icon={<FolderOutlined />}
      />
    ));
  };
  const renderTables = (tables: TableProps[]) => {
    return tables.map((table: TableProps) => (
      <TreeNode
        title={
          <span>
            <Image
              src="/Schemas.png"
              style={{
                width: "1rem",
                height: "1rem",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
              }}
            ></Image>
            {table.tableName}
          </span>
        }
        key={table.uid}
        switcherIcon={table.columns.length > 0 ? <DownOutlined /> : undefined}
      >
        {table.columns.length > 0 && renderColumns(table.columns)}
      </TreeNode>
    ));
  };

  const renderDB = (db: DBProps[]) => {
    if (!db) {
      return null;
    }
    return db.map((item: DBProps) =>
      item.DBName ? (
        <TreeNode
        title={<span>
          <Image src="/Server.png" style={{ width: "2rem", height: "2rem", marginRight: "0.5rem", marginBottom: "0.5rem" }}>
          </Image>
          {item.DBName}
        </span>}
          key={item.uid}
          switcherIcon={
            Array.isArray(item.Tables) && item.Tables.length > 0 ? (
              <DownOutlined />
            ) : undefined
          }
        >
          {Array.isArray(item.Tables) &&
            item.Tables.length > 0 &&
            renderTables(item.Tables)}
        </TreeNode>
      ) : (
        Array.isArray(item.Tables) &&
        item.Tables.length > 0 &&
        renderTables(item.Tables)
      )
    );
  };
  return (
    <Tree
      onSelect={onSelect}
      style={{ fontSize: "20px" }}
      showIcon
      defaultSelectedKeys={defaultSelectedKey}
    >
      {renderDB(db)}
    </Tree>
  );
};

export default TreeView;
