import { Layout } from "antd";
import styles from "./header.module.css";

const HeaderTop: React.FunctionComponent = () => {
  const { Header } = Layout;
  return <Header className={styles.headerStyle}>
    <p className={styles.heading}>SourceCourse Metadata Browser</p>
  </Header>;
};

export default HeaderTop;
