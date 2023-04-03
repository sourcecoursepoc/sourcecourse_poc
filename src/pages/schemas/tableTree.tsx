import React from 'react';
import { Tree } from 'antd';
import { DatabaseOutlined, DownOutlined, FolderOutlined, PartitionOutlined } from '@ant-design/icons';

const { TreeNode } = Tree;

const TableTree = ({tableDb }) => {

  const renderColumns = (columns: ColumnProps[] | undefined) => {
    if (!columns) {
      return null;
    }
    return columns.map((column: ColumnProps) => (
      <TreeNode title={column.name} key={column.uid} icon={<FolderOutlined />}
      />
    ));
  };


  const renderTables = (tables: TableProps[]) => {
    return tableDb.map((table: TableProps) => (
      <TreeNode title={table.tableName} key={table.uid}
        icon={<PartitionOutlined />}
        switcherIcon={table.columns.length > 0 ? <DownOutlined /> : undefined}
      >
        {table.columns.length > 0 && renderColumns(table.columns)}
      </TreeNode>
    ));
  };
  
};

export default TableTree;
