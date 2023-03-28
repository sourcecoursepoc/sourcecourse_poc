const findNode = (treeData: any[], key: string | number): any | null => {
    for (let i = 0; i < treeData.length; i++) {
      const node = treeData[i];
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        const foundNode = findNode(node.children, key);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null;
  };
  
 /* const findNodeByKey = (data: TreeNode[], key: string): TreeNode | undefined => {
    for (const node of data) {
      if (node.key === key) {
        return node;
      }
  
      if (node.children) {
        const foundNode = findNodeByKey(node.children, key);
        if (foundNode) {
          return foundNode;
        }
      }
    }
  
    return undefined;
  }; */