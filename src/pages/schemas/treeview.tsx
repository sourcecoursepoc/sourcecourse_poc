import React, { useEffect,useState } from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getSchemasSelector, getErrorSelector, getPendingSelector } from '../../redux/selector';
import { fetchSchemaRequest } from '../../redux/actions/schemasaction';
import { useDispatch } from 'react-redux';
import GroupsModalBox from '@/components/ComposePage/GroupsPage/ModalBox/groupsModalBox';

interface MyNode {
  id: number;
  name: string;
  type: string;
  children?: MyNode[];
}

interface Item {
  id: number;
  label: string;
}


const MyTree: React.FC = () => {

  const [selectedItems, setSelectedItems] = useState<Item[]>([]);


  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const schemas = useSelector(getSchemasSelector);
  const error = useSelector(getErrorSelector);
  console.log(schemas, "schemas")
  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchSchemaRequest("10002"));
  }, []);

  function handleSelectItem(item: Item) {
    setSelectedItems([...selectedItems, item]);
  }


  const renderTreeNodes = (schemas?: MyNode[]) =>
  schemas?.map((schema: MyNode) => {
    if (schema.children) {
      return (
        <Tree.TreeNode title={schema.name} key={schema.id} switcherIcon={<DownOutlined />}>
          {renderTreeNodes(schema.children)}
        </Tree.TreeNode>
      );
    }

    return (
      <Tree.TreeNode title={schema.name} key={schema.id} switcherIcon={<DownOutlined />} />
    );
  });

  return (
    <>
    <Tree defaultExpandAll={true} >
      {renderTreeNodes(schemas)}
    </Tree>
     {/* <GroupsModalBox selectedItems={selectedItems} /> */}
     </>
  );
};

export default MyTree;