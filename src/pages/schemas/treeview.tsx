import React from 'react';
import { Tree } from 'antd';

const { TreeNode } = Tree;

// interface ColumnProps {
//   name: string;
//   type: string;
//   isPrimary: boolean;
//   unique: boolean;
//   nullable: boolean;
//   consumed: string | boolean | number;
//   consumers: string[];
//   dataQuality: {
//     score: string;
//     description: string;
//   };
// }

// interface TableProps {
//   tableName: string;
//   columns: ColumnProps[];
//   rowCount: number;
//   size: string;
//   mindate: string;
//   maxdate: string;
//   yoycount: string;
//   momcount: string;
// }

// interface DBProps {
//   DBName: string;
//   Tables: TableProps[];
// }

// interface Props {
//   db: DBProps[];
// }

const onSelect = (selectedKeys: React.Key[], info: any) => {
  const node = info.node;
  console.log(node, "node")
};

const renderColumns = (columns: ColumnProps[]) => {
  return columns.map((column: ColumnProps) => (
    <TreeNode title={`${column.name} (${column.type})`} key={column.name} />
  ));
};

const renderTables = (tables: TableProps[]) => {
  return tables.map((table: TableProps) => (
    <TreeNode title={table.tableName} key={table.tableName} >
      {renderColumns(table.columns)}
    </TreeNode>
  ));
};

const renderDB = (db: DBProps[]) => {
  return db.map((item: DBProps) => (
    <TreeNode title={item.DBName} key={item.DBName} >
      {renderTables(item.Tables)}
    </TreeNode>
  ));
};

const TreeView: React.FC<Props> = ({ db }) => {
  return <Tree onSelect={onSelect}>{renderDB(db)}</Tree>;
};

export default TreeView;
