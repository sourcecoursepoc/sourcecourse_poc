import React, { useState, useEffect, ReactNode } from "react";
import { Tree, Image } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addArray,
} from "../../redux/actions/schemasaction";
import {
  getSelectedArraySelector,
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
  const selcectedData = useSelector(getSelectedArraySelector);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

  useEffect(() => {
    if (db ?.length > 0) {
      const firstNode = db[0];
      dispatch(addArray([firstNode]));
      setExpandedKeys([firstNode.uid]); // expand the first node by default
    }
  }, [db]);

  type KeysType = string[];

  type InfoType = {
    event: React.MouseEvent<HTMLDivElement>;
    node: any;
  };

  const onSelect = (keys: KeysType, info: InfoType) => {
    const treeKeys = keys?.[0]?.split("-");
    if(treeKeys.length>2){
      const tables = db.find(val=> val.uid.toString()===treeKeys[0])?.tables;
      const columns = tables.find(val=> val.uid.toString()===treeKeys[1])?.columns;
      const column  = columns.find(val=> val.uid.toString()===treeKeys[2]);
      dispatch(addArray([column]));
    } else if (treeKeys.length>1){
      const tables = db.find(val=> val.uid.toString()===treeKeys[0])?.tables;
      const table = tables.find(val=> val.uid.toString()===treeKeys[1]);
      dispatch(addArray([table]));
    }else if (treeKeys.length>0){
      const dab = db.find(val=> val.uid.toString()===treeKeys[0]);
      dispatch(addArray([dab]));
    }
  }

  const renderColumns = (columns: ColumnProps[] | undefined, dbUid:string,tableUid:string) => {
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
        key={`${dbUid}-${tableUid}-${column?.uid?.toString()}`}
      />
    ));
  };

  const renderTables = (tables: TableProps[],dbUid:string) => {
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
        key={`${dbUid}-${table?.uid?.toString()}`}
        switcherIcon={
          table ?.columns ?.length > 0 ? (
            <RightOutlined style={{ fontSize: "0.6rem" }} />
          ) : undefined
        }
      >
        {table ?.columns ?.length > 0 && renderColumns(table ?.columns,dbUid,table?.uid?.toString())}
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
          key={`${item?.uid?.toString()}`}
          switcherIcon={
            item ?.tables ?.length > 0 ? (
              <RightOutlined style={{ fontSize: "0.6rem" }} />
            ) : undefined
          }
        >
          {item ?.tables ?.length > 0 &&
              renderTables(item ?.tables,item?.uid?.toString())}
        </TreeNode>
      ) : (
          Array.isArray(item ?.tables) &&
            item ?.tables ?.length > 0 &&
              renderTables(item ?.tables,item?.uid?.toString())
        )
    );
  };

  return (
    <Tree
      onSelect={onSelect}
      style={{ fontSize: "15px", fontWeight: "500", alignText: "left" }}
      showIcon
      expandedKeys={expandedKeys}
      selectedKeys={selcectedData.map((node) => node.uid)}
      onExpand={(keys) => setExpandedKeys(keys)}
      defaultSelectedKeys={db?.[0]?.uid}
      height={500}
    >
      {renderDB(db)}
    </Tree>
  );
};

export default TreeView;
