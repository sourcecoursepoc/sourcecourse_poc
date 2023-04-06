import React, { useState, useEffect, ReactNode } from 'react'; 
import { Tree, Image } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchDataBaseRequest, addArray, addGroupdataArray } from '../../redux/actions/schemasaction';
import { getDataBaseSelector, getGroupdataDataBaseSelector } from '../../redux/selector';
import { DownOutlined, DatabaseOutlined, PartitionOutlined, FolderOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

const { TreeNode } = Tree;
interface IconImage{
  //iconImage: string;
  onSelect:() => void;
  groupData:boolean;
  setGroupData:()=>void;
  iconImage: ReactNode;
}

const TreeView: React.FC<Props | TableProps[] | IconImage> = ({ db, tableDb,iconImage,groupData,setGroupData }) => {
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
    console.log("selectedKey",selectedKey)
  
    console.log("data data data",data)
    console.log("Tables : ",Tables)
    console.log("columns : ",columns)
   
    const selectedObj: any = findNodeByKey(data, Tables, columns, selectedKey);
    console.log("selectedObj",selectedObj)
    
    // Check if the selected object already exists in the array
    const exists =
      selectedNode &&
      selectedObj &&
      selectedNode.filter(Boolean).some((node) => node.uid === selectedObj.uid);
    if (selectedObj && !exists) {
      setSelectedNode([selectedObj]);
      dispatch(addArray([selectedObj]));
    }
    console.log("groupData",groupData)
    if(groupData){
      console.log("testtttttttttt data")
      // const selectedObjGroup: any = findNodeByKey_Group( Tables, columns, selectedKey);
      // console.log("selectedObjGroup",selectedObjGroup)
      console.log("addGroupdataArray([selectedObj])",addGroupdataArray([selectedObj]))
      dispatch(addGroupdataArray([selectedObj]));
    }
  };

  // const findNodeByKey_Group = (
  //   Tables: TableProps[],
  //   columns: ColumnProps[],
  //   key: string
  // ): TableProps | ColumnProps | undefined => {
  //   console.log("Tables",Tables)
  //   console.log("db.Tables",db.Tables)
  //     for (const table of db.Tables) {
  //       if (table.uid === key) {
  //         return table;
  //       }
  //       for (const column of table?.columns || []) {
  //         if (column.uid === key) {
  //           return column;
  //         }
  //       }
      
  //   }
  //   return undefined;
  // }; 
 
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
        for (const column of table?.columns || []) {
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
      <TreeNode
        title={column.name}
        key={column.uid}
        icon={<FolderOutlined />}
      />
    ));
  };
  const renderTables = (tables: TableProps[]) => {
    return tables.map((table: TableProps) => (
      <TreeNode title={<span>
        <Image src="/Schemas.png" alt='' style={{ width: "1rem", height: "1rem", marginRight: "0.5rem", marginBottom: "0.5rem" }}>
        </Image>
        {table.tableName}
        <span>{table?.columns?.length > 0 ? iconImage: undefined}</span>
      </span>} key={table.uid}
        switcherIcon={table?.columns?.length > 0 ? <RightOutlined style={{fontSize: "0.6rem"}} /> : undefined}
      >
        {table?.columns?.length > 0 && renderColumns(table?.columns)}
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
          <Image preview={false} src="/Server.png" alt='' style={{ width: "2rem", height: "2rem", marginRight: "0.5rem", marginBottom: "0.5rem" }}>
          </Image>
          {item.DBName}
        </span>}
          key={item.uid}
          switcherIcon={
            Array.isArray(item.Tables) && item.Tables.length > 0 ? (
              <RightOutlined style={{fontSize: "0.6rem", marginTop: "0.7rem"}}/>
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
      style={{ fontSize: "15px" ,fontWeight:"500"}}
      showIcon
      defaultSelectedKeys={defaultSelectedKey}
    >
      {renderDB(db)}
    </Tree>
  );
  };
export default TreeView;
