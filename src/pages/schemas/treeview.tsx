import React, { useState, useEffect, ReactNode } from "react";
import { Tree, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  addArray,
  addLastIndex,
  addGroupdataArray,
} from "../../redux/actions/schemasaction";
import {
  SelectedTreeNodeInfo,
} from "../../redux/selector";
import {
  RightOutlined,
} from "@ant-design/icons";
const { TreeNode } = Tree;

interface IconImage {
  onSelect: () => void;
  iconImage: ReactNode;
}

const TreeView: React.FC<Props | TableProps[] | IconImage> = ({
  db,
  iconImage,
}) => {
  const dispatch = useDispatch();
  const selectedTreeData = useSelector(SelectedTreeNodeInfo);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);

  const selectedDataJSON = localStorage.getItem('selectedData');
  const selectedData = JSON.parse(selectedDataJSON);
  console.log(selectedData, "local");

  useEffect(() => {
    if (selectedData ?.length > 0) {

      // const firstNode = db[0];
      // dispatch(addArray([firstNode]));
      // setExpandedKeys([firstNode.uid]);
      const selectedKeys = getSelectedKeys(selectedData);
      setDefaultSelectedKeys(selectedKeys);
    }
  }, [selectedData, db]);

  const getSelectedKeys = (selectedData: any): string[] => {
    if (!selectedData) {
      return [];
    }
    const keys: string[] = [];
    const { dbUid, tableUid, columnUid } = selectedData;
    if (columnUid) {
      keys.push(`${dbUid}-${tableUid}-${columnUid}`);
      keys.push(`${dbUid}-${tableUid}`);
      keys.push(`${dbUid}`);
    } else if (tableUid) {
      keys.push(`${dbUid}-${tableUid}`);
      keys.push(`${dbUid}`);
    } else if (dbUid) {
      keys.push(`${dbUid}`);
    }
    return keys;
  };

  type KeysType = string[];

  type InfoType = {
    event: React.MouseEvent<HTMLDivElement>;
    node: any;
  };

  const onSelect = (keys: KeysType, info: InfoType) => {
    const selectedKey = keys[0]; // Get the selected key

    // Dispatch the last selected key
    if (selectedKey) {
      const treeKeys = selectedKey.split("-");
      let element;

      if (treeKeys.length > 2) {
        const tables = db.find((val) => val.uid.toString() === treeKeys[0]) ?.tables;
        const columns = tables.find((val) => val.uid.toString() === treeKeys[1]) ?.columns;
        element = columns.find((val) => val.uid.toString() === treeKeys[2]);
      } else if (treeKeys.length > 1) {
        const tables = db.find((val) => val.uid.toString() === treeKeys[0]) ?.tables;
        element = tables.find((val) => val.uid.toString() === treeKeys[1]);
      } else if (treeKeys.length > 0) {
        element = db.find((val) => val.uid.toString() === treeKeys[0]);
      }

      if (element) {
        dispatch(addArray([element]));
      }
    }

    setDefaultSelectedKeys([selectedKey]); 
  };


  const renderColumns = (columns: ColumnProps[] | undefined, dbUid: string, tableUid: string) => {
    if (!columns) {
      return null;
    }
    return columns ?.map((column: ColumnProps) => (
      <TreeNode
        title={
          <span>
            {column ?.metadata ?.isPrimary ? (
              <Image
                src="primarykey-icon1.png"
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginRight: "0.5rem",
                }}
                preview={false}
                alt=""
              />
            ) : (
                <Image
                  src="column-icon1.png"
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.5rem",
                  }}
                  preview={false}
                  alt=""
                />
              )}

            {column ?.name}
            <span>{columns ?.length > 0 ? iconImage : undefined}</span>
          </span>
        }
        key={`${dbUid}-${tableUid}-${column ?.uid ?.toString()}`}
      />
    ));
  };

  const renderTables = (tables: TableProps[], dbUid: string) => {
    return tables ?.map((table: TableProps) => (
      <TreeNode
        title={
          <span>
            <Image
              src="/Schemas.png"
              alt=""
              style={{
                width: "1rem",
                height: "1rem",
                marginRight: "0.5rem",
              }}
              preview={false}
            ></Image>

            {table ?.tableName}

            <span>{table ?.columns ?.length > 0 ? iconImage : undefined}</span>
          </span>
        }
        key={`${dbUid}-${table ?.uid ?.toString()}`}
        switcherIcon={
          table ?.columns ?.length > 0 ? (
            <RightOutlined style={{ fontSize: "0.6rem" }} />
          ) : undefined
        }
      >
        {table ?.columns ?.length > 0 && renderColumns(table ?.columns, dbUid, table ?.uid ?.toString())}
      </TreeNode>
    ));
  };

  const renderDB = (db: DBProps[]) => {
    if (!db) {
      return null;
    }

    return db ?.map((item: DBProps) =>
      item ?.dbName ? (
        <TreeNode
          title={
            <span>
              <Image
                preview={false}
                src="/Server-Icon.png"
                alt=""
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginRight: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              ></Image>

              {item ?.dbName}
            </span>
          }
          key={`${item ?.uid ?.toString()}`}
          switcherIcon={
            item ?.tables ?.length > 0 ? (
              <RightOutlined style={{ fontSize: "0.6rem" }} />
            ) : undefined
          }
        >
          {item ?.tables ?.length > 0 &&
            renderTables(item ?.tables, item ?.uid ?.toString())}
        </TreeNode>
      ) : (
          Array.isArray(item ?.tables) &&
            item ?.tables ?.length > 0 &&
              renderTables(item ?.tables, item ?.uid ?.toString())
        )
    );
  };

  return (
    <Tree
      onSelect={onSelect}
      style={{ fontSize: "15px", fontWeight: "500", alignText: "left" }}
      showIcon
      expandedKeys={expandedKeys}
      selectedKeys={selectedTreeData.map((node) => node.uid)}
      onExpand={(keys) => setExpandedKeys(keys)}
      defaultSelectedKeys={defaultSelectedKeys} 

      height={1000}
    >
      {renderDB(db)}
    </Tree>
  );
};

export default TreeView;
