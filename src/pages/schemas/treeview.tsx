import { Tree } from 'antd';
import { FolderOutlined, FileOutlined, DatabaseOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface TreeNode {
  name: string;
  key: string;
  icon?: JSX.Element;
  children?: TreeNode[];
}

const { TreeNode } = Tree;

const treeData: TreeNode[] = [
  {
    name: 'projects',
    key: '0-0',
    icon:<DatabaseOutlined />,
    children: [
      {
        name: 'Tables',
        key: '0-0-0',
        icon: <FolderOutlined />,
        children: [
          {
            name: 'id',
            key: '0-0-0-0',
            icon: <FolderOutlined />,
            children: [
              {
                name: 'name',
                key: '0-0-0-0-0',
                icon: <FileOutlined />,
              },
              {
                name: 'status',
                key: '0-0-0-0-1',
                icon: <FileOutlined />,
              },
            ],
          },
          {
            name: 'company',
            key: '0-0-0-1',
            icon: <FileOutlined />,
          },
        ],
      },
      {
        name: 'item',
        key: '0-0-1',
        icon: <FileOutlined />,
        children: [
          {
            name: 'id',
            key: '0-0-1-0',
            icon: <FileOutlined />,
          },
        ],
      },
    ],
  },
];

const TreeView = () => {
  const [selectedData, setSelectedData] = useState<TreeNode | null>(null);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    const node = info.node.props;
    setSelectedData({
        name: node.name,
      key: node.eventKey,
      icon: node.icon,
      children: node.children,
    });
    console.log(selectedData.name,"hhhhhh")
  };

  const renderTreeNodes = (nodes: TreeNode[]) => {
    return nodes.map((node) => {
      if (node.children && node.children.length > 0) {
        return (
          <TreeNode {...node} icon={node.icon} key={node.key} title={node.name}>
            {renderTreeNodes(node.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...node} icon={node.icon} key={node.key} title={node.name} />;
    });
  };

  return (
    <Tree showIcon  onSelect={onSelect}>
      {renderTreeNodes(treeData)}
    </Tree>
  );
};

interface SelectedDataViewProps {
  selectedData: TreeNode | null;
}

export const SelectedDataView = ({ selectedData }: SelectedDataViewProps) => {
  console.log('Selected Data:', selectedData);
  return null; 
};

export default TreeView;
