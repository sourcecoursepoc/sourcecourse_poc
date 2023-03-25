import React, { useEffect } from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getSchemasSelector, getErrorSelector, getPendingSelector } from '../../redux/selector';
import { fetchSchemaRequest } from '../../redux/actions/schemasaction';
import { useDispatch } from 'react-redux';

interface MyNode {
  id: number;
  name: string;
  type: string;
  children?: MyNode[];
}



const MyTree: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const schemas = useSelector(getSchemasSelector);
  const error = useSelector(getErrorSelector);
  console.log(schemas, "schemas")
  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchSchemaRequest("10002"));
  }, []);

  const renderTreeNodes = (schemas: MyNode[]) =>
    schemas.map((schema: MyNode) => {
      if (schema.children) {
        return (
          <Tree.TreeNode title={schema.name} key={schema.id} switcherIcon={<DownOutlined />}>>
            {renderTreeNodes(schema.children)}
          </Tree.TreeNode>
        );
      }

      return (
        <Tree.TreeNode title={schema.name} key={schema.id} switcherIcon={<DownOutlined />} />
      );
    });

  return (
    <Tree defaultExpandAll={true} >
      {renderTreeNodes(schemas)}
    </Tree>
  );
};

export default MyTree;