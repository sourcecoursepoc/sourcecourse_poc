import { Layout } from "antd";
import styles from "./header.module.css";

const HeaderTop: React.FunctionComponent = () => {
  const { Header } = Layout;
  return <Header className={styles.headerStyle} />;
};

export default HeaderTop;
