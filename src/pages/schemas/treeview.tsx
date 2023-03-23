import { Tree, Button } from 'antd';
import { FolderOutlined, FileOutlined, DatabaseOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
// import { fetchSchemas } from "../../services/dataService"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getErrorSelector, getPendingSelector, getSchemasSelector } from "../../redux/selector";
import { fetchSchema_Data } from '../../redux/actions/schemasaction';

interface TreeNode {
  name: string;
  key: string;
  icon?: JSX.Element;
  children?: TreeNode[];
}

const { TreeNode } = Tree;

const treeData: TreeNode[] = [
  {
    name: 'General',
    key: '0-0',
    icon: <DatabaseOutlined />,
    children: [
      {
        name: 'ITEM',
        key: '0-0-0',
        icon: <FolderOutlined />,
        children: [
          {
            name: 'id',
            key: '0-0-0-0',
            icon: <FileOutlined />,
            children: []
          },
          {
                name: 'name',
                key: '0-0-0-0-0',
                icon: <FileOutlined />,
                children: [],
          },
          {
                name: 'status',
                key: '0-0-0-0-1',
                icon: <FileOutlined />,
                children: [],
          },
          {
            name: 'company',
            key: '0-0-0-1',
            icon: <FileOutlined />,
            children: [],
          },
        ],
      },
      {
        name: 'ITEM_DETAILS',
        key: '0-0-1',
        icon: <FolderOutlined />,
        children: [
        ],
      },
    ],
  },
];

const TreeView = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const schemas = useSelector(getSchemasSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchSchema_Data());
  }, []);
  console.log(schemas, "tree")
  // const fetchData = async () => {
  //   try {
  //     const data = await fetchSchemas({});
  //     console.log('Schemas Data:', data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);;
  // const schemaData = fetchData();
  // console.log(schemaData.data,"hhhh")

  const [selectedData, setSelectedData] = useState<TreeNode | null>(null);
  const onSelect = (selectedKeys: React.Key[], info: any) => {
    const node = info.node.props;
    setSelectedData({
      name: node.name,
      key: node.eventKey,
      icon: node.icon,
      children: node.children,
    });
    console.log(selectedData.name, "hhhhhh")
  };

  const renderTreeNodes = (nodes: TreeNode[]) => {
    return nodes.map((node, index) => {
      if (node.children && node.children.length > 0) {
        return (
          <TreeNode {...node} icon={node.icon} key={node.key} title={
            <span>{node.name}
              <span style={{ marginLeft: "20px", display: 'none', }}>{<PlusOutlined />}</span>
            </span>
          } switcherIcon={<DownOutlined />}>
            {renderTreeNodes(node.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...node} icon={node.icon} key={node.key} title={node.name} />;
    });
  };

  return (
    <Tree showIcon onSelect={onSelect}>
      {renderTreeNodes(treeData)}
    </Tree>
  );
};
export default TreeView;
