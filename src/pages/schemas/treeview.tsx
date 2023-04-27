import React, { useState, useEffect, ReactNode } from "react";
import { Tree, Image } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchDataBaseRequest,
  addArray,
  addGroupdataArray,
} from "../../redux/actions/schemasaction";
import {
  getDataBaseSelector,
  getGroupdataDataBaseSelector,
  getSelectedArraySelector,
  getSelectorTableNodes,
} from "../../redux/selector";
import {
  RightOutlined,
} from "@ant-design/icons";
import { addLastIndex } from "@/redux/actions/schemaTypes";

const { TreeNode } = Tree;

interface DBNode extends Node {
  uid: string;
  dbName: string;
  description: string;
  metadata: any;
  tables: TableProps[];
}

interface IconImage {
  //iconImage: string;
  onSelect: () => void;
  groupModalBoxTreeView: boolean;
  setGroupModalBoxTreeView: () => void;
  iconImage: ReactNode;
}

const TreeView: React.FC<Props | TableProps[] | IconImage> = ({
  db,
  tableDb,
  iconImage,
  groupModalBoxTreeView,
  setGroupModalBoxTreeView,
}) => {
  const dispatch = useDispatch();
  const data = useSelector(getDataBaseSelector);
  const groupDataSelector = useSelector(getGroupdataDataBaseSelector);
  const selectedTableArray = useSelector(getSelectorTableNodes);

  useEffect(() => {
    dispatch(fetchDataBaseRequest());
  }, []);

  const [defaultSelectedKey, setDefaultSelectedKey] = useState("");
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);


  useEffect(() => {
    if (data ?.length > 0) {
      const firstNode = data[0];
      setSelectedNode([firstNode]);
      dispatch(addArray([firstNode]));
      setDefaultSelectedKey(firstNode.uid); // set the uid of the first node as the default selected key
      setExpandedKeys([firstNode.uid]); // expand the first node by default

    }
  }, [data]);

  const selectTables = (state: DBProps) => state ?.Tables || [];
  const Tables = useSelector(selectTables);

  const selectColumns = (state: TableProps) => state.columns;
  const columns = useSelector(selectColumns);
  const selcectedData = useSelector(getSelectedArraySelector);
  const [selectedNode, setSelectedNode] = useState<any[]>([]);

  const [selectedLastIndexes, setSelectedLastIndexes] = useState<Array<any>>(
    []
  );

  type KeysType = string[];

  type InfoType = {
    event: React.MouseEvent<HTMLDivElement>;
    node: any;
  };

  const onSelect = (keys: KeysType, info: InfoType) => {
    const selectedKey = keys[0];
    console.log("selectedKey:", selectedKey);
    console.log(info,"info")

    const selectedObj = groupDataSelector
      ? findNodeByKey(data, groupDataSelector, columns, selectedKey)
      : findNodeByKey(data, Tables, columns, selectedKey);

    console.log("selectedObj:", selectedObj);

    const exists = selectedNode ?.some((node: any) => node.uid === selectedObj ?.uid);
    if (selectedObj && !exists && !groupModalBoxTreeView) {
      setSelectedNode([selectedObj]);
      dispatch(addArray([selectedObj]));
    }

    if (groupModalBoxTreeView) {
      dispatch(addGroupdataArray([selectedObj]));
    }

    if (selectedObj ?.tableName && selectedObj ?.columns ?.length > 0) {
      console.log(selectedObj, "selectedObj");
      const lastIndex = selectedObj;
      const lastIndexExists = selectedLastIndexes ?.some((item:any) => item ?.uid === lastIndex ?.uid);
      if (!lastIndexExists) {
        dispatch(addLastIndex(lastIndex));
        setSelectedLastIndexes([...selectedLastIndexes, lastIndex]);
      }
    }

    const parentKeys: KeysType = [];
    let node = selectedObj;
    while (node ?.parentKey) {
      parentKeys.push(node.parentKey);
      node = findNodeByKey(data, Tables, columns, node.parentKey);
    }
    setExpandedKeys([...expandedKeys, ...parentKeys, selectedKey]);
  };

  useEffect(() => {
    setSelectedLastIndexes(selectedTableArray);
  }, [selectedTableArray]);

  const findNodeByKey = (
    data: DBProps[],
    Tables: TableProps[],
    columns: ColumnProps[],
    key: string
  ): DBProps | TableProps | ColumnProps | undefined => {
    const findInTables = (table: TableProps) => table.uid === key;
    const findInColumns = (column: ColumnProps) => column.uid === key;

    const node = data.find((item) => item.uid === key);
    console.log(data.find((item) => item?.uid),"dddddddddddddddddddddd")
    console.log(key,"kkkkkkkkkkkkkkkkkkkkkkk")
    console.log(node,"nodenode")
    if (node) {
      return node;
    }

    const table = Tables ?.find(findInTables);
    if (table) {
      return table;
    }

    const column = Tables ?.flatMap((table: any) => table.columns || []).find(findInColumns);

    if (column) {
      return column;
    }

    return undefined;
  };

  const renderColumns = (columns: ColumnProps[] | undefined) => {
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
        key={column ?.uid?.toString()}
      />
    ));
  };

  const renderTables = (tables: TableProps[]) => {
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
        key={table?.uid.toString()}
        switcherIcon={
          table ?.columns ?.length > 0 ? (
            <RightOutlined style={{ fontSize: "0.6rem" }} />
          ) : undefined
        }
      >
        {table ?.columns ?.length > 0 && renderColumns(table ?.columns)}
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
          key={item?.uid?.toString()}
          switcherIcon={
            Array.isArray(item ?.tables) && item ?.tables ?.length > 0 ? (
              <RightOutlined style={{ fontSize: "0.6rem" }} />
            ) : undefined
          }
        >
          {Array.isArray(item ?.tables) &&
            item ?.tables ?.length > 0 &&
              renderTables(item ?.tables)}
        </TreeNode>
      ) : (
          Array.isArray(item ?.tables) &&
            item ?.tables ?.length > 0 &&
              renderTables(item ?.tables)
        )
    );
  };

  return (
    <Tree
      onSelect={onSelect}
      style={{ fontSize: "15px", fontWeight: "500", alignText: "left" }}
      showIcon
      expandedKeys={expandedKeys}
      selectedKeys={selectedNode.map((node) => node.uid)}
      onExpand={(keys) => setExpandedKeys(keys)}
      defaultSelectedKeys={defaultSelectedKey}
      height={500}
    >
      {renderDB(db)}
    </Tree>
  );
};

export default TreeView;
