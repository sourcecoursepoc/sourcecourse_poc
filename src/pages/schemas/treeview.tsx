import React from 'react';
import { Tree } from 'antd';

const { TreeNode } = Tree;

const data = [
    {
        title: 'Parent 1',
        key: '0-0',
        children: [
            {
                title: 'Child 1',
                key: '0-0-1',

            },
            {
                title: 'Child 2',
                key: '0-0-2',
            },
            {
                title: 'Child 3',
                key: '0-0-3',
            },
        ],
    },
    {
        title: 'Parent 2',
        key: '0-1',
        children: [
            {
                title: 'Child 4',
                key: '0-1-1',
            },
            {
                title: 'Child 5',
                key: '0-1-2',
            },
        ],
    },
    {
        title: 'Parent 3',
        key: '0-2',
    },
];

const TreeView = () => {
    return (
        <Tree>
            {data.map((item) => (
                <TreeNode title={item.title} key={item.key}>
                    {item.children && item.children.length > 0 &&
                        item.children.map((child) => (
                            <TreeNode title={child.title} key={child.key} />
                        ))
                    }
                </TreeNode>
            ))}
        </Tree>
    );
};

export default TreeView;
