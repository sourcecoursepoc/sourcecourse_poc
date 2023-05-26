
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

type ColumnProps = {
  name: string;
  uid: string;
  type: string;
  isPrimary: boolean;
  unique: boolean;
  nullable: boolean;
  consumed: string | boolean | number;
  consumers: string[];
  dataQuality: {
    score: string;
    description: string;
  };
  metadata: {
    type: string,
    isPrimary: boolean,
    unique: boolean,
    nullable: boolean,
    defaultValue: string,
  };
}

type TableProps = {
  tableName: string;
  uid: string;
  description: string;
  metadata: {
    rowCount: number;
    size: string;
    mindate: string;
    maxdate: string;
    yoycount: string;
    momcount: string;
  }
  columns: ColumnProps[];
}
type TableProp={
  tableDb:TableProps[];
}

type DBProps = {
  DBName: string;
  uid: string,
  description: string,
  metadata: {
    status: string,
    region: string,
    totalTables: string,
    size: string
  }
  Tables: TableProps[];
}
type Props = {
  db: DBProps[];
}
export default function Home1() {
  return <>{/* nothing */}</>;
}